export const locales = ["en", "de", "sw", "fr", "es", "nl", "it", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localeConfig: Record<Locale, { name: string; nativeName: string; dir: "ltr" | "rtl"; intl: string }> = {
  en: { name: "English", nativeName: "English", dir: "ltr", intl: "en-KE" },
  de: { name: "German", nativeName: "Deutsch", dir: "ltr", intl: "de-DE" },
  sw: { name: "Kiswahili", nativeName: "Kiswahili", dir: "ltr", intl: "sw-KE" },
  fr: { name: "French", nativeName: "Français", dir: "ltr", intl: "fr-FR" },
  es: { name: "Spanish", nativeName: "Español", dir: "ltr", intl: "es-ES" },
  nl: { name: "Dutch", nativeName: "Nederlands", dir: "ltr", intl: "nl-NL" },
  it: { name: "Italian", nativeName: "Italiano", dir: "ltr", intl: "it-IT" },
  zh: { name: "Mandarin Chinese", nativeName: "简体中文", dir: "ltr", intl: "zh-CN" },
};

export const futureLocales = ["pt", "ar", "ja", "ko", "hi", "tr", "ru"] as const;
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
function normalizeLocalePath(pathname: string): string {
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const segments = cleanPath.split("/").filter(Boolean);
  if (segments[0] && isLocale(segments[0])) segments.shift();
  const path = `/${segments.join("/")}`;
  return path === "/" ? "" : path;
}

/** Build an internal link for the active locale without redirecting English links. */
export function localePath(pathname: string, locale: Locale): string {
  const path = normalizeLocalePath(pathname);
  return locale === defaultLocale ? (path || "/") : `/${locale}${path}`;
}

/** Build an explicit locale-switch URL. `/en/...` lets the proxy persist English
 * in the locale cookie before redirecting to the canonical unprefixed URL. */
export function localeSwitchPath(pathname: string, locale: Locale): string {
  const path = normalizeLocalePath(pathname);
  return `/${locale}${path}`;
}
