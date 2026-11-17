import type { Metadata } from "next";
import { headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { getGalleryCopy } from "@/i18n/gallery";
import { getLocalizedAlternates } from "@/lib/localized-page-metadata";
import GalleryPageClient from "./GalleryPageClient";

async function getLocale(): Promise<Locale> {
  const requestHeaders = await headers();
  const requested = requestHeaders.get("x-iiflhm-locale") || defaultLocale;
  return isLocale(requested) ? requested : defaultLocale;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = getGalleryCopy(locale);
  return { title: copy.title, description: copy.description, alternates: getLocalizedAlternates("/gallery", locale), openGraph: { title: copy.title, description: copy.description, type: "website" } };
}

export default async function GalleryPage() {
  const locale = await getLocale();
  return <GalleryPageClient locale={locale} />;
}
