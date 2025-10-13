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
        imageSrc="/images/services/eai-image2.svg"
        imageAlt="Enterprise Application Integration"
        imageWidth={900}
        imageHeight={800}
        title="Enterprise Application Integration"
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
                  Nahtlose Vernetzung für maximale Effizienz
                </Header.H2>
              </Content.Column>

              <Content.Column>
                <div className="space-y-6">
                  <Typography.Body className="text-lg">
                    Mit unserer Enterprise Application Integration (EAI)
                    schaffen wir eine harmonisierte Systemlandschaft, in der
                    Ihre Anwendungen und Daten effizient miteinander
                    kommunizieren. Wir bieten Ihnen Lösungen für effizientes
                    API-Management, das eine reibungslose und moderne
                    Schnittstellenkommunikation ermöglicht.
                  </Typography.Body>

                  <Typography.Body className="text-lg">
                    Durch die Automatisierung von Geschäftsprozessen sorgen wir
                    für eine kostensparende Vernetzung Ihrer Systeme und
                    steigern so die Effizienz Ihres Unternehmens.
                  </Typography.Body>

                  <Typography.Body className="text-lg">
                    Mit der zentralen Datenkonsolidierung und
                    Low-Code-Technologie bieten wir Ihnen eine einheitliche
                    Datenbasis, die fundierte und schnelle Entscheidungen
                    ermöglicht.
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
                      <strong>Harmonisierte Systemlandschaft</strong> -
                      Integration für reibungslosen Datenfluss.
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
                      <strong>Effizientes API-Management</strong> - Effizientes
                      API-Management
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
                      <strong>Automatisierung von Geschäftsprozessen</strong> -
                      Effiziente und kostensparende Systemvernetzung.
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
                      <strong>Zentrale Datenkonsolidierung mit Low-Code</strong>{" "}
                      - Einheitliche Datenbasis für fundierte Entscheidungen.
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
