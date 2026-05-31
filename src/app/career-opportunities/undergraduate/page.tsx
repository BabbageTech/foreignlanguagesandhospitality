// src/app/career-opportunities/undergraduate/page.tsx
import SectionTitle from '@/components/common/SectionTitle';
import { Metadata } from 'next';
import Link from 'next/link';
// Added 'Languages' to the import list below
import { ArrowLeft, BookOpen, CheckCircle2, Globe, Landmark, Languages, School } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Undergraduate Studies in Germany | IIFLHM',
  description: 'Bachelor’s degree programs in Germany for Kenyan students – guidance, requirements and support.',
};

export default function UndergraduatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#0A192F] py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600 rounded-full blur-[150px] -mr-64 -mt-64" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Undergraduate <span className="text-yellow-400">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Access world-class Bachelor’s programs in Germany with low to no tuition fees.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/career-opportunities" className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all mb-12">
          <ArrowLeft size={18} /> Back to Career Opportunities
        </Link>

        <SectionTitle 
          title="Your Gateway to Global Education" 
          subtitle="IIFLHM provides the bridge for Kenyan high school graduates to enter prestigious German public universities." 
        />

        {/* Admission Pathways */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="group p-10 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:border-yellow-400 transition-all shadow-sm">
            <School className="text-red-600 mb-6" size={40} />
            <h3 className="text-2xl font-black text-[#0A192F] mb-4">Direct Admission</h3>
            <p className="text-neutral-600 leading-relaxed mb-6">
              For students with exceptional KCSE grades. This pathway allows you to enter a degree program immediately upon arrival in Germany.
            </p>
            <div className="bg-white p-4 rounded-xl inline-flex items-center gap-2 text-sm font-bold text-[#0A192F]">
              <CheckCircle2 size={16} className="text-green-500" /> High KCSE Performance Required
            </div>
          </div>

          <div className="group p-10 rounded-[2.5rem] bg-[#0A192F] text-white transition-all shadow-xl">
            <Globe className="text-yellow-400 mb-6" size={40} />
            <h3 className="text-2xl font-black mb-4">Indirect Admission</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              The most common route. Includes a Foundation Year (Studienkolleg) to bridge the gap between the Kenyan and German education systems.
            </p>
            <div className="bg-white/10 p-4 rounded-xl inline-flex items-center gap-2 text-sm font-bold text-yellow-400 backdrop-blur-sm">
              <CheckCircle2 size={16} /> Foundation Year Included
            </div>
          </div>
        </div>

        {/* Requirements Matrix */}
        <div className="mb-24">
          <h2 className="text-3xl font-black text-[#0A192F] mb-12 text-center">Eligibility Matrix</h2>
          <div className="grid lg:grid-cols-3 gap-1">
            {/* Academic */}
            <div className="p-8 bg-neutral-50 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none border border-neutral-200">
              <BookOpen className="text-red-600 mb-4" />
              <h4 className="font-black text-[#0A192F] uppercase tracking-widest text-xs mb-4">Academic</h4>
              <p className="font-bold text-lg mb-2">KCSE Certificate</p>
              <p className="text-neutral-600 text-sm italic">Minimum Mean Grade of C+ recommended for the best university options.</p>
            </div>

            {/* Language */}
            <div className="p-8 bg-neutral-50 border-x border-neutral-200">
              <Languages className="text-red-600 mb-4" />
              <h4 className="font-black text-[#0A192F] uppercase tracking-widest text-xs mb-4">Language</h4>
              <div className="space-y-3">
                <p className="text-sm"><strong>English Taught:</strong> A1–A2 German</p>
                <p className="text-sm"><strong>German Taught:</strong> Minimum B1/B2 German</p>
              </div>
            </div>

            {/* Financial */}
            <div className="p-8 bg-neutral-50 rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none border border-neutral-200">
              <Landmark className="text-red-600 mb-4" />
              <h4 className="font-black text-[#0A192F] uppercase tracking-widest text-xs mb-4">Financial</h4>
              <p className="font-bold text-lg mb-1">€11,904 Blocked Account</p>
              <p className="text-neutral-600 text-sm italic">Government mandated living cost proof (approx. KES 1.65M).</p>
            </div>
          </div>
        </div>

        {/* Consultation Section */}
        <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-[3rem] p-12 lg:p-20 border border-neutral-200 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0A192F] mb-6">Ready to Take the Next Step?</h2>
              <p className="text-neutral-600 text-lg mb-8">
                University applications in Germany involve specific deadlines and strict documentation. 
                Our advisors handle the complexity so you can focus on your studies.
              </p>
              <ul className="space-y-4 mb-10">
                {['Course Selection Guidance', 'Visa Documentation Support', 'Language Preparation'].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-bold text-[#0A192F]">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-[10px]">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block bg-red-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-[#0A192F] transition-all shadow-xl shadow-red-600/20">
                Book Career Consultation
              </Link>
            </div>
            <div className="hidden lg:block relative">
              <div className="w-full h-80 bg-white rounded-[2rem] shadow-2xl border border-neutral-100 p-8 flex flex-col justify-center">
                 <p className="text-[#0A192F] font-black text-6xl opacity-10 absolute -top-4 -right-4">IIFLHM</p>
                 <blockquote className="text-xl italic text-neutral-500 font-light">
                   &quot;Education is the most powerful weapon which you can use to change the world.&quot;
                 </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}