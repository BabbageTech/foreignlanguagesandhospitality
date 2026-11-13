import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

/**
 * Dynamic locale detection middleware
 *
 * - Prefixes all app routes with /[locale]
 * - On first visit (no cookie): negotiates locale from Accept-Language
 * - On return visits: uses NEXT_LOCALE cookie
 * - Manual switch via LanguageSelector updates cookie + URL
 */
const handleI18n = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  return handleI18n(request);
}

export const config = {
  // Skip API, Next internals, and static files (images, fonts, etc.)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
