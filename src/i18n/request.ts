import { defaultLocale, isValidLocale } from "./config";
export type Messages = Record<string, unknown>;
const cache = new Map<string, Messages>();
export async function loadMessages(locale: string, ns: string): Promise<Messages> {
  const resolved = isValidLocale(locale) ? locale : defaultLocale;
  const key = `${resolved}:${ns}`;
  if (cache.has(key)) return cache.get(key)!;
  try {
    const mod = await import(`../../../messages/${resolved}/${ns}.json`);
    const data = (mod.default ?? mod) as Messages;
    cache.set(key, data);
    return data;
  } catch {
    if (resolved !== defaultLocale) {
      try {
        const fb = await import(`../../../messages/${defaultLocale}/${ns}.json`);
        const data = (fb.default ?? fb) as Messages;
        cache.set(key, data);
        return data;
      } catch { return {}; }
    }
    return {};
  }
}
export async function loadAllMessages(locale: string, namespaces: readonly string[]): Promise<Messages> {
  const parts = await Promise.all(namespaces.map(ns => loadMessages(locale, ns)));
  return Object.assign({}, ...parts);
}
export function t(messages: Messages, key: string, params?: Record<string, string|number>): string {
  const parts = key.split(".");
  let cur: unknown = messages;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in (cur as object)) cur = (cur as Record<string,unknown>)[p];
    else return key;
  }
  if (typeof cur !== "string") return key;
  if (!params) return cur;
  return cur.replace(/\{(\w+)\}/g, (_, n: string) => params[n] !== undefined ? String(params[n]) : `{${n}}`);
}
export function getNested(messages: Messages, key: string): unknown {
  const parts = key.split(".");
  let cur: unknown = messages;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in (cur as object)) cur = (cur as Record<string,unknown>)[p];
    else return undefined;
  }
  return cur;
}
export async function getCoreMessages(locale: string) {
  return loadAllMessages(locale, ["common","navigation","home","forms"]);
}
