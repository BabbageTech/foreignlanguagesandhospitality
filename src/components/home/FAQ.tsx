"use client";

import SectionTitle from "@/components/common/SectionTitle";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    id: "req",
    q: "What are the admission requirements?",
    a: "Requirements vary by program. For language courses, you need a KCSE certificate (minimum C plain) or equivalent to qualify for international placement standards.",
  },
  {
    id: "sch",
    q: "Are there scholarship opportunities available?",
    a: "We offer need-based fee reduction and fully-funded Ausbildung placements for qualified students through our European partner networks.",
  },
  {
    id: "dur",
    q: "How long are the programs?",
    a: "Language courses run from 3–12 months depending on the level (A1 to B2). Hospitality diplomas typically range from 12–24 months.",
  },
  {
    id: "job",
    q: "Do you offer internship or job placements?",
    a: "Yes. We partner directly with employers in Germany, Austria, and Switzerland to ensure safe and legal transition into the workforce.",
  },
  {
    id: "work",
    q: "Can I study while working?",
    a: "Yes. We offer flexible learning modules including evening, weekend, and hybrid online classes for working professionals.",
  },
  {
    id: "supp",
    q: "What career support services do you provide?",
    a: "We provide comprehensive CV writing, Bewerbung coaching, interview prep, and full visa guidance as part of our placement package.",
  },
  {
    id: "int",
    q: "Are the programs internationally recognized?",
    a: "Yes. Our language programs strictly follow the CEFR (Common European Framework of Reference for Languages) standards.",
  },
];

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>("req");

  const toggleFaq = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center">
      
      {/* 1. HIGH VISIBILITY BACKGROUND LAYER */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url('/images/campus-life.jpg')` }}
      >
        {/* Adjusted to a crisp 35% opacity overlay with no background blur to maximize visibility */}
        <div className="absolute inset-0 bg-white/35" />
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
        
        {/* Section Header */}
        <div className="mb-16 text-center [&_h2]:text-[#0A2540] [&_p]:text-slate-700">
          <SectionTitle
            title="Admissions & Placement FAQ"
            subtitle="Clear answers to help you navigate your journey toward a global career."
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Information & Stats */}
          <div className="hidden lg:block sticky top-32">
            <h2 className="text-4xl font-black text-[#0A2540] leading-tight mb-6">
              Expert Guidance for <br/>
              <span className="text-[#0A2540] border-b-4 border-[#E30613]">International Success</span>
            </h2>
            <p className="text-slate-700 text-lg max-w-md mb-10 font-bold leading-relaxed dropped-shadow-sm">
              We provide end-to-end support, from language mastery to legal work placements in Europe.
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

          {/* Right Column: White Background FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`group transition-all duration-300 rounded-xl border bg-white ${
                    isOpen 
                      ? "border-slate-300 shadow-xl scale-[1.01]" 
                      : "border-slate-200/80 hover:border-slate-300 shadow-md"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-6">
                      <span className={`text-[11px] font-black tracking-widest transition-colors ${
                        isOpen ? 'text-[#E30613]' : 'text-slate-400'
                      }`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-bold text-base md:text-lg tracking-tight text-[#0A2540]">
                        {faq.q}
                      </span>
                    </div>
                    
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isOpen ? 'bg-[#0A2540] text-white rotate-180' : 'bg-slate-100 text-[#0A2540] rotate-0'
                      }`}>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
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
                            {faq.a}
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

        {/* 3. CTA FOOTER */}
        <div className="mt-24 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-300 -z-10" />
          
          <div className="bg-[#0A2540] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
            <div className="text-center md:text-left max-w-lg">
              <h4 className="text-2xl md:text-3xl font-black text-white mb-3 italic">
                Need Specific Guidance?
              </h4>
              <p className="text-white/70 font-medium">
                Our enrollment team is ready to help you choose the right path for your career goals.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-5">
               <Link href="/contact" className="px-10 py-4 bg-[#E30613] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg hover:bg-[#B8040F] transition-all shadow-xl shadow-red-900/30">
                 Book Consultation
               </Link>
               <a href="https://wa.me/254723104680" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg hover:bg-[#F2C12C] hover:text-[#0A2540] hover:border-[#F2C12C] transition-all">
                 WhatsApp Hub
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
