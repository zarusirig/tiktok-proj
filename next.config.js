/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,

  // Enable optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Performance optimizations
  // experimental: {
  //   optimizeCss: true,
  // },

  // SEO and metadata
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
};

module.exports = nextConfig;
