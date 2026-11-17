"use client";

import type { Locale } from '@/i18n/config';
import { languageCatalogueCopy } from '@/i18n/language-catalogue';
import { Category } from './types';

interface Props {
  activeCategory: Category;
  onChange: (cat: Category) => void;
  locale: Locale;
}

export default function CategoryFilter({ activeCategory, onChange, locale }: Props) {
  const t = languageCatalogueCopy[locale] as (typeof languageCatalogueCopy)["en"];
  const categories: Category[] = ["All", "European", "Asian", "African", "Middle Eastern"];
  const labels: Record<Category, string> = { All: t.all, European: t.european, Asian: t.asian, African: t.african, "Middle Eastern": t.middleEastern };

  return (
    <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className={`px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-all duration-200 rounded-lg ${
                activeCategory === cat ? "bg-[#0A2540] text-white" : "bg-white border border-slate-200 text-slate-500 hover:border-[#0A2540] hover:text-[#0A2540]"
              }`}
            >
              {labels[cat]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}