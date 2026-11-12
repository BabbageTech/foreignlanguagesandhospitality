import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WhatsAppFAB from "@/components/layout/WhatsAppFab";
import { getLocaleDirection, isValidLocale, locales, type Locale } from "@/i18n/config";
import { SITE_CONFIG, getSiteUrl } from "@/lib/constants";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL(getSiteUrl()),
    title: { default: SITE_CONFIG.name, template: `%s | ${SITE_CONFIG.shortName}` },
    description: SITE_CONFIG.description,
    alternates: {
      canonical: `${getSiteUrl()}/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `${getSiteUrl()}/${l}`])),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = getLocaleDirection(locale);

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning data-theme="institute" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-white min-h-screen flex flex-col`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:text-[#0A2540] focus:font-bold">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppFAB />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
