import type { Metadata } from "next";
import { PageLayout } from "@/components/page-layout";

export const metadata: Metadata = {
  title: "Business Process Automation auf einer Plattform | dimetrics.io",
  description:
    "Unsere leistungsstarke Low-Code/No-Code-Plattform ermöglicht die schnelle Erstellung maßgeschneiderter Anwendungen – ganz ohne tiefgehende Programmierkenntnisse. Digitale Transformation mit der Dimetrics Platform.",
  keywords:
    "Business Process Automation, Low-Code Platform, No-Code Entwicklung, Prozessautomatisierung, Digital Workflow, BPM Software, Automatisierte Geschäftsprozesse, Enterprise Platform, Workflow Management, Digitale Transformation, Österreich, dimetrics",
  openGraph: {
    title: "Business Process Automation auf einer Plattform | dimetrics.io",
    description:
      "Leistungsstarke Low-Code/No-Code-Plattform für maßgeschneiderte Anwendungen ohne Programmierkenntnisse.",
    url: "https://dimetrics.io/business-process-automation-platform",
    type: "website",
    images: [
      {
        url: "https://dimetrics.io/images/platform/platform_dark.png",
        width: 1200,
        height: 630,
        alt: "Business Process Automation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Process Automation auf einer Plattform | dimetrics.io",
    description:
      "Low-Code/No-Code-Plattform für schnelle Anwendungsentwicklung ohne Programmierkenntnisse.",
    images: ["https://dimetrics.io/images/platform/platform_dark.png"],
  },
  alternates: {
    canonical: "https://dimetrics.io/business-process-automation-platform",
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
