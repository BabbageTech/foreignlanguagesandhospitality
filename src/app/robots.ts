import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  // Netlify uses CONTEXT=deploy-preview/branch-deploy; Vercel uses VERCEL_ENV=preview.
  // Local development has neither value and retains the normal robots policy.
  const deployContext = process.env.CONTEXT;
  const isPreview = process.env.VERCEL_ENV === "preview" || Boolean(deployContext && deployContext !== "production");
  return {
    rules: isPreview
      ? [{ userAgent: "*", disallow: "/" }]
      : [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: new URL("/sitemap.xml", process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.website).toString(),
  };
}
