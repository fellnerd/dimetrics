import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AGB - Allgemeine Geschäftsbedingungen | Dimetrics - Digital Innovation Austria",
  description:
    "Allgemeine Geschäftsbedingungen der Dimetrics (Daniel Fellner) für IT-Beratung, Cloud-Strategien und Softwareentwicklung in Österreich. Rechtliche Rahmenbedingungen für digitale Transformation.",
  keywords: [
    "AGB Dimetrics",
    "Allgemeine Geschäftsbedingungen",
    "IT-Beratung AGB",
    "Softwareentwicklung Österreich",
    "Cloud-Strategien AGB",
    "Geschäftsbedingungen IT-Consulting",
    "Dimetrics Vertragsbedingungen",
    "Digital Innovation AGB",
    "IT-Services Österreich AGB",
    "Daniel Fellner AGB",
  ],
  authors: [{ name: "Daniel Fellner", url: "https://dimetrics.io" }],
  creator: "Dimetrics - Daniel Fellner",
  publisher: "Dimetrics",
  robots: "index, follow",
  openGraph: {
    title: "AGB - Allgemeine Geschäftsbedingungen | Dimetrics",
    description:
      "Rechtliche Rahmenbedingungen für IT-Beratung, Cloud-Strategien und Softwareentwicklung bei Dimetrics (Daniel Fellner) in Österreich.",
    url: "https://dimetrics.io/agb/",
    siteName: "Dimetrics",
    locale: "de_AT",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AGB - Allgemeine Geschäftsbedingungen | Dimetrics",
    description:
      "Rechtliche Rahmenbedingungen für IT-Beratung und digitale Transformation bei Dimetrics in Österreich.",
    creator: "@dimetrics_io",
  },
  alternates: {
    canonical: "https://dimetrics.io/agb/",
  },
};

export default function AGBLayout({ children }: { children: React.ReactNode }) {
  return children;
}
