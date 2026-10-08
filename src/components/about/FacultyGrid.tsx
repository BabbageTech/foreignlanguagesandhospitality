"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const FACULTY_META = [
  { id: "kennedy", name: "Kennedy Sankale", image: "/images/faculty/Kennedy.jpg", bar: "bg-secondary" },
  { id: "metrine", name: "Metrine Nganga", image: "/images/faculty/manager.jpg", bar: "bg-primary" },
  { id: "katherine", name: "Katherine Müller", video: "/images/faculty/kathe.mp4", bar: "bg-accent" },
  { id: "raphael", name: "Raphael Ketere", image: "/images/faculty/Raphael.jpg", bar: "bg-primary" },
  { id: "maureen", name: "Maureen Akinyi", image: "/images/faculty/Akinyi.jpg", bar: "bg-accent" },
  { id: "sennah", name: "Sennah Chepkemboi", image: "/images/faculty/sennah.jpg", bar: "bg-primary" },
  { id: "sarah", name: "Sarah Jebet Janssen", image: "/images/faculty/sarah.jpg", bar: "bg-secondary" },
  { id: "alex", name: "Alex Sikawa", image: "/images/faculty/alex.jpg", bar: "bg-primary" },
  { id: "sandra", name: "Sandra Silonde", image: "/images/faculty/sandra.jpg", bar: "bg-accent" },
] as const;

export default function FacultyGrid() {
  const t = useTranslations("about.faculty");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-12">{t("title")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACULTY_META.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-56 bg-slate-100">
                {"video" in m && m.video ? (
                  <video src={m.video} className="w-full h-full object-cover" muted loop playsInline autoPlay />
                ) : (
                  <Image
                    src={"image" in m ? (m as { image: string }).image : ""}
                    alt={m.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className={`h-1 ${m.bar}`} aria-hidden />
              <div className="p-6">
                <h3 className="font-black text-primary text-lg">{m.name}</h3>
                <p className="text-secondary text-xs font-black uppercase tracking-wider mt-1">
                  {t(`members.${m.id}.title` as "members.kennedy.title")}
                </p>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {t(`members.${m.id}.bio` as "members.kennedy.bio")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
