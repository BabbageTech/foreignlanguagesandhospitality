"use client";

import {
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  FileText,
  GraduationCap,
  Sparkles,
  Utensils
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const modulesList = [
  "Food Production & Kitchen Organization",
  "Food & Beverage Service Operations",
  "Housekeeping & Laundry Techniques",
  "Front Office Systems & Customer Care",
  "Integrated Foreign Language Training",
  "Health, Safety & Hospitality Hygiene"
];

export default function HospitalityPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* ── HERO SECTION ── */}
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hospitality/hero-bg.jpg" 
            alt="Hospitality Hero"
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
              <span className="text-[#F2C12C] text-[10px] font-black uppercase tracking-[0.3em]">Excellence in Service</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6">
              World-Class <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Hospitality Training</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 font-medium leading-relaxed">
              Providing comprehensive operational training in hospitality systems, preparing students for strategic roles across hotels, lodges, and premium service industries.
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
                Craft Certificate in Catering and Accommodation
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed font-medium">
              This technical program delivers rigorous training across fundamental hospitality operations. To enhance professional versatility in frontline management, students select a dedicated foreign language to elevate customer interaction pathways and achieve frictionless high-end service delivery for international client bases.
            </p>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100/80 space-y-4">
              <h4 className="font-black text-[#0A2540] text-sm uppercase tracking-wide flex items-center gap-2">
                <Sparkles size={16} className="text-[#F2C12C]" /> Integrated Airline & Travel Training
              </h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                To expand employment flexibility into modern transit networks, this curriculum integrates specialized <strong>IATA (International Air Transport Association) short courses</strong>—positioning graduates for highly competitive vacancies in travel management, airline logistics, and international ticketing frameworks.
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

          {/* Sidebar CTA & Overview Block */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 bg-slate-50 border border-slate-100 p-8 rounded-2xl">
            <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 shadow-sm">
              <Image 
                src="/images/hospitality/chef.jpg" 
                alt="Kitchen Training" 
                fill 
                className="object-cover" 
              />
            </div>
            
            <h4 className="font-black text-lg text-[#0A2540] mb-2 flex items-center gap-2">
              <Utensils size={18} className="text-[#E30613]" /> Admissions Ongoing
            </h4>
            <p className="text-xs font-medium text-slate-500 leading-relaxed mb-6">
              Applications are vetted strictly based on the technical eligibility indices outlined by the national examination body.
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-200/60">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-400">Tuition Fee:</span>
                <span className="text-[#0A2540]">KES 30,000 / Semester</span>
              </div>
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-400">Special Integration:</span>
                <span className="text-blue-600">IATA Short Courses</span>
              </div>
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-400">Placement Target:</span>
                <span className="text-green-600">Hotels, Lodges & Restaurants</span>
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