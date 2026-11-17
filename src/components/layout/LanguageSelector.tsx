"use client";

import { usePathname } from "next/navigation";
import { localeConfig, locales, type Locale, isLocale, localeSwitchPath } from "@/i18n/config";
import { getMessage } from "@/i18n/messages";
import { Globe } from "lucide-react";

export default function LanguageSelector({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const switchLocale = (next: string) => {
    if (!isLocale(next)) return;
    const destination = localeSwitchPath(pathname || "/", next);
    const query = window.location.search;
    const hash = window.location.hash;
    // A full navigation guarantees the locale cookie and server-rendered root layout
    // are refreshed together. This avoids stale RSC state during a locale rewrite.
    window.location.assign(`${destination}${query}${hash}`);
  };

  return (
    <label className="inline-flex min-w-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-[#0A2540] shadow-sm focus-within:ring-2 focus-within:ring-[#F2C12C]">
      <Globe aria-hidden="true" className="h-4 w-4 shrink-0" />
      <span className="sr-only">{currentLocale === "en" ? "Language" : localeConfig[currentLocale].nativeName}</span>
      <select
        aria-label={getMessage(currentLocale, "language")}
        value={currentLocale}
        onChange={(event) => switchLocale(event.target.value)}
        className="max-w-[112px] cursor-pointer bg-transparent outline-none"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>{localeConfig[locale].nativeName}</option>
        ))}
      </select>
    </label>
  );
}
