import type { Metadata } from "next";
import { headers } from "next/headers";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getLocalizedPageMetadata } from "@/lib/localized-page-metadata";
import ICTPageClient from "./ICTPageClient";

export async function generateMetadata(): Promise<Metadata> {
  return getLocalizedPageMetadata("ict", "/academics/ict", "/images/ict/tech-bg.jpg");
}

export default async function ICTPage() {
  const requestHeaders = await headers();
  const requestedLocale = requestHeaders.get("x-iiflhm-locale") || defaultLocale;
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;
  return <ICTPageClient locale={locale} />;
}
