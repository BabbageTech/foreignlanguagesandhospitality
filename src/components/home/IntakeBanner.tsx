"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function IntakeBanner() {
  const t = useTranslations("home.intakeBanner");
  const tNav = useTranslations("nav");
  return (
    <section className="bg-white py-12 md:py-16 font-sans">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="text-3xl md:text-4xl mb-4" aria-hidden>🎓</div>
        <h2 className="text-2xl md:text-4xl font-black text-primary mb-5 tracking-tight">{t("heading")}</h2>
        <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-10">{t("text")}</p>
        <div className="w-full max-w-2xl mx-auto">
          <div className="relative aspect-video bg-slate-50 overflow-hidden shadow-sm">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover block">
              <source src="/juneIntake.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="mt-10">
          <Link href="/admissions" className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-secondary transition-all shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2">
            {tNav("applyNow")}
          </Link>
        </div>
      </div>
    </section>
  );
}
