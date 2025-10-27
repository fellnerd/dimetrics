import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "../components/structured-data";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "sans-serif",
  ],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Systeme verbinden. Effizienz entfalten. | dimetrics.io",
  description:
    "⚡ Von isolierten Systemen zu harmonischer Vernetzung – wir bauen Brücken zwischen Strategie und Technologie für nachhaltigen digitalen Erfolg. AI Cloud Lösungen, Low-Code Entwicklung & Business Integration, Data Analytics in Kärnten.",
  keywords: [
    // Primary Keywords - Austrian Market Focus
    "digitale transformation österreich",
    "cloud migration beratung österreich",
    "microsoft power platform österreich",
    "low code entwicklung österreich",
    "azure cloud strategie",
    "enterprise integration österreich",
    "business intelligence österreich",
    "api integration österreich",
    // Secondary Keywords - Service Specific
    "system integration kärnten",
    "automatisierung geschäftsprozesse",
    "data analytics lösungen österreich",
    "power bi beratung österreich",
    "digitalisierung unternehmen kärnten",
    "microsoft azure beratung",
    "cloud beratung kärnten",
    "software entwicklung österreich",
    // Long-tail Keywords - Local + Service
    "datenanalyse",
    "business process automation",
    "crm integration",
    "power platform consulting",
    "enterprise software development",
  ],
  authors: [{ name: "dimetrics.io - Digital Transformation Experts Austria" }],
  metadataBase: new URL("https://dimetrics.io"),
  alternates: {
    canonical: "https://dimetrics.io",
    languages: {
      "de-AT": "https://dimetrics.io",
      de: "https://dimetrics.io",
    },
  },
  openGraph: {
    title: "Systeme verbinden. Effizienz entfalten. | dimetrics.io",
    description:
      "⚡ Von isolierten Systemen zu harmonischer Vernetzung – wir bauen Brücken zwischen Strategie und Technologie für nachhaltigen digitalen Erfolg. AI Cloud Lösungen, Low-Code Entwicklung & Business Integration, Data Analytics in Kärnten.",
    siteName: "dimetrics.io",
    type: "website",
    locale: "de_AT",
    url: "https://dimetrics.io",
    images: [
      {
        url: "/images/hero/bg-hero.png",
        width: 1200,
        height: 630,
        alt: "dimetrics.io - Digitale Transformation und Cloud Migration Österreich",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Systeme verbinden. Effizienz entfalten. | dimetrics.io",
    description:
      "⚡ Microsoft Power Platform, Azure Cloud & Enterprise Integration in Österreich. 50+ erfolgreiche Projekte.",
    images: ["/images/hero/bg-hero.png"],
    creator: "@dimetrics_io",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: "Business Consulting",
  classification: "Digital Transformation Services Austria",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "geo.region": "AT-2", // Kärnten, Austria
    "geo.placename": "Klagenfurt, Kärnten, Austria",
    "geo.position": "46.6247;14.3051", // Klagenfurt coordinates
    ICBM: "46.6247, 14.3051",
    "DC.title": "dimetrics.io - Digitale Transformation Österreich",
    "DC.creator": "dimetrics.io Team",
    "DC.subject":
      "Microsoft Power Platform, Azure Cloud Migration, Enterprise Integration",
    "DC.description":
      "Digitale Transformation und Cloud Migration Services in Österreich",
    "DC.publisher": "dimetrics.io",
    "DC.language": "de-AT",
    "DC.coverage": "Austria, Kärnten",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        {/* Critical Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Preload Hero Image */}
        <link
          rel="preload"
          as="image"
          href="/images/hero/bg-hero.png"
          type="image/png"
          fetchPriority="high"
        />

        {/* DNS Prefetch für externe Ressourcen */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Viewport Meta für Performance */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className="font-sans antialiased bg-black text-white">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
