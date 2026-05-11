/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production-grade optimizations
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: false,
  
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
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ]
  },

  // Webpack optimization
  webpack: (config, { isServer }) => {
    // Code splitting optimization
    config.optimization.splitChunks.cacheGroups = {
      ...config.optimization.splitChunks.cacheGroups,
      radix: {
        test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
        name: 'radix-ui',
        priority: 10,
        reuseExistingChunk: true,
      },
      stripe: {
        test: /[\\/]node_modules[\\/]@stripe[\\/]/,
        name: 'stripe',
        priority: 10,
        reuseExistingChunk: true,
      },
      supabase: {
        test: /[\\/]node_modules[\\/]@supabase[\\/]/,
        name: 'supabase',
        priority: 10,
        reuseExistingChunk: true,
      },
    }

    return config
  },

  // TypeScript optimization
  typescript: {
    tsconfigPath: './tsconfig.json',
  },

  // React compiler for optimized rendering (Next.js 16+)
  experimental: {
    reactCompiler: true,
    optimizePackageImports: [
      '@radix-ui',
      'lucide-react',
      'recharts',
    ],
  },

  // Logging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

module.exports = nextConfig
