"use client";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

const CARD_META = [
  { image: "/images/languages-cover.jpg", href: "/academics/languages", accentColor: "text-primary", hoverBtn: "hover:bg-primary" },
  { image: "/images/hospitality-cover.jpg", href: "/academics/hospitality-management", accentColor: "text-secondary", hoverBtn: "hover:bg-secondary" },
  { image: "/images/hospitality/tourism.jpg", href: "/academics/travel-tourism", accentColor: "text-emerald-600", hoverBtn: "hover:bg-emerald-600" },
  { image: "/images/ict-cover.jpg", href: "/academics/ict", accentColor: "text-accent", hoverBtn: "hover:bg-accent" },
];

type Card = { category: string; title: string; description: string; items: string[] };

export default function ProgramsHighlight() {
  const t = useTranslations("home.programs");
  const cards = (t.raw("cards") as Card[]) || [];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-3">{t("title")}</h2>
          <p className="text-slate-600 text-lg font-medium">{t("subtitle")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => {
            const meta = CARD_META[i] ?? CARD_META[0];
            return (
              <div key={card.title} className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col h-full">
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <Image src={meta.image} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 z-10">
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] drop-shadow-md">{card.category}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className={`text-lg font-black mb-2 ${meta.accentColor}`}>{card.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed flex-1">{card.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {card.items.slice(0, 4).map((item) => (
                      <li key={item} className="text-xs text-slate-500 font-medium flex items-start gap-2">
                        <span className={`${meta.accentColor} mt-0.5`} aria-hidden>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={meta.href} className={`mt-auto text-center text-[10px] font-black uppercase tracking-widest py-3 rounded-lg border border-slate-200 text-primary transition-all ${meta.hoverBtn} hover:text-white hover:border-transparent`}>
                    {t("learnMore")}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
