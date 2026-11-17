import { getLocalizedPageMetadata } from "@/lib/localized-page-metadata";
import { headers } from "next/headers";
import { defaultLocale, isLocale } from "@/i18n/config";
import EmpoweringSection from '@/components/home/EmpoweringSection';
import FAQ from '@/components/home/FAQ';
import FinalCTA from '@/components/home/FinalCTA';
import Hero from '@/components/home/Hero';
import IntakeBanner from '@/components/home/IntakeBanner';
import ProgramsHighlight from '@/components/home/ProgramsHighlight';
import Testimonials from '@/components/home/Testimonials';
import WhyChooseUs from '@/components/home/WhyChooseUs';


export default async function HomePage() {
  const requestHeaders = await headers();
  const requestedLocale = requestHeaders.get("x-iiflhm-locale") || defaultLocale;
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Hero locale={locale} />
      <IntakeBanner locale={locale} />
      <EmpoweringSection locale={locale} />
      <ProgramsHighlight locale={locale} />
      <WhyChooseUs locale={locale} />
      <Testimonials locale={locale} />
      <FAQ locale={locale} />
      <FinalCTA locale={locale} />
    </div>
  );
}
export async function generateMetadata() {
  return getLocalizedPageMetadata("home", "/", "/images/hero-bg.jpg");
}
