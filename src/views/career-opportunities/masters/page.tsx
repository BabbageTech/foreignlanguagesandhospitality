// src/app/career-opportunities/masters/page.tsx
import SectionTitle from '@/components/common/SectionTitle';
import { ArrowLeft, FileText, Landmark, Languages } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Master’s Degree Programs in Germany | IIFLHM',
  description: 'Postgraduate studies in Germany – requirements, APS certificate, and application guidance for Kenyan students.',
};

export default function MastersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#0A192F] text-white py-24 border-b-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-4">Postgraduate</h1>
          <p className="text-2xl text-yellow-400 font-light tracking-wide italic">Master&apos;s Degrees in Germany</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <Link href="/career-opportunities" className="inline-flex items-center gap-2 text-red-600 font-bold mb-10">
          <ArrowLeft size={18} /> Back to Careers
        </Link>

        <SectionTitle title="Advance Your Professional Expertise" />

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Docs Card */}
          <div className="lg:col-span-2 bg-neutral-50 p-10 rounded-[2rem] border border-neutral-100">
            <h3 className="text-2xl font-black text-[#0A192F] mb-8 flex items-center gap-3">
              <FileText className="text-red-600" /> Essential Documents
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "Valid Passport",
                "Degree Certificate & Transcripts",
                "CV (Europass Format)",
                "Letter of Motivation",
                "2 Recommendation Letters",
                "APS Certificate (Mandatory)",
                "Language Proficiency Proof"
              ].map((doc) => (
                <div key={doc} className="flex items-center gap-3 border-b border-neutral-200 py-3">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                  <span className="font-medium text-neutral-700">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Card */}
          <div className="bg-[#0A192F] p-10 rounded-[2rem] text-white">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-yellow-400">
              <Languages /> Proficiency
            </h3>
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50 mb-2">English Programs</p>
                <p className="text-lg font-bold">IELTS 6.5+ / TOEFL 80+</p>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50 mb-2">German Programs</p>
                <p className="text-lg font-bold">TestDaF 4 / Goethe C1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Finance Section */}
        <div className="relative overflow-hidden bg-neutral-900 rounded-[3rem] p-10 lg:p-16 text-white mb-20">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Landmark size={200} />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black mb-6">Visa Financial Requirements</h2>
            <p className="text-white/70 text-lg mb-8">To secure a German Student Visa, the government requires proof of financial stability via a Blocked Account.</p>
            <div className="inline-block bg-yellow-400 text-[#0A192F] px-8 py-6 rounded-2xl">
              <p className="text-sm uppercase font-black tracking-tighter mb-1">Blocked Account Amount (2025)</p>
              <p className="text-4xl font-black">€11,904 <span className="text-xl opacity-60">/ Year</span></p>
              <p className="text-sm mt-2 font-bold italic">Approx. KES 1,650,000</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-block bg-red-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#0A192F] transition-all shadow-xl shadow-red-600/20">
            Book a Master&apos;s Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}