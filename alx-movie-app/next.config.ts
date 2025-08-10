import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ],
    // Or with older syntax:
    // domains: ["m.media-amazon.com"],
  },
};

export default nextConfig;
