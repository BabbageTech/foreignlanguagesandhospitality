import EmpoweringSection from '@/components/home/EmpoweringSection';
import FAQ from '@/components/home/FAQ';
import FinalCTA from '@/components/home/FinalCTA';
import Hero from '@/components/home/Hero';
import IntakeBanner from '@/components/home/IntakeBanner';
import ProgramsHighlight from '@/components/home/ProgramsHighlight';
import Testimonials from '@/components/home/Testimonials';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'International Institute of Foreign Languages and Hospitality Management | Narok, Kenya',
  description: 'World-class training in German Language, Hospitality Management & Nursing Career Preparation.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Hero />
      <IntakeBanner />
      <EmpoweringSection />
      <ProgramsHighlight />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}