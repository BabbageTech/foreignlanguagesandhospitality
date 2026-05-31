// src/types/faculty.ts

export interface FacultyMember {
    id: string;
    name: string;
    title: string;
    qualification: string;
    bio: string;
    image: string;                       // path to image in public/images/faculty/
    specialization?: string;
    experience?: string;
    countryFlag?: string;                // e.g., "🇩🇪" for Germany experience
    isFounder?: boolean;
  }
  
  export interface Founder extends FacultyMember {
    quote: string;
    story: string;                       // Longer personal story of Soila Lasoi
  }