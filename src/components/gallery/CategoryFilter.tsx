"use client";

interface CategoryFilterProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
  labels: Record<string, string>;
  filterLabel: string;
}

export default function CategoryFilter({ categories, active, onChange, labels, filterLabel }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-8" role="group" aria-label={filterLabel}>
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(category)}
            className={`rounded-2xl px-8 py-3 text-xs font-black uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F2C12C]/70 ${isActive ? "scale-105 bg-primary text-white shadow-xl shadow-primary/20" : "border border-neutral-200 bg-white text-neutral-500 hover:border-accent hover:text-accent"}`}
          >
            {labels[category] || category}
          </button>
        );
      })}
    </div>
  );
}
