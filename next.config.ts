import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/"
};

export default nextConfig;

module.exports = {
  images: {
    formats: ['image/avif', 'image/webp']
  },
};
