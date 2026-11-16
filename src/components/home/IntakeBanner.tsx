// src/components/home/IntakeBanner.tsx
"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function IntakeBanner() {
  const t = useTranslations("home.intake");

  return (
    <section className="bg-white py-12 md:py-16 font-sans">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="text-3xl md:text-4xl mb-4">🎓</div>

        <h2 className="text-2xl md:text-4xl font-black text-[#244256] mb-5 tracking-tight">
          {t("title")}
        </h2>

        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="w-full max-w-2xl mx-auto">
          <div className="relative aspect-video bg-slate-50 overflow-hidden shadow-sm">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover block">
              <source src="/juneintake.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/admissions"
            className="inline-block px-10 py-4 bg-[#244256] text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-lg hover:bg-[#F2C12C] hover:text-[#0A2540] transition-all shadow-lg active:scale-95"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
