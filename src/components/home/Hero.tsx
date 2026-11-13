"use client";

import { Link } from "@/i18n/routing";
import { ArrowRight, Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const SLIDE_IMAGES = [
  "/images/hero/campus.jpg",
  "/images/hero/students.jpg",
  "/images/hero/german.jpg",
  "/images/hero/support.jpg",
  "/images/hero/hospitality.jpg",
  "/images/hero/learning.jpg",
  "/images/hero/chef.jpg",
  "/images/hero/discussion.jpg",
];

export default function Hero() {
  const t = useTranslations("home.hero");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDE_IMAGES.length), 6000);
    return () => clearInterval(id);
  }, []);

  const title = t(`slides.${index}.title`);
  const description = t(`slides.${index}.description`);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#0A2540]">
      {SLIDE_IMAGES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
          style={{
            backgroundImage: `linear-gradient(rgba(10,37,64,0.72), rgba(10,37,64,0.85)), url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden={i !== index}
        />
      ))}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-medium max-w-2xl">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-white text-[#0A2540] px-7 py-3.5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-[#F2C12C] transition-all shadow-lg"
            >
              {t("ctaPrimary")} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              {t("ctaSecondary")}
            </Link>
            <a
              href="/docs/bronchure.pdf"
              className="inline-flex items-center gap-2 text-white/90 px-4 py-3.5 text-sm font-bold uppercase tracking-wider hover:text-[#F2C12C] transition-colors"
            >
              <Download className="w-4 h-4" /> {t("brochure")}
            </a>
          </div>
        </div>
        <div className="flex gap-2 mt-12" role="tablist" aria-label="Hero slides">
          {SLIDE_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-[#F2C12C]" : "w-3 bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
