"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function MissionVision() {
  const t = useTranslations("about");
  const cards = [
    {
      label: t("mission.label"),
      heading: t("mission.title"),
      body: t("mission.body"),
      accent: "#DC2626",
      icon: "🎯",
    },
    {
      label: t("vision.label"),
      heading: t("vision.title"),
      body: t("vision.body"),
      accent: "#F2C12C",
      icon: "👁️",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A2540' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {cards.map(({ label, heading, body, accent, icon }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
              className="group relative bg-white rounded-xl border border-neutral-100 p-8 shadow-sm hover:shadow-xl hover:border-neutral-200 transition-all duration-500"
            >
              <div
                className="absolute top-0 left-0 w-1 h-full rounded-l-xl transition-all duration-300 group-hover:w-2"
                style={{ backgroundColor: accent }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl" aria-hidden>
                    {icon}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-neutral-400">
                    {label}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-primary mb-3">{heading}</h3>
                <p className="text-neutral-600 leading-relaxed">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
