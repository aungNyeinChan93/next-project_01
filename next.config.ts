import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "**", // allow all paths
      },
      {
        hostname: 'avatars.githubusercontent.com'
      },
      {
        hostname: 'readymadeui.com'
      }
    ],
  },
};

export default nextConfig;
