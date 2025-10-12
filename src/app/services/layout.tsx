import { PageLayout } from "@/components/page-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - dimetrics.io | Cloud-Strategien & Enterprise Integration",
  description:
    "Entdecken Sie unsere umfassenden Services für digitale Transformation: Cloud-Strategien, Enterprise Integration, Business Intelligence und Low-Code-Entwicklung. Maßgeschneiderte Lösungen für Ihr Unternehmen.",
  keywords: [
    "Cloud Strategien Services",
    "Enterprise Integration",
    "Business Intelligence",
    "Low-Code Entwicklung",
    "Digitale Transformation Services",
    "Dimetrics Platform",
    "Azure Cloud Beratung",
    "Data Analytics Services",
    "Process Automation",
    "IT Consulting Österreich",
  ],
  authors: [{ name: "Dimetrics Team" }],
  openGraph: {
    title: "Services - Dimetrics.io | Digitale Transformation Services",
    description:
      "Professionelle Services für Cloud-Migration, Enterprise Integration und Business Intelligence. Ihr Partner für erfolgreiche digitale Transformation.",
    siteName: "dimetrics.io",
    type: "website",
    locale: "de_AT",
    url: "https://dimetrics.io/services",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dimetrics.io/services",
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
