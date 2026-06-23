/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    reactStrictMode: true, 
    experimental: {
    },
      eslint: {
    ignoreDuringBuilds: true,
  },
    images: {
        domains: ['SOURCE_IMAGE_DOMAIN']
    }   
}
