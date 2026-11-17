import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.website;

export function generateMetadata({ title, description, keywords = [], path = "/" }: {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
}): Metadata {
  const pageTitle = title ? `${title} | ${SITE_CONFIG.shortName}` : SITE_CONFIG.name;
  const canonical = new URL(path, siteUrl).toString();
  return {
    title: pageTitle,
    description: description || SITE_CONFIG.description,
    keywords: ["hospitality school Kenya", "German language course Narok", "IIFLHM", ...keywords],
    alternates: { canonical },
    openGraph: {
      type: "website", url: canonical, title: pageTitle,
      description: description || SITE_CONFIG.description,
      images: [{ url: "/images/hero-bg.jpg", width: 1200, height: 630, alt: SITE_CONFIG.shortName }],
      siteName: SITE_CONFIG.shortName,
    },
    twitter: { card: "summary_large_image", title: pageTitle, description: description || SITE_CONFIG.description },
  };
}

export const defaultMetadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  metadataBase: new URL(siteUrl),
};
