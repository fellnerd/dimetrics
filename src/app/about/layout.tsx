import { PageLayout } from "@/components/page-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Lösungen schaffen, die heute wirken und morgen noch stärker machen | dimetrics.io",
  description:
    "Dimetrics ist Ihr persönlicher Partner für digitale Effizienz im Unternehmen. Innovative Lösungen von strategischer Digitalberatung bis zur nahtlosen Integration Ihrer Daten und Prozesse.",
  keywords: [
    "Über dimetrics",
    "Digitale Transformation Partner",
    "Low-Code Entwicklung Österreich",
    "Digital Excellence Beratung",
    "Unternehmensphilosophie",
    "Digitale Effizienz",
    "Geschäftsprozess Optimierung",
    "Dimetrics Platform",
    "IT Beratung Kärnten",
    "Strategische Digitalberatung",
  ],
  authors: [{ name: "Daniel Fellner, Gründer dimetrics.io" }],
  openGraph: {
    title: "Lösungen schaffen, die heute wirken und morgen noch stärker machen",
    description:
      "Dimetrics ist Ihr persönlicher Partner für digitale Effizienz. Von strategischer Digitalberatung über Low-Code-Entwicklung bis zur nahtlosen Integration.",
    siteName: "dimetrics.io",
    type: "website",
    locale: "de_AT",
    url: "https://dimetrics.io/about",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dimetrics.io/about",
  },
};

export default function AboutLayout({
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
