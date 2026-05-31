export type Category = "All" | "European" | "Asian" | "African" | "Middle Eastern";

export interface LanguageCourse {
  name: string;
  native: string;
  flag: string;
  category: Category;
  level: string;
  duration: string;
  popular?: boolean;
  featured?: boolean;
  image: string;
  about: string;
  whyLearn: string;
  outcomes: string[];
  levels: { code: string; label: string; desc: string; }[];
  careers: string[];
  exams: string[];
  certification: string;
}

export interface WhyLearnItem {
    title: string;
    desc: string;
    icon: "Users" | "Award" | "BookOpen" | "Clock";
  }