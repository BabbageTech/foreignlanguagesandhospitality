// src/types/form.ts

export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }
  
  export interface AdmissionFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth?: string;
    nationality: string;
    programId: string;                   // References Program.id
    educationLevel: string;
    experience?: string;
    motivation: string;
    preferredIntake: string;             // e.g., "September 2026", "January 2027"
    howDidYouHearAboutUs?: string;
  }
  
  export interface FormResponse {
    success: boolean;
    message: string;
    errors?: Record<string, string>;
  }
  
  // Formspree specific
  export interface FormspreeResponse {
    ok: boolean;
    status: number;
    message?: string;
  }