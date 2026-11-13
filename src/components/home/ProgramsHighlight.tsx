"use client";

import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const PROGRAMS = [
  { href: "/academics/german-language", key: "german" as const },
  { href: "/academics/hospitality-management", key: "hospitality" as const },
  { href: "/academics/nursing-preparation", key: "nursing" as const },
  { href: "/academics/languages", key: "languages" as const },
];

export default function ProgramsHighlight() {
  const t = useTranslations("home.programs");
  const programs = useTranslations("programs");
  const cta = useTranslations("cta");

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E30613]">{t("eyebrow")}</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0A2540] mt-2 tracking-tight">{t("title")}</h2>
            <p className="text-slate-600 mt-4 leading-relaxed">{t("description")}</p>
          </div>
          <Link href="/academics" className="inline-flex items-center gap-2 text-[#0A2540] font-black text-sm uppercase tracking-wider hover:text-[#E30613]">
            {cta("viewPrograms")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROGRAMS.map((p) => (
            <Link key={p.href} href={p.href} className="group block p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <h3 className="font-black text-[#0A2540] text-lg group-hover:text-[#E30613] transition-colors">{programs(p.key)}</h3>
              <span className="inline-flex items-center gap-1 mt-4 text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-[#0A2540]">
                {cta("learnMore")} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
