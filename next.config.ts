import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance-Optimierungen
  compress: true,

  // Output für Plesk Deployment
  output: "standalone",

  // Experimental Features für Performance
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-slot",
      "@radix-ui/react-separator",
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
    ],
    webVitalsAttribution: ["CLS", "LCP"],
  },

  // Turbopack-Konfiguration (ersetzt turbo)
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // Compiler-Optimierungen
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Bilder-Optimierung mit Performance-Fokus
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: false,
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000, // 1 Jahr Cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Bundle-Optimierung
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

  // Performance & Security Headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security Headers
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          // Performance Headers
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          // Font Performance
          {
            key: "Link",
            value:
              "<https://fonts.googleapis.com>; rel=preconnect; crossorigin",
          },
        ],
      },
      // Cache Static Assets
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

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
