/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'tinyurl.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;
