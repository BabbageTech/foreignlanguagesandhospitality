import type { Metadata } from "next";
import { headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { getLegalInterimLabel, getLegalPageCopy } from "@/i18n/legal-pages";
import { getLocalizedAlternates } from "@/lib/localized-page-metadata";

async function getLocale(): Promise<Locale> {
  const requestHeaders = await headers();
  const requested = requestHeaders.get("x-iiflhm-locale") || defaultLocale;
  return isLocale(requested) ? requested : defaultLocale;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = getLegalPageCopy(locale, "terms");
  return { title: copy.title, description: copy.description, alternates: getLocalizedAlternates("/terms", locale), robots: { index: false, follow: true }, openGraph: { title: copy.title, description: copy.description, type: "website" } };
}

export default async function TermsPage() {
  const locale = await getLocale();
  const copy = getLegalPageCopy(locale, "terms");
  return (
    <main className="mx-auto min-h-[55vh] max-w-4xl px-6 py-16">
      <h1 className="mb-5 text-3xl font-black text-[#0A2540]">{copy.title.replace(" | IIFLHM", "")}</h1>
      <section aria-label={copy.title} className="border-l-4 border-amber-500 bg-amber-50 p-6 md:p-8">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-amber-900">{getLegalInterimLabel(locale)}</p>
        <p className="text-base leading-relaxed text-neutral-700 md:text-lg">{copy.body}</p>
      </section>
    </main>
  );
}
