"use client";

import { Category, LanguageCourse, WhyLearnItem } from './types';

export const languageCourses: LanguageCourse[] = [
    {
      name: "German Language",
      native: "Deutsch",
      flag: "🇩🇪",
      category: "European",
      level: "A1 to B2",
      duration: "3–12 Months",
      popular: true,
      featured: true,
      image: "/images/languages/german.jpg",
      about:
        "German is the most spoken native language in Europe and the key to unlocking educational and professional opportunities in Germany, Austria, and Switzerland. Our CEFR-aligned programme takes you from absolute beginner to B2 — the level required for Ausbildung, university admission, and most professional roles in Germany.",
      whyLearn:
        "Germany is actively recruiting skilled workers from Africa. With B1 or B2 German, you can access tuition-free university education, Ausbildung apprenticeships with a stipend, and nursing or hospitality roles across the DACH region.",
      outcomes: [
        "Communicate confidently in everyday and professional German contexts",
        "Read and write German at CEFR B1/B2 standard",
        "Understand German culture, workplace etiquette, and social norms",
        "Pass Goethe-Institut or TELC B1/B2 examinations",
        "Prepare job applications, CVs, and interviews in German",
      ],
      levels: [
        {
          code: "A1",
          label: "Beginner",
          desc: "Introductory vocabulary, greetings, numbers, and basic sentence structures.",
        },
        {
          code: "A2",
          label: "Elementary",
          desc: "Everyday conversations, travel German, and simple writing tasks.",
        },
        {
          code: "B1",
          label: "Intermediate",
          desc: "Workplace German, extended conversations, and reading comprehension.",
        },
        {
          code: "B2",
          label: "Upper-Intermediate",
          desc: "Fluent interaction, complex texts, and professional writing — Ausbildung ready.",
        },
      ],
      careers: [
        "Nurse (Ausbildung)",
        "Hospitality Professional",
        "University Student in Germany",
        "IT Specialist",
        "Social Worker",
      ],
      exams: [
        "Goethe-Institut A1–B2",
        "TELC Deutsch",
        "ÖSD",
        "TestDaF (preparation)",
      ],
      certification:
        "IIFLHM German Language Certificate (CEFR A1–B2)",
    },
  
    {
      name: "English Language",
      native: "English",
      flag: "🇬🇧",
      category: "European",
      level: "A1 to C1",
      duration: "3–12 Months",
      popular: true,
      image: "/images/languages/english.jpg",
      about:
        "English is the global language of business, science, and international communication. Our course is designed for learners who need English for professional advancement, academic study, or international travel.",
      whyLearn:
        "English proficiency opens doors to global universities, multinational companies, and digital economy roles. It is the primary language of the internet, international tourism, and hospitality management.",
      outcomes: [
        "Communicate effectively in professional and academic environments",
        "Write clear business emails, reports, and presentations",
        "Understand spoken English at natural speed in varied accents",
        "Prepare for IELTS, TOEFL, or Cambridge examinations",
      ],
      levels: [
        {
          code: "A1",
          label: "Beginner",
          desc: "Foundational vocabulary, simple sentences, and basic listening skills.",
        },
        {
          code: "A2",
          label: "Elementary",
          desc: "Everyday communication, travel English, and basic reading.",
        },
        {
          code: "B1",
          label: "Intermediate",
          desc: "Workplace English, emails, and independent conversation.",
        },
        {
          code: "B2",
          label: "Upper-Inter.",
          desc: "Professional fluency, complex reading, and formal writing.",
        },
        {
          code: "C1",
          label: "Advanced",
          desc: "Near-native fluency, academic writing, and exam preparation.",
        },
      ],
      careers: [
        "International Business Professional",
        "Tourist Guide",
        "Customer Service Agent",
        "Academic Researcher",
      ],
      exams: [
        "IELTS",
        "TOEFL",
        "Cambridge B2 First",
        "Cambridge C1 Advanced",
      ],
      certification:
        "IIFLHM English Proficiency Certificate (CEFR A1–C1)",
    },
  
    {
      name: "French Language",
      native: "Français",
      flag: "🇫🇷",
      category: "European",
      level: "A1 to B2",
      duration: "3–10 Months",
      image: "/images/languages/french.jpg",
      about:
        "French is spoken by over 300 million people across 5 continents and is an official language of the United Nations and the African Union.",
      whyLearn:
        "French opens opportunities in diplomacy, NGOs, tourism, and Francophone Africa.",
      outcomes: [
        "Hold everyday and professional conversations in French",
        "Read and write French at B1/B2 CEFR level",
        "Navigate Francophone African business and cultural contexts",
        "Prepare for DELF or DALF examinations",
      ],
      levels: [
        {
          code: "A1",
          label: "Beginner",
          desc: "Basic greetings, numbers, and survival French.",
        },
        {
          code: "A2",
          label: "Elementary",
          desc: "Travel French, simple conversations, and everyday tasks.",
        },
        {
          code: "B1",
          label: "Intermediate",
          desc: "Professional and social French, extended reading and writing.",
        },
        {
          code: "B2",
          label: "Upper-Inter.",
          desc: "Fluent communication and preparation for DELF B2.",
        },
      ],
      careers: [
        "Diplomat",
        "NGO Worker",
        "Translator / Interpreter",
        "Tourism Professional",
        "International Business",
      ],
      exams: ["DELF A1–B2", "DALF C1–C2", "TCF"],
      certification:
        "IIFLHM French Language Certificate (CEFR A1–B2)",
    },
  
    {
      name: "Spanish Language",
      native: "Español",
      flag: "🇪🇸",
      category: "European",
      level: "A1 to B1",
      duration: "3–9 Months",
      image: "/images/languages/spanish.jpg",
      about:
        "Spanish is the second most spoken native language in the world and highly valuable in tourism, international trade, and Latin American markets.",
      whyLearn:
        "Spanish opens access to the Latin American market and tourism opportunities worldwide.",
      outcomes: [
        "Conduct basic to intermediate conversations in Spanish",
        "Read Spanish media and professional texts",
        "Write emails and professional documents in Spanish",
        "Prepare for DELE examinations",
      ],
      levels: [
        {
          code: "A1",
          label: "Beginner",
          desc: "Essential vocabulary and sentence construction.",
        },
        {
          code: "A2",
          label: "Elementary",
          desc: "Travel and social Spanish.",
        },
        {
          code: "B1",
          label: "Intermediate",
          desc: "Professional Spanish and DELE B1 preparation.",
        },
      ],
      careers: [
        "Tourism Professional",
        "International Trade Specialist",
        "NGO Worker",
        "Language Teacher",
      ],
      exams: ["DELE A1–B1", "SIELE"],
      certification:
        "IIFLHM Spanish Language Certificate (CEFR A1–B1)",
    },
  
    {
      name: "Mandarin Chinese",
      native: "普通话",
      flag: "🇨🇳",
      category: "Asian",
      level: "HSK 1 to HSK 4",
      duration: "4–14 Months",
      image: "/images/languages/mandarin.jpg",
      about:
        "Mandarin Chinese is the most spoken language globally and essential for trade and diplomacy.",
      whyLearn:
        "China is one of Africa’s largest trading partners, creating strong demand for Mandarin speakers.",
      outcomes: [
        "Read and write Chinese characters",
        "Hold basic to intermediate Mandarin conversations",
        "Understand Chinese business culture",
        "Prepare for HSK examinations",
      ],
      levels: [
        {
          code: "HSK 1",
          label: "Survival",
          desc: "Basic greetings and vocabulary.",
        },
        {
          code: "HSK 2",
          label: "Elementary",
          desc: "Simple conversations and reading characters.",
        },
        {
          code: "HSK 3",
          label: "Intermediate",
          desc: "Functional communication skills.",
        },
        {
          code: "HSK 4",
          label: "Upper-Inter.",
          desc: "Professional-level conversations.",
        },
      ],
      careers: [
        "Business Liaison",
        "Interpreter",
        "Trade Specialist",
        "Diplomat",
      ],
      exams: ["HSK 1", "HSK 2", "HSK 3", "HSK 4"],
      certification:
        "IIFLHM Mandarin Chinese Certificate (HSK 1–4)",
    },
  
    {
      name: "Arabic Language",
      native: "العربية",
      flag: "🇸🇦",
      category: "Middle Eastern",
      level: "A1 to B1",
      duration: "4–12 Months",
      image: "/images/languages/arabic.jpg",
      about:
        "Arabic is spoken by over 400 million people and is essential in diplomacy, religion, and Gulf economies.",
      whyLearn:
        "Arabic opens opportunities in diplomacy, Islamic finance, and Gulf-state employment.",
      outcomes: [
        "Read and write Arabic script",
        "Communicate in Arabic professionally",
        "Understand Arabic cultural contexts",
      ],
      levels: [
        {
          code: "A1",
          label: "Beginner",
          desc: "Arabic alphabet and basic vocabulary.",
        },
        {
          code: "A2",
          label: "Elementary",
          desc: "Everyday conversations.",
        },
        {
          code: "B1",
          label: "Intermediate",
          desc: "Professional Arabic communication.",
        },
      ],
      careers: [
        "Diplomat",
        "Islamic Finance Professional",
        "Interpreter",
      ],
      exams: ["CEFR Arabic", "ALPT"],
      certification:
        "IIFLHM Arabic Language Certificate (CEFR A1–B1)",
    },
  
    {
      name: "Kiswahili",
      native: "Kiswahili",
      flag: "🇰🇪",
      category: "African",
      level: "A1 to C1",
      duration: "2–8 Months",
      image: "/images/languages/swahili.jpg",
      about:
        "Kiswahili is the most widely spoken African language and a major language across East Africa.",
      whyLearn:
        "Kiswahili is essential for East African business, government, and diplomacy.",
      outcomes: [
        "Communicate confidently in Kiswahili",
        "Read and write standard Kiswahili",
        "Engage in East African professional settings",
      ],
      levels: [
        {
          code: "A1",
          label: "Beginner",
          desc: "Basic greetings and simple sentences.",
        },
        {
          code: "A2",
          label: "Elementary",
          desc: "Everyday communication.",
        },
        {
          code: "B1",
          label: "Intermediate",
          desc: "Professional Kiswahili.",
        },
        {
          code: "C1",
          label: "Advanced",
          desc: "Near-native fluency.",
        },
      ],
      careers: [
        "Government Officer",
        "Journalist",
        "Educator",
        "NGO Worker",
      ],
      exams: [
        "KNEC Kiswahili Proficiency",
        "KiSwahili CEFR Assessment",
      ],
      certification:
        "IIFLHM Kiswahili Proficiency Certificate (A1–C1)",
    },
  
    {
      name: "Japanese Language",
      native: "日本語",
      flag: "🇯🇵",
      category: "Asian",
      level: "N5 to N3",
      duration: "4–14 Months",
      image: "/images/languages/japanese.jpg",
      about:
        "Japanese is the language of one of the world’s most technologically advanced economies.",
      whyLearn:
        "Japanese language skills support migration and work opportunities in Japan.",
      outcomes: [
        "Read Hiragana, Katakana, and Kanji",
        "Communicate in workplace Japanese",
        "Prepare for JLPT certification",
      ],
      levels: [
        {
          code: "N5",
          label: "Beginner",
          desc: "Basic grammar and writing systems.",
        },
        {
          code: "N4",
          label: "Elementary",
          desc: "Everyday conversations and reading.",
        },
        {
          code: "N3",
          label: "Intermediate",
          desc: "Functional workplace communication.",
        },
      ],
      careers: [
        "Specified Skilled Worker",
        "Technical Intern",
        "Hospitality Professional",
        "Interpreter",
      ],
      exams: ["JLPT N5", "JLPT N4", "JLPT N3"],
      certification:
        "IIFLHM Japanese Language Certificate (JLPT N5–N3)",
    },
  ];

export const categories: Category[] = ["All", "European", "Asian", "African", "Middle Eastern"];

export const whyLearnWithUs: WhyLearnItem[] = [
    {
      title: "Certified Instructors",
      desc: "Native speakers and CEFR-certified language educators with international teaching experience.",
      icon: "Users",
    },
    {
      title: "CEFR-Aligned Curriculum",
      desc: "All courses follow the Common European Framework of Reference — the international standard accepted by universities and employers worldwide.",
      icon: "Award",
    },
    {
      title: "Exam Preparation",
      desc: "Every course prepares you for official international examinations including Goethe, DELF, IELTS, HSK, and JLPT.",
      icon: "BookOpen",
    },
    {
      title: "Flexible Scheduling",
      desc: "Morning, evening, and weekend classes available. Online and onsite options to fit your lifestyle.",
      icon: "Clock",
    },
  ];