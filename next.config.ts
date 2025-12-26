import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output Konfiguration: Standalone nur für Docker/Plesk, sonst Standard (für Azure SWA)
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,

  // Bilder-Optimierung mit Performance-Fokus
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dimetrics.io", // 🛡️ SECURITY FIX: Wildcard entfernt
      },
    ],
    // Auf Azure SWA kann die Image Optimization langsam sein (Cold Starts).
    // Falls Bilder nicht laden, unoptimized: true setzen.
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000, // 1 Jahr Cache
    dangerouslyAllowSVG: false, // 🛡️ SECURITY FIX: SVG deaktiviert
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Bundle-Optimierung
  turbopack: {},

  webpack: (config, { isServer }) => {
    // Optimiere Bundle-Splitting
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // SVG-Optimierung
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  // Korrekte Konfiguration für Next.js 15
  serverExternalPackages: ["@getbrevo/brevo"],

  // SEO-Redirects für deutsche URLs
  async redirects() {
    return [
      // Deutsche URL-Umleitungen
      {
        source: "/ueber-dimetrics",
        destination: "/about",
        permanent: true, // 301 Redirect für SEO
      },
      {
        source: "/kontakt",
        destination: "/contact-us",
        permanent: true, // 301 Redirect für SEO
      },
      // Alternative Schreibweisen
      {
        source: "/über-dimetrics",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/ueber-uns",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/über-uns",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/kontakt-uns",
        destination: "/contact-us",
        permanent: true,
      },
      // Legacy URLs falls vorhanden
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
