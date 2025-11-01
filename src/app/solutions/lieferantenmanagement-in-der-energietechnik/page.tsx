"use client";

import { Header } from "@/components/ui/header";
import Content from "@/components/ui/content/content";
import Typography from "@/components/ui/typography/typography";
import {
  HeroSectionSplit,
  SolutionKPIGrid,
} from "../../../components/sections";

const processHighlights = [
  {
    label: "Automatisierte Gutschriften",
    value: "Digitale Abwicklung",
    description:
      "Rechnungen und Gutschriften werden automatisch erstellt und versendet, wodurch Fehler reduziert werden.",
  },
  {
    label: "Buchhaltung",
    value: "Optimierte Zusammenarbeit",
    description:
      "Transparente Schnittstellen entlasten die Finanzverwaltung und beschleunigen Abstimmungen.",
  },
  {
    label: "Datenqualität",
    value: "Volle Transparenz",
    description:
      "Aktuelle Informationen zu Lieferanten und Biomasse sichern fundierte Entscheidungen.",
  },
];

const impactMetrics = [
  {
    value: "+85%",
    label: "Schnellere Bestellungen",
    description:
      "Digitalisierte Abläufe verkürzen die Durchlaufzeiten und erhöhen die Versorgungssicherheit.",
  },
  {
    value: "+18%",
    label: "Bessere Lieferqualität",
    description:
      "Durchgängige Datentransparenz verbessert die Qualitätskontrolle der Biomasse.",
  },
  {
    value: "-80%",
    label: "Weniger Administration",
    description:
      "Automatisierte Prozesse reduzieren manuellen Aufwand in Einkauf und Buchhaltung drastisch.",
  },
];

export default function LieferantenmanagementInDerEnergietechnikPage() {
  return (
    <>
      <HeroSectionSplit
        imageSrc="/images/projects/lieferantenmanagement.png"
        imageAlt="Lieferantenmanagement Plattform"
        imageWidth={700}
        imageHeight={600}
        title="Lieferanten-management in der Energietechnik"
        description="Ein System zur Optimierung der Lieferantenverwaltung, automatischen Gutschrifterstellung und verbesserten Buchhaltungsprozessen."
        backgroundColor="black"
        textColor="white"
      />

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Header.H2 sectionLabel="Lösungsbericht" orientation="center">
            <span className="block">Lieferantenmanagement</span>
            <span className="block">in der Energietechnik</span>
          </Header.H2>

          <Typography.Lead className="max-w-3xl mx-auto text-center text-gray-900">
            Ein System entwickelt zur Optimierung der Lieferantenverwaltung,
            automatischen Gutschrifterstellung und Verbesserung der
            Buchhaltungsprozesse.
          </Typography.Lead>
        </Content>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Header.H3 sectionLabel="Use Case" orientation="left">
            Lieferantenmanagement und automatisierte Abrechnung für Bioenergie
            Kärnten
          </Header.H3>

          <Content.Row cols={2} gap="lg" alignItems="center">
            <Content.Column>
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="/images/projects/lieferantenmanagement.png"
                  alt="Dashboard für Lieferantenverwaltung"
                  className="w-full object-cover"
                />
              </div>
            </Content.Column>

            <Content.Column gap="lg" className="text-lg text-gray-800">
              <Typography.Body className="text-lg text-gray-800">
                Die Verwaltung von Lieferanten und die Qualitätssicherung von
                Biomasse stellen Energieunternehmen vor große Herausforderungen.
                Mit der speziell entwickelten Dimetrics-Plattform konnte
                Bioenergie Kärnten diese Prozesse effizienter gestalten und die
                Digitalisierung vorantreiben.
              </Typography.Body>
              <Typography.Body className="text-lg text-gray-800">
                Automatisierte Gutschriften eliminieren manuellen Aufwand –
                Rechnungen werden automatisch erstellt und versendet, was Zeit
                spart und Fehler reduziert.
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
                Die Plattform ermöglicht eine optimierte Zusammenarbeit mit der
                Buchhaltung. Finanzprozesse werden transparenter und schneller,
                weil sämtliche Daten in Echtzeit zur Verfügung stehen.
              </Typography.Body>
            </Content.Column>

            <Content.Column gap="lg">
              <Typography.Body className="text-lg text-gray-800">
                Zusätzlich sorgt das System für eine bessere Übersicht über
                Lieferanten und Biomasse-Qualität. Unternehmen treffen dadurch
                fundierte Entscheidungen auf Basis präziser Daten.
              </Typography.Body>
            </Content.Column>
          </Content.Row>
        </Content>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <SolutionKPIGrid items={processHighlights} columns={3} />
        </Content>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Header.H3 sectionLabel="Impact">Kennzahlen im Überblick</Header.H3>

          <SolutionKPIGrid items={impactMetrics} columns={3} />
        </Content>
      </section>
    </>
  );
}
