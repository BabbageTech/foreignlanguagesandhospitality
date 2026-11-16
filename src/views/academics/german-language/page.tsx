// src/app/academics/german-language/page.tsx
import SectionTitle from '@/components/common/SectionTitle';
import {
  ArrowRight,
  Award, // Removed CheckCircle from this list
  BookOpen,
  ClipboardCheck,
  Languages,
  UserCheck
} from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'German Language Program (A1–C2) | IIFLHM',
  description: 'Internationally recognized German language training and Goethe-Zertifikat examinations in Nairobi.',
};

const levels = [
  { id: 'A1', title: 'Goethe-Zertifikat A1', desc: 'Basic language use for beginners (Fit in Deutsch 1 or Start Deutsch 1).', target: 'Young People & Adults' },
  { id: 'A2', title: 'Goethe-Zertifikat A2', desc: 'Elementary language use and essential communication skills.', target: 'Young People & Adults' },
  { id: 'B1', title: 'Goethe-Zertifikat B1', desc: 'Independent language use for everyday life and travel.', target: 'Young People & Adults' },
  { id: 'B2', title: 'Goethe-Zertifikat B2', desc: 'Advanced independent language use (Required for many German jobs/universities).', target: 'Young People & Adults' },
  { id: 'C1', title: 'Goethe-Zertifikat C1', desc: 'Effective operational proficiency and complex language mastery.', target: 'Adults' },
  { id: 'C2', title: 'Goethe-Zertifikat C2', desc: 'Mastery of language at a near-native level.', target: 'Adults' },
];

export default function GermanLanguagePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#0A192F] text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/10 skew-x-12 transform translate-x-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tighter">
            German <span className="text-yellow-400">Language</span> Program
          </h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-2xl font-light leading-relaxed">
            From A1 beginners to C2 mastery, our program prepares you for international study, work, and life in Germany.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <SectionTitle 
              title="Global Proficiency Recognized Worldwide" 
              subtitle="Do you require evidence of your German language skills that is recognized all over the world? You've come to the right place." 
            />
            <p className="text-neutral-600 mb-8 leading-relaxed">
              We facilitate German exams for all levels of ability, ranging from A1 to C2. Our experienced instructors use practical, immersion-based learning methods to ensure you gain the confidence needed for international certification.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-[#0A192F] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-red-600 transition-all flex items-center gap-2 shadow-lg shadow-blue-900/20">
                Inquire About Exams <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="bg-neutral-50 p-10 rounded-[3rem] border border-neutral-100">
            <h3 className="text-2xl font-black text-[#0A192F] mb-6 flex items-center gap-3">
              <Languages className="text-red-600" /> Academic & Professional
            </h3>
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-neutral-200 hover:border-yellow-400 transition-all">
                <h4 className="font-bold text-lg text-primary">TestDaF</h4>
                <p className="text-sm text-neutral-500">The premier test for international students seeking university admission in Germany.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-neutral-200 hover:border-yellow-400 transition-all">
                <h4 className="font-bold text-lg text-primary">Goethe-Test PRO</h4>
                <p className="text-sm text-neutral-500">Tailored German certification for professional and business contexts.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Level Grid */}
        <div className="mb-32">
          <h2 className="text-3xl font-black text-[#0A192F] mb-12 text-center">Available Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {levels.map((level) => (
              <div key={level.id} className="p-8 border border-neutral-200 rounded-[2rem] hover:shadow-xl transition-all group bg-white">
                <span className="text-5xl font-black text-neutral-100 group-hover:text-yellow-400/20 transition-colors block mb-4">
                  {level.id}
                </span>
                <h3 className="text-xl font-black text-[#0A192F] mb-3">{level.title}</h3>
                <p className="text-neutral-600 text-sm mb-4 leading-relaxed">{level.desc}</p>
                <div className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full inline-block">
                  {level.target}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Examination Process */}
        <div className="bg-neutral-900 rounded-[4rem] p-12 lg:p-20 text-white mb-32">
          <h2 className="text-3xl lg:text-4xl font-black mb-16 text-center">Your Path to Certification</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <ClipboardCheck />, title: "Inquiry", desc: "Contact our advisors to discuss your level and preferred exam period." },
              { icon: <BookOpen />, title: "Preparation", desc: "Access mock tests and prep materials at our institute." },
              { icon: <UserCheck />, title: "Examination", desc: "Sit for your exam at the designated center with our full support." },
              { icon: <Award />, title: "Certification", desc: "Receive your internationally recognized certificate upon success." }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-yellow-400 mb-6 border border-white/10">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">0{idx + 1}. {step.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-[3rem] p-12 lg:p-24 text-white text-center shadow-2xl shadow-red-900/30">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">Ready to Start Your Journey?</h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
            Join our community of ambitious learners and future global leaders. Contact our academic advisors today to secure your spot.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact" className="bg-yellow-400 text-[#0A192F] px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-yellow-500/20">
              Speak to an Advisor
            </Link>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/20 transition-all">
              Inquire About Exams
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}