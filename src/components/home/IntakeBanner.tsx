// src/components/home/IntakeBanner.tsx
"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { localePath, type Locale } from "@/i18n/config";
import { getHomeCopy } from "@/i18n/home";

export default function IntakeBanner({ locale }: { locale: Locale }) {
  const content = getHomeCopy(locale);
  const prefersReducedMotion = useReducedMotion();
  return (
    // Reduced padding for a more compact vertical footprint
    <section className="bg-white py-12 md:py-16 font-sans">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Graduation Cap Icon */}
        <div className="text-3xl md:text-4xl mb-4">
          🎓
        </div>

        {/* Scaled down heading size */}
        <h2 className="text-2xl md:text-4xl font-black text-[#244256] mb-5 tracking-tight">
          {content.intakeTitle}
        </h2>

        {/* Standardized subtext width */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed">
            {content.intakeBody}
          </p>
        </div>

        {/* Standardized Video Player - Reduced from max-w-4xl to max-w-2xl */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="relative aspect-video bg-slate-50 overflow-hidden shadow-sm">
            <video
              autoPlay={prefersReducedMotion !== true}
              controls={prefersReducedMotion === true}
              loop
              muted
              playsInline
              aria-label={prefersReducedMotion === true ? `${content.intakeTitle} video` : undefined}
              aria-hidden={prefersReducedMotion !== true}
              tabIndex={prefersReducedMotion === true ? 0 : -1}
              className="w-full h-full object-cover block"
            >
              <source src="/juneIntake.mp4" type="video/mp4" />
              {content.videoFallback}
            </video>
          </div>
        </div>

        {/* Clean CTA Button */}
        <div className="mt-10">
          <Link 
            href={localePath("/admissions", locale)} 
            className="inline-block px-10 py-4 bg-[#244256] text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-lg hover:bg-[#F2C12C] hover:text-[#0A2540] transition-all shadow-lg active:scale-95"
          >
            {content.apply}
          </Link>
        </div>
      </div>
    </section>
  );
}