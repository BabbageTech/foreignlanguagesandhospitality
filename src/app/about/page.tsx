import { getLocalizedPageMetadata } from "@/lib/localized-page-metadata";
import CoreValues from '@/components/about/CoreValues';
import Facilities from '@/components/about/Facilities';
import FacultyGrid from '@/components/about/FacultyGrid';
import FounderBio from '@/components/about/FounderBio';
import MissionVision from '@/components/about/MissionVision';
import Image from 'next/image';
import Link from 'next/link';
import { headers } from 'next/headers';
import { defaultLocale, isLocale, localePath } from '@/i18n/config';
import { aboutCopy } from '@/i18n/about';


export default async function AboutPage() {
  const requestHeaders = await headers();
  const requestedLocale = requestHeaders.get("x-iiflhm-locale") || defaultLocale;
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;
  const copy = aboutCopy[locale];
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section - Height and Spacing Fix */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden bg-[#0A2540] pt-24 pb-32">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.jpg" 
            alt={copy.campusAlt}
            fill
            priority
            className="object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-[#0A2540]/40 z-10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="max-w-4xl">
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-6 block drop-shadow-md">
              {copy.heroEyebrow}
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.1] drop-shadow-xl">
              {copy.heroTitle} <br/> 
              <span className="text-secondary">{copy.heroHighlight}</span>
            </h1>
            
            <p className="text-white text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-medium drop-shadow-sm">
              {copy.heroBody}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <a 
                href="#founder" 
                className="w-full sm:w-auto bg-secondary text-[#0A2540] px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs shadow-2xl hover:bg-white transition-all text-center"
              >
                {copy.founderAction}
              </a>
              <Link 
                href={localePath("/admissions", locale)} 
                className="w-full sm:w-auto border-2 border-white text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#0A2540] transition-all text-center"
              >
                {copy.intakeAction}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision - Standardized Spacing (Reduced negative margin) */}
      <div className="relative z-30 -mt-20">
        <MissionVision locale={locale} />
      </div>

      <div className="py-12">
        <CoreValues locale={locale} />
      </div>

      <Facilities locale={locale} />
      
      <div id="founder" className="scroll-mt-24">
        <FounderBio locale={locale} />
      </div>

      <FacultyGrid locale={locale} />

      {/* 4. Final Institutional CTA */}
      <section className="bg-[#0A2540] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            {copy.closingTitle}
          </h2>
          <p className="text-secondary text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-12">
            {copy.closingSubtitle}
          </p>
          <Link 
            href={localePath("/admissions", locale)} 
            className="bg-accent text-[#0A2540] px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:scale-105 hover:bg-white transition-all shadow-xl inline-block"
          >
            {copy.closingAction}
          </Link>
        </div>
      </section>
    </div>
  );
}
export async function generateMetadata() {
  return getLocalizedPageMetadata("about", "/about", "/images/about-hero.jpg");
}
