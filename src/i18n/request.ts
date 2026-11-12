import { getRequestConfig } from "next-intl/server";
import { defaultLocale, isValidLocale } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !isValidLocale(locale)) {
    locale = defaultLocale;
  }

  // Load messages – fall back to English if locale file missing
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    messages = (await import(`../../messages/${defaultLocale}.json`)).default;
  }

  return {
    locale,
    messages,
  };
});
