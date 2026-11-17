"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { getMessage } from "@/i18n/messages";
import { localePath, type Locale } from "@/i18n/config";
import { getSharedLayoutCopy } from "@/i18n/shared-layout";

const navLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "academics", href: "/academics" },
  { key: "stories", href: "/student-voices" },
  { key: "careers", href: "/career-opportunities" },
  { key: "news", href: "/news" },
  { key: "contact", href: "/contact" },
] as const;

export default function Navbar({ locale = "en" }: { locale?: Locale }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const normalizedPath = (pathname || "/").replace(/^\/(en|de|sw|fr|es|nl|it|zh)(?=\/|$)/, "") || "/";
  const isActive = (path: string) => path === "/" ? normalizedPath === "/" : normalizedPath === path || normalizedPath.startsWith(`${path}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const href = (path: string) => localePath(path, locale);
  const layoutCopy = getSharedLayoutCopy(locale);

  return (
    <nav aria-label={layoutCopy.mainNavigation} className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md py-2 shadow-md" : "bg-white py-3 border-b border-slate-100"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
        <Link href={href("/")} className="flex min-w-0 items-center gap-3 group" aria-label={layoutCopy.homeLink}>
          <div className="relative w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-105 p-1 shrink-0">
            <Image src="/logo.png" alt="IIFLHM" fill sizes="64px" className="object-contain" priority />
          </div>
          <div className="flex min-w-0 flex-col border-l border-slate-200 pl-3">
            <span className="font-black text-[10px] sm:text-[11px] md:text-[12px] text-[#0A2540] leading-tight uppercase tracking-tight max-w-[190px] sm:max-w-[250px]">
              International Institute of Foreign Languages &amp; Hospitality Management
            </span>
            <span className="text-[8px] sm:text-[9px] font-bold text-[#E30613] uppercase tracking-[0.12em] sm:tracking-[0.18em] mt-1">{layoutCopy.footerTagline}</span>
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link key={link.key} href={href(link.href)} aria-current={isActive(link.href) ? "page" : undefined} className={`px-2 py-2 text-[10px] font-bold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C12C] rounded ${isActive(link.href) ? "text-[#0A2540]" : "text-slate-600 hover:text-[#0A2540]"}`}>
              {getMessage(locale, link.key)}
            </Link>
          ))}
          <LanguageSelector currentLocale={locale} />
          <Link href={href("/admissions")} className="ml-2 whitespace-nowrap bg-[#0A2540] text-white px-4 py-3 rounded-full text-[10px] font-black uppercase tracking-wider hover:bg-[#F2C12C] hover:text-[#0A2540] transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E30613]">
            {getMessage(locale, "apply")}
          </Link>
        </div>


        <button type="button" onClick={() => setMobileOpen((open) => !open)} className="xl:hidden shrink-0 p-2 text-[#0A2540] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C12C]" aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? getMessage(locale, "closeMenu") : getMessage(locale, "menu")}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="xl:hidden absolute top-full inset-x-0 max-h-[calc(100dvh-5rem)] overflow-y-auto bg-white border-t border-slate-100 shadow-xl">
          <div className="px-5 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.key} href={href(link.href)} onClick={() => setMobileOpen(false)} aria-current={isActive(link.href) ? "page" : undefined} className={`min-h-11 px-3 py-3 text-base font-bold rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C12C] ${isActive(link.href) ? "bg-slate-50 text-[#0A2540]" : "text-[#0A2540] hover:text-[#E30613]"}`}>
                {getMessage(locale, link.key)}
              </Link>
            ))}
            <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4 mt-2">
              <LanguageSelector currentLocale={locale} />
              <Link href={href("/admissions")} onClick={() => setMobileOpen(false)} className="flex-1 text-center bg-[#0A2540] text-white py-3 px-4 rounded-full font-black uppercase text-xs tracking-wide">{getMessage(locale, "apply")}</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
