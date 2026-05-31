"use client";

import Image from "next/image";
import { GalleryItem } from "./GalleryGrid";

type Props = {
  item: GalleryItem | null;
  onClose: () => void;
};

export default function LightboxModal({ item, onClose }: Props) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* High-end Backdrop */}
      <div className="absolute inset-0 bg-[#0A192F]/95 backdrop-blur-xl" />

      {/* Content Container */}
      <div
        className="relative max-w-6xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Controls */}
        <button
          onClick={onClose}
          className="absolute -top-12 md:top-0 md:-right-16 text-white/50 hover:text-accent transition-colors flex flex-col items-center gap-1 group"
        >
          <span className="text-3xl font-light">✕</span>
          <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">Close</span>
        </button>

        {/* The Feature Image */}
        <div className="relative w-full aspect-video md:h-[75vh] overflow-hidden rounded-[2rem] shadow-2xl border border-white/10 bg-black/20">
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Caption Panel */}
        <div className="mt-8 text-center max-w-2xl">
          <div className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em]">
              Official Record: {item.category}
            </span>
          </div>
          <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight mb-2">
            {item.title}
          </h3>
          <div className="h-1 w-12 bg-white/20 mx-auto rounded-full" />
        </div>
      </div>
    </div>
  );
}