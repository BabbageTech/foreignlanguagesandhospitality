"use client";

import { Category } from './types';

interface Props {
  activeCategory: Category;
  onChange: (cat: Category) => void;
}

export default function CategoryFilter({ activeCategory, onChange }: Props) {
  const categories: Category[] = ["All", "European", "Asian", "African", "Middle Eastern"];

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
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}