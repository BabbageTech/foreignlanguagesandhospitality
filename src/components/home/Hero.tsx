"use client";

import { ArrowRight, Download, GraduationCap } from "lucide-react"; // Added Icons
import Link from "next/link";
import { useEffect, useState } from "react";
import { localePath, type Locale } from "@/i18n/config";
import { getHomeCopy } from "@/i18n/home";

const slideImages = [
  "/images/hero/campus.jpg", "/images/hero/students.jpg", "/images/hero/german.jpg", "/images/hero/support.jpg",
  "/images/hero/hospitality.jpg", "/images/hero/learning.jpg", "/images/hero/chef.jpg", "/images/hero/discussion.jpg",
];

export default function Hero({ locale }: { locale: Locale }) {
  const content = getHomeCopy(locale);
  const slides = slideImages.map((image, index) => ({ image, title: content.slides[index][0], description: content.slides[index][1] }));
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideCount = slides.length;
    if (slideCount === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden font-sans">
      
      {/* Background Layer */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div 
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[7000ms] ease-linear ${
              index === currentSlide ? "scale-110" : "scale-100"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/50 z-20" />
        </div>
      ))}

      {/* Content Layer */}
      <div className="relative z-30 container mx-auto px-6 text-center text-white">
        <div className="max-w-5xl mx-auto">
          
          <h1 
            key={`title-${currentSlide}`}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000"
          >
            {slides[currentSlide].title}
          </h1>

          <p 
            key={`desc-${currentSlide}`}
            className="text-lg md:text-xl lg:text-2xl font-medium mb-12 max-w-3xl mx-auto leading-relaxed text-white/90 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200"
          >
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href={localePath("/admissions", locale)}
              className="w-full sm:w-auto min-w-[200px] bg-[#0A2540] text-white px-8 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#F2C12C] hover:text-[#0A2540] transition-all duration-300 shadow-xl active:scale-95 flex items-center justify-center gap-2"
            >
              {content.apply} <ArrowRight size={16} />
            </Link>

            {/* SYNCED DOWNLOAD LOGIC: Same as Admissions Page */}
            <Link
              href="/docs/bronchure.pdf"
              className="w-full sm:w-auto min-w-[200px] bg-white text-[#0A2540] px-8 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl active:scale-95 flex items-center justify-center gap-2"
            >
              <Download size={16} /> {content.brochure}
            </Link>

            <Link
              href={localePath("/academics", locale)}
              className="w-full sm:w-auto min-w-[200px] bg-transparent border-2 border-white/40 backdrop-blur-sm text-white px-8 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[#0A2540] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
            >
              <GraduationCap size={16} /> {content.programs}
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-40">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Show slide ${i + 1}`}
            aria-pressed={i === currentSlide}
            className="group relative h-10 w-2 flex items-center justify-center"
          >
            <div className={`transition-all duration-500 rounded-full ${
              i === currentSlide ? "h-8 w-1 bg-[#F2C12C]" : "h-4 w-1 bg-white/40 group-hover:bg-white/60"
            }`} />
          </button>
        ))}
      </div>
    </section>
  );
}