"use client";

import Link from "next/link";
import ProgramCard, { Program } from "./ProgramCard";

type Props = {
  programs: Program[];
};

export default function ProgramGrid({ programs }: Props) {
  if (!programs?.length) {
    return (
      <div className="flex flex-col items-center text-center py-24 px-6 bg-base-100 rounded-[3rem] border-2 border-dashed border-base-300">
        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-neutral-300" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M12 4v16m8-8H4" strokeLinecap="round" />
          </svg>
        </div>
        <h3 className="font-black text-2xl text-primary mb-3">No Programs Found</h3>
        <p className="text-neutral-500 max-w-sm leading-relaxed mb-8">
          We couldn&apos;t find any courses matching your criteria. Check back soon for new intakes!
        </p>
        <Link href="/contact" className="btn btn-secondary px-8">
          Talk to Admissions
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {programs.map((program) => (
        <ProgramCard key={program.slug} program={program} />
      ))}
    </div>
  );
}