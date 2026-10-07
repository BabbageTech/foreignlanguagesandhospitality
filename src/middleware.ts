import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./i18n/config";
export default createMiddleware({ locales: [...locales], defaultLocale, localePrefix: "always", localeDetection: true });
export const config = { matcher: ["/", "/(de|en|sw|fr|es|nl|it|zh)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"] };
