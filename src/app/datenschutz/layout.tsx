import { PageLayout } from "@/components/page-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz - dimetrics.io | DSGVO Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Dimetrics nach EU-Datenschutz-Grundverordnung (DSGVO). Informationen zur Datenerfassung, Kontaktformular, E-Mail-Verkehr und Ihre Rechte als Nutzer unserer Website.",
  keywords: [
    "Datenschutz Dimetrics",
    "DSGVO Datenschutzerklärung",
    "Datenschutz-Grundverordnung",
    "Kontaktformular Datenschutz",
    "E-Mail Verkehr Datenschutz",
    "Server Log Dateien",
    "Ihre Rechte DSGVO",
    "Datenerfassung Website",
    "Hosting Datenschutz",
  ],
  authors: [{ name: "Dimetrics - Daniel Fellner" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dimetrics.io/datenschutz",
  },
};

export default function DatenschutzLayout({
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
