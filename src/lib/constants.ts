export const SITE_CONFIG = {
  name: "International Institute of Foreign Languages and Hospitality Management",
  shortName: "IIFLHM",
  tagline: "Empowering Local and Global Careers",
  description: "World-class training in German Language, Hospitality Management & Nursing Career Preparation in Narok, Kenya.",
  location: "Newline Building, Narok, Kenya",
  phone1: "+254 723 104 680",
  phone2: "+254 705 704 554",
  email: "info@foreignlanguagesandhospitality.com",
  admissionsEmail: "admissions@foreignlanguagesandhospitality.com",
  website: "https://foreignlanguagesandhospitality.com",
} as const;
export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.website;
}
export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/61574315371972",
  instagram: "",
  youtube: "",
  whatsapp: "254705704554",
} as const;
export const CONTACT_INFO = {
  address: SITE_CONFIG.location,
  phones: [SITE_CONFIG.phone1, SITE_CONFIG.phone2] as const,
  emails: [SITE_CONFIG.email, SITE_CONFIG.admissionsEmail] as const,
} as const;
export const CURRENT_INTAKE = { monthKey: "September", year: 2026, label: "September 2026" } as const;
export const programsData = {
  languages: ["German Language Course","English Language Course","Spanish Language Course","French Language Course","Mandarin Chinese Course","Kiswahili Language Course","Arabic Language Course","Italian Language Course","Japanese Language Course","Portuguese Language Course","Russian Language Course","Dutch Language Course","Turkish Language Course"],
  hospitality: ["Diploma in Hospitality Management","Diploma in Front Office Operations & Administration","Diploma in House Keeping & Laundry Operation","Diploma in Travel and Tourism Management","Certificate in Front Office Operations & Administration","Certificate in Food Production","Certificate in Food & Beverage Service and Sales"],
} as const;
export const alumniStories = [
  { name: "Sempeyo", role: "Nursing Ausbildung, Berlin", quote: "If you want to be a nurse in Germany, you must at least have attained a B1 Level." },
  { name: "Saitoti", role: "Dairy Farm Ausbildung, Lilienthal", quote: "Learning the German language will help you connect and find your way to Germany." },
  { name: "Hilda", role: "Social Work, Flensburg University", quote: "Learning German at B1 or B2 level made my transition much smoother." },
  { name: "Damaris", role: "Master's Student, Flensburg University", quote: "The German language training from IIFLHM was essential for my university admission." },
  { name: "Zablon Ledama Kimong'o", role: "Professional Chef, Germany", quote: "The institute transformed my future as a chef in Germany." },
] as const;
