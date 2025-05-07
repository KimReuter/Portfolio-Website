// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true, // stellt sicher, dass App Router aktiv ist
    },
    output: 'standalone', // wichtig für saubere Vercel Deployments
  };
  
  module.exports = nextConfig;