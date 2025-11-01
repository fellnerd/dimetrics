import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WKO Cashback Aktion | Lösungen | dimetrics.io",
  description:
    "Wie dimetrics mit der Cashback Plattform der WKO Kärnten zehntausende Rechnungseinreichungen digitalisiert, Workflows automatisiert und Auszahlungen beschleunigt hat.",
  keywords: [
    "WKO Cashback",
    "Cashback Plattform",
    "digitale Verwaltung",
    "Rechnungseinreichungen",
    "dimetrics Projekt",
    "Workflow Automatisierung",
    "Fördermanagement",
    "E-Government",
    "Effizienz Verwaltung",
  ],
  openGraph: {
    title: "WKO Cashback Aktion | dimetrics Lösungsbericht",
    description:
      "Digitale Cashback-Plattform der WKO Kärnten: 15.000+ Einreichungen automatisiert, 8 Aktionen erfolgreich abgewickelt.",
    url: "https://dimetrics.io/solutions/wko-cashback-aktion",
    type: "article",
    images: [
      {
        url: "https://dimetrics.io/images/projects/wko-cashback.png",
        width: 1200,
        height: 630,
        alt: "WKO Cashback Aktion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WKO Cashback Aktion | dimetrics",
    description:
      "Digitale Cashback-Lösung für die Wirtschaftskammer Kärnten – automatisierte Abläufe, transparente Auszahlung, zufriedene Bürger:innen.",
    images: ["https://dimetrics.io/images/projects/wko-cashback.png"],
  },
  alternates: {
    canonical: "https://dimetrics.io/solutions/wko-cashback-aktion",
  },
};

export default function WKOCashbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
