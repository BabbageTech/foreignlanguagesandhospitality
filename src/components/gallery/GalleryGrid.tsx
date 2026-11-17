"use client";

import Image from "next/image";

export type GalleryItem = {
  id: number;
  src: string;
  title: string;
  category: string;
  categoryLabel?: string;
  location?: string;
};

type Props = {
  items: GalleryItem[];
  onSelect: (item: GalleryItem) => void;
  emptyLabel: string;
  openItemLabel: string;
};

export default function GalleryGrid({ items, onSelect, emptyLabel, openItemLabel }: Props) {
  if (!items.length) {
    return <div className="rounded-[3rem] border-2 border-dashed border-neutral-200 py-32 text-center"><p className="text-xs font-bold uppercase tracking-widest text-neutral-400">{emptyLabel}</p></div>;
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(item)}
          aria-label={`${openItemLabel} ${item.title}`}
          className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] bg-[#0A192F] text-left shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F2C12C]"
        >
          <div className="relative h-[400px] w-full sm:h-[320px]">
            <Image src={item.src} alt={item.title} fill className="object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100" />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
          <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-8 transition-transform duration-500 group-hover:translate-y-0">
            <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-accent">{item.categoryLabel || item.category}</span>
            <span className="block text-lg font-black leading-tight text-white">{item.title}</span>
            <span aria-hidden="true" className="mt-4 block h-1 w-0 rounded-full bg-accent transition-all duration-500 group-hover:w-12" />
          </div>
        </button>
      ))}
    </div>
  );
}
