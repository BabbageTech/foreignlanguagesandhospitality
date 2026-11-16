"use client";

import SectionTitle from "@/components/common/SectionTitle";
import Image from "next/image";
import Link from "next/link";

const languagePrograms = ["German Language (A1–B2)", "French(DELF Preparation)", "Spanish Courses", "Mandarin Chinese Training"];
const hospitalityPrograms = ["Craft Certificate in Catering and Accommodation", "Operational Safety", "Food Production Systems", "Customer Care Mastery"];
const tourismPrograms = ["Craft in Tour Guide & Travel Operations", "Destination Management", "Travel Agency Logistics", "Sustainable Eco-Tourism"];
const ictPrograms = ["Web Development & Design", "Artificial Intelligence", "Cybersecurity Essentials", "Networking"];

const LanguageIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8l6 6" /><path d="M4 14l6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path d="M22 22l-5-10-5 10" /><path d="M14 18h6" />
  </svg>
);

const HospitalityIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const CompassIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const ICTIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const CheckIcon = ({ colorClass }: { colorClass: string }) => (
  <svg viewBox="0 0 16 16" className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${colorClass}`} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8l3.5 3.5L13 4" />
  </svg>
);

interface ProgramCardProps {
  image: string;
  icon: React.ReactNode;
  category: string;
  title: string;
  description: string;
  programs: string[];
  href: string;
  accentColor: string; // e.g., "text-secondary"
  borderColor: string; // e.g., "bg-secondary" (Kept in props to maintain compatibility)
  hoverBtn: string;    // e.g., "hover:bg-secondary"
}

function ProgramCard({
  image, icon, category, title, description, programs, href, accentColor, hoverBtn
}: Omit<ProgramCardProps, 'borderColor'>) {
  return (
    <div className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col h-full font-sans">
      {/* 1. Sharp Image Header */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Category Overlay */}
        <div className="absolute bottom-4 left-6 z-20">
          <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] drop-shadow-md">
            {category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* 2. Professional White Content Area */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg bg-slate-50 ${accentColor} border border-slate-100`}>
            {icon}
          </div>
          <h3 className="text-xl font-black text-[#0A2540] leading-tight group-hover:text-secondary transition-colors">
            {title}
          </h3>
        </div>

        <p className="text-[13px] text-slate-500 leading-relaxed font-medium mb-6">
          {description}
        </p>

        {/* Structured Features List */}
        <div className="space-y-3.5 mb-8 flex-1">
          {programs.map((program) => (
            <div key={program} className="flex items-start gap-3 group/item">
              <CheckIcon colorClass={accentColor} />
              <span className="text-[13px] font-bold text-slate-700 leading-snug group-hover/item:text-primary transition-colors">
                {program}
              </span>
            </div>
          ))}
        </div>

        {/* Clean, Modern Action Button */}
        <Link
          href={href}
          className={`flex items-center justify-between w-full p-4 rounded-xl border border-slate-100 bg-slate-50 hover:text-white ${hoverBtn} transition-all duration-300 group/btn`}
        >
          <span className="text-xs font-black uppercase tracking-widest">Explore Courses</span>
          <div className="p-1 rounded-md bg-white shadow-sm group-hover/btn:bg-white/20 transition-colors">
             <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function ProgramsHighlight() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Our Professional Programs"
          subtitle="Explore our industry-leading courses designed to prepare you for global opportunities."
        />

        {/* Grid configuration updated to support 4 columns on large breakpoints */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <ProgramCard
            image="/images/languages-cover.jpg"
            icon={<LanguageIcon />}
            category="Communication"
            title="School of Languages"
            description="Achieve fluency in global languages to unlock international career pathways."
            programs={languagePrograms}
            href="/academics/languages"
            accentColor="text-primary"
            borderColor="bg-primary"
            hoverBtn="hover:bg-primary"
          />

          <ProgramCard
            image="/images/hospitality-cover.jpg"
            icon={<HospitalityIcon />}
            category="Services"
            title="Hospitality Management"
            description="Master premium catering techniques and core accommodation operations."
            programs={hospitalityPrograms}
            href="/academics/hospitality-management"
            accentColor="text-secondary"
            borderColor="bg-secondary"
            hoverBtn="hover:bg-secondary"
          />

          <ProgramCard
            image="/images/hospitality/tourism.jpg"
            icon={<CompassIcon />}
            category="Expeditions"
            title="Travel & Tourism"
            description="Acquire expert field skills in professional tour guiding and travel operations."
            programs={tourismPrograms}
            href="/academics/travel-tourism"
            accentColor="text-emerald-600"
            borderColor="bg-emerald-600"
            hoverBtn="hover:bg-emerald-600"
          />

          <ProgramCard
            image="/images/ict-cover.jpg"
            icon={<ICTIcon />}
            category="Technology"
            title="Computing & ICT"
            description="Develop high-demand technical skills for the digital transformation era."
            programs={ictPrograms}
            href="/academics/ict"
            accentColor="text-accent"
            borderColor="bg-accent"
            hoverBtn="hover:bg-accent"
          />
        </div>
      </div>
    </section>
  );
}