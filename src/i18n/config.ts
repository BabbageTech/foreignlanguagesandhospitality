export const locales = ["en", "de", "sw", "fr", "es", "nl", "it", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const futureLocales = ["pt", "ar", "ja", "ko", "hi", "tr", "ru"] as const;
export const localeNames: Record<Locale, string> = {
  en: "English", de: "Deutsch", sw: "Kiswahili", fr: "Français",
  es: "Español", nl: "Nederlands", it: "Italiano", zh: "简体中文",
};
export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr", de: "ltr", sw: "ltr", fr: "ltr", es: "ltr", nl: "ltr", it: "ltr", zh: "ltr",
};
export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
export function getLocaleDirection(locale: Locale): "ltr" | "rtl" {
  return localeDirections[locale] ?? "ltr";
}
