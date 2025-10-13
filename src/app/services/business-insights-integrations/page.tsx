"use client";

import { motion } from "framer-motion";
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
        imageSrc="/images/services/bi-image.svg"
        imageAlt="Business Insights & Integrations"
        imageWidth={900}
        imageHeight={800}
        title="Business Insights & Integrations"
        description="Maximieren Sie Ihr Geschäftspotenzial mit unserer maßgeschneiderten Cloud-Strategie. Wir helfen Ihnen, die perfekte Cloud-Lösung zu finden, die Ihre Geschäftsziele unterstützt und Ihr Unternehmen in die Zukunft führt."
        backgroundColor="black"
        textColor="white"
      />

      {/* Main Content Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Content maxWidth="7xl">
            <Content.Row cols={2} alignItems="start">
              <Content.Column>
                <Header.H2>
                  Business Insights & Integrationen – Klarheit durch Daten
                </Header.H2>
              </Content.Column>

              <Content.Column>
                <div className="space-y-6">
                  <Typography.Body className="text-lg">
                    Mit Dimetrics Business Insights verknüpfen und harmonisieren
                    wir Daten aus unterschiedlichen Systemen, um eine zentrale
                    Grundlage für datengetriebene Entscheidungen zu schaffen.
                    Unsere Data Engineering-Expertise sorgt dafür, dass Sie
                    komplexe Daten mit Power BI-Lösungen klar visualisieren
                    können – inklusive direkt umsetzbarer Handlungsempfehlungen.
                  </Typography.Body>

                  <Typography.Body className="text-lg">
                    Zusätzlich ermöglichen wir es Ihnen, Ihre Power BI-Berichte
                    mühelos mit Ihren Kunden zu teilen – ganz ohne, dass diese
                    eine eigene Lizenz benötigen.
                  </Typography.Body>
                </div>
              </Content.Column>
            </Content.Row>
          </Content>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
                      <strong>Datenintegration und -harmonisierung:</strong> Wir
                      verbinden und bereinigen Daten aus verschiedenen Quellen
                      (CRM, ERP, Marketing-Tools etc.) für eine einheitliche
                      Datenbasis
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
                      <strong>Data Engineering:</strong> Unsere Experten
                      entwickeln robuste Datenpipelines und -modelle, um Ihre
                      Daten optimal für Analysen vorzubereiten.
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
                      <strong>Power BI-basierte Datenvisualisierung:</strong>{" "}
                      Wir erstellen intuitive Dashboards und Berichte in Power
                      BI, die komplexe Zusammenhänge verständlich machen und
                      actionable Insights liefern.
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
                      <strong>
                        Lizenzfreies Teilen von Power BI-Berichten:
                      </strong>{" "}
                      Ermöglichen Sie Ihren Kunden den einfachen Zugriff auf
                      wichtige Erkenntnisse, ohne dass diese eigene Power
                      BI-Lizenzen benötigen.
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
                      <strong>
                        Entwicklung umsetzbarer Handlungsempfehlungen:
                      </strong>{" "}
                      Unsere Analysen gehen über die reine Visualisierung hinaus
                      – wir leiten konkrete Handlungsempfehlungen ab, die Sie
                      direkt in Ihrem Geschäft umsetzen können.
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
        </motion.div>
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
