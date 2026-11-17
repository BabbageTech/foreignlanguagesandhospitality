import type { Locale } from "@/i18n/config";

export interface ProgramTranslation {
    title?: string;
    description?: string;
    shortDescription?: string;
    keyFeatures?: string[];
    targetAudience?: string;
    careerOpportunities?: string[];
    requirements?: string[];
}

// src/types/program.ts

export interface Program {
    id: string;
    translations?: Partial<Record<Locale, ProgramTranslation>>;
    title: string;
    slug: string;
    category: 'Language' | 'Hospitality' | 'Nursing' | 'Combined';
    duration: string;                    // e.g., "6 months", "3 months", "1 year"
    description: string;
    shortDescription: string;
    keyFeatures: string[];
    targetAudience: string;
    careerOpportunities: string[];
    requirements?: string[];
    image?: string;                      // path to image in public/images
    isPopular?: boolean;
  }
  
  export interface ProgramCategory {
    name: string;
    icon: string;
    description: string;
  }