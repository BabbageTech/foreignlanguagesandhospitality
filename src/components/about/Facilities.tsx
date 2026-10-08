"use client";

import { useTranslations } from "next-intl";

export default function Facilities() {
  const t = useTranslations("pages.about");
  const items = [
    t("facilityKitchen"),
    t("facilityHotel"),
    t("facilityLab"),
    t("facilityConference"),
  ];
  return (
    <section className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-12">{t("facilitiesTitle")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((label) => (
            <div key={label} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <p className="font-black text-primary">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
