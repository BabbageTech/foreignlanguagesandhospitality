"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LanguageHero() {
  const t = useTranslations("pages.languagesPage");
  const tc = useTranslations("pages.commonCta");

  return (
    <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-[#0A2540]">
      <Image src="/images/languages-cover.jpg" alt="" fill priority className="object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#051B2E]/70 via-[#0A2540]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC]/50 via-transparent to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-44 pt-32 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-10 h-[2px] bg-[#F2C12C]" aria-hidden />
            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#F2C12C]">{t("eyebrow")}</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-white leading-[0.95] mb-7 tracking-tighter">
            {t("title1")}<br />
            <span className="text-[#F2C12C]">{t("title2")}</span>
          </h1>
          <p className="text-lg text-white leading-relaxed mb-10 max-w-lg">{t("lead")}</p>
          <div className="flex flex-wrap gap-4 mb-16">
            <a href="#courses" className="px-7 py-3.5 bg-[#E30613] text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-[#0A2540] transition-all rounded-lg">{tc("browseCourses")}</a>
            <Link href="/admissions" className="px-7 py-3.5 border border-white/25 text-white text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all rounded-lg">{tc("applyNow")}</Link>
          </div>
          <div className="flex flex-wrap gap-8 pt-8 border-t border-white/15">
            {[
              { value: "8+", label: t("statLanguages") },
              { value: "CEFR", label: t("statStandard") },
              { value: "A1–C1", label: t("statLevels") },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-black text-[#F2C12C] leading-none">{value}</p>
                <p className="text-xs text-white/60 mt-1.5 font-medium uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
