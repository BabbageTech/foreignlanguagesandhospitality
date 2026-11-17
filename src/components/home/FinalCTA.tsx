import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import { getHomeCopy } from "@/i18n/home";

export default function FinalCTA({ locale }: { locale: Locale }) {
  const content = getHomeCopy(locale);
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0A2540] py-24 text-center text-white md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-40 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-accent/5 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <span className="mb-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#F2C12C]">
          {content.ctaEyebrow}
        </span>
        <h2 className="mb-8 text-4xl font-black leading-tight tracking-tight md:text-6xl">
          {content.ctaTitle}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg font-medium leading-relaxed text-white/75 md:text-xl">
          {content.ctaBody}
        </p>
        <div className="flex flex-col justify-center gap-4 px-4 sm:flex-row">
          <Link href={localePath("/admissions", locale)} className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#E30613] px-10 py-4 text-xs font-black uppercase tracking-wider text-white shadow-lg transition-colors hover:bg-[#B8040F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C12C]">
            {content.apply} <span aria-hidden="true">→</span>
          </Link>
          <Link href={localePath("/contact", locale)} className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-10 py-4 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#0A2540] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C12C]">
            {content.enquire}
          </Link>
        </div>
      </div>
    </section>
  );
}
