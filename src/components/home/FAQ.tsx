"use client";
import { Link } from "@/i18n/routing";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

type FaqItem = { id: string; q: string; a: string };

export default function FAQ() {
  const t = useTranslations("home.faq");
  const items = (t.raw("items") as FaqItem[]) || [];
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section className="relative min-h-[70vh] overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url('/images/campus-life.jpg')` }}>
        <div className="absolute inset-0 bg-white/35" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-3">{t("title")}</h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto font-medium">{t("subtitle")}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="hidden lg:block sticky top-32">
            <h3 className="text-3xl font-black text-primary leading-tight mb-4 border-b-4 border-secondary inline-block pb-2">{t("sidebarTitle")}</h3>
            <p className="text-slate-700 text-lg max-w-md mb-8 font-bold leading-relaxed">{t("sidebarBody")}</p>
            <div className="grid grid-cols-2 gap-4 max-w-sm mb-8">
              <div className="p-6 rounded-xl bg-white border border-slate-200/60 shadow-md">
                <p className="text-3xl font-black text-accent">✓</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{t("stat1")}</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-slate-200/60 shadow-md">
                <p className="text-3xl font-black text-secondary">CEFR</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{t("stat2")}</p>
              </div>
            </div>
            <Link href="/contact" className="inline-flex bg-primary text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-secondary transition-all">
              {t("contactCta")}
            </Link>
          </div>
          <div className="space-y-3">
            {items.map((item) => {
              const open = activeId === item.id;
              return (
                <div key={item.id} className={`rounded-xl border bg-white shadow-sm overflow-hidden transition-all ${open ? "border-secondary shadow-md" : "border-slate-200"}`}>
                  <button type="button" onClick={() => setActiveId(open ? null : item.id)} className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary" aria-expanded={open}>
                    <span className="font-black text-primary text-sm md:text-base">{item.q}</span>
                    <span className="text-secondary font-black text-xl shrink-0" aria-hidden>{open ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                        <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed font-medium">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
