// src/lib/formspree.ts

// Use the single provided ID for all forms
export const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ID || '';
  
export interface FormspreeResponse {
  ok: boolean;
  status: number;
  message?: string;
}

// Define a type for your form data instead of 'any'
export type FormDataType = Record<string, string | number | boolean | undefined | null>;
  
/**
 * Helper to submit form to Formspree using a single endpoint.
 * 'unknown' is safer than 'any' as it forces you to check types if you manipulate the data.
 */
export async function submitToFormspree(
  data: FormDataType,
  formType: 'contact' | 'admissions' | 'general' = 'general'
): Promise<FormspreeResponse> {
  if (!FORMSPREE_ENDPOINT) {
    throw new Error('Formspree ID is not configured in environment variables');
  }

  const url = FORMSPREE_ENDPOINT.startsWith('http') 
    ? FORMSPREE_ENDPOINT 
    : `https://formspree.io/f/${FORMSPREE_ENDPOINT}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      _subject: (data.subject as string) || `New ${formType.toUpperCase()} Submission - IIFLHM`,
      submission_source: formType,
    }),
  });

  return {
    ok: response.ok,
    status: response.status,
    message: response.ok ? 'Success' : 'Failed to submit form',
  };
}