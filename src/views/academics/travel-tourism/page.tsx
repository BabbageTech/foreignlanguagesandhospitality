"use client";

import {
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  Compass,
  FileText,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const modulesList = [
  "Fundamentals of Tour Guiding & Admin",
  "Travel Agency Operations & Ticketing",
  "Ecotourism & Sustainable Wildlife Studies",
  "Global Tourism Geography & Map Analysis",
  "Customer Care & Communication Dynamics",
  "Integrated Foreign Language Training"
];

export default function TravelTourismPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* ── HERO SECTION ── */}
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hospitality/tourism.jpg" 
            alt="Tourism Hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/95 via-[#0A2540]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#F2C12C]"></span>
              <span className="text-[#F2C12C] text-[10px] font-black uppercase tracking-[0.3em]">Global Expeditions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6">
              Travel & Tourism <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Management</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 font-medium leading-relaxed">
              Equipping students with the skills and knowledge required to work as professional tour guides and travel consultants within the dynamic global tourism industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/admissions">
                <button className="bg-[#E30613] text-white px-8 py-4 rounded-sm font-black text-[11px] uppercase tracking-widest hover:bg-white hover:text-[#0A2540] transition-all flex items-center gap-2">
                  Apply Now <ChevronRight size={16} />
                </button>
              </Link>
              <button className="border border-white/30 text-white px-8 py-4 rounded-sm font-black text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
                Download Brochure <BookOpen size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSE KEY METRICS OVERVIEW ── */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white shadow-2xl rounded-xl border border-slate-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100 overflow-hidden">
          <div className="p-6 md:p-8 flex items-center gap-4">
            <div className="p-3 bg-slate-50 rounded-xl text-[#0A2540]"><GraduationCap size={24} /></div>
            <div>
              <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Qualification</span>
              <span className="text-sm font-black text-[#0A2540]">Craft Certificate</span>
            </div>
          </div>
          <div className="p-6 md:p-8 flex items-center gap-4">
            <div className="p-3 bg-slate-50 rounded-xl text-[#0A2540]"><Clock size={24} /></div>
            <div>
              <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Duration</span>
              <span className="text-sm font-black text-[#0A2540]">18 Months</span>
            </div>
          </div>
          <div className="p-6 md:p-8 flex items-center gap-4">
            <div className="p-3 bg-slate-50 rounded-xl text-[#0A2540]"><FileText size={24} /></div>
            <div>
              <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Exam Body</span>
              <span className="text-sm font-black text-[#0A2540]">KNEC</span>
            </div>
          </div>
          <div className="p-6 md:p-8 flex items-center gap-4">
            <div className="p-3 bg-slate-50 rounded-xl text-[#0A2540]"><Calendar size={24} /></div>
            <div>
              <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Requirement</span>
              <span className="text-sm font-black text-[#0A2540]">KCSE D+ & Above</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT BODY ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Detailed Course Description */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-[#E30613] text-[10px] font-black uppercase tracking-widest block mb-2">Featured Program</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tight">
                Craft Certificate in Tour Guiding and Travel Operations
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed font-medium">
              This advanced structural curriculum prepares students with deep grounding in travel agency mechanics, practical guiding operations, and comprehensive communication systems. To ensure top-tier readiness for international client interactions, students choose and study an integrated foreign language to confidently bridge communication gaps with global tourists.
            </p>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100/80 space-y-4">
              <h4 className="font-black text-[#0A2540] text-sm uppercase tracking-wide flex items-center gap-2">
                <Sparkles size={16} className="text-[#F2C12C]" /> Professional Qualifications Included
              </h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                As part of this track, students are meticulously prepared for the <strong>Bronze Level Tour Guide Certification</strong>. This industry-vetted benchmark validates practical guiding agility and ensures complete field readiness upon graduation.
              </p>
            </div>

            {/* Core Syllabus Modules */}
            <div>
              <h3 className="text-xl font-black text-[#0A2540] mb-6">Core Educational Pillars</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {modulesList.map((module, i) => (
                  <div key={i} className="p-5 border border-slate-100 hover:border-slate-200 rounded-xl flex items-start gap-4 bg-white transition-all">
                    <div className="w-2 h-2 rounded-full bg-[#E30613] mt-2 flex-shrink-0" />
                    <span className="text-xs font-bold text-slate-700 leading-snug">{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA Block */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 bg-slate-50 border border-slate-100 p-8 rounded-2xl">
            <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 shadow-sm">
              <Image 
                src="/images/hospitality/guide.jpg" 
                alt="Tour Guiding Training" 
                fill 
                className="object-cover" 
              />
            </div>
            
            <h4 className="font-black text-lg text-[#0A2540] mb-2 flex items-center gap-2">
              <Compass size={18} className="text-[#E30613]" /> Admissions Ongoing
            </h4>
            <p className="text-xs font-medium text-slate-500 leading-relaxed mb-6">
              Registration pipelines are open. Vetting frameworks prioritize profiles meeting the standard indicators set by the national examination council.
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-200/60">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-400">Tuition Fee:</span>
                <span className="text-[#0A2540]">KES 30,000 / Semester</span>
              </div>
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-400">Target Workspaces:</span>
                <span className="text-green-600">National Parks & Conservancies</span>
              </div>
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-400">Primary Certification:</span>
                <span className="text-blue-600">Bronze Level Qualification</span>
              </div>
            </div>

            <Link href="/admissions" className="mt-8 flex items-center justify-between w-full p-4 rounded-xl bg-[#0A2540] text-white hover:bg-[#E30613] transition-all group shadow-xl shadow-slate-900/10">
              <span className="text-xs font-black uppercase tracking-widest">Begin Registration Journey</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}