export const defaultLocale = "en" as const;
export const locales = ["en","de","sw","fr","es","nl","it","zh"] as const;
export type Locale = (typeof locales)[number];
export const futureLocales = ["pt","ar","ja","ko","hi","tr","ru"] as const;
export const localeNativeNames: Record<Locale, string> = {
  en: "English", de: "Deutsch", sw: "Kiswahili", fr: "Français",
  es: "Español", nl: "Nederlands", it: "Italiano", zh: "简体中文",
};
export const localeDirections: Record<Locale, "ltr"|"rtl"> = {
  en:"ltr",de:"ltr",sw:"ltr",fr:"ltr",es:"ltr",nl:"ltr",it:"ltr",zh:"ltr",
};
export const localeHtmlLang: Record<Locale, string> = {
  en:"en",de:"de",sw:"sw",fr:"fr",es:"es",nl:"nl",it:"it",zh:"zh-Hans",
};
export const localeOgLocale: Record<Locale, string> = {
  en:"en_KE",de:"de_DE",sw:"sw_KE",fr:"fr_FR",es:"es_ES",nl:"nl_NL",it:"it_IT",zh:"zh_CN",
};
export function isValidLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}
export function getLocaleDirection(l: Locale) { return localeDirections[l] ?? "ltr"; }
export function resolveLocale(r?: string|null): Locale {
  return r && isValidLocale(r) ? r : defaultLocale;
}
