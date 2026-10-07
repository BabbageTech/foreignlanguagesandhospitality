"use client";

import LanguageGrid from "@/components/languages/LanguageGrid";
import LanguageModal from "@/components/languages/LanguageModal";
import { useLocalizedCourses } from "@/components/languages/useLocalizedCourses";
import type { LanguageCourse } from "@/components/languages/types";
import { useState } from "react";

export default function LanguagesClient() {
  const courses = useLocalizedCourses();
  const [selected, setSelected] = useState<LanguageCourse | null>(null);

  return (
    <>
      <LanguageGrid courses={courses} onReadMore={setSelected} />
      {selected && (
        <LanguageModal course={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
