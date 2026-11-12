import type { Metadata } from "next";
import { SITE_CONFIG, getSiteUrl } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: SITE_CONFIG.name, template: `%s | ${SITE_CONFIG.shortName}` },
  description: SITE_CONFIG.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
