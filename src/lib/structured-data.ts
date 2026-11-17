import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

/** Organization facts are limited to the institute's existing site configuration. */
export function getInstitutionStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_CONFIG.website.replace(/\/$/, "")}/#organization`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.shortName,
    url: SITE_CONFIG.website,
    description: SITE_CONFIG.description,
    logo: `${SITE_CONFIG.website.replace(/\/$/, "")}/logo.png`,
    image: `${SITE_CONFIG.website.replace(/\/$/, "")}/images/hero-bg.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Newline Building",
      addressLocality: "Narok",
      addressCountry: "KE",
    },
    telephone: SITE_CONFIG.phone1,
    email: SITE_CONFIG.email,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "admissions",
      telephone: SITE_CONFIG.phone2,
      email: SITE_CONFIG.admissionsEmail,
    },
    sameAs: [SOCIAL_LINKS.facebook],
  } as const;
}
