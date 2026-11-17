import type { Metadata } from "next";
import { headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { getNewsCopy } from "@/i18n/news";
import { getLocalizedAlternates } from "@/lib/localized-page-metadata";
import NewsPageClient from "./NewsPageClient";

async function getLocale(): Promise<Locale> {
  const requestHeaders = await headers();
  const requested = requestHeaders.get("x-iiflhm-locale") || defaultLocale;
  return isLocale(requested) ? requested : defaultLocale;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = getNewsCopy(locale);
  return { title: copy.title, description: copy.description, alternates: getLocalizedAlternates("/news", locale), openGraph: { title: copy.title, description: copy.description, type: "website" } };
}

export default async function NewsPage() {
  return <NewsPageClient locale={await getLocale()} />;
}
