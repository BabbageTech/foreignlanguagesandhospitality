"use client";

import Image from "next/image";

export type GalleryItem = {
  id: number;
  src: string;
  title: string;
  category: string;
  location?: string;
};

type Props = {
  items: GalleryItem[];
  onSelect: (item: GalleryItem) => void;
};

export default function GalleryGrid({ items, onSelect }: Props) {
  if (!items.length) {
    return (
      <div className="text-center py-32 border-2 border-dashed border-neutral-200 rounded-[3rem]">
        <p className="text-neutral-400 font-bold uppercase tracking-widest text-xs">No entries found in archives</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onSelect(item)}
          className="group cursor-pointer relative overflow-hidden rounded-[2.5rem] bg-[#0A192F] shadow-lg transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
        >
          {/* Image Container */}
          <div className="relative w-full h-[400px] sm:h-[320px]">
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
            />
          </div>

          {/* Institutional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
              {item.category}
            </span>
            <h4 className="text-white text-lg font-black leading-tight">
              {item.title}
            </h4>
            <div className="w-0 group-hover:w-12 h-1 bg-accent mt-4 rounded-full transition-all duration-500 delay-100" />
          </div>
        </div>
      ))}
    </div>
  );
}