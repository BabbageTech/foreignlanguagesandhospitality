import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Ensures stable production builds (especially on Vercel)
  output: "standalone",

  // ✅ Recommended React setting
  reactStrictMode: true,

  // ✅ Image configuration (safe but flexible)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // keep if you truly need all external images
      },
    ],
  },

  // ⚠️ TEMPORARY — remove once project is stable
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ⚠️ TEMPORARY — remove once project is stable
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;