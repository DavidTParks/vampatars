/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/api/avatar/:path*',
      },
    ];
  },
}

module.exports = nextConfig
