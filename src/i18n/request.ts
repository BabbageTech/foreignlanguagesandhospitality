import { getRequestConfig } from "next-intl/server";
import { defaultLocale, isValidLocale } from "./config";

async function loadJson(locale: string, name: string) {
  try {
    return (await import(`../../messages/${locale}/${name}.json`)).default;
  } catch {
    try {
      return (await import(`../../messages/en/${name}.json`)).default;
    } catch {
      return {};
    }
  }
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !isValidLocale(locale)) locale = defaultLocale;

  const [common, home, forms, pages, languages, about] = await Promise.all([
    loadJson(locale, "common"),
    loadJson(locale, "home"),
    loadJson(locale, "forms"),
    loadJson(locale, "pages"),
    loadJson(locale, "languages"),
    loadJson(locale, "about"),
  ]);

  return {
    locale,
    messages: { ...common, home, forms, pages, languages, about },
  };
});
