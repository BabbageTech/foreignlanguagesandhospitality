"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function EmpoweringSection() {
  const t = useTranslations("home.empowering");

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] w-full max-w-[450px] shadow-2xl">
              <Image
                src="/images/interactive-learning.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E30613]">{t("eyebrow")}</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0A2540] mt-3 mb-6 tracking-tight leading-tight">
              {t("title")}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">{t("description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
