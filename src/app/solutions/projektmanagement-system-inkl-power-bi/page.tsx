"use client";

import { Header } from "@/components/ui/header";
import Content from "@/components/ui/content/content";
import Typography from "@/components/ui/typography/typography";
import Link from "next/link";
import {
  CTAButtons,
  CTAHeader,
  HeroSectionSplit,
  SolutionKPIGrid,
} from "../../../components/sections";

const impactHighlights = [
  {
    label: "Schnellere Projekteinblicke",
    value: "+35%",
    description:
      "Weniger Zeitaufwand für manuelle Status-Updates und Reporting.",
  },
  {
    label: "Echtzeit-Transparenz",
    value: "100%",
    description:
      "Jeder Projektleiter sieht den aktuellen Fortschritt in einem Dashboard.",
  },
  {
    label: "Automatisierte Workflows",
    value: "+45%",
    description:
      "Mehr Effizienz durch automatisierte Freigaben und Benachrichtigungen.",
  },
];

export default function ProjektmanagementSystemPage() {
  return (
    <>
      <HeroSectionSplit
        imageSrc="/images/projects/projektmanagement-tool.png"
        imageAlt="Projektmanagement System inkl. Power BI"
        imageWidth={700}
        imageHeight={600}
        title="Projektmanagement System inkl. Power BI"
        description="Ein System, entwickelt um Arbeitsabläufe zu optimieren, Prozesse zu beschleunigen und wertvolle Echtzeit-Insights zu liefern."
        backgroundColor="black"
        textColor="white"
      />

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Header.H2 sectionLabel="Lösungsbericht" orientation="center">
            <span className="block">Projektmanagement System</span>
            <span className="block">inkl. Power BI</span>
          </Header.H2>

          <Typography.Lead className="max-w-3xl mx-auto text-center text-gray-900">
            Ein System, entwickelt um Arbeitsabläufe zu optimieren, Prozesse zu
            beschleunigen und wertvolle Echtzeit-Insights zu liefern.
          </Typography.Lead>
        </Content>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Content.Row cols={2} gap="lg" alignItems="center">
            <Content.Column gap="lg" className="text-lg text-gray-800">
              <Typography.Body className="text-lg text-gray-800">
                In einem zunehmend datengetriebenen Geschäftsumfeld war unser
                Kunde auf der Suche nach einer Lösung, die nicht nur Prozesse
                optimiert, sondern auch fundierte Entscheidungen in Echtzeit
                ermöglicht.
              </Typography.Body>
              <Typography.Body className="text-lg text-gray-800">
                Die Antwort: Eine intuitive Plattform, die Arbeitsabläufe
                vereinfacht, Prozesse beschleunigt und durch die nahtlose
                Integration von <strong>Power BI</strong> eine völlig neue
                Dimension der Datennutzung eröffnet.
              </Typography.Body>
            </Content.Column>

            <Content.Column>
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="/images/projects/projektmanagement-tool.png"
                  alt="Projektmanagement System mit Power BI"
                  className="w-full object-cover"
                />
              </div>
            </Content.Column>
          </Content.Row>
        </Content>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Typography.Body className="text-lg text-gray-800">
              Dank{" "}
              <strong>interaktiver Dashboards und Echtzeit-Analysen</strong>
              erhalten Mitarbeitende einen umfassenden Überblick über relevante
              Kennzahlen. Automatisierte Reports und intelligente
              Visualisierungen stehen jederzeit und überall zur Verfügung.
            </Typography.Body>
            <Typography.Body className="text-lg text-gray-800">
              Das Ergebnis ist eine transparente Steuerung, die eine schnellere
              und faktenbasierte Entscheidungsfindung ermöglicht.
            </Typography.Body>
          </div>
        </Content>
      </section>

      <section className="bg-gray-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-white">
        <Content>
          <Content.Row cols={2} gap="lg" alignItems="center">
            <Content.Column>
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <img
                  src="/images/platform/platform_dark.png"
                  alt="Project Management mit Power BI"
                  className="w-full object-cover"
                />
              </div>
            </Content.Column>

            <Content.Column gap="lg">
              <Typography.Body className="text-lg text-white">
                Das Ergebnis:{" "}
                <strong>Maximale Effizienz, reduzierte Reaktionszeiten</strong>{" "}
                und eine signifikante Verbesserung der Prozessqualität.
              </Typography.Body>
              <Typography.Body className="text-lg text-white">
                Mit der smarten Kombination aus Low-Code-Entwicklung und Power
                BI schaffen wir die Grundlage für eine digitale Zukunft, in der
                Daten nicht nur gesammelt, sondern aktiv genutzt werden – für
                nachhaltigen Erfolg.
              </Typography.Body>
            </Content.Column>
          </Content.Row>

          <div className="w-24 h-0.5 bg-gradient-to-r from-[#5facdb] via-[#A100FF] to-transparent mt-16"></div>
        </Content>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Header.H3 sectionLabel="Impact">Das Ergebnis in Zahlen</Header.H3>

          <SolutionKPIGrid items={impactHighlights} columns={3} />

          <Typography.Muted className="mt-8">
            Zahlen basieren auf einer internen Auswertung sechs Monate nach dem
            Go-Live.
          </Typography.Muted>
        </Content>
      </section>
    </>
  );
}
