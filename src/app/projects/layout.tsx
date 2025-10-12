import { PageLayout } from "@/components/page-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekte - dimetrics.io | Erfolgreiche Digitalisierungsprojekte",
  description:
    "Entdecken Sie unsere erfolgreichen Digitalisierungsprojekte: WKO Cashback, Projektmanagement-Tools, CRM-Systeme, Recruiting-Software und OCR-Lösungen. Innovative Lösungen für Unternehmen in Österreich.",
  keywords: [
    "Digitalisierungsprojekte",
    "WKO Cashback Aktion",
    "Projektmanagement System Power BI",
    "CRM Software Österreich",
    "Recruiting CRM",
    "OCR Dokumentenautomatisierung",
    "Supply Chain Management",
    "Low-Code Projekte",
    "Business Process Automation",
    "Enterprise Software Entwicklung",
  ],
  authors: [{ name: "Dimetrics Team" }],
  openGraph: {
    title: "Projekte - Dimetrics.io | Referenzen & Case Studies",
    description:
      "Erfolgreiche Digitalisierungsprojekte: Von Prozessautomatisierung bis Business Intelligence. Sehen Sie, wie wir Unternehmen digital transformiert haben.",
    siteName: "dimetrics.io",
    type: "website",
    locale: "de_AT",
    url: "https://dimetrics.io/projects",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dimetrics.io/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageLayout backgroundColor="white" textColor="black">
      {children}
    </PageLayout>
  );
}
