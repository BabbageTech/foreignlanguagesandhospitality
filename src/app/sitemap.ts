import { locales } from "@/i18n/config";
import { getSiteUrl } from "@/lib/constants";
import type { MetadataRoute } from "next";
const paths = ["","/about","/academics","/academics/languages","/academics/german-language","/academics/hospitality-management","/academics/ict","/academics/travel-tourism","/academics/nursing-preparation","/admissions","/career-opportunities","/career-opportunities/apprenticeship","/career-opportunities/masters","/career-opportunities/undergraduate","/student-voices","/news","/gallery","/contact","/privacy","/terms"];
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const path of paths) {
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
        alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${base}/${l}${path}`])) },
      });
    }
  }
  return entries;
}
