"use client";

import { Header } from "@/components/ui/header";
import Content from "@/components/ui/content/content";
import Typography from "@/components/ui/typography/typography";
import {
  HeroSectionSplit,
  SolutionKPIGrid,
} from "../../../components/sections";

const highlightStats = [
  {
    label: "Integrationen",
    value: "350+",
    description:
      "Schnittstellen zu CRM-, Kommunikations- und Analysetools sorgen für nahtlose Abläufe.",
  },
  {
    label: "Office Exchange",
    value: "Automatische Erfassung",
    description:
      "E-Mails, Termine und Kontakte werden ohne manuelle Pflege im CRM dokumentiert.",
  },
];

const performanceMetrics = [
  {
    value: "+42%",
    label: "Höhere Konversionsrate",
    description:
      "Gezielte Lead-Qualifizierung und smarte Follow-ups beschleunigen Abschlüsse.",
  },
  {
    value: "+68%",
    label: "Mehr Produktivität",
    description:
      "Automatisierte Prozesse entlasten Vertriebsteams und schaffen Zeit für Kundendialoge.",
  },
  {
    value: "+80%",
    label: "Höhere Kundenbindung",
    description:
      "Zentralisierte Daten und Reporting stärken individuelle Betreuung und Loyalität.",
  },
];

export default function CustomerRelationshipManagementToolPage() {
  return (
    <>
      <HeroSectionSplit
        imageSrc="/images/projects/customer-crm.png"
        imageAlt="CRM Dashboard von Dimetrics"
        imageWidth={700}
        imageHeight={600}
        title="Customer Relationship Management Tool"
        description="Dimetrics CRM optimiert Vertriebsteams mit Office Exchange Integration, Reporting und automatisierter Interaktionserfassung."
        backgroundColor="black"
        textColor="white"
      />

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Header.H2 sectionLabel="Lösungsbericht" orientation="center">
            <span className="block">Customer Relationship</span>
            <span className="block">Management Tool</span>
          </Header.H2>

          <Typography.Lead className="max-w-3xl mx-auto text-center text-gray-900">
            Dimetrics CRM optimiert Vertriebsteams mit Office Exchange
            Integration, smarten Reporting-Tools und automatisierter
            Interaktionserfassung.
          </Typography.Lead>
        </Content>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Header.H3 sectionLabel="Vertrieb" orientation="left">
            Smarte Vertriebsprozesse für maximale Effizienz
          </Header.H3>

          <Content.Row cols={2} gap="lg" alignItems="center">
            <Content.Column gap="lg" className="text-lg text-gray-800">
              <Typography.Body className="text-lg text-gray-800">
                In der heutigen schnelllebigen Geschäftswelt sind strukturierte
                Kundenbeziehungen und datenbasierte Entscheidungen der Schlüssel
                zum Vertriebserfolg. Genau hier setzt Dimetrics CRM an – eine
                maßgeschneiderte Lösung, die speziell entwickelt wurde, um die
                Effizienz und Produktivität von Vertriebsteams auf das nächste
                Level zu heben.
              </Typography.Body>
              <Typography.Body className="text-lg text-gray-800">
                Durch die nahtlose Integration mit Office Exchange werden
                sämtliche Kundeninteraktionen automatisch erfasst. Intuitive
                Reporting- und Datenanalysetools liefern tiefgehende Einblicke
                und unterstützen faktenbasierte Entscheidungen.
              </Typography.Body>
            </Content.Column>

            <Content.Column>
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="/images/projects/crm2.png"
                  alt="Dimetrics CRM Benutzeroberfläche"
                  className="w-full object-cover"
                />
              </div>
            </Content.Column>
          </Content.Row>
        </Content>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Content.Row cols={2} gap="lg" alignItems="start">
            <Content.Column gap="lg">
              <Typography.Body className="text-lg text-gray-800">
                Die automatisierte Erfassung sämtlicher Interaktionen eliminiert
                manuelle Eingaben und schafft Transparenz über den gesamten
                Vertriebsprozess. Teams profitieren von einem zentralen Blick
                auf alle Chancen, Aufgaben und Kundenhistorien.
              </Typography.Body>
            </Content.Column>

            <Content.Column gap="lg">
              <Typography.Body className="text-lg text-gray-800">
                Das Ergebnis: Ein smarter, digitalisierter Vertriebsprozess, der
                Zeit spart und die Abschlussraten erhöht. Dimetrics CRM legt den
                Grundstein für datengetriebene Kundenakquise und nachhaltige
                Geschäftsbeziehungen.
              </Typography.Body>
            </Content.Column>
          </Content.Row>
        </Content>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Header.H3 sectionLabel="Features">Über 350 Integrationen</Header.H3>

          <div className="mt-10 rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-lg">
            <img
              src="/images/projects/customer-crm.png"
              alt="Integrationen im Dimetrics CRM"
              className="w-full object-cover"
            />
          </div>

          <div className="mt-12">
            <SolutionKPIGrid items={highlightStats} columns={2} />
          </div>
        </Content>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Header.H3 sectionLabel="Impact">Kennzahlen im Überblick</Header.H3>

          <SolutionKPIGrid items={performanceMetrics} columns={3} />
        </Content>
      </section>
    </>
  );
}
