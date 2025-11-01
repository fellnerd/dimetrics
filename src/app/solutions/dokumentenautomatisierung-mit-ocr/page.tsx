"use client";

import { Header } from "@/components/ui/header";
import Content from "@/components/ui/content/content";
import Typography from "@/components/ui/typography/typography";
import {
  HeroSectionSplit,
  SolutionKPIGrid,
} from "../../../components/sections";

const automationHighlights = [
  {
    label: "Dokumentenautomatisierung",
    value: "OCR Erkennung",
    description:
      "Rechnungen, Lieferscheine und Aufträge – auch handschriftliche – werden präzise digitalisiert.",
  },
  {
    label: "Verarbeitung",
    value: "24/7",
    description:
      "Automatisierte Workflows verarbeiten Dokumente rund um die Uhr ohne manuelle Eingriffe.",
  },
  {
    label: "Schnittstellen",
    value: "BMD Integration",
    description:
      "Nahtloser Datentransfer in bestehende Buchhaltungssysteme reduziert Fehler und Aufwand.",
  },
];

const impactHighlights = [
  {
    label: "Effizienz",
    value: "Digitale Prozesse",
    description:
      "Unternehmen sparen Zeit und Kosten, weil manuelle Dateneingabe entfällt.",
  },
  {
    label: "Produktivität",
    value: "Automatisierte Übergabe",
    description:
      "Erfasste Informationen werden direkt in Workflows und Reporting eingebunden.",
  },
  {
    label: "Transparenz",
    value: "Vollständige Nachvollziehbarkeit",
    description:
      "Jeder Schritt im Rechnungseingang lässt sich lückenlos dokumentieren.",
  },
];

export default function DokumentenautomatisierungMitOcrPage() {
  return (
    <>
      <HeroSectionSplit
        imageSrc="/images/projects/dokumentenautomatisierung-ocr.png"
        imageAlt="Dokumentenautomatisierung mit OCR"
        imageWidth={700}
        imageHeight={600}
        title="Automatisierung Ihrer Dokumente mit OCR"
        description="Dimetrics OCR digitalisiert Rechnungen, Lieferscheine und Aufträge – sogar handschriftliche."
        backgroundColor="black"
        textColor="white"
      />

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Header.H2 sectionLabel="Lösungsbericht" orientation="center">
            <span className="block">Dokumentenautomatisierung</span>
            <span className="block">mit OCR</span>
          </Header.H2>

          <Typography.Lead className="max-w-3xl mx-auto text-center text-gray-900">
            Dimetrics OCR digitalisiert Rechnungen, Lieferscheine und Aufträge –
            sogar handschriftliche. Die Integration in Buchhaltungssysteme wie
            BMD spart Zeit, reduziert Kosten und steigert die Produktivität.
          </Typography.Lead>
        </Content>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Header.H3 sectionLabel="Automatisierung" orientation="left">
            Automatisierte Dokumentenerfassung für maximale Effizienz
          </Header.H3>

          <Content.Row cols={2} gap="lg" alignItems="center">
            <Content.Column>
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="/images/projects/dokumentenautomatisierung-ocr.png"
                  alt="Dimetrics OCR Dashboard"
                  className="w-full object-cover"
                />
              </div>
            </Content.Column>

            <Content.Column gap="lg" className="text-lg text-gray-800">
              <Typography.Body className="text-lg text-gray-800">
                Die manuelle Verarbeitung von Dokumenten ist zeitaufwendig und
                fehleranfällig. Dimetrics OCR revolutioniert diesen Prozess
                durch eine präzise, automatisierte Dokumentenerfassung – selbst
                bei handschriftlichen Belegen.
              </Typography.Body>
              <Typography.Body className="text-lg text-gray-800">
                Automatisierte Workflows verarbeiten Eingangsbelege lückenlos
                und sorgen für konsistente Datenqualität in allen nachgelagerten
                Systemen.
              </Typography.Body>
            </Content.Column>
          </Content.Row>
        </Content>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Content.Row cols={2} gap="lg" alignItems="start">
            <Content.Column gap="lg">
              <Typography.Body className="text-lg text-gray-800">
                Dank der Integration in Buchhaltungssysteme wie BMD werden
                erfasste Daten automatisch übertragen. Manuelle Eingaben
                entfallen und Fehler werden deutlich reduziert.
              </Typography.Body>
            </Content.Column>

            <Content.Column gap="lg">
              <Typography.Body className="text-lg text-gray-800">
                Das Ergebnis ist ein digitalisierter, effizienter
                Rechnungseingangsprozess, der Unternehmen entlastet, Prozesse
                beschleunigt und den administrativen Aufwand minimiert.
              </Typography.Body>
            </Content.Column>
          </Content.Row>
        </Content>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <SolutionKPIGrid items={automationHighlights} columns={3} />
        </Content>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Header.H3 sectionLabel="Impact">Kennzahlen im Überblick</Header.H3>

          <SolutionKPIGrid items={impactHighlights} columns={3} />
        </Content>
      </section>
    </>
  );
}
