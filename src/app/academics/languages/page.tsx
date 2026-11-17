import type { Metadata } from "next";
import { headers } from "next/headers";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getLocalizedPageMetadata } from "@/lib/localized-page-metadata";
import LanguageCoursesClient from "./LanguageCoursesClient";

export async function generateMetadata(): Promise<Metadata> {
  return getLocalizedPageMetadata("languages", "/academics/languages", "/images/languages/hero-bg.jpg");
}

export default async function LanguageCoursesPage() {
  const requestHeaders = await headers();
  const requestedLocale = requestHeaders.get("x-iiflhm-locale") || defaultLocale;
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;
  return <LanguageCoursesClient locale={locale} />;
}
