"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

type Person = { name: string; role: string; location: string; initials: string; quote: string };

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor" aria-hidden>
    <path d="M6.5 10c-1.5 0-2.5 1.2-2.5 2.8 0 1.4.8 2.5 2.2 3.1L5 20h3.2l1.2-3.5c1.5-.5 2.6-1.9 2.6-3.7C12 11 10.3 10 8.5 10H6.5zm9 0c-1.5 0-2.5 1.2-2.5 2.8 0 1.4.8 2.5 2.2 3.1L14 20h3.2l1.2-3.5c1.5-.5 2.6-1.9 2.6-3.7 0-1.8-1.7-2.8-3.5-2.8H15.5z" />
  </svg>
);

export default function Testimonials() {
  const t = useTranslations("home.testimonials");
  const people = (t.raw("items") as Person[]) || [];

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundImage: "url('/images/student-hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-white/90" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-1 bg-secondary" aria-hidden />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{t("eyebrow")}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-primary leading-tight">{t("title")}</h2>
          </div>
          <Link href="/admissions" className="bg-primary text-white px-7 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-lg self-start">
            {t("cta")}
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((person) => (
            <div key={person.name + person.role} className="group relative bg-brand-gray border border-slate-200/50 rounded-2xl p-7 flex flex-col transition-all duration-300 hover:bg-white hover:border-accent hover:shadow-xl hover:-translate-y-1">
              <div className="mb-4 text-secondary opacity-20 group-hover:opacity-100 transition-opacity"><QuoteIcon /></div>
              <p className="text-sm md:text-[15px] leading-relaxed text-primary/80 mb-6 flex-1 font-medium italic">&quot;{person.quote}&quot;</p>
              <div className="flex items-center gap-4 pt-5 border-t border-slate-200/40">
                <div className="w-11 h-11 bg-white border-2 border-accent text-primary flex items-center justify-center font-black text-sm rounded-xl shadow-sm">{person.initials}</div>
                <div>
                  <p className="font-black text-primary text-base leading-none mb-1">{person.name}</p>
                  <p className="text-secondary text-[9px] font-black uppercase tracking-wider">{person.role}</p>
                  <p className="text-[9px] font-bold text-primary/40 mt-0.5 uppercase">{person.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
