"use client";

import { WHATSAPP_URL } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { homeSections } from "@/i18n/home-sections";

export default function FAQ({ locale }: { locale: Locale }) {
  const copy = homeSections[locale].faq;
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  return <section className="relative overflow-hidden"><div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/campus-life.jpg')" }} aria-hidden="true"><div className="absolute inset-0 bg-white/45" /></div>
    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24"><header className="mb-16 text-center"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#E30613] mb-3">IIFLHM</p><h2 className="text-3xl md:text-4xl font-black text-[#0A2540]">{copy.title}</h2><p className="text-slate-700 mt-4 max-w-2xl mx-auto">{copy.subtitle}</p></header>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"><aside className="hidden lg:block sticky top-32"><h3 className="text-4xl font-black text-[#0A2540] leading-tight mb-6">{copy.sideTitle}</h3><p className="text-slate-700 text-lg max-w-md mb-10 font-semibold leading-relaxed">{copy.sideBody}</p><div className="grid grid-cols-2 gap-4 max-w-sm"><div className="p-6 rounded-xl bg-white border border-slate-200/60 shadow-md"><p className="text-lg font-black text-[#0A2540]">{copy.language}</p><p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{copy.learning}</p></div><div className="p-6 rounded-xl bg-white border border-slate-200/60 shadow-md"><p className="text-lg font-black text-[#0A2540]">{copy.admissions}</p><p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{copy.guidance}</p></div></div><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 mt-8 px-6 py-4 rounded-xl bg-[#0A2540] text-white font-bold hover:bg-[#E30613] transition-colors"><MessageCircle className="w-5 h-5" aria-hidden="true" />{copy.ask}</a></aside>
        <div className="space-y-4">{copy.questions.map((item, index) => { const open = activeIndex === index; const panelId = `home-faq-panel-${index}`; return <div key={item.q} className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden"><h3><button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setActiveIndex(open ? null : index)} className="w-full flex items-center justify-between gap-5 text-left p-6 text-[#0A2540] font-bold hover:text-[#E30613] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2540]"><span>{item.q}</span><ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" /></button></h3><AnimatePresence initial={false}>{open && <motion.div id={panelId} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }}><p className="px-6 pb-6 text-sm leading-relaxed text-slate-600">{item.a}</p></motion.div>}</AnimatePresence></div>; })}</div>
      </div>
    </div>
  </section>;
}
