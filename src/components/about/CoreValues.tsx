"use client";

import { useTranslations } from "next-intl";

export default function CoreValues() {
  const t = useTranslations("pages.about");
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-3">{t("valuesTitle")}</h2>
        <p className="text-slate-600 mb-12 max-w-2xl">{t("valuesSubtitle")}</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-slate-200 rounded-2xl p-8">
            <h3 className="font-black text-primary text-lg mb-2">{t("practicalLearning")}</h3>
            <p className="text-sm text-slate-600">{t("valuesSubtitle")}</p>
          </div>
          <div className="border border-slate-200 rounded-2xl p-8">
            <h3 className="font-black text-primary text-lg mb-2">{t("missionTitle")}</h3>
            <p className="text-sm text-slate-600">{t("valuesSubtitle")}</p>
          </div>
          <div className="border border-slate-200 rounded-2xl p-8">
            <h3 className="font-black text-primary text-lg mb-2">{t("founderTitle")}</h3>
            <p className="text-sm text-slate-600">{t("ctaBody")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
