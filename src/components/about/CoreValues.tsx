"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function CoreValues() {
  const t = useTranslations("pages.about");
  const values = [
    { title: t("value1Title"), desc: t("value1Desc") },
    { title: t("value2Title"), desc: t("value2Desc") },
    { title: t("value3Title"), desc: t("value3Desc") },
    { title: t("value4Title"), desc: t("value4Desc") },
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">{t("valuesTitle")}</h2>
          <p className="text-neutral-600">{t("valuesSubtitle")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-neutral-100 p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <h3 className="font-black text-primary text-lg mb-3">{v.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
