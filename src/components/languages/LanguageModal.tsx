"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Award, CheckCircle2, ChevronRight, Globe, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LanguageCourse } from './types';

interface Props {
  course: LanguageCourse;
  onClose: () => void;
}

export default function LanguageModal({ course, onClose }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl rounded-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero */}
          <div className="relative h-48 w-full rounded-t-3xl overflow-hidden">
            <Image 
              src={course.image} 
              alt={course.name} 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-[#0A2540]/80" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{course.flag}</span>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#F2C12C]">
                    {course.category} · {course.level} · {course.duration}
                  </p>
                  <h2 className="text-2xl font-black text-white">{course.name}</h2>
                  <p className="text-xs text-white/60 mt-0.5">{course.native}</p>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            {/* About */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E30613] mb-3">
                About This Language
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">{course.about}</p>
            </div>

            {/* Why Learn */}
            <div className="p-5 bg-[#F2C12C]/10 border border-[#F2C12C]/25 rounded-2xl">
              <div className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-[#D4A520] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#D4A520] mb-1">
                    Why Learn {course.name}?
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">{course.whyLearn}</p>
                </div>
              </div>
            </div>

            {/* Proficiency Levels */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E30613] mb-4">
                Proficiency Levels Offered
              </p>
              <div className="grid grid-cols-2 gap-3">
                {course.levels.map(({ code, label, desc }) => (
                  <div key={code} className="border border-slate-100 p-4 bg-slate-50 rounded-2xl">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[9px] font-black text-white bg-[#0A2540] px-2 py-0.5 rounded">
                        {code}
                      </span>
                      <span className="text-xs font-black text-[#0A2540]">{label}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E30613] mb-4">
                What You Will Achieve
              </p>
              <ul className="space-y-3">
                {course.outcomes.map((o, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-50 border border-green-100 flex items-center justify-center shrink-0 mt-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-sm text-slate-600 font-medium">{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exams */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E30613] mb-3">
                Official Examinations Supported
              </p>
              <div className="flex flex-wrap gap-2">
                {course.exams.map((e) => (
                  <span
                    key={e}
                    className="text-[10px] font-black text-[#0A2540] bg-slate-100 border border-slate-200 px-3 py-1.5 rounded"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>

            {/* Careers */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E30613] mb-3">
                Career Opportunities
              </p>
              <div className="grid grid-cols-2 gap-2">
                {course.careers.map((c) => (
                  <div
                    key={c}
                    className="flex items-center gap-2 p-3 border border-slate-100 bg-slate-50 rounded-xl"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#E30613] shrink-0" />
                    <span className="text-xs font-bold text-[#0A2540]">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification */}
            <div className="flex items-start gap-4 p-5 bg-[#F2C12C]/10 border border-[#F2C12C]/25 rounded-2xl">
              <Award className="w-5 h-5 text-[#D4A520] shrink-0 mt-0.5" />
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-[#D4A520] mb-1">
                  Certificate Awarded
                </p>
                <p className="text-sm font-bold text-[#0A2540]">{course.certification}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                href={`/admissions?course=${encodeURIComponent(course.name)}`}
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#E30613] text-white font-black text-[10px] uppercase tracking-widest hover:bg-[#B8040F] transition-colors shadow-lg rounded-2xl"
              >
                Enroll Now <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="flex-1 flex items-center justify-center gap-2 py-4 border border-[#0A2540] text-[#0A2540] font-black text-[10px] uppercase tracking-widest hover:bg-[#0A2540] hover:text-white transition-all rounded-2xl"
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}