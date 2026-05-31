"use client";

interface CategoryFilterProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-8">
      {categories.map((cat) => {
        const isActive = cat === active;

        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`
              px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-500
              ${
                isActive
                  ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105"
                  : "bg-white border border-neutral-200 text-neutral-500 hover:border-accent hover:text-accent"
              }
            `}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}