import { headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { getLocalizedPageMetadata } from "@/lib/localized-page-metadata";
import ContactPageClient from "./ContactPageClient";

export default async function ContactPage() {
  const requestHeaders = await headers();
  const requestedLocale = requestHeaders.get("x-iiflhm-locale") || defaultLocale;
  const locale: Locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;
  return <ContactPageClient locale={locale} />;
}

export async function generateMetadata() {
  return getLocalizedPageMetadata("contact", "/contact", "/images/contact/hero-bg.jpg");
}
