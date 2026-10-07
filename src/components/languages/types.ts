export type Category = "All" | "European" | "Asian" | "African" | "Middle Eastern";

export interface LanguageCourseLevel {
  code: string;
  label: string;
  desc: string;
}

export interface LanguageCourse {
  id: string;
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
  levels: LanguageCourseLevel[];
  careers: string[];
  exams: string[];
  certification: string;
}

export interface WhyLearnItem {
  title: string;
  desc: string;
  icon: "Users" | "Award" | "BookOpen" | "Clock";
}
