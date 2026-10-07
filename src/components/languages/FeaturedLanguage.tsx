"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function FeaturedLanguage() {
  const t = useTranslations("pages.languagesPage");
  const tc = useTranslations("pages.commonCta");
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl border border-slate-200 p-10 md:p-14 bg-brand-gray">
          <span className="text-[10px] font-black uppercase tracking-widest text-secondary">{t("featuredBadge")}</span>
          <h2 className="text-3xl md:text-4xl font-black text-primary mt-3 mb-6">{t("featuredTitle")}</h2>
          <Link href="/academics/german-language" className="inline-flex bg-primary text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-secondary transition-all">
            {tc("viewProgramme")}
          </Link>
        </div>
      </div>
    </section>
  );
}
