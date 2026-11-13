"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const ITEM_KEYS = ["0", "1", "2", "3", "4", "5"] as const;

export default function FAQ() {
  const t = useTranslations("home.faq");
  const [open, setOpen] = useState<string | null>("0");

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E30613]">{t("eyebrow")}</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] mt-2">{t("title")}</h2>
        </div>
        <div className="space-y-3">
          {ITEM_KEYS.map((key) => {
            const isOpen = open === key;
            return (
              <div key={key} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <button
                  type="button"
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-[#0A2540]"
                  onClick={() => setOpen(isOpen ? null : key)}
                  aria-expanded={isOpen}
                >
                  <span>{t(`items.${key}.q`)}</span>
                  <span className="text-[#E30613] text-xl leading-none">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed text-sm">
                    {t(`items.${key}.a`)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
