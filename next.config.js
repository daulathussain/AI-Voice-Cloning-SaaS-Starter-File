/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        process.env.NEXT_PUBLIC_APP_URL?.replace(/^https?:\/\//, '') || '',
      ].filter(Boolean),
      bodySizeLimit: '2mb',
    },
  },
  // Allow server actions enough time for XTTS model loading + generation
  serverExternalPackages: [],
}

module.exports = nextConfig
