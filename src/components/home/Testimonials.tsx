"use client";

import { alumniStories } from "@/lib/constants";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("home.testimonials");
  const stories = Array.isArray(alumniStories) ? alumniStories : [];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E30613]">{t("eyebrow")}</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] mt-2">{t("title")}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.slice(0, 6).map((s: { name: string; role: string; quote: string }) => (
            <blockquote key={s.name} className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
              <p className="text-slate-700 leading-relaxed text-sm mb-4">&ldquo;{s.quote}&rdquo;</p>
              <footer>
                <cite className="not-italic font-black text-[#0A2540] text-sm">{s.name}</cite>
                <p className="text-xs text-slate-500 mt-0.5">{s.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
