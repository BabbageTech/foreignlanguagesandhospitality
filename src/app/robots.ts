import { getSiteUrl } from "@/lib/seo";
import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
