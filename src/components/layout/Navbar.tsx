"use client";
import LanguageSelector from "@/components/layout/LanguageSelector";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const t = useTranslations("nav");
  const tSite = useTranslations("site");
  const tCommon = useTranslations("common");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navLinks = [
    { label: t("home"), href: "/" }, { label: t("about"), href: "/about" },
    { label: t("academics"), href: "/academics" }, { label: t("ourStories"), href: "/student-voices" },
    { label: t("careers"), href: "/career-opportunities" }, { label: t("news"), href: "/news" },
    { label: t("contact"), href: "/contact" },
  ] as const;
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setMobileOpen(false); triggerRef.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [mobileOpen]);
  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md py-2 shadow-md" : "bg-white py-4 border-b border-slate-100"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3 group min-w-0">
          <div className="relative w-14 h-14 md:w-20 md:h-20 bg-white rounded-full p-1 shrink-0">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image src="/logo.png" alt={tSite("name")} fill className="object-contain" priority />
            </div>
          </div>
          <div className="flex flex-col border-l border-slate-200 pl-3 min-w-0">
            <span className="font-black text-[9px] md:text-[13px] text-primary leading-tight tracking-tight max-w-[200px] md:max-w-none">{tSite("name")}</span>
            <span className="text-[8px] sm:text-[9px] font-bold text-secondary tracking-wide mt-0.5 truncate">{tSite("tagline")}</span>
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="px-2 xl:px-3 py-2 text-[11px] xl:text-xs font-bold text-primary/80 hover:text-primary whitespace-nowrap">{link.label}</Link>
          ))}
          <LanguageSelector variant="desktop" />
          <Link href="/admissions" className="bg-primary text-white px-4 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider hover:bg-accent hover:text-primary transition-all ml-2">{t("applyNow")}</Link>
        </div>
        <div className="flex lg:hidden items-center gap-2">
          <LanguageSelector variant="desktop" />
          <button ref={triggerRef} type="button" onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? tCommon("closeMenu") : tCommon("openMenu")} aria-expanded={mobileOpen} aria-controls="mobile-nav"
            className="p-2 text-primary rounded-lg focus-visible:ring-2 focus-visible:ring-secondary">☰</button>
        </div>
      </div>
      <div id="mobile-nav" role="dialog" aria-modal={mobileOpen}
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t transition-all overflow-hidden ${mobileOpen ? "max-h-[100vh] opacity-100 shadow-2xl" : "max-h-0 opacity-0 pointer-events-none"}`}>
        <div className="px-6 py-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-lg font-black text-primary">{link.label}</Link>
          ))}
          <LanguageSelector variant="mobile" />
          <Link href="/admissions" onClick={() => setMobileOpen(false)} className="bg-primary text-white py-4 rounded-full text-center font-black uppercase text-sm">{t("applyNow")}</Link>
        </div>
      </div>
    </nav>
  );
}
