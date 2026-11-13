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
export function buildPageMetadata({ locale, path = "", title, description }: { locale: Locale; path?: string; title?: string; description?: string }): Metadata {
  const pageUrl = absoluteUrl(locale, path);
  const finalTitle = title ? `${title} | ${SITE_CONFIG.shortName}` : SITE_CONFIG.name;
  const finalDesc = description || SITE_CONFIG.description;
  return {
    metadataBase: new URL(getSiteUrl()),
    title: finalTitle,
    description: finalDesc,
    alternates: { canonical: pageUrl, languages: buildLanguageAlternates(path) },
    openGraph: { locale: localeOgLocale[locale], url: pageUrl, title: finalTitle, description: finalDesc, siteName: SITE_CONFIG.shortName },
  };
}
