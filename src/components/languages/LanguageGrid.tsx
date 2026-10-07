"use client";
import { useTranslations } from "next-intl";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "@/i18n/routing";
import { LanguageCourse } from './types';

interface Props {
  courses: LanguageCourse[];
  onReadMore: (course: LanguageCourse) => void;
}

export default function LanguageGrid({ courses, onReadMore }: Props) {
  const t = useTranslations("languages.ui");
  return (
    <section id="courses" className="py-16 max-w-7xl mx-auto px-6">
      <div className="mb-8">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E30613] mb-1">
          {t("coursesAvailable", { count: courses.length })}
        </p>
        <h2 className="text-2xl font-black text-[#0A2540]">
          {t("allCourses")}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {courses.map((course) => (
            <motion.div
              key={course.id ?? course.name}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="group bg-white border border-slate-200/70 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col rounded-3xl"
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0A2540]/50" />

                {/* Flag + Popular Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-xl">{course.flag}</span>
                  {course.popular && (
                    <span className="text-[9px] font-black uppercase tracking-widest bg-[#E30613] text-white px-2.5 py-1 rounded">
                      Popular
                    </span>
                  )}
                </div>

                {/* Level Badge */}
                <div className="absolute bottom-3 right-3">
                  <span className="text-[9px] font-black text-white border border-white/30 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded">
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="font-black text-[#0A2540] text-base leading-tight">{course.name}</h3>
                  <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                    {course.native} · {course.category}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="font-medium">{course.duration}</span>
                </div>

                {/* Career Sneak Peek */}
                <div className="flex flex-wrap gap-1 mt-1">
                  {course.careers.slice(0, 2).map((c) => (
                    <span
                      key={c}
                      className="text-[9px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded"
                    >
                      {c}
                    </span>
                  ))}
                  {course.careers.length > 2 && (
                    <span className="text-[9px] text-slate-400 px-1 py-0.5">
                      +{course.careers.length - 2} more
                    </span>
                  )}
                </div>

                <div className="h-px bg-slate-100 mt-auto" />

                <div className="flex items-center justify-between pt-1">
                  <Link
                    href={`/admissions?course=${encodeURIComponent(course.name)}`}
                    className="text-[9px] font-black uppercase tracking-widest text-[#0A2540] hover:text-[#E30613] transition-colors duration-200"
                  >
                    Enroll
                  </Link>
                  <button
                    onClick={() => onReadMore(course)}
                    className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-[#E30613] hover:gap-2 transition-all duration-200"
                  >
                    Read More <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}