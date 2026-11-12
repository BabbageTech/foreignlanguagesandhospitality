"use client";

import Image from "next/image";
import Link from "next/link";
import FacilitiesList from "./FacilitiesList";
import { Program } from "./ProgramCard";

type Props = {
  program: Program;
};

export default function ProgramDetail({ program }: Props) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      {/* Navigation Breadcrumb */}
      <Link href="/academics" className="group inline-flex items-center gap-2 mb-10 text-sm font-bold text-neutral-500 hover:text-primary transition-colors">
        <svg viewBox="0 0 16 16" className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <path d="M13 8H3M7 4L3 8l4 4" />
        </svg>
        Back to Programs
      </Link>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Main Content Area */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {program.image && (
            <div className="relative h-72 md:h-96 rounded-[2rem] overflow-hidden shadow-2xl">
              <Image src={program.image} alt={program.title} fill className="object-cover" priority />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-black uppercase text-primary">
                {program.level || "Full Course"}
              </div>
            </div>
          )}

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-primary tracking-tight">
              {program.title}
            </h1>
            <div className="h-1.5 w-20 bg-secondary rounded-full" />
          </div>

          <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
            {program.description}
          </p>

          <FacilitiesList facilities={program.facilities} />
        </div>

        {/* Sticky Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="sticky top-24 bg-white border border-base-300 rounded-[2rem] p-8 shadow-sm">
            <div className="mb-6 pb-6 border-b border-base-200">
              <p className="text-[10px] font-black uppercase text-neutral-400 mb-1 tracking-widest">Program Duration</p>
              <div className="flex items-center gap-2 text-2xl font-black text-primary">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                {program.duration}
              </div>
            </div>

            <div className="space-y-3">
              <Link href="/admissions" className="btn btn-secondary w-full h-14 text-base shadow-glow hover:scale-[1.02] transition-transform">
                Enroll Today
              </Link>
              <Link href="/contact" className="btn border border-base-300 bg-white text-primary w-full h-14 text-base hover:bg-base-100">
                Inquire Details
              </Link>
            </div>

            {/* Support Box */}
            <div className="mt-8 pt-8 border-t border-base-200">
              <a href="https://wa.me/254723104680" target="_blank" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-green-500 text-white flex items-center justify-center rounded-2xl group-hover:rotate-12 transition-transform">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <p className="font-black text-primary leading-tight">Instant Help</p>
                  <p className="text-sm text-neutral-500">Ask us anything on WhatsApp</p>
                </div>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}