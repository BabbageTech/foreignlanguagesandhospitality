"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function IntakeBanner() {
  const t = useTranslations("home.intake");

  return (
    <section className="bg-[#F2C12C] text-[#0A2540]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-70">{t("badge")}</span>
          <p className="text-lg md:text-xl font-black leading-tight">{t("title")}</p>
          <p className="text-sm font-medium opacity-80 mt-0.5 max-w-xl">{t("description")}</p>
        </div>
        <Link
          href="/admissions"
          className="shrink-0 bg-[#0A2540] text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-[#0A2540] transition-all"
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
