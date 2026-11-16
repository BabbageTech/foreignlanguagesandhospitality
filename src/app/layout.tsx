import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://foreignlanguagesandhospitality.com")
  ),
  title: { default: SITE_CONFIG.name, template: `%s | ${SITE_CONFIG.shortName}` },
  description: SITE_CONFIG.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
