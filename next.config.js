/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack configuration (Next.js 16+)
  turbopack: {
    resolveAlias: {},
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: false,
  },

  // Performance headers
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Redirects for performance
  redirects: async () => {
    return []
  },

  // React compiler for optimized rendering (Next.js 16+)
  reactCompiler: true,

  // Experimental features
  experimental: {
    optimizePackageImports: [
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-slot',
      'lucide-react',
      'recharts',
    ],
  },

  // TypeScript optimization
  typescript: {
    tsconfigPath: './tsconfig.json',
  },

  // Logging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // Enable SWR and caching optimizations
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 5,
  },

  // Optimize production
  productionBrowserSourceMaps: false,
  compress: true,

  // Generate ETags for better caching
  generateEtags: true,
}

module.exports = nextConfig
