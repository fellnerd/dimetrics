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
    label: "Automatisierte Workflows",
    value: "End-to-End",
    description:
      "Vom Bewerbungseingang bis zur Entscheidung laufen Prozesse strukturiert und nachvollziehbar.",
  },
  {
    label: "Digitaler Lebenslauf",
    value: "Zentrale Profile",
    description:
      "Kandidateninformationen werden gebündelt, wodurch Recruiting-Teams schneller reagieren können.",
  },
  {
    label: "Transparente Zusammenarbeit",
    value: "Kollaborativ",
    description:
      "Alle Stakeholder sehen den Status in Echtzeit und treffen fundierte Entscheidungen.",
  },
];

const recruitingMetrics = [
  {
    value: "+32%",
    label: "Mehr Bewerbungen",
    description:
      "Gezielte Automatisierung und klare Kommunikation erhöhen die Anzahl qualifizierter Kandidat:innen.",
  },
  {
    value: "+56%",
    label: "Mehr Interaktionen",
    description:
      "Gemeinsame Workflows und Statusupdates fördern die Zusammenarbeit im Recruiting-Team.",
  },
  {
    value: "+72%",
    label: "Geeignete Kandidaten",
    description:
      "Transparente Prozesse und Reports verbessern die Auswahl passender Talente.",
  },
];

export default function DynamischesRecruitingCrmPage() {
  return (
    <>
      <HeroSectionSplit
        imageSrc="/images/projects/recruiting-crm.png"
        imageAlt="Recruiting CRM von Dimetrics"
        imageWidth={700}
        imageHeight={600}
        title="Dynamisches Recruiting CRM"
        description="Das dynamische Recruiting CRM von Dimetrics automatisiert Bewerbungsprozesse, verbessert die Zusammenarbeit und schafft Transparenz im gesamten Bewerbungsprozess."
        backgroundColor="black"
        textColor="white"
      />

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Header.H2 sectionLabel="Lösungsbericht" orientation="center">
            <span className="block">Dynamische Recruiting</span>
            <span className="block">Software</span>
          </Header.H2>

          <Typography.Lead className="max-w-3xl mx-auto text-center text-gray-900">
            Das dynamische Recruiting CRM digitalisiert den gesamten
            Bewerbungsprozess und schafft volle Transparenz für Teams.
          </Typography.Lead>
        </Content>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <Content>
          <Header.H3 sectionLabel="Recruiting" orientation="left">
            Smarte Automatisierung für effizientes Bewerbermanagement
          </Header.H3>

          <Content.Row cols={2} gap="lg" alignItems="center">
            <Content.Column gap="lg" className="text-lg text-gray-800">
              <Typography.Body className="text-lg text-gray-800">
                Der Wettbewerb um Talente verlangt nach schnellen, transparenten
                und effizienten Lösungen. Die kollaborative Recruiting-Software
                von Dimetrics digitalisiert sämtliche Schritte vom Eingang der
                Bewerbung über die Bewertung bis zur Entscheidung.
              </Typography.Body>
              <Typography.Body className="text-lg text-gray-800">
                Automatisierte Workflows beschleunigen das Bewerbermanagement,
                während detaillierte Reports wertvolle Einblicke für HR-Teams
                liefern. Entscheidungen werden nachvollziehbar und messbar.
              </Typography.Body>
            </Content.Column>

            <Content.Column>
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="/images/projects/recruiting-crm.png"
                  alt="Recruiting Workflow in Dimetrics"
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
                Der digitale Lebenslauf sorgt für strukturierte
                Kandidatenprofile und einen vollständigen Überblick aller
                Stationen. Gleichzeitig garantiert der transparente
                Bewerbungsprozess Nachvollziehbarkeit für alle Beteiligten.
              </Typography.Body>
            </Content.Column>

            <Content.Column gap="lg">
              <Typography.Body className="text-lg text-gray-800">
                Kollaborative Funktionen ermöglichen es Teams, gemeinsam an
                Kandidaten zu arbeiten und Feedback in Echtzeit zu teilen. Das
                Ergebnis: Mehr Tempo, weniger manuelle Aufgaben und ein
                optimierter Recruiting-Prozess.
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

          <SolutionKPIGrid items={recruitingMetrics} columns={3} />
        </Content>
      </section>
    </>
  );
}
