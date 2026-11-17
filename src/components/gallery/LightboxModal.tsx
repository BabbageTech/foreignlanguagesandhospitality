"use client";

import Image from "next/image";
import { useId, useRef } from "react";
import { useAccessibleDialog } from "@/hooks/useAccessibleDialog";
import type { GalleryItem } from "./GalleryGrid";

type Props = {
  item: GalleryItem | null;
  onClose: () => void;
  closeLabel: string;
  recordLabel: string;
  dir?: "ltr" | "rtl";
};

export default function LightboxModal({ item, onClose, closeLabel, recordLabel, dir = "ltr" }: Props) {
  const titleId = useId();
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useAccessibleDialog(Boolean(item), onClose, dialogRef, closeButtonRef);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300 md:p-10">
      <button type="button" aria-label={closeLabel} onClick={onClose} className="absolute inset-0 cursor-default bg-[#0A192F]/95 backdrop-blur-xl" />
      <section ref={dialogRef} tabIndex={-1} dir={dir} role="dialog" aria-modal="true" aria-labelledby={titleId} className="relative z-10 flex w-full max-w-6xl flex-col items-center focus:outline-none">
        <button ref={closeButtonRef} type="button" onClick={onClose} aria-label={closeLabel} className="absolute -top-12 end-0 flex items-center gap-2 text-white/70 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C12C] md:-end-16 md:top-0 md:flex-col">
          <span aria-hidden="true" className="text-3xl font-light">✕</span>
          <span className="hidden text-[10px] font-black uppercase tracking-widest md:block">{closeLabel}</span>
        </button>
        <div className="relative aspect-video max-h-[75vh] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 shadow-2xl">
          <Image src={item.src} alt={item.title} fill className="object-contain" priority />
        </div>
        <div className="mt-8 max-w-2xl text-center">
          <div className="mb-4 inline-block rounded-full border border-accent/20 bg-accent/10 px-4 py-1"><span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">{recordLabel} {item.categoryLabel || item.category}</span></div>
          <h2 id={titleId} className="mb-2 text-2xl font-black tracking-tight text-white md:text-3xl">{item.title}</h2>
          <div aria-hidden="true" className="mx-auto h-1 w-12 rounded-full bg-white/20" />
        </div>
      </section>
    </div>
  );
}
