import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WhatsAppFAB from "@/components/layout/WhatsAppFab";
import { SITE_CONFIG } from "@/lib/constants";
import { localeConfig, defaultLocale, isLocale } from "@/i18n/config";
import { getMessage } from "@/i18n/messages";
import { getInstitutionStructuredData } from "@/lib/structured-data";
import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.website;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${SITE_CONFIG.name} | ${SITE_CONFIG.shortName}`, template: `%s | ${SITE_CONFIG.shortName}` },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.shortName,
  keywords: ["International School Kenya", "German language Narok", "Ausbildung Germany", "IIFLHM", "hospitality management Kenya", "Study in Germany from Kenya"],
  openGraph: {
    type: "website", locale: "en_KE", url: siteUrl, title: SITE_CONFIG.name,
    description: SITE_CONFIG.description, images: [{ url: "/images/hero-bg.jpg", width: 1200, height: 630, alt: SITE_CONFIG.shortName }], siteName: SITE_CONFIG.shortName,
  },
  twitter: { card: "summary_large_image", title: SITE_CONFIG.name, description: SITE_CONFIG.description, images: ["/images/hero-bg.jpg"] },
  robots: { index: true, follow: true },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [cookieStore, requestHeaders] = await Promise.all([cookies(), headers()]);
  const requestedLocale = requestHeaders.get("x-iiflhm-locale") || cookieStore.get("iiflhm-locale")?.value || defaultLocale;
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;
  const localeSettings = localeConfig[locale];
  const structuredData = JSON.stringify(getInstitutionStructuredData()).replace(/</g, "\\u003c");

  return (
    <html lang={locale} dir={localeSettings.dir} data-theme="institute" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-white text-slate-900 min-h-screen flex flex-col`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
        <a href="#main-content" className="skip-link">{getMessage(locale, "skipContent")}</a>
        <Navbar locale={locale} />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer locale={locale} />
        <WhatsAppFAB locale={locale} />
      </body>
    </html>
  );
}
