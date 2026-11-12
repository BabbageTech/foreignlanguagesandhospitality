"use client";

import { languageCourseMeta } from "@/components/languages/Language-data";
import { languageCourses } from "@/components/languages/Language-data";
import type { LanguageCourse } from "@/components/languages/types";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

/**
 * Returns language courses with localized name/about/whyLearn when message keys exist.
 * Falls back to English data from Language-data.ts.
 */
export function useLocalizedCourses(): LanguageCourse[] {
  const t = useTranslations("courses");

  return useMemo(() => {
    return languageCourses.map((course, index) => {
      const meta = languageCourseMeta[index];
      if (!meta) return course;
      try {
        const name = t(`${meta.id}.name`);
        const about = t(`${meta.id}.about`);
        const whyLearn = t(`${meta.id}.whyLearn`);
        return {
          ...course,
          name: name || course.name,
          about: about || course.about,
          whyLearn: whyLearn || course.whyLearn,
        };
      } catch {
        return course;
      }
    });
  }, [t]);
}
