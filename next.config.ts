import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // allow `next build` to succeed even if there are lint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
