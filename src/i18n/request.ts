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
    // Prevent missing translation keys from crashing static generation
    onError(error) {
      if (error.code === "MISSING_MESSAGE") {
        // Log in development; never throw during build/prerender
        if (process.env.NODE_ENV !== "production") {
          console.warn("[i18n]", error.message);
        }
        return;
      }
      console.error("[i18n]", error);
    },
    getMessageFallback({ namespace, key }) {
      return key;
    },
  };
});
