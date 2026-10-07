"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function EmpoweringSection() {
  const t = useTranslations("home.empowering");
  return (
    <section className="py-24 bg-brand-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-1 bg-secondary" aria-hidden />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{t("eyebrow")}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight mb-6">{t("title")}</h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium mb-8">{t("body")}</p>
            <Link href="/about" className="inline-flex bg-primary text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-secondary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
              {t("cta")}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <p className="text-4xl md:text-5xl font-black text-secondary mb-2">{t("stat1Value")}</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{t("stat1Label")}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <p className="text-4xl md:text-5xl font-black text-primary mb-2">{t("stat2Value")}</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{t("stat2Label")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
