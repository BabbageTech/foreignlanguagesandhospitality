"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function MissionVision() {
  const t = useTranslations("pages.about");

  const cards = [
    {
      label: t("missionLabel"),
      heading: t("missionHeading"),
      body: t("missionBody"),
      accent: "#DC2626",
      icon: "🎯",
    },
    {
      label: t("visionLabel"),
      heading: t("visionHeading"),
      body: t("visionBody"),
      accent: "var(--secondary)",
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
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.heading}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 md:p-10 rounded-3xl border border-slate-100 bg-slate-50/80 shadow-sm"
              style={{ borderTopColor: card.accent, borderTopWidth: 4 }}
            >
              <span className="text-3xl mb-4 block">{card.icon}</span>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">{card.label}</p>
              <h3 className="text-2xl font-black text-[#0A2540] mb-4">{card.heading}</h3>
              <p className="text-slate-600 leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
