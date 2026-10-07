"use client";

import { languageCourseMeta } from "@/components/languages/Language-data";
import type { LanguageCourse } from "@/components/languages/types";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

type CourseMessages = {
  name: string;
  about: string;
  whyLearn: string;
  outcomes: string[];
  levels: { code: string; label: string; desc: string }[];
  careers: string[];
  exams: string[];
  certification: string;
  duration: string;
  levelRange: string;
};

export function useLocalizedCourses(): LanguageCourse[] {
  const t = useTranslations("languages");

  return useMemo(() => {
    return languageCourseMeta.map((meta) => {
      const c = t.raw(`courses.${meta.id}`) as CourseMessages;
      return {
        id: meta.id,
        name: c?.name ?? meta.id,
        native: meta.native,
        flag: meta.flag,
        category: meta.category,
        level: c?.levelRange ?? "",
        duration: c?.duration ?? "",
        popular: meta.popular,
        featured: meta.featured,
        image: meta.image,
        about: c?.about ?? "",
        whyLearn: c?.whyLearn ?? "",
        outcomes: c?.outcomes ?? [],
        levels: c?.levels ?? [],
        careers: c?.careers ?? [],
        exams: c?.exams ?? [],
        certification: c?.certification ?? "",
      };
    });
  }, [t]);
}
