/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    open: true
  },
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
