"use client";

import Link from "next/link";
import { localePath } from "@/i18n/config";
import ProgramCard, { type Program } from "./ProgramCard";
import type { Locale } from "@/i18n/config";
import { getAcademicsComponentCopy } from "@/i18n/academics-components";

type Props = {
  programs: Program[];
  locale?: Locale;
};

export default function ProgramGrid({ programs, locale = "en" }: Props) {
  const t = getAcademicsComponentCopy(locale);
  if (!programs?.length) {
    return (
      <div className="flex flex-col items-center text-center py-24 px-6 bg-base-100 rounded-[3rem] border-2 border-dashed border-base-300">
        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-neutral-300" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M12 4v16m8-8H4" strokeLinecap="round" />
          </svg>
        </div>
        <h3 className="font-black text-2xl text-primary mb-3">{t.noPrograms}</h3>
        <p className="text-neutral-500 max-w-sm leading-relaxed mb-8">
          {t.noProgramsDescription}
        </p>
        <Link href={localePath("/contact", locale)} className="btn btn-secondary px-8">
          {t.talkToAdmissions}
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {programs.map((program) => (
        <ProgramCard key={program.slug} program={program} locale={locale} />
      ))}
    </div>
  );
}