import { locales, type Locale } from "@/i18n/config";
import { absoluteUrl } from "@/lib/seo";
import type { MetadataRoute } from "next";
const PATHS = ["","/about","/academics","/academics/languages","/academics/german-language","/academics/hospitality-management","/academics/nursing-preparation","/academics/travel-tourism","/academics/ict","/admissions","/career-opportunities","/student-voices","/gallery","/news","/contact","/privacy","/terms"];
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const path of PATHS) {
      entries.push({
        url: absoluteUrl(locale as Locale, path),
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.8,
        alternates: { languages: Object.fromEntries(locales.map(l => [l, absoluteUrl(l as Locale, path)])) },
      });
    }
  }
  return entries;
}
