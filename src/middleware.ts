import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isValidLocale, type Locale } from "./i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith("/_next") || pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") || pathname.includes(".") ||
    pathname === "/sitemap.xml" || pathname === "/robots.txt"
  ) return NextResponse.next();

  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];
  if (maybeLocale && isValidLocale(maybeLocale)) {
    const res = NextResponse.next();
    res.headers.set("x-locale", maybeLocale);
    res.cookies.set("NEXT_LOCALE", maybeLocale, { path: "/", maxAge: 31536000, sameSite: "lax" });
    return res;
  }
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const accept = request.headers.get("accept-language") ?? "";
  let detected: Locale = defaultLocale;
  if (cookieLocale && isValidLocale(cookieLocale)) detected = cookieLocale;
  else {
    for (const part of accept.split(",")) {
      const code = part.split(";")[0].trim().toLowerCase().slice(0, 2);
      if (isValidLocale(code)) { detected = code; break; }
    }
  }
  const url = request.nextUrl.clone();
  url.pathname = `/${detected}${pathname === "/" ? "" : pathname}`;
  const res = NextResponse.redirect(url);
  res.cookies.set("NEXT_LOCALE", detected, { path: "/", maxAge: 31536000, sameSite: "lax" });
  return res;
}
export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)"] };
