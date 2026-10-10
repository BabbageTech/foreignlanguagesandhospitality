"use client";

import { Link } from "@/i18n/routing";
import type { LanguageCourse } from "@/components/languages/types";
import { Globe, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

type Props = {
  course: LanguageCourse;
  onClose: () => void;
};

export default function LanguageModal({ course, onClose }: Props) {
  const t = useTranslations("languages.ui");
  const tc = useTranslations("pages.commonCta");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={course.name}>
      <button type="button" className="absolute inset-0 bg-black/50" aria-label={t("close")} onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="text-2xl" aria-hidden>{course.flag}</span>
            <div>
              <h2 className="font-black text-primary text-lg leading-tight">{course.name}</h2>
              <p className="text-xs text-slate-500">{course.native} · {course.level}</p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="p-2 rounded-lg hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-secondary" aria-label={t("close")}>
            <X className="w-5 h-5 text-primary" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-2">{t("about")}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{course.about}</p>
          </div>

          <div className="p-5 bg-accent/10 border border-accent/25 rounded-2xl">
            <div className="flex items-start gap-3">
              <Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">{t("whyLearn")}</p>
                <p className="text-sm text-slate-700 leading-relaxed">{course.whyLearn}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-4">{t("levels")}</p>
            <div className="grid grid-cols-2 gap-3">
              {(course.levels ?? []).map(({ code, label, desc }) => (
                <div key={code} className="border border-slate-100 p-4 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[9px] font-black text-white bg-primary px-2 py-0.5 rounded">{code}</span>
                    <span className="text-xs font-black text-primary">{label}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-3">{t("achieve")}</p>
            <ul className="space-y-2">
              {(course.outcomes ?? []).map((o) => (
                <li key={o} className="text-sm text-slate-600 flex gap-2">
                  <span className="text-secondary font-black" aria-hidden>✓</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {course.exams?.length > 0 && (
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-3">{t("exams")}</p>
              <div className="flex flex-wrap gap-2">
                {course.exams.map((e) => (
                  <span key={e} className="text-xs font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{e}</span>
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-3">{t("careers")}</p>
            <div className="flex flex-wrap gap-2">
              {(course.careers ?? []).map((c) => (
                <span key={c} className="text-xs font-bold bg-primary/5 text-primary px-3 py-1 rounded-full">{c}</span>
              ))}
            </div>
          </div>

          {course.certification && (
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-2">{t("certificate")}</p>
              <p className="text-sm text-slate-600">{course.certification}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link href="/admissions" className="flex-1 text-center bg-primary text-white py-3.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-secondary transition-all">
              {tc("applyNow")}
            </Link>
            <Link href="/contact" className="flex-1 text-center border border-slate-200 text-primary py-3.5 rounded-xl font-black text-xs uppercase tracking-widest hover:border-secondary transition-all">
              {t("ask")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
