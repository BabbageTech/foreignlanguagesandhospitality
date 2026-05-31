// src/app/layout.tsx

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import WhatsAppFAB from '@/components/layout/WhatsAppFab';
import { SITE_CONFIG } from '@/lib/constants';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Import Inter font
import './globals.css';

// Initialize the font
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  // 1. ADDED METADATABASE: Resolves the social media image/favicon warning
  metadataBase: new URL(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://foreignlanguagesandhospitality.vercel.app' // Replace with your real domain
  ),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "International School Kenya", 
    "German language Narok", 
    "Ausbildung Germany", 
    "IIFLHM", 
    "hospitality management Kenya",
    "Study in Germany from Kenya"
  ],
  authors: [{ name: "Simon Keya" }],
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://foreignlanguagesandhospitality.vercel.app',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [{ 
      url: '/images/hero-bg.jpg',
      width: 1200,
      height: 630,
      alt: SITE_CONFIG.name
    }],
    siteName: SITE_CONFIG.shortName,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ['/images/hero-bg.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      data-theme="institute"
      className={`${inter.variable}`}
    >
      <body 
        className={`${inter.className} antialiased bg-white min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Navbar />
        {/* 'flex-grow' ensures footer stays at bottom on short pages */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}