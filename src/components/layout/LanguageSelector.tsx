"use client";
import { localeNativeNames, locales, type Locale } from "@/i18n/config";
import { ChevronDown, Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function LanguageSelector({ currentLocale, compact = true, onLocaleChange }: { currentLocale: Locale; compact?: boolean; onLocaleChange?: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const onClick = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onClick); document.removeEventListener("keydown", onKey); };
  }, []);
  function switchLocale(next: Locale) {
    if (next === currentLocale) { setOpen(false); return; }
    const segments = pathname.split("/").filter(Boolean);
    const hasLocale = locales.includes(segments[0] as Locale);
    const rest = hasLocale ? segments.slice(1) : segments;
    const newPath = `/${next}${rest.length ? "/" + rest.join("/") : ""}`;
    const search = typeof window !== "undefined" ? window.location.search : "";
    document.cookie = `NEXT_LOCALE=${next};path=/;max-age=31536000;samesite=lax`;
    router.push(newPath + search);
    setOpen(false);
    onLocaleChange?.();
  }
  return (
    <div className="relative" ref={ref}>
      <button type="button" onClick={() => setOpen(v => !v)} aria-haspopup="listbox" aria-expanded={open} aria-label="Select language"
        className={`flex items-center gap-1.5 rounded-full border border-slate-200 bg-white text-[#0A2540] font-semibold hover:border-[#0A2540]/40 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540]/40 transition-all ${compact ? "px-2.5 py-1.5 text-[11px]" : "px-4 py-2.5 text-sm w-full justify-between"}`}>
        <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 opacity-70 shrink-0" aria-hidden /><span className="truncate max-w-[7rem]">{localeNativeNames[currentLocale]}</span></span>
        <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      {open && (
        <ul role="listbox" aria-label="Available languages" className={`absolute z-50 mt-1.5 min-w-[11rem] max-h-72 overflow-auto rounded-xl border border-slate-200 bg-white shadow-xl py-1 ${compact ? "right-0" : "left-0 right-0"}`}>
          {locales.map(code => (
            <li key={code} role="option" aria-selected={code === currentLocale}>
              <button type="button" onClick={() => switchLocale(code)}
                className={`w-full text-left px-3.5 py-2 text-sm font-medium flex items-center justify-between gap-3 transition-colors ${code === currentLocale ? "bg-[#0A2540]/5 text-[#0A2540]" : "text-slate-700 hover:bg-slate-50"}`}>
                <span>{localeNativeNames[code]}</span>
                {code === currentLocale && <span className="w-1.5 h-1.5 rounded-full bg-[#E30613] shrink-0" aria-hidden />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
