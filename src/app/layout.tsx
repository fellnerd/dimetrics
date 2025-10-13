import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "dimetrics.io - Gemeinsam neu erfinden",
  description:
    "Transformieren Sie Ihre Daten in strategische Erkenntnisse. Mit modernster Technologie und innovativen Lösungen gestalten wir die Zukunft Ihres Unternehmens.",
  keywords: [
    "Datenanalyse",
    "Business Intelligence",
    "Digitale Transformation",
    "Analytics",
    "Corporate Solutions",
  ],
  authors: [{ name: "dimetrics.io Team" }],
  openGraph: {
    title: "dimetrics.io - Gemeinsam neu erfinden",
    description: "Transformieren Sie Ihre Daten in strategische Erkenntnisse",
    siteName: "dimetrics.io",
    type: "website",
    locale: "de_DE",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
