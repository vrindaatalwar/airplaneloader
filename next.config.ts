import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  transpilePackages: ["@airplane-loader/react"],
};

export default nextConfig;
