"use client";

import { useTranslations } from "next-intl";

export default function MissionVision() {
  const t = useTranslations("about");
  return (
    <section className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-black text-primary mb-4">{t("mission.title")}</h2>
          <p className="text-slate-600 leading-relaxed">{t("mission.body")}</p>
        </div>
        <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-black text-primary mb-4">{t("vision.title")}</h2>
          <p className="text-slate-600 leading-relaxed">{t("vision.body")}</p>
        </div>
      </div>
    </section>
  );
}
