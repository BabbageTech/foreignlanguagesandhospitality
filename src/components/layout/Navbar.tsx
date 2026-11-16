"use client";

import { localeNativeNames, locales, type Locale } from "@/i18n/config";
import { Link, usePathname } from "@/i18n/routing";
import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const navKeys = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "academics", href: "/academics" },
  { key: "studentVoices", href: "/student-voices" },
  { key: "careers", href: "/career-opportunities" },
  { key: "news", href: "/news" },
  { key: "contact", href: "/contact" },
] as const;

function LanguageSelector() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const t = useTranslations("aria");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("selectLanguage")}
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white text-[#0A2540] font-semibold px-2.5 py-1.5 text-[11px] hover:border-[#0A2540]/40"
      >
        <Globe className="w-3.5 h-3.5 opacity-70" aria-hidden />
        <span>{localeNativeNames[locale]}</span>
        <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      {open && (
        <ul className="absolute right-0 z-50 mt-1.5 min-w-[11rem] max-h-72 overflow-auto rounded-xl border border-slate-200 bg-white shadow-xl py-1">
          {locales.map((code) => (
            <li key={code}>
              <Link
                href={pathname}
                locale={code}
                onClick={() => {
                  document.cookie = `NEXT_LOCALE=${code};path=/;max-age=31536000;samesite=lax`;
                  setOpen(false);
                }}
                className={`block w-full text-left px-3.5 py-2 text-sm font-medium ${
                  code === locale ? "bg-[#0A2540]/5 text-[#0A2540]" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {localeNativeNames[code]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Navbar() {
  const t = useTranslations("nav");
  const brand = useTranslations("brand");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-2 shadow-md"
          : "bg-white py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-105 p-1 shrink-0">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="/logo.png" alt="International Institute Logo" fill className="object-contain" priority />
            </div>
          </div>
          <div className="flex flex-col border-l border-slate-200 pl-4">
            <span className="font-black text-[10px] md:text-[13px] text-[#0A2540] leading-tight uppercase tracking-tight max-w-[200px] md:max-w-none">
              International Institute of Foreign <br className="hidden md:block" /> Languages & Hospitality Management
            </span>
            <span className="text-[9px] font-bold text-[#E30613] uppercase tracking-[0.2em] mt-0.5">
              {brand("tagline")}
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center">
          {navKeys.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-600 hover:text-[#0A2540] transition-all relative group"
            >
              {t(link.key)}
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0A2540] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
          <div className="h-4 w-px bg-slate-100 mx-3" />
          <LanguageSelector />
          <div className="h-4 w-px bg-slate-100 mx-3" />
          <Link
            href="/admissions"
            className="bg-[#0A2540] text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#F2C12C] hover:text-[#0A2540] transition-all shadow-lg active:scale-95"
          >
            {t("applyNow")}
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <LanguageSelector />
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-[#0A2540]" aria-label="Toggle menu">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-[#0A2540] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-full bg-[#E30613] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-[#0A2540] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-50 transition-all duration-500 ease-in-out overflow-hidden ${
          mobileOpen ? "max-h-[100vh] opacity-100 shadow-2xl" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 py-10 flex flex-col gap-5">
          {navKeys.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-black text-[#0A2540] hover:text-[#E30613] transition-colors flex items-center justify-between"
            >
              {t(link.key)}
              <div className="w-2 h-2 rounded-full bg-[#E30613]" />
            </Link>
          ))}
          <Link
            href="/admissions"
            onClick={() => setMobileOpen(false)}
            className="mt-4 bg-[#0A2540] text-white py-4 rounded-full text-center font-black uppercase tracking-widest text-sm shadow-xl"
          >
            {t("applyNow")}
          </Link>
        </div>
      </div>
    </nav>
  );
}
