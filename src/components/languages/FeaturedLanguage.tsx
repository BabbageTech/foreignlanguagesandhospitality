"use client";

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { LanguageCourse } from './types';

interface Props {
  featured: LanguageCourse;
  onView: (course: LanguageCourse) => void;
}

export default function FeaturedLanguage({ featured, onView }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 mb-8">
      <div className="relative bg-[#0A2540] text-white overflow-hidden border border-white/5 shadow-2xl rounded-3xl">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F2C12C] rounded-l-3xl" />
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#F2C12C]/8 rounded-full blur-[80px]" />

        <div className="grid md:grid-cols-12 gap-0">
          <div className="md:col-span-8 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🇩🇪</span>
              <div>
                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#F2C12C] block">
                  Most Popular · Gateway to Germany
                </span>
                <h2 className="text-2xl font-black text-white">German Language Programme</h2>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-lg">
              {featured.whyLearn}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Goethe A1–B2", "Ausbildung Ready", "CEFR Aligned", "Job Placement Support"].map((t) => (
                <span key={t} className="text-[9px] font-black uppercase tracking-wider text-[#F2C12C] bg-white/5 border border-white/10 px-3 py-1.5 rounded">
                  {t}
                </span>
              ))}
            </div>

            <button
              onClick={() => onView(featured)}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F2C12C] text-[#0A2540] text-xs font-black uppercase tracking-widest hover:bg-white transition-all rounded-lg"
            >
              View Full Programme <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="md:col-span-4 relative hidden md:block">
            <Image src={featured.image} alt="German" fill className="object-cover opacity-30 rounded-r-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}