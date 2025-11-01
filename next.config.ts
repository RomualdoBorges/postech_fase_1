import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname, // 👈 força o Next a considerar esta pasta como raiz
  },
};

export default nextConfig;
