"use client";

import SectionTitle from "@/components/common/SectionTitle";
import { Link } from "@/i18n/routing";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

const FAQ_IDS = ["0", "1", "2", "3", "4", "5", "6"] as const;

export default function FAQ() {
  const t = useTranslations("home.faq");
  const cta = useTranslations("cta");
  const [activeId, setActiveId] = useState<string | null>("0");

  const toggleFaq = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center">
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url('/images/campus-life.jpg')` }}
      >
        <div className="absolute inset-0 bg-white/35" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 text-center [&_h2]:text-[#0A2540] [&_p]:text-slate-700">
          <SectionTitle title={t("title")} subtitle={t("eyebrow")} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="hidden lg:block sticky top-32">
            <h2 className="text-4xl font-black text-[#0A2540] leading-tight mb-6">
              {t("title")}
            </h2>
            <p className="text-slate-700 text-lg max-w-md mb-10 font-bold leading-relaxed">
              {t("items.3.a")}
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <div className="p-6 rounded-xl bg-white border border-slate-200/60 shadow-md transition-all">
                <p className="text-3xl font-black text-[#F2C12C]">98%</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Visa Success</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-slate-200/60 shadow-md transition-all">
                <p className="text-3xl font-black text-[#E30613]">100%</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Legal Compliance</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {FAQ_IDS.map((id, index) => {
              const isOpen = activeId === id;
              return (
                <div
                  key={id}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(id)}
                    className="w-full text-left px-6 py-5 flex items-center gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[#E30613] font-black text-sm w-8 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-bold text-[#0A2540] text-sm md:text-base">
                      {t(`items.${id}.q`)}
                    </span>
                    <svg
                      className={`w-5 h-5 text-[#0A2540] transition-transform ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-8 pb-8 ml-[4.1rem]">
                          <p className="text-sm md:text-base text-slate-600 leading-relaxed border-l-2 border-[#F2C12C] pl-6 font-medium">
                            {t(`items.${id}.a`)}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-24 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-300 -z-10" />
          <div className="bg-[#0A2540] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
            <div className="text-center md:text-left max-w-lg">
              <h4 className="text-2xl md:text-3xl font-black text-white mb-3 italic">
                {cta("contactUs")}
              </h4>
              <p className="text-white/70 font-medium">{t("title")}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              <Link
                href="/contact"
                className="px-10 py-4 bg-[#E30613] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg hover:bg-[#B8040F] transition-all shadow-xl shadow-red-900/30"
              >
                {cta("contactUs")}
              </Link>
              <a
                href="https://wa.me/254723104680"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg hover:bg-[#F2C12C] hover:text-[#0A2540] hover:border-[#F2C12C] transition-all"
              >
                {cta("chatWhatsApp")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
