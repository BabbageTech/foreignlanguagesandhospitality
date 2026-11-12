// src/app/career-opportunities/apprenticeship/page.tsx
import SectionTitle from '@/components/common/SectionTitle';
import { ArrowLeft, CheckCircle, GraduationCap, HeartPulse, Wallet } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Healthcare Apprenticeships in Germany | IIFLHM',
  description: 'Nursing & Medical Radiology Ausbildung programs in Germany for Kenyan students. B2 German required.',
};

export default function ApprenticeshipPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="relative bg-[#0A192F] overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-yellow-400 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Ausbildung in Germany</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Apprenticeships</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light">
            Nursing & Medical Radiology programs specifically designed for Kenyan students.
          </p>
          
          <div className="mt-10 inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-2 rounded-full text-white/90 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Next Intake Applications Opening Soon
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/career-opportunities" className="inline-flex items-center gap-2 text-[#0A192F] font-bold hover:text-red-600 transition-colors mb-12">
          <ArrowLeft size={18} /> Back to Careers
        </Link>

        <SectionTitle 
          title="Your Pathway to Global Healthcare" 
          subtitle="A unique opportunity for Kenyan high school graduates to train and work in Europe's most advanced medical system." 
        />

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: <Wallet className="text-yellow-500" />, title: "Earn While You Learn", desc: "Receive a monthly stipend (salary) throughout your 3-year training period." },
            { icon: <GraduationCap className="text-red-500" />, title: "Dual Education", desc: "Combine professional hospital work with theoretical classroom instruction." },
            { icon: <HeartPulse className="text-blue-500" />, title: "Guaranteed Career", desc: "95% of graduates transition directly into permanent roles in German hospitals." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#0A192F] mb-3">{item.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-[2.5rem] border border-neutral-100 overflow-hidden shadow-sm mb-24">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-16 bg-[#0A192F] text-white">
              <h2 className="text-3xl font-black mb-8">Academic Eligibility</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <CheckCircle className="text-yellow-400 shrink-0" />
                  <div>
                    <p className="font-bold">B2 German Certificate</p>
                    <p className="text-white/60 text-sm">Must be issued within the last 12 months.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="text-yellow-400 shrink-0" />
                  <div>
                    <p className="font-bold">KCSE Mean Grade C</p>
                    <p className="text-white/60 text-sm">Strong performance in Sciences is highly preferred.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-10 lg:p-16">
              <h2 className="text-3xl font-black text-[#0A192F] mb-8">Personal Traits</h2>
              <div className="grid gap-4">
                {["Age 18-29 years", "Passion for Patient Care", "Cultural Adaptability", "Strong Work Ethic"].map((trait) => (
                  <div key={trait} className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl font-semibold text-[#0A192F]">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    {trait}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-red-600 to-red-800 rounded-[3rem] p-12 lg:p-20 text-white shadow-2xl shadow-red-900/20">
          <h2 className="text-3xl lg:text-4xl font-black mb-6">Ready to Start Your Journey?</h2>
          <p className="text-white/80 mb-10 max-w-2xl mx-auto">Join IIFLHM for intensive German language training and interview preparation.</p>
          <Link href="/contact" className="inline-block bg-white text-red-600 px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-[#0A192F] transition-all">
            Get Notified for Next Intake
          </Link>
        </div>
      </div>
    </div>
  );
}