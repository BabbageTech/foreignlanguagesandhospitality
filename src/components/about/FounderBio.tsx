"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function FounderBio() {
  const t = useTranslations("about.founder");
  const focusAreas = [t("focusLanguage"), t("focusHospitality"), t("focusCareer")];
  const stats = [
    { value: "3", label: t("corePrograms") },
    { value: "2", label: t("countries") },
    { value: "100+", label: t("successStories") },
  ];

  return (
    <section id="founder" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-primary">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/faculty/Soila.jpg"
                  alt={`Soila Lasoi - ${t("role")}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent">
                  <div className="text-4xl font-serif text-secondary leading-none mb-3 opacity-90">“</div>
                  <p className="text-lg md:text-xl font-bold italic text-white leading-relaxed drop-shadow-md">
                    {t("quote")}
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-primary text-xl tracking-tight">Soila Lasoi</p>
                  <p className="text-secondary font-bold text-[10px] uppercase tracking-[0.2em]">{t("role")}</p>
                </div>
                <div className="h-8 w-px bg-neutral-200" />
                <div className="flex gap-2 text-primary/20">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <div className="w-2 h-2 rounded-full bg-neutral-200" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-neutral-50 rounded-xl py-4 px-2 text-center border border-neutral-100">
                  <p className="text-xl font-bold text-primary">{value}</p>
                  <p className="text-[9px] font-black text-neutral-400 uppercase tracking-tighter">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-secondary" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-secondary">{t("eyebrow")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight leading-[1.1] mb-6">
              {t("title1")}{" "}
              <span className="text-secondary">{t("title2")}</span>
            </h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {focusAreas.map((f) => (
                <span
                  key={f}
                  className="text-[10px] font-black uppercase tracking-wider bg-neutral-50 text-primary border border-neutral-100 px-3 py-1.5 rounded-full"
                >
                  {f}
                </span>
              ))}
            </div>
            <p className="text-neutral-600 leading-relaxed text-lg mb-6">{t("body1")}</p>
            <p className="text-neutral-600 leading-relaxed text-lg">{t("body2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
