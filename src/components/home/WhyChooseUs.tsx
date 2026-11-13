"use client";

import { useTranslations } from "next-intl";

const ITEM_KEYS = ["0", "1", "2", "3"] as const;

export default function WhyChooseUs() {
  const t = useTranslations("home.whyChoose");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E30613]">{t("eyebrow")}</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0A2540] mt-2 tracking-tight">{t("title")}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEM_KEYS.map((key) => (
            <div key={key} className="p-6 rounded-3xl border border-slate-100 bg-slate-50/80 hover:shadow-lg transition-shadow">
              <h3 className="font-black text-[#0A2540] text-lg mb-3">{t(`items.${key}.title`)}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{t(`items.${key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
