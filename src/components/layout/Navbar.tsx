"use client";

import { Link, usePathname } from "@/i18n/routing";
import { localeNativeNames, locales, type Locale } from "@/i18n/config";
import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
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
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white text-[#0A2540] font-semibold px-2.5 py-1.5 text-[11px] hover:border-[#0A2540]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540]/40"
      >
        <Globe className="w-3.5 h-3.5 opacity-70" aria-hidden />
        <span>{localeNativeNames[locale]}</span>
        <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      {open && (
        <ul role="listbox" className="absolute right-0 z-50 mt-1.5 min-w-[11rem] rounded-xl border border-slate-200 bg-white shadow-xl py-1">
          {locales.map((code) => (
            <li key={code} role="option" aria-selected={code === locale}>
              <Link
                href={pathname}
                locale={code}
                onClick={() => setOpen(false)}
                className={`block w-full text-left px-3.5 py-2 text-sm font-medium ${code === locale ? "bg-[#0A2540]/5 text-[#0A2540]" : "text-slate-700 hover:bg-slate-50"}`}
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md py-2 shadow-md" : "bg-white py-4 border-b border-slate-100"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3 group min-w-0">
          <div className="relative w-14 h-14 md:w-16 md:h-16 bg-white rounded-full p-1 shrink-0">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="/logo.png" alt="IIFLHM Logo" fill className="object-contain" priority />
            </div>
          </div>
          <div className="flex flex-col border-l border-slate-200 pl-3 min-w-0">
            <span className="font-black text-[9px] md:text-[12px] text-[#0A2540] leading-tight uppercase">
              International Institute of Foreign Languages & Hospitality Management
            </span>
            <span className="text-[8px] font-bold text-[#E30613] uppercase tracking-widest mt-0.5">
              Empowering Local & Global Careers
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link key={item.key} href={item.href} className="px-2.5 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-600 hover:text-[#0A2540] whitespace-nowrap">
              {t(item.key)}
            </Link>
          ))}
          <div className="h-4 w-px bg-slate-100 mx-2" />
          <LanguageSelector />
          <div className="h-4 w-px bg-slate-100 mx-2" />
          <Link href="/admissions" className="bg-[#0A2540] text-white px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#F2C12C] hover:text-[#0A2540] transition-all">
            {t("applyNow")}
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <LanguageSelector />
          <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-[#0A2540]" aria-label="Toggle menu" aria-expanded={mobileOpen}>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-[#0A2540] transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-full bg-[#E30613] transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-[#0A2540] transition-all ${mobileOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-50 bg-white shadow-xl">
          <div className="px-6 py-6 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link key={item.key} href={item.href} onClick={() => setMobileOpen(false)} className="text-lg font-black text-[#0A2540]">
                {t(item.key)}
              </Link>
            ))}
            <Link href="/admissions" onClick={() => setMobileOpen(false)} className="mt-2 bg-[#0A2540] text-white py-3 rounded-full text-center font-black uppercase text-sm">
              {t("applyNow")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
