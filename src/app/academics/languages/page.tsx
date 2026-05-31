"use client";

import { useState } from "react";

import CategoryFilter from "@/components/languages/CategoryFilter";
import FeaturedLanguage from "@/components/languages/FeaturedLanguage";
import LanguageGrid from "@/components/languages/LanguageGrid";
import LanguageHero from "@/components/languages/LanguageHero";
import LanguageModal from "@/components/languages/LanguageModal";

import { languageCourses } from "@/components/languages/Language-data";
import { LanguageCourse } from "@/components/languages/types";

export default function LanguageCoursesPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | "European" | "Asian" | "African" | "Middle Eastern">("All");
  const [selectedCourse, setSelectedCourse] = useState<LanguageCourse | null>(null);

  const filteredCourses = activeCategory === "All"
    ? languageCourses
    : languageCourses.filter((c) => c.category === activeCategory);

  const featuredCourse = languageCourses.find((c) => c.featured);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <LanguageHero />

      {featuredCourse && (
        <FeaturedLanguage featured={featuredCourse} onView={setSelectedCourse} />
      )}

      <CategoryFilter 
        activeCategory={activeCategory} 
        onChange={setActiveCategory} 
      />

      <LanguageGrid 
        courses={filteredCourses} 
        onReadMore={setSelectedCourse} 
      />

      {selectedCourse && (
        <LanguageModal 
          course={selectedCourse} 
          onClose={() => setSelectedCourse(null)} 
        />
      )}
    </div>
  );
}