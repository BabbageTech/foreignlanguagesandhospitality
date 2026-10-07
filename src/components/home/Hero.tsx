"use client";
import { Link } from "@/i18n/routing";
import { ArrowRight, Download, GraduationCap } from "lucide-react";
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

type SlideText = { title: string; description: string };

export default function Hero() {
  const t = useTranslations("home.hero");
  const slides = (t.raw("slides") as SlideText[]) || [];
  const [currentSlide, setCurrentSlide] = useState(0);
  const count = Math.min(slides.length || 1, SLIDE_IMAGES.length);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % count), 7000);
    return () => clearInterval(timer);
  }, [count]);

  const slide = slides[currentSlide] ?? { title: "", description: "" };

  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden font-sans">
      {SLIDE_IMAGES.slice(0, count).map((image, index) => (
        <div key={image} className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
          <div className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[7000ms] ease-linear ${index === currentSlide ? "scale-110" : "scale-100"}`} style={{ backgroundImage: `url(${image})` }} />
          <div className="absolute inset-0 bg-black/50 z-20" />
        </div>
      ))}
      <div className="relative z-30 container mx-auto px-6 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.35em] text-accent mb-4">{t("eyebrow")}</p>
          <h1 key={`t-${currentSlide}`} className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.1]">{slide.title}</h1>
          <p key={`d-${currentSlide}`} className="text-lg md:text-xl lg:text-2xl font-medium mb-12 max-w-3xl mx-auto leading-relaxed text-white/90">{slide.description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link href="/admissions" className="w-full sm:w-auto min-w-[200px] bg-primary text-white px-8 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-accent hover:text-primary transition-all shadow-xl flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              {t("ctaPrimary")} <ArrowRight size={16} aria-hidden />
            </Link>
            <a href="/docs/bronchure.pdf" className="w-full sm:w-auto min-w-[200px] bg-white text-primary px-8 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl flex items-center justify-center gap-2">
              <Download size={16} aria-hidden /> {t("brochure")}
            </a>
            <Link href="/academics" className="w-full sm:w-auto min-w-[200px] bg-transparent border-2 border-white/40 text-white px-8 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-2">
              <GraduationCap size={16} aria-hidden /> {t("ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-40" role="tablist" aria-label="Hero slides">
        {Array.from({ length: count }).map((_, i) => (
          <button key={i} type="button" role="tab" aria-selected={i === currentSlide} aria-label={`Slide ${i + 1}`} onClick={() => setCurrentSlide(i)} className="group relative h-10 w-2 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            <div className={`transition-all duration-500 rounded-full ${i === currentSlide ? "h-8 w-1 bg-accent" : "h-4 w-1 bg-white/40 group-hover:bg-white/60"}`} />
          </button>
        ))}
      </div>
    </section>
  );
}
