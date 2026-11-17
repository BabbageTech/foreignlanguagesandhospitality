import { ArrowRight, Briefcase, CheckCircle2, Compass, Globe, GraduationCap, MessageSquare, Search } from "lucide-react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { defaultLocale, isLocale, localePath, type Locale } from "@/i18n/config";
import { getCareersCopy } from "@/i18n/careers";
import { getLocalizedAlternates } from "@/lib/localized-page-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const raw = h.get("x-iiflhm-locale") || defaultLocale;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const c = getCareersCopy(locale);
  return { title: c.title as string, description: c.description as string, alternates: getLocalizedAlternates("/career-opportunities", locale), openGraph: { title: c.title as string, description: c.description as string, type: "website" } };
}

export default async function CareerOpportunitiesPage() {
  const h = await headers();
  const raw = h.get("x-iiflhm-locale") || defaultLocale;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const c = getCareersCopy(locale);
  const pathways = [
    { number: "01", title: c.apprenticeship, subtitle: c.ausbildung, desc: c.apprenticeshipDesc, features: c.apprenticeshipFeatures, href: localePath("/career-opportunities/apprenticeship", locale), accent: "bg-secondary", icon: <Briefcase size={28} /> },
    { number: "02", title: c.undergraduate, subtitle: c.bachelor, desc: c.undergraduateDesc, features: c.undergraduateFeatures, href: localePath("/career-opportunities/undergraduate", locale), accent: "bg-primary", icon: <GraduationCap size={28} /> },
    { number: "03", title: c.masters, subtitle: c.postgraduate, desc: c.mastersDesc, features: c.mastersFeatures, href: localePath("/career-opportunities/masters", locale), accent: "bg-brand-charcoal", icon: <Compass size={28} /> },
  ];
  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="relative min-h-[650px] h-[85vh] flex items-center overflow-hidden">
        <Image src="/images/career-hero.jpg" alt={c.imageAlt as string} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
          <div className="max-w-3xl drop-shadow-2xl">
            <div className="inline-flex items-center gap-3 mb-8 bg-accent px-4 py-2 rounded-full"><span className="w-2 h-2 rounded-full bg-secondary" /><span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{c.eyebrow}</span></div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">{c.heroLead} <span className="text-accent">{c.heroSub}</span></h1>
            <p className="text-lg md:text-xl text-white max-w-xl leading-relaxed mb-10 font-medium">{c.intro}</p>
            <div className="flex flex-col sm:flex-row gap-5"><Link href="#paths" className="bg-secondary text-white px-10 py-4 rounded-lg font-bold uppercase text-xs tracking-widest hover:scale-105 transition-all flex items-center gap-2 shadow-lg">{c.explore} <ArrowRight size={16} /></Link><Link href={localePath("/contact", locale)} className="bg-white/90 text-primary px-10 py-4 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-white transition-all shadow-lg">{c.contact}</Link></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white"><div className="max-w-7xl mx-auto px-6"><div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8"><div><h4 className="text-secondary font-bold uppercase tracking-[0.3em] text-[11px] mb-4">{c.empowerment}</h4><h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight leading-tight">{c.journey}</h2></div><div className="space-y-6 text-brand-charcoal text-lg font-medium opacity-80 leading-relaxed"><p>{c.question}</p><p>{c.hub}</p></div></div>
        <div className="bg-brand-gray p-8 md:p-12 rounded-2xl border border-slate-100 shadow-inner"><div className="flex items-center gap-4 mb-8"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white"><Globe size={24} /></div><h3 className="text-xl font-bold text-primary">{c.whyGermany}</h3></div><ul className="space-y-5">{(c.germany as string[]).map((item) => <li key={item} className="flex items-start gap-3 text-brand-charcoal font-bold text-sm"><CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />{item}</li>)}</ul></div>
      </div></div></section>

      <section id="paths" className="py-24 bg-brand-gray"><div className="max-w-7xl mx-auto px-6"><div className="text-center mb-16"><h4 className="text-secondary font-bold uppercase tracking-[0.3em] text-[11px] mb-4">{c.offer}</h4><h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight">{c.pathways}</h2></div><div className="grid lg:grid-cols-3 gap-8">{pathways.map((path) => <article key={path.number} className="flex flex-col group h-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500"><div className={`relative h-40 w-full ${path.accent} flex items-center justify-center text-white`}>{path.icon}</div><div className="p-8 flex flex-col flex-grow"><h4 className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-2">{path.subtitle}</h4><h3 className="text-2xl font-bold text-primary mb-4">{path.title}</h3><p className="text-brand-charcoal text-sm mb-8 leading-relaxed font-medium opacity-70">{path.desc}</p><ul className="space-y-3 mb-8 mt-auto">{(path.features as string[]).map((feature) => <li key={feature} className="flex items-start gap-2 text-xs font-bold text-primary"><CheckCircle2 size={14} className="text-secondary shrink-0" />{feature}</li>)}</ul><Link href={path.href} className="flex items-center justify-between w-full p-5 border border-slate-100 rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all group/btn">{c.details}<ArrowRight size={14} /></Link></div></article>)}</div></div></section>

      <section className="py-24 bg-white"><div className="max-w-7xl mx-auto px-6"><div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch border border-white/10"><div className="lg:w-1/2 relative min-h-[350px]"><Image src="/images/career-support.jpg" alt={c.imageAlt as string} fill className="object-cover" /></div><div className="lg:w-1/2 p-12 md:p-20 text-white flex flex-col justify-center"><div className="inline-flex p-3 bg-accent/20 rounded-lg mb-6 w-fit"><Search className="text-accent" size={24} /></div><h3 className="text-3xl font-black mb-6 tracking-tight">{c.jobMarket}</h3><p className="text-white/70 text-lg mb-10 leading-relaxed font-medium">{c.jobText}</p><div className="grid sm:grid-cols-2 gap-6">{(c.support as string[]).map((item) => <div key={item} className="flex items-center gap-3"><CheckCircle2 className="text-accent" size={18} /><span className="text-xs font-black tracking-widest uppercase">{item}</span></div>)}</div></div></div></div></section>

      <section className="py-32 bg-brand-gray relative overflow-hidden text-center"><div className="max-w-4xl mx-auto px-6 relative z-10"><h2 className="text-4xl md:text-6xl font-black text-primary mb-8 tracking-tight leading-tight">{c.ready}</h2><p className="text-xl text-brand-charcoal font-medium opacity-70 mb-12 max-w-2xl mx-auto">{c.ctaText}</p><div className="flex flex-col sm:flex-row items-center justify-center gap-6"><Link href={localePath("/contact", locale)} className="bg-secondary text-white px-10 py-5 rounded-xl font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:scale-105 transition-all flex items-center gap-3">{c.schedule}<ArrowRight size={18} /></Link><div className="flex items-center gap-3 text-primary font-bold"><MessageSquare className="text-secondary" /><span>{c.expert}</span></div></div><p className="mt-16 text-[10px] font-black uppercase tracking-[0.4em] text-primary/30 italic">{c.mission}</p></div></section>
    </div>
  );
}
