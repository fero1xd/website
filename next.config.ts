import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    viewTransition: true,
    staleTimes: {
      static: 86400,
    },
  },
};

export default nextConfig;
