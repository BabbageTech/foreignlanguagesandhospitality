"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function FinalCTA() {
  const t = useTranslations("home.finalCta");
  const cta = useTranslations("cta");

  return (
    <section className="py-24 md:py-32 bg-[#0A2540] text-white relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F2C12C]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F2C12C] font-black text-[10px] uppercase tracking-[0.4em] mb-8">
          {t("eyebrow")}
        </span>
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.05] tracking-tight">
          {t("title")}
        </h2>
        <p className="text-lg md:text-xl text-white/70 mb-14 max-w-2xl mx-auto leading-relaxed font-medium">
          {t("description")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/admissions"
            className="inline-flex items-center justify-center bg-white text-[#0A2540] px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-[#F2C12C] transition-all shadow-lg"
          >
            {cta("applyNow")}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            {cta("contactUs")}
          </Link>
        </div>
        <p className="text-[10px] text-white/40 mt-10 uppercase tracking-[0.2em] font-bold">
          {t("disclaimer")}
        </p>
      </div>
    </section>
  );
}
