import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/aaa-glazing-landing",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
