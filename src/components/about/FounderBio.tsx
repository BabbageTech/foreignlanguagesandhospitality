"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function FounderBio() {
  const t = useTranslations("about.founder");
  const focuses = [t("focusLanguage"), t("focusHospitality"), t("focusCareer")];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/5] max-w-md rounded-2xl overflow-hidden bg-slate-100">
          <Image src="/images/founder.jpg" alt={`Soila Lasoi - ${t("role")}`} fill className="object-cover" />
        </div>
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">{t("eyebrow")}</span>
          <h2 className="text-3xl md:text-4xl font-black text-primary mt-3 mb-2">
            {t("title1")} <span className="text-secondary">{t("title2")}</span>
          </h2>
          <p className="text-sm font-bold text-slate-500 mb-6">Soila Lasoi · {t("role")}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {focuses.map((f) => (
              <span key={f} className="text-[10px] font-black uppercase tracking-wider bg-brand-gray text-primary px-3 py-1.5 rounded-full">
                {f}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-xl p-4">
              <p className="text-xs font-black uppercase tracking-wider text-secondary">{t("corePrograms")}</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-4">
              <p className="text-xs font-black uppercase tracking-wider text-secondary">{t("successStories")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
