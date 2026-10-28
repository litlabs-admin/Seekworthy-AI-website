import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  experimental: { inlineCss: true, optimizePackageImports: ["motion"] },
};

export default nextConfig;
