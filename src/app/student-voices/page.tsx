import type { Metadata } from "next";
import { headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { getStudentVoicesCopy } from "@/i18n/student-voices";
import { getLocalizedAlternates } from "@/lib/localized-page-metadata";
import StudentVoicesPageClient from "./StudentVoicesPageClient";

async function getLocale(): Promise<Locale> {
  const requestHeaders = await headers();
  const requested = requestHeaders.get("x-iiflhm-locale") || defaultLocale;
  return isLocale(requested) ? requested : defaultLocale;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = getStudentVoicesCopy(locale);
  return { title: copy.title, description: copy.description, alternates: getLocalizedAlternates("/student-voices", locale), openGraph: { title: copy.title, description: copy.description, type: "website" } };
}

export default async function StudentVoicesPage() {
  return <StudentVoicesPageClient locale={await getLocale()} />;
}
