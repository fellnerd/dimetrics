"use client";

// import { motion } from "framer-motion"; // Deaktiviert - Ersetzt durch native Tailwind Animationen
import { Header } from "@/components/ui/header";
import Content from "@/components/ui/content/content";
import Typography from "@/components/ui/typography/typography";
import { PremiumButton } from "@/components/ui/buttons/premium-button";
import Link from "next/link";
import {
  CTAButtons,
  CTAHeader,
  HeroSectionSplit,
} from "../../../components/sections";

export default function CloudStrategyPage() {
  return (
    <>
      <HeroSectionSplit
        imageSrc="/images/services/coudai3.svg"
        imageAlt="Cloud Strategy"
        imageWidth={700}
        imageHeight={600}
        title="AI Cloud Beratung"
        description="Maximieren Sie Ihr Geschäftspotenzial mit unserer maßgeschneiderten Cloud-Strategie. Wir helfen Ihnen, die perfekte Cloud-Lösung zu finden, die Ihre Geschäftsziele unterstützt und Ihr Unternehmen in die Zukunft führt."
        backgroundColor="black"
        textColor="white"
      />

      {/* Main Content Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div
        >
          <Content maxWidth="7xl">
            <Content.Row cols={2} alignItems="start">
              <Content.Column>
                <Header.H2>
                  Cloud-Klarheit statt Datennebel: Wir lotsen Sie zum digitalen
                  Erfolg.
                </Header.H2>
              </Content.Column>

              <Content.Column>
                <div className="space-y-6">
                  <Typography.Body className="text-lg">
                    Eine durchdachte <strong>Cloud-Strategie</strong> ist der
                    Schlüssel zu mehr{" "}
                    <strong>Flexibilität, Skalierbarkeit und Effizienz</strong>.
                    Wir unterstützen Sie dabei, die{" "}
                    <strong>richtige Cloud-Lösung</strong> für Ihr Unternehmen
                    zu finden – ob{" "}
                    <strong>Public, Private oder Hybrid Cloud</strong>.
                  </Typography.Body>

                  <Typography.Body className="text-lg">
                    Unsere Experten analysieren Ihre bestehenden IT-Strukturen,
                    entwickeln eine{" "}
                    <strong>maßgeschneiderte Migrationsstrategie</strong> und
                    begleiten Sie von der{" "}
                    <strong>
                      Planung über die Umsetzung bis hin zum laufenden Betrieb
                    </strong>
                    . Dabei setzen wir auf{" "}
                    <strong>
                      sichere, performante und zukunftssichere Architekturen
                    </strong>
                    , die sich nahtlos in Ihre Geschäftsprozesse integrieren
                    lassen.
                  </Typography.Body>

                  <Typography.Body className="text-lg">
                    Ob{" "}
                    <strong>
                      Cloud-Migration, Kostenoptimierung oder
                      Compliance-Anforderungen
                    </strong>{" "}
                    – wir stehen Ihnen als Partner zur Seite, damit Sie das
                    volle Potenzial der Cloud ausschöpfen können.
                  </Typography.Body>
                </div>
              </Content.Column>
            </Content.Row>
          </Content>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div
        >
          <Content maxWidth="7xl">
            <Header.H3>Unsere Leistungen</Header.H3>

            <Content.Row cols={2} gap="lg">
              <Content.Column>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#a100ff] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>
                      <strong>Cloud-Strategie & Beratung</strong> - Entwicklung
                      einer maßgeschneiderten Cloud-Roadmap für Ihr Unternehmen
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#a100ff] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>
                      <strong>Cloud-Migration</strong> - Sichere und effiziente
                      Migration bestehender Systeme in die Cloud
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#a100ff] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>
                      <strong>Kostenoptimierung</strong> - Analyse und
                      Optimierung Ihrer Cloud-Kosten für maximale Effizienz
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#a100ff] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>
                      <strong>Compliance & Sicherheit</strong> - Sicherstellung
                      aller Compliance-Anforderungen und Datenschutz
                    </span>
                  </li>
                </ul>
              </Content.Column>

              <Content.Column>
                <img
                  src="/images/services/business-insights-bg.png"
                  alt="Unsere Cloud-Strategie Leistungen"
                  width={500}
                  height={400}
                  className="mx-auto"
                />
              </Content.Column>
            </Content.Row>
          </Content>
        </div>
      </section>
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="space-y-6">
          <CTAHeader theme="light" />
          <CTAButtons theme="light" />
        </div>
      </section>
    </>
  );
}
