// src/lib/metadata.ts

import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

export function generateMetadata({
  title,
  description,
  keywords = [],
}: {
  title?: string;
  description?: string;
  keywords?: string[];
}): Metadata {
  return {
    title: title 
      ? `${title} | ${SITE_CONFIG.shortName}` 
      : SITE_CONFIG.name,
    description: description || SITE_CONFIG.description,
    keywords: [
      "hospitality school Kenya",
      "German language course Narok",
      "Ausbildung Germany",
      "IIFLHM",
      ...keywords,
    ],
    openGraph: {
      title: title || SITE_CONFIG.name,
      description: description || SITE_CONFIG.description,
      images: [
        {
          url: '/images/hero-bg.jpg',
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
      siteName: SITE_CONFIG.shortName,
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

// Common page metadata helpers
export const defaultMetadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  metadataBase: new URL('https://foreignlanguagesandhospitality.com'),
};