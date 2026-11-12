import { defaultLocale, locales, localeHtmlLang, localeOgLocale, type Locale } from "@/i18n/config";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.website || "https://foreignlanguagesandhospitality.com").replace(/\/$/, "");
}
export function absoluteUrl(locale: Locale, path = ""): string {
  const clean = path.startsWith("/") ? path : path ? `/${path}` : "";
  return `${getSiteUrl()}/${locale}${clean}`;
}
export function buildLanguageAlternates(path = ""): Record<string, string> {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const alt: Record<string, string> = {};
  for (const l of locales) alt[localeHtmlLang[l]] = absoluteUrl(l, clean);
  alt["x-default"] = absoluteUrl(defaultLocale, clean);
  return alt;
}
export function buildPageMetadata({
  locale, path = "", title, description, keywords = [],
  image = "/images/hero-bg.jpg", noIndex = false, type = "website" as const,
}: {
  locale: Locale; path?: string; title?: string; description?: string;
  keywords?: string[]; image?: string; noIndex?: boolean; type?: "website"|"article";
}): Metadata {
  const siteUrl = getSiteUrl();
  const pageUrl = absoluteUrl(locale, path);
  const ogImage = image.startsWith("http") ? image : `${siteUrl}${image}`;
  const finalTitle = title ? `${title} | ${SITE_CONFIG.shortName}` : SITE_CONFIG.name;
  const finalDesc = description || SITE_CONFIG.description;
  return {
    metadataBase: new URL(siteUrl),
    title: finalTitle,
    description: finalDesc,
    keywords: ["IIFLHM","German language Kenya","Ausbildung","hospitality management Narok",...keywords],
    alternates: { canonical: pageUrl, languages: buildLanguageAlternates(path) },
    openGraph: {
      type, locale: localeOgLocale[locale], url: pageUrl, siteName: SITE_CONFIG.shortName,
      title: finalTitle, description: finalDesc,
      images: [{ url: ogImage, width: 1200, height: 630, alt: finalTitle }],
    },
    twitter: { card: "summary_large_image", title: finalTitle, description: finalDesc, images: [ogImage] },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
export function organizationJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org", "@type": "EducationalOrganization",
    name: SITE_CONFIG.name, alternateName: SITE_CONFIG.shortName, url: siteUrl,
    logo: `${siteUrl}/logo.png`, description: SITE_CONFIG.description,
    address: { "@type": "PostalAddress", streetAddress: "Newline Building", addressLocality: "Narok", addressCountry: "KE" },
    contactPoint: [
      { "@type": "ContactPoint", telephone: SITE_CONFIG.phone1, contactType: "customer service", email: SITE_CONFIG.email },
      { "@type": "ContactPoint", telephone: SITE_CONFIG.phone2, contactType: "admissions", email: SITE_CONFIG.admissionsEmail },
    ],
  };
}
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org", "@type": "WebSite",
    name: SITE_CONFIG.name, url: getSiteUrl(),
    publisher: { "@type": "EducationalOrganization", name: SITE_CONFIG.name },
  };
}
export function jsonLdScript(data: object | object[]): string {
  return JSON.stringify(Array.isArray(data) ? data : [data]);
}
