import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

// English-only URLs remain in the sitemap while localized routes are noindex.
// Privacy and Terms are excluded until institution-approved full legal text is supplied.
const routes = [
  "/", "/about", "/academics", "/academics/german-language", "/academics/hospitality-management",
  "/academics/ict", "/academics/languages", "/academics/nursing-preparation", "/academics/travel-tourism",
  "/admissions", "/career-opportunities", "/career-opportunities/apprenticeship",
  "/career-opportunities/masters", "/career-opportunities/undergraduate", "/contact", "/gallery",
  "/news", "/student-voices",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.website;
  return routes.map((route) => ({ url: new URL(route, base).toString(), changeFrequency: "monthly", priority: route === "/" ? 1 : 0.7 }));
}
