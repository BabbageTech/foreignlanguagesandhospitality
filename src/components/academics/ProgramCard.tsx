"use client";

import Image from "next/image";
import Link from "next/link";

export type Program = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  level?: string;
  category?: string;
  image?: string;
  facilities?: string[];
  accentColor?: "primary" | "secondary" | "accent";
};

type Props = {
  program: Program;
};

const barColors = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

export default function ProgramCard({ program }: Props) {
  const bar = barColors[program.accentColor ?? "primary"];

  return (
    <div className="group bg-white rounded-3xl border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Accent bar */}
      <div className={`h-1.5 ${bar} shrink-0`} />

      {/* Image Container */}
      {program.image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}

      <div className="p-6 flex flex-col gap-3 flex-1">
        {/* Meta Info */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black uppercase tracking-wider text-secondary bg-secondary/5 px-2.5 py-1 rounded-full">
            {program.category || "General"}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-neutral-400">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            {program.duration}
          </div>
        </div>

        {/* Title */}
        <h2 className="font-black text-xl text-primary leading-tight group-hover:text-secondary transition-colors">
          {program.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-neutral-500 line-clamp-3 leading-relaxed flex-1">
          {program.description}
        </p>

        {/* Action */}
        <Link
          href={`/academics/${program.slug}`}
          className="mt-4 flex items-center justify-between font-bold text-sm text-primary group/link"
        >
          <span className="group-hover/link:underline decoration-secondary decoration-2 underline-offset-4">
            Explore Program
          </span>
          <svg viewBox="0 0 16 16" className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
      </div>
    </div>
  );
}