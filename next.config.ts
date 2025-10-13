import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimierungen für Production
  compress: true,
  
  // Output für Plesk Deployment
  output: 'standalone',
  
  // Bilder-Optimierung
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: false,
  },
  
  // Korrekte Konfiguration für Next.js 15
  serverExternalPackages: ['@getbrevo/brevo'],
  
  // Headers für Sicherheit
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
