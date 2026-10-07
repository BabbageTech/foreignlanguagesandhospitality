"use client";
import { localeNames, locales, type Locale } from "@/i18n/config";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";

export default function LanguageSelector({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); buttonRef.current?.focus(); } };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, []);
  const switchLocale = (next: Locale) => { setOpen(false); router.replace(pathname, { locale: next }); };
  const isMobile = variant === "mobile";
  return (
    <div className="relative" ref={containerRef}>
      <button ref={buttonRef} type="button" aria-haspopup="listbox" aria-expanded={open}
        aria-label={`Language: ${localeNames[locale]}`} onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white text-primary font-semibold hover:border-primary/30 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 transition-colors ${isMobile ? "px-3 py-2.5 text-sm w-full justify-between" : "px-2.5 py-1.5 text-xs"}`}>
        <span className="inline-flex items-center gap-1.5"><span aria-hidden className="text-base leading-none">🌐</span><span>{localeNames[locale]}</span></span>
        <svg className={`w-3.5 h-3.5 opacity-60 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <ul role="listbox" aria-label="Select language" className={`absolute z-[60] mt-1 max-h-72 overflow-auto rounded-xl border border-slate-200 bg-white shadow-lg py-1 ${isMobile ? "left-0 right-0" : "right-0 min-w-[11rem]"}`}>
          {locales.map((l) => (
            <li key={l} role="option" aria-selected={l === locale}>
              <button type="button" onClick={() => switchLocale(l)}
                className={`w-full text-left px-3 py-2 text-sm font-medium hover:bg-brand-gray focus-visible:outline-none ${l === locale ? "text-secondary bg-secondary/5" : "text-primary"}`}>
                {localeNames[l]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
