import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
// next.config.js
module.exports = {
  images: {
    domains: ['static.wikia.nocookie.net'], // Add the domain hosting the image
  },
};


export default nextConfig;
