import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cookie-Richtlinie | Dimetrics - Tracking-freie Website ohne Cookie-Banner",
  description:
    "Cookie-Richtlinie von Dimetrics: Keine Tracking-Cookies, kein Cookie-Banner erforderlich. Privacy by Design für IT-Beratung und digitale Transformation in Österreich.",
  keywords: [
    "Cookie-Richtlinie Dimetrics",
    "Cookies Dimetrics",
    "Privacy by Design",
    "DSGVO-konform ohne Tracking",
    "Cookie-freie Website",
    "Datenschutz IT-Beratung",
    "Tracking-freie Website",
    "Cookie-Banner nicht erforderlich",
    "Dimetrics Datenschutz",
    "Privacy Policy Austria",
  ],
  authors: [{ name: "Daniel Fellner", url: "https://dimetrics.io" }],
  creator: "Dimetrics - Daniel Fellner",
  publisher: "Dimetrics",
  robots: "index, follow",
  openGraph: {
    title: "Cookie-Richtlinie | Dimetrics - Privacy by Design",
    description:
      "Transparente Cookie-Richtlinie: Keine Tracking-Tools, kein Cookie-Banner. Privacy by Design bei Dimetrics IT-Beratung in Österreich.",
    url: "https://dimetrics.io/cookies/",
    siteName: "Dimetrics",
    locale: "de_AT",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cookie-Richtlinie | Dimetrics - Privacy by Design",
    description:
      "Tracking-freie Website ohne Cookie-Banner. Privacy by Design bei IT-Beratung und digitaler Transformation.",
    creator: "@dimetrics_io",
  },
  alternates: {
    canonical: "https://dimetrics.io/cookies/",
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
