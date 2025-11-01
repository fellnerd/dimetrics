"use client";

import { Header } from "@/components/ui/header";
import Content from "@/components/ui/content/content";
import Typography from "@/components/ui/typography/typography";
import {
  CTAButtons,
  CTAHeader,
  HeroSectionSplit,
  SolutionKPIGrid,
} from "../../../components/sections";

const highlightStats = [
  {
    label: "Automatisierte Einreichungen",
    value: "15.000+",
    description:
      "automatisiert verarbeitete Rechnungseinreichungen durch Dimetrics Cashback",
  },
  {
    label: "Aktionen umgesetzt",
    value: "8 Aktionen",
    description:
      "erfolgreich abgewickelt in Klagenfurt, Villach und Kötschach-Mauthen",
  },
];

const efficiencyMetrics = [
  {
    value: "55%",
    label: "Weniger Manpower",
    description: "Entlastung der Verwaltung durch digitale Workflows",
  },
  {
    value: "62%",
    label: "Mehr Produktivität",
    description: "Schnellere Koordination im Team dank zentraler Plattform",
  },
  {
    value: "85%",
    label: "Zeitersparnis",
    description: "Beschleunigte Auszahlung für Bürger:innen",
  },
];

export default function WKOCashbackPage() {
  return (
    <>
      <HeroSectionSplit
        imageSrc="/images/projects/wko-cashback.png"
        imageAlt="WKO Cashback Plattform"
        imageWidth={700}
        imageHeight={600}
        title="WKO Cashback Aktion"
        description="Dimetrics Cashback digitalisiert die komplette Abwicklung der WKO Kärnten: von der Einreichung über die Prüfung bis hin zur Auszahlung."
        backgroundColor="black"
        textColor="white"
      />

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Header.H2 sectionLabel="Lösungsbericht" orientation="center">
            <span className="block">WKO Cashback Aktion</span>
          </Header.H2>

          <Typography.Lead className="max-w-3xl mx-auto text-center text-gray-900">
            Dimetrics Cashback wurde speziell für die Wirtschaftskammer Kärnten
            entwickelt, um den gesamten Ablauf der Cashback-Aktionen effizienter
            und zeitsparender zu gestalten.
          </Typography.Lead>
        </Content>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Content.Row cols={2} gap="lg" alignItems="center">
            <Content.Column gap="lg" className="text-lg text-gray-800">
              <Typography.Body className="text-lg text-gray-800">
                Die Bearbeitung tausender Rechnungseinreichungen war eine
                zeitaufwändige Herausforderung. Dimetrics Cashback erfasst,
                verwaltet und verarbeitet Rückerstattungen digital – mit klaren
                Workflows für Prüfung, Freigabe und Auszahlung.
              </Typography.Body>
              <Typography.Body className="text-lg text-gray-800">
                Bereits heute werden über <strong>15.000 Einreichungen</strong>
                automatisiert bearbeitet. Die Plattform schafft Transparenz,
                reduziert manuelle Aufgaben und beschleunigt jede Aktion
                spürbar.
              </Typography.Body>
            </Content.Column>

            <Content.Column>
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="/images/projects/wko-cashback.png"
                  alt="Digitale Cashback Plattform"
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
                Die Plattform ermöglicht eine nahtlose Zusammenarbeit im Team,
                reduziert manuelle Aufwände und sorgt für eine schnellere,
                transparente Abwicklung. Intelligente Workflows minimieren
                Fehler und stellen sicher, dass jede Einreichung korrekt und
                rechtzeitig bearbeitet wird.
              </Typography.Body>
            </Content.Column>

            <Content.Column gap="lg">
              <Typography.Body className="text-lg text-gray-800">
                Dank der digitalen Prozessautomatisierung profitieren nicht nur
                die Verwaltungen von einer erheblichen Zeitersparnis, sondern
                auch die Bürgerinnen und Bürger von einer schnelleren Auszahlung
                ihrer Rückerstattungen.
              </Typography.Body>
            </Content.Column>
          </Content.Row>

          <div className="mt-12 max-w-4xl mx-auto text-center space-y-4">
            <Typography.Body className="text-lg text-gray-800">
              <strong>8 Cashback-Aktionen</strong> wurden bereits erfolgreich
              umgesetzt – darunter Klagenfurt, Villach und Kötschach-Mauthen.
            </Typography.Body>
          </div>
        </Content>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <SolutionKPIGrid items={highlightStats} columns={2} />
        </Content>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Header.H3 sectionLabel="Impact">Kennzahlen im Überblick</Header.H3>

          <SolutionKPIGrid items={efficiencyMetrics} columns={3} />
        </Content>
      </section>
    </>
  );
}
