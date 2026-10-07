"use client";

import type { Category } from "./types";

export type LanguageCourseMeta = {
  id: string;
  native: string;
  flag: string;
  category: Category;
  image: string;
  popular?: boolean;
  featured?: boolean;
};

export const languageCourseMeta: LanguageCourseMeta[] = [
  {
    "id": "german",
    "native": "Deutsch",
    "flag": "\ud83c\udde9\ud83c\uddea",
    "category": "European",
    "image": "/images/languages/german.jpg",
    "popular": true,
    "featured": true
  },
  {
    "id": "english",
    "native": "English",
    "flag": "\ud83c\uddec\ud83c\udde7",
    "category": "European",
    "image": "/images/languages/english.jpg",
    "popular": true,
    "featured": false
  },
  {
    "id": "french",
    "native": "Fran\u00e7ais",
    "flag": "\ud83c\uddeb\ud83c\uddf7",
    "category": "European",
    "image": "/images/languages/french.jpg",
    "popular": false,
    "featured": false
  },
  {
    "id": "spanish",
    "native": "Espa\u00f1ol",
    "flag": "\ud83c\uddea\ud83c\uddf8",
    "category": "European",
    "image": "/images/languages/spanish.jpg",
    "popular": false,
    "featured": false
  },
  {
    "id": "mandarin",
    "native": "\u666e\u901a\u8bdd",
    "flag": "\ud83c\udde8\ud83c\uddf3",
    "category": "Asian",
    "image": "/images/languages/mandarin.jpg",
    "popular": false,
    "featured": false
  },
  {
    "id": "arabic",
    "native": "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
    "flag": "\ud83c\uddf8\ud83c\udde6",
    "category": "Middle Eastern",
    "image": "/images/languages/arabic.jpg",
    "popular": false,
    "featured": false
  },
  {
    "id": "kiswahili",
    "native": "Kiswahili",
    "flag": "\ud83c\uddf0\ud83c\uddea",
    "category": "African",
    "image": "/images/languages/swahili.jpg",
    "popular": false,
    "featured": false
  },
  {
    "id": "japanese",
    "native": "\u65e5\u672c\u8a9e",
    "flag": "\ud83c\uddef\ud83c\uddf5",
    "category": "Asian",
    "image": "/images/languages/japanese.jpg",
    "popular": false,
    "featured": false
  }
];

/** @deprecated Use languageCourseMeta + translations */
export const languageCourses = languageCourseMeta as unknown as import("./types").LanguageCourse[];

export const categories: Category[] = ["All", "European", "Asian", "African", "Middle Eastern"];

export const whyLearnWithUs = [
  {
    title: "Expert Instructors",
    desc: "Learn from experienced language teachers and practitioners.",
    icon: "Users" as const,
  },
  {
    title: "Recognised Pathways",
    desc: "CEFR-aligned learning with preparation for major international exams.",
    icon: "Award" as const,
  },
  {
    title: "Exam Preparation",
    desc: "Support for Goethe, DELF, IELTS, HSK, and JLPT where offered.",
    icon: "BookOpen" as const,
  },
  {
    title: "Flexible Scheduling",
    desc: "Morning, evening, and weekend options where available.",
    icon: "Clock" as const,
  },
];
