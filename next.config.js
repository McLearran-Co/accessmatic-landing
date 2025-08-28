/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BACKEND_URL: 'https://accessmatic-backend-production.up.railway.app'
  }
}

module.exports = nextConfig
