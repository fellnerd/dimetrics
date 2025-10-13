import { PageLayout } from "@/components/page-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum - dimetrics.io | Rechtliche Angaben",
  description:
    "Impressum der Dimetrics - Daniel Fellner. Rechtliche Angaben gemäß § 5 TMG und § 55 RStV. Kontakt, Geschäftsführung und Unternehmensangaben aus St. Veit an der Glan, Österreich.",
  keywords: [
    "Impressum Dimetrics",
    "Daniel Fellner Dimetrics",
    "Rechtliche Angaben",
    "Kontakt Dimetrics",
    "Unternehmensangaben",
    "St. Veit an der Glan",
    "Österreich IT Unternehmen",
    "Geschäftsführung",
    "Umsatzsteuer ID",
  ],
  authors: [{ name: "Dimetrics - Daniel Fellner" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dimetrics.io/impressum",
  },
};

export default function ImpressumLayout({
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
