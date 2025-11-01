import { PageLayout } from "@/components/page-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lösungen & Erfolgsgeschichten | dimetrics.io",
  description:
    "Erkunden Sie praxisnahe Erfolgsgeschichten unserer digitalen Lösungen: moderne Plattformen, Automatisierung, Datenprodukte und KI-Use-Cases, die messbare Ergebnisse liefern.",
  keywords: [
    "Digitale Lösungen",
    "Erfolgsgeschichten",
    "Business Applikationen",
    "Datenplattform",
    "Automatisierung",
    "dimetrics Projekte",
    "Case Studies",
    "Low-Code Lösungen",
    "Power BI Umsetzung",
    "Enterprise Apps",
  ],
  openGraph: {
    title: "dimetrics Lösungen | Digitale Erfolgsgeschichten",
    description:
      "Case Studies zu Projekten rund um Daten, Automatisierung und individuelle Geschäftsanwendungen von dimetrics.",
    siteName: "dimetrics.io",
    type: "website",
    locale: "de_AT",
    url: "https://dimetrics.io/solutions",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dimetrics.io/solutions",
  },
};

export default function SolutionsLayout({
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
