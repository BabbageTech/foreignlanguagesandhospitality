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
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isValidLocale(raw) ? raw : "en";
  const siteUrl = getSiteUrl();
  return {
    metadataBase: new URL(siteUrl),
    title: { default: SITE_CONFIG.name, template: `%s | ${SITE_CONFIG.shortName}` },
    description: SITE_CONFIG.description,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: { ...Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}`])), "x-default": `${siteUrl}/en` },
    },
  };
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale} dir={getLocaleDirection(locale)} suppressHydrationWarning data-theme="institute" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-white min-h-screen flex flex-col`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppFAB />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
