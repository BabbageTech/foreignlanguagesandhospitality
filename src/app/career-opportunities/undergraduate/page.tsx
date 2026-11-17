import type { Metadata } from "next";
import { headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { getCareerDetailCopy } from "@/i18n/career-details";
import CareerDetailPage from "@/components/careers/CareerDetailPage";
import { getLocalizedAlternates } from "@/lib/localized-page-metadata";

async function getLocale(): Promise<Locale> {
  const requestHeaders = await headers();
  const requested = requestHeaders.get("x-iiflhm-locale") || defaultLocale;
  return isLocale(requested) ? requested : defaultLocale;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = getCareerDetailCopy(locale, "undergraduate");
  return {
    title: copy.title,
    description: copy.description,
    alternates: getLocalizedAlternates("/career-opportunities/undergraduate", locale),
    openGraph: { title: copy.title, description: copy.description, type: "website" },
  };
}

export default async function UndergraduatePage() {
  const locale = await getLocale();
  return <CareerDetailPage kind="undergraduate" locale={locale} copy={getCareerDetailCopy(locale, "undergraduate")} />;
}
