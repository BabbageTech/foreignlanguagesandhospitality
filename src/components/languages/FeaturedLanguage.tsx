"use client";

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { LanguageCourse } from './types';
import type { Locale } from '@/i18n/config';
import { languageCatalogueCopy, languageNames } from '@/i18n/language-catalogue';
import { languageCourseDetails } from '@/i18n/language-course-details';

interface Props {
  featured: LanguageCourse;
  onView: (course: LanguageCourse) => void;
  locale: Locale;
}

export default function FeaturedLanguage({ featured, onView, locale }: Props) {
  const t = languageCatalogueCopy[locale] as (typeof languageCatalogueCopy)["en"];
  const featuredName = languageNames[featured.id]?.[locale] || featured.name;
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
                  {t.featured} · {t.gateway}
                </span>
                <h2 className="text-2xl font-black text-white">{featuredName}</h2>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-lg">
              {languageCourseDetails[locale][featured.id as keyof (typeof languageCourseDetails)["en"]].whyLearn}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {t.featuredTags.map((tag) => (
                <span key={tag} className="text-[9px] font-black uppercase tracking-wider text-[#F2C12C] bg-white/5 border border-white/10 px-3 py-1.5 rounded">
                  {tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => onView(featured)}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F2C12C] text-[#0A2540] text-xs font-black uppercase tracking-widest hover:bg-white transition-all rounded-lg"
            >
              {t.viewProgramme} <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </button>
          </div>

          <div className="md:col-span-4 relative hidden md:block">
            <Image src={featured.image} alt={featuredName} fill className="object-cover opacity-30 rounded-r-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}