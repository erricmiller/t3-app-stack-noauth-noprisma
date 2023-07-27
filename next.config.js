// await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const nextConfig  = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ['uploadthing.com', 'lh3.googleusercontent.com'],
  },
};


const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  // skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA(nextConfig);