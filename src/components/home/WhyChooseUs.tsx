"use client";
import { Award, BookOpen, Briefcase, Globe, Hotel, Users } from "lucide-react";
import { useTranslations } from "next-intl";

const ICONS = [Award, BookOpen, Users, Globe, Briefcase, Hotel];
const PALETTES = [
  { bar: "bg-secondary", iconBg: "bg-secondary/10", iconColor: "text-secondary" },
  { bar: "bg-accent", iconBg: "bg-accent/10", iconColor: "text-accent" },
  { bar: "bg-primary", iconBg: "bg-primary/10", iconColor: "text-primary" },
  { bar: "bg-secondary", iconBg: "bg-secondary/10", iconColor: "text-secondary" },
  { bar: "bg-accent", iconBg: "bg-accent/10", iconColor: "text-accent" },
  { bar: "bg-primary", iconBg: "bg-primary/10", iconColor: "text-primary" },
];

type Item = { number: string; title: string; desc: string };

export default function WhyChooseUs() {
  const t = useTranslations("home.whyChoose");
  const items = (t.raw("items") as Item[]) || [];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-1 bg-secondary" aria-hidden />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{t("eyebrow")}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight mb-4">{t("title")}</h2>
          <p className="text-slate-600 text-lg font-medium leading-relaxed">{t("subtitle")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            const palette = PALETTES[i % PALETTES.length];
            return (
              <div key={item.number + item.title} className="group relative bg-brand-gray border border-slate-200/60 rounded-2xl p-7 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className={`absolute top-0 left-0 w-1.5 h-full rounded-l-2xl ${palette.bar}`} aria-hidden />
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${palette.iconBg} ${palette.iconColor}`}>
                    <Icon className="w-6 h-6" aria-hidden />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-400 tracking-widest">{item.number}</span>
                    <h3 className="text-lg font-black text-primary mt-1 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
