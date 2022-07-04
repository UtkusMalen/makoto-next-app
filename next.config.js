const withPWA = require("next-pwa");

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["crafatar.com", "images.ctfassets.net"],
    formats: ["image/avif", "image/webp"],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

module.exports = nextConfig;
