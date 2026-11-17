import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale } from "./i18n/config";

const LOCALE_COOKIE = "iiflhm-locale";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && isLocale(firstSegment)) {
    const locale = firstSegment;
    const destination = request.nextUrl.clone();
    const rest = segments.slice(1);
    destination.pathname = rest.length ? `/${rest.join("/")}` : "/";
    if (locale === defaultLocale) {
      // Keep existing unprefixed English URLs as the single canonical route set.
      const response = NextResponse.redirect(destination, 308);
      response.cookies.set(LOCALE_COOKIE, locale, { path: "/", sameSite: "lax", maxAge: 60 * 60 * 24 * 365 });
      return response;
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-iiflhm-locale", locale);
    const response = NextResponse.rewrite(destination, { request: { headers: requestHeaders } });
    response.cookies.set(LOCALE_COOKIE, locale, { path: "/", sameSite: "lax", maxAge: 60 * 60 * 24 * 365 });
    // Localized UI strings are in place, but complete route-by-route page translation
    // is not yet certified. Avoid indexing mixed-language pages until that QA is done.
    response.headers.set("X-Robots-Tag", "noindex, follow");
    return response;
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && isLocale(cookieLocale) && cookieLocale !== defaultLocale) {
    const localized = request.nextUrl.clone();
    localized.pathname = `/${cookieLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(localized);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-iiflhm-locale", defaultLocale);
  const response = NextResponse.next({ request: { headers: requestHeaders } });
  if (!cookieLocale) response.cookies.set(LOCALE_COOKIE, defaultLocale, { path: "/", sameSite: "lax", maxAge: 60 * 60 * 24 * 365 });
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
