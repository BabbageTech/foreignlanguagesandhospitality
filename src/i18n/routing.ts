import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { defaultLocale, locales } from "./config";

/**
 * Locale routing + detection
 * Priority when visiting `/` or a path without locale:
 * 1. NEXT_LOCALE cookie (user’s previous choice)
 * 2. Accept-Language header (browser languages)
 * 3. defaultLocale (en)
 */
export const routing = defineRouting({
  locales: [...locales],
  defaultLocale,
  localePrefix: "always",
  localeDetection: true,
  localeCookie: {
    // Persists explicit language choice across visits
    name: "NEXT_LOCALE",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: "lax",
  },
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
