/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    reactStrictMode: true,  // فعال کردن حالت strict برای پیدا کردن خطاها
    experimental: {
        reactRoot: true,  // فعال کردن Concurrent Mode در React 18
    },
    images: {
        domains: ['SOURCE_IMAGE_DOMAIN']
    }   
}
