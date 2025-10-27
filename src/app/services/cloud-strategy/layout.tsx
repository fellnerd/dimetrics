import type { Metadata } from "next";
import { PageLayout } from "@/components/page-layout";

export const metadata: Metadata = {
  title: "AI Cloud Beratung | Cloud-Strategie & Migration | dimetrics.io",
  description:
    "Take the world by cloud - Professionelle Cloud-Strategie und Migration für Ihr Unternehmen. Azure, AWS, Google Cloud. Von der Planung bis zum laufenden Betrieb.",
  keywords:
    "AI Cloud Beratung, Cloud Strategie Österreich, Azure Cloud Migration, AWS Cloud Beratung, Google Cloud Platform, Hybrid Cloud Lösungen, Cloud Migration Services, Cloud Architektur, Public Private Cloud, Cloud Sicherheit, Cloud Performance, IT-Infrastruktur Modernisierung, dimetrics",
  openGraph: {
    title: "AI Cloud Beratung | Take the world by cloud",
    description:
      "Professionelle Cloud-Strategien für maximale Flexibilität und Effizienz. Azure, AWS, Google Cloud Migration und Betrieb.",
    url: "https://dimetrics.io/services/cloud-strategy",
    type: "website",
    images: [
      {
        url: "https://dimetrics.io/images/services/cloud-strategy.svg",
        width: 1200,
        height: 630,
        alt: "AI Cloud Beratung Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Cloud Beratung | dimetrics.io",
    description:
      "Take the world by cloud - Professionelle Cloud-Strategien für österreichische Unternehmen.",
    images: ["https://dimetrics.io/images/services/cloud-strategy.svg"],
  },
  alternates: {
    canonical: "https://dimetrics.io/services/cloud-strategy",
  },
};

export default function CloudStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout>{children}</PageLayout>;
}
