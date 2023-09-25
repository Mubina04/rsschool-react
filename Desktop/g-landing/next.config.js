/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  ignoreDuringBuilds: true,
  ignoreBuildErrors: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
