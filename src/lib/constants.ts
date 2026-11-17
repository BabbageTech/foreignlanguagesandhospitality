/** Central, reviewed source of truth for public institutional information. */
export const SITE_CONFIG = {
  name: "International Institute of Foreign Languages & Hospitality Management",
  shortName: "IIFLHM",
  tagline: "Empowering Local and Global Careers",
  description: "Training in foreign languages, hospitality management and career preparation in Kenya.",
  location: "Newline Building, Narok, Kenya",
  phone1: "+254 723 104 680",
  phone2: "+254 705 704 554",
  email: "info@foreignlanguagesandhospitality.com",
  admissionsEmail: "admissions@foreignlanguagesandhospitality.com",
  website: process.env.NEXT_PUBLIC_SITE_URL || "https://foreignlanguagesandhospitality.com",
} as const;

/** Unknown social profiles are intentionally omitted rather than linked to '#'. */
export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/61574315371972",
  whatsapp: "254705704554",
} as const;
export const WHATSAPP_URL = `https://wa.me/${SOCIAL_LINKS.whatsapp}`;

export const CONTACT_INFO = {
  address: SITE_CONFIG.location,
  phones: [SITE_CONFIG.phone1, SITE_CONFIG.phone2],
  emails: [SITE_CONFIG.email, SITE_CONFIG.admissionsEmail],
} as const;

export const INTAKE_CONFIG = {
  // Confirm the next intake with the admissions team before publishing a date.
  nextIntakeLabel: "Contact admissions for upcoming intake dates",
} as const;

export const programsData = {
  languages: [
    { id: "german-language", name: "German Language Course" },
    { id: "english-language", name: "English Language Course" },
    { id: "spanish-language", name: "Spanish Language Course" },
    { id: "french-language", name: "French Language Course" },
    { id: "mandarin-chinese", name: "Mandarin Chinese Course" },
    { id: "kiswahili-language", name: "Kiswahili Language Course" },
    { id: "arabic-language", name: "Arabic Language Course" },
    { id: "italian-language", name: "Italian Language Course" },
    { id: "japanese-language", name: "Japanese Language Course" },
    { id: "portuguese-language", name: "Portuguese Language Course" },
    { id: "russian-language", name: "Russian Language Course" },
    { id: "dutch-language", name: "Dutch Language Course" },
    { id: "turkish-language", name: "Turkish Language Course" },
  ],
  hospitality: [
    { id: "diploma-hospitality-management", name: "Diploma in Hospitality Management" },
    { id: "diploma-front-office-operations", name: "Diploma in Front Office Operations & Administration" },
    { id: "diploma-housekeeping-laundry", name: "Diploma in House Keeping & Laundry Operation" },
    { id: "diploma-travel-tourism", name: "Diploma in Travel and Tourism Management" },
    { id: "certificate-front-office-operations", name: "Certificate in Front Office Operations & Administration" },
    { id: "certificate-food-production", name: "Certificate in Food Production" },
    { id: "certificate-food-beverage-service", name: "Certificate in Food & Beverage Service and Sales" },
  ],
} as const;

export const alumniStories = [
  { name: "Sempeyo", role: "Nursing Ausbildung, Berlin", quote: "If you want to be a nurse in Germany, you must at least have attained a B1 Level." },
  { name: "Saitoti", role: "Dairy Farm Ausbildung, Lilienthal", quote: "Learning the German language will help you connect and find your way to Germany." },
  { name: "Hilda", role: "Social Work, Flensburg University", quote: "Learning German at B1 or B2 level made my transition much smoother." },
  { name: "Damaris", role: "Master's Student, Flensburg University", quote: "The German language training from IIFLHM was essential for my university admission." },
  { name: "Zablon Ledama Kimong'o", role: "Professional Chef, Germany", quote: "The institute transformed my future as a chef in Germany." },
] as const;
