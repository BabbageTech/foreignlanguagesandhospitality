"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import CategoryFilter from "@/components/languages/CategoryFilter";
import FeaturedLanguage from "@/components/languages/FeaturedLanguage";
import LanguageGrid from "@/components/languages/LanguageGrid";
import LanguageHero from "@/components/languages/LanguageHero";
import LanguageModal from "@/components/languages/LanguageModal";
import { languageCourses } from "@/components/languages/Language-data";
import type { Category, LanguageCourse } from "@/components/languages/types";

export default function LanguageCoursesClient({ locale }: { locale: Locale }) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedCourse, setSelectedCourse] = useState<LanguageCourse | null>(null);
  const filteredCourses = activeCategory === "All" ? languageCourses : languageCourses.filter((course) => course.category === activeCategory);
  const featuredCourse = languageCourses.find((course) => course.featured);

  return (
    <div className="min-h-screen bg-[#F8FAFC]" lang={locale}>
      <LanguageHero locale={locale} />
      {featuredCourse && <FeaturedLanguage featured={featuredCourse} onView={setSelectedCourse} locale={locale} />}
      <CategoryFilter activeCategory={activeCategory} onChange={setActiveCategory} locale={locale} />
      <LanguageGrid courses={filteredCourses} onReadMore={setSelectedCourse} locale={locale} />
      {selectedCourse && <LanguageModal course={selectedCourse} onClose={() => setSelectedCourse(null)} locale={locale} />}
    </div>
  );
}
