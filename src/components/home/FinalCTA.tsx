"use client";
import { Link } from "@/i18n/routing";
import { CURRENT_INTAKE } from "@/lib/constants";
import { useTranslations } from "next-intl";

export default function FinalCTA() {
  const t = useTranslations("home.finalCta");
  const tIntake = useTranslations("intake");
  return (
    <section className="py-24 md:py-32 bg-primary text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-8">
          {tIntake("label")}: {CURRENT_INTAKE.label}
        </span>
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.05] tracking-tight">{t("title")}</h2>
        <p className="text-lg md:text-xl text-white/70 mb-14 max-w-2xl mx-auto leading-relaxed font-medium">{t("subtitle")}</p>
        <div className="flex flex-col sm:flex-row gap-5 w-full justify-center px-4">
          <Link href="/admissions" className="px-12 py-5 bg-secondary text-white font-black text-[12px] uppercase tracking-[0.3em] rounded-2xl hover:scale-105 transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{t("apply")}</Link>
          <Link href="/contact" className="px-12 py-5 bg-white/5 hover:bg-white hover:text-primary border border-white/10 text-white font-black text-[12px] uppercase tracking-[0.3em] rounded-2xl transition-all flex items-center justify-center">{t("enquire")}</Link>
        </div>
      </div>
    </section>
  );
}
