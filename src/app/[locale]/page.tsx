import EmpoweringSection from '@/components/home/EmpoweringSection';
import FAQ from '@/components/home/FAQ';
import FinalCTA from '@/components/home/FinalCTA';
import Hero from '@/components/home/Hero';
import IntakeBanner from '@/components/home/IntakeBanner';
import ProgramsHighlight from '@/components/home/ProgramsHighlight';
import Testimonials from '@/components/home/Testimonials';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import { setRequestLocale } from 'next-intl/server';

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Hero />
      <IntakeBanner />
      <EmpoweringSection />
      <ProgramsHighlight />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
