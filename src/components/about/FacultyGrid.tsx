"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const FACULTY_META = [
  { id: "kennedy", name: "Kennedy Sankale", image: "/images/faculty/Kennedy.jpg", accent: "group-hover:text-secondary", bar: "bg-secondary" },
  { id: "metrine", name: "Metrine Nganga", image: "/images/faculty/manager.jpg", accent: "group-hover:text-primary", bar: "bg-primary" },
  { id: "katherine", name: "Katherine Müller", video: "/images/faculty/kathe.mp4", accent: "group-hover:text-accent", bar: "bg-accent" },
  { id: "raphael", name: "Raphael Ketere", image: "/images/faculty/Raphael.jpg", accent: "group-hover:text-primary", bar: "bg-primary" },
  { id: "maureen", name: "Maureen Akinyi", image: "/images/faculty/Akinyi.jpg", accent: "group-hover:text-accent", bar: "bg-accent" },
  { id: "sennah", name: "Sennah Chepkemboi", image: "/images/faculty/sennah.jpg", accent: "group-hover:text-primary", bar: "bg-primary" },
  { id: "sarah", name: "Sarah Jebet Janssen", image: "/images/faculty/sarah.jpg", accent: "group-hover:text-secondary", bar: "bg-secondary" },
  { id: "alex", name: "Alex Sikawa", image: "/images/faculty/alex.jpg", accent: "group-hover:text-primary", bar: "bg-primary" },
  { id: "sandra", name: "Sandra Silonde", image: "/images/faculty/sandra.jpg", accent: "group-hover:text-accent", bar: "bg-accent" },
] as const;

export default function FacultyGrid() {
  const t = useTranslations("about.faculty");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
            {t("title")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACULTY_META.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-64 bg-neutral-100 overflow-hidden">
                {"video" in m && m.video ? (
                  <video
                    src={m.video}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                ) : (
                  <Image
                    src={"image" in m ? (m as { image: string }).image : ""}
                    alt={m.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
              </div>
              <div className={`h-1.5 ${m.bar}`} aria-hidden />
              <div className="p-6">
                <h3 className={`text-lg font-black text-primary tracking-tight ${m.accent} transition-colors`}>
                  {m.name}
                </h3>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mt-1">
                  {t(`members.${m.id}.title` as "members.kennedy.title")}
                </p>
                <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
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
