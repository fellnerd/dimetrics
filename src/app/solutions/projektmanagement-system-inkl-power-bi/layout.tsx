import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projektmanagement System inkl. Power BI | Lösungen | dimetrics.io",
  description:
    "Wie dimetrics ein integriertes Projektmanagement-System mit Power BI Dashboard entwickelt hat, um Transparenz, Automatisierung und Echtzeit-Steuerung für Teams zu schaffen.",
  keywords: [
    "Projektmanagement Plattform",
    "Power BI Integration",
    "dimetrics Projekt",
    "Digitale Transformation",
    "Low-Code Business App",
    "Echtzeit Reporting",
    "Automatisierte Workflows",
    "Projekt Dashboard",
    "Team Collaboration",
  ],
  openGraph: {
    title: "Projektmanagement System inkl. Power BI | dimetrics Lösungsbericht",
    description:
      "Ein modernes Projektmanagement-System mit integrierten Power BI Insights – entwickelt von dimetrics für maximale Transparenz und Effizienz.",
    url: "https://dimetrics.io/solutions/projektmanagement-system-inkl-power-bi",
    type: "article",
    images: [
      {
        url: "https://dimetrics.io/images/projects/projektmanagement-tool.png",
        width: 1200,
        height: 630,
        alt: "Projektmanagement System inkl. Power BI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projektmanagement System inkl. Power BI | dimetrics",
    description:
      "Ein integriertes Projektmanagement-System mit Power BI Dashboards sorgt für Echtzeitsteuerung und automatisierte Abläufe.",
    images: ["https://dimetrics.io/images/projects/projektmanagement-tool.png"],
  },
  alternates: {
    canonical:
      "https://dimetrics.io/solutions/projektmanagement-system-inkl-power-bi",
  },
};

export default function ProjectManagementPowerBILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
