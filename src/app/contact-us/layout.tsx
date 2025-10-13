import { PageLayout } from "@/components/page-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - dimetrics.io | Ihre digitale Transformation beginnt hier",
  description:
    "Vereinbaren Sie ein kostenloses Beratungsgespräch mit unseren Experten für digitale Transformation, Cloud-Strategien und Low-Code-Entwicklung. Kontaktieren Sie Daniel Fellner, Anna Fellner und das Dimetrics-Team in St. Veit an der Glan, Österreich.",
  keywords: [
    "Kontakt Dimetrics",
    "Beratungsgespräch digitale Transformation",
    "Daniel Fellner Dimetrics",
    "Anna Fellner Digital Marketing",
    "Cloud Beratung Österreich",
    "Low-Code Entwicklung Kärnten",
    "Enterprise Integration Kontakt",
    "Business Intelligence Beratung",
    "St. Veit an der Glan IT",
    "Dimetrics Team",
  ],
  authors: [{ name: "Dimetrics Team" }],
  openGraph: {
    title: "Kontakt - Dimetrics.io | Kostenlose Beratung vereinbaren",
    description:
      "Starten Sie Ihre digitale Transformation mit einem kostenlosen Beratungsgespräch. Experten für Cloud-Strategien, Low-Code-Entwicklung und Enterprise Integration.",
    siteName: "dimetrics.io",
    type: "website",
    locale: "de_AT",
    url: "https://dimetrics.io/contact-us",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dimetrics.io/contact-us",
  },
};

export default function ServicesLayout({
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
