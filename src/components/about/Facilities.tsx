"use client";

import { useTranslations } from "next-intl";

export default function Facilities() {
  const t = useTranslations("pages.about");
  const items = [
    { title: t("facilityKitchen"), desc: t("facilityKitchenDesc") },
    { title: t("facilityHotel"), desc: t("facilityHotelDesc") },
    { title: t("facilityLab"), desc: t("facilityLabDesc") },
    { title: t("facilityConference"), desc: t("facilityConferenceDesc") },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 text-center">
          {t("facilitiesTitle")}
        </h2>
        <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-14">
          {t("facilitiesSubtitle")}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-neutral-100 bg-neutral-50 p-8 hover:shadow-md transition-all"
            >
              <h3 className="font-black text-primary text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
