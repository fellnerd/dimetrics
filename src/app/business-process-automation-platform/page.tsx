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
  HeroBackground,
  HeroCTA,
  HeroDescription,
  HeroKPIs,
  HeroSectionSplit,
  HeroTitle,
} from "../../components/sections";
import Image from "next/image";
import { CallToActionSection } from "../../components/cta-section";
import { ServiceSlideshow } from "@/components/ui/service-slideshow";

export default function CloudStrategyPage() {
  const kpis = [
    { number: "90%", label: "schnellere App-Entwicklung" },
    { number: "68%", label: "geringere Entwicklungskosten" },
    { number: "70%", label: "mehr Stabilität" },
    { number: "1500+", label: "Integrationsmöglichkeiten" },
  ];
  return (
    <>
      <section className="relative bg-black overflow-hidden pt-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:min-h-screen">
          {/* Left Content - Text with container */}

          {/* Right Content - Right-aligned Background Image */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-2/5 flex items-center justify-end overflow-visible">
            <div className="relative flex items-center justify-end w-auto h-auto animate-fade-slide-in-right-delayed">
              <Image
                src={"/images/platform/platform_dark.png"}
                alt={"Business Process Automation Platform"}
                width={1000}
                height={650}
                className="max-w-none h-auto opacity-70 transform rotate-y-12 rotate-x-6"
                style={{
                  transform:
                    "perspective(1000px) rotateY(-15deg) rotateX(8deg)",
                  transformStyle: "preserve-3d",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/80 lg:to-black/40"></div>
            </div>
          </div>

          {/* Title - Desktop positioned absolutely */}
          <div className="hidden lg:block absolute lg:top-32 lg:left-24 lg:w-[36rem] z-20">
            <div className="space-y-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800/40 rounded-2xl p-6 max-w-2xl animate-fade-slide-in-left-delayed">
              <h1 className="text-4xl xl:text-5xl font-bold leading-tight text-left">
                <span className="block text-white mb-2">
                  Business Process Automation auf einer
                </span>
                <span className="block text-[#5facdb] mb-3">Plattform</span>
              </h1>

              <HeroDescription>
                Unsere leistungsstarke Low-Code/No-Code-Plattform ermöglicht die
                schnelle Erstellung maßgeschneiderter Anwendungen – ganz ohne
                tiefgehende Programmierkenntnisse
              </HeroDescription>
            </div>
          </div>

          {/* KPI Cards - Desktop positioned absolutely */}
          <div className="hidden lg:block absolute lg:bottom-32 lg:left-20 lg:w-[32rem] z-20">
            <HeroKPIs kpis={kpis} />
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#3d55e2]/5 via-black to-[#5facdb]/5"></div>
      </section>

      {/* Kernfunktionen Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="animate-fade-slide-in-up">
          <Content maxWidth="7xl">
            <Header.H2 orientation="center">
              Von komplexen Systemen. Zu harmonischer Vernetzung.
            </Header.H2>
            <div className="flex -mt-10 justify-center content-center mb-16 max-w-3xl mx-auto">
              <Typography.Lead className="text-center">
                Eine einzige Plattform für alle Ihre Geschäftsprozesse – von der
                Datenintegration bis zur Automatisierung
              </Typography.Lead>
            </div>

            <Content.Row cols={3} gap="lg">
              <Content.Column>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#3d55e2] to-[#5facdb] rounded-xl flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <Typography.SubHeadline className="text-xl mb-4">
                    Low-Code/No-Code Development
                  </Typography.SubHeadline>
                  <Typography.Body className="text-gray-600">
                    Erstellen Sie komplexe Anwendungen und Workflows ohne
                    Programmierkenntnisse. Drag & Drop Interface für intuitive
                    Entwicklung.
                  </Typography.Body>
                </div>
              </Content.Column>

              <Content.Column>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#5facdb] to-[#A100FF] rounded-xl flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      />
                    </svg>
                  </div>
                  <Typography.SubHeadline className="text-xl mb-4">
                    Zentrale Datenintegration
                  </Typography.SubHeadline>
                  <Typography.Body className="text-gray-600">
                    Verbinden Sie alle Ihre Systeme und Datenquellen. Über 1500+
                    Integrationsmöglichkeiten für nahtlose Datenflüsse.
                  </Typography.Body>
                </div>
              </Content.Column>

              <Content.Column>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#A100FF] to-[#3d55e2] rounded-xl flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <Typography.SubHeadline className="text-xl mb-4">
                    Business Intelligence & Analytics
                  </Typography.SubHeadline>
                  <Typography.Body className="text-gray-600">
                    Power BI Integration für lizenzfreie Berichte. Erstellen Sie
                    Dashboards und Analysen ohne zusätzliche Lizenzkosten.
                  </Typography.Body>
                </div>
              </Content.Column>
            </Content.Row>

            <Content.Row cols={3} gap="lg" className="mt-12">
              <Content.Column>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#3d55e2] to-[#A100FF] rounded-xl flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011 1v1a2 2 0 104 0V4z"
                      />
                    </svg>
                  </div>
                  <Typography.SubHeadline className="text-xl mb-4">
                    Prozessautomatisierung
                  </Typography.SubHeadline>
                  <Typography.Body className="text-gray-600">
                    Automatisieren Sie wiederkehrende Aufgaben und Workflows.
                    Zapier-Integration für maximale Flexibilität und Effizienz.
                  </Typography.Body>
                </div>
              </Content.Column>

              <Content.Column>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#5facdb] to-[#3d55e2] rounded-xl flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <Typography.SubHeadline className="text-xl mb-4">
                    Sicherheit & Compliance
                  </Typography.SubHeadline>
                  <Typography.Body className="text-gray-600">
                    DSGVO-konforme Datenverarbeitung und -speicherung.
                    Rollenbasierte Zugriffskontrolle und sichere
                    Cloud-Infrastruktur.
                  </Typography.Body>
                </div>
              </Content.Column>

              <Content.Column>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#A100FF] to-[#5facdb] rounded-xl flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <Typography.SubHeadline className="text-xl mb-4">
                    Schnelle Bereitstellung
                  </Typography.SubHeadline>
                  <Typography.Body className="text-gray-600">
                    Von der Idee zur fertigen Anwendung in Rekordzeit. 90%
                    schnellere Entwicklung und 68% geringere Kosten.
                  </Typography.Body>
                </div>
              </Content.Column>
            </Content.Row>
          </Content>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="space-y-6">
          <CTAHeader
            title="Unsere Lösungen mit"
            highlightText="Dimetrics"
            theme="light"
            description="Entdecken Sie, wie Dimetrics Ihre Geschäftsprozesse vereinfachen kann."
          />
          <CTAButtons
            primaryText="Zu den Lösungesberichten"
            secondaryText="Demo vereinbaren"
            theme="light"
          />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="animate-fade-slide-in-up">
          <Content maxWidth="7xl">
            <Content.Row cols={2} alignItems="start" gap="xl">
              <Content.Column>
                <Header.H2>Build Powerful Dynamic Services</Header.H2>
                <div className="space-y-6">
                  <Typography.SectionTitle>
                    <strong>
                      Unsere Leidenschaft gilt Ihren agilen und nachhaltigen
                      Lösungen.
                    </strong>
                  </Typography.SectionTitle>
                  <Typography.SectionTitle>
                    Mit unserer <strong>Low-Code-Plattform</strong> optimieren
                    wir Ihre Systemlandschaft, steigern Ihre Produktivität und
                    ermöglichen eine{" "}
                    <strong>
                      90% schnellere Umsetzung Ihrer Geschäftslösungen!
                    </strong>
                  </Typography.SectionTitle>
                  <div className="relative mt-8 aspect-[3/2] rounded-2xl overflow-hidden bg-gray-100">
                    <ServiceSlideshow
                      images={[
                        "/images/platform/platform_dark.png",
                        "/images/platform/platform_light.png",
                        "/images/platform/platform_chatai_dark.png",
                      ]}
                      alt="Dimetrics Low-Code Plattform"
                      autoPlay={true}
                      interval={4000}
                    />
                  </div>
                </div>
              </Content.Column>

              <Content.Column>
                <div className="space-y-6">
                  <Typography.SubHeadline className="text-lg">
                    Geschäftsprozesse effizient & mühelos steuern
                  </Typography.SubHeadline>

                  <Typography.Body className="text-lg">
                    Mit Dimetrics automatisieren Sie Ihre Geschäftsprozesse
                    mühelos – von der Datenverarbeitung bis zur Kommunikation.
                  </Typography.Body>

                  <Typography.Body className="text-lg">
                    Aktionen werden automatisch bei bestimmten Ereignissen
                    ausgelöst, sodass Aufgaben wie das Versenden von E-Mails
                    oder das Anpassen von Datenmodellen ganz ohne manuellen
                    Aufwand ablaufen.
                  </Typography.Body>

                  <Typography.Body className="text-lg">
                    Für noch mehr Flexibilität steht Ihnen ein leistungsstarker
                    Konnektor zur Verfügung, der alle Funktionen von Zapier
                    integriert.
                  </Typography.Body>

                  <Typography.SubHeadline className="text-lg">
                    Datenmodelle per Drag & Drop erstellen
                  </Typography.SubHeadline>
                  <Typography.Body className="text-lg">
                    Die integrierte Drag & Drop Funktionalität ermöglicht es
                    Ihnen, auf einfache und intuitive Weise komplexe
                    Objektstrukturen zu erstellen und diese an Ihre
                    Geschäftsdaten anzupassen.
                  </Typography.Body>

                  <Typography.Body className="text-lg">
                    Mit einer Vielzahl von Attributen wie einfachen Textfeldern,
                    Tabellenrelationen, Uploadfeldern oder der Integration von
                    Google Maps Karten können Sie Ihre Datenmodelle perfekt auf
                    Ihre Bedürfnisse zuschneiden.
                  </Typography.Body>

                  <Typography.Body className="text-lg">
                    Der Dimetrics Service Composer ist darauf ausgelegt, Ihre
                    Arbeitsabläufe zu optimieren und Ihnen die Möglichkeit zu
                    geben, schnell und effizient Datenmodelle zu erstellen und
                    zu verwalten.
                  </Typography.Body>
                </div>
              </Content.Column>
            </Content.Row>
          </Content>
        </div>
      </section>
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="animate-fade-slide-in-up">
          <Content maxWidth="7xl">
            <Header.H2 orientation="center">
              Intuitive Datenvisualisierung
            </Header.H2>
            <div className="flex -mt-10 justify-center content-center mb-10 max-w-2xl mx-auto">
              <Typography.Lead className="text-center">
                <strong>
                  Mit Dimetrics Insights erstellen Sie in wenigen Minuten
                  individuelle Business-Intelligence-Dashboards – ganz ohne
                  Programmierkenntnisse.
                </strong>
              </Typography.Lead>
            </div>

            <Content.Row cols={2} gap="lg">
              <Content.Column>
                <div className="relative">
                  {/* Static background gradient */}

                  <div className="relative aspect-[3/2] rounded-2xl sm:rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src={"/images/platform/powerbi-plattform.png"}
                      alt={"Power BI"}
                      fill
                      className="object-contain p-3 sm:p-3"
                    />

                    {/* Static overlay effects */}

                    {/* Visible category badge */}
                  </div>
                  <div className="absolute -top-4 left-4">
                    <span className="bg-[#a100ff]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold border border-[#5facdb]/30">
                      Power BI Embedded
                    </span>
                  </div>
                </div>
              </Content.Column>
              <Content.Column>
                <div className="space-y-6">
                  <Typography.Body className="text-lg">
                    Mit Dimetrics Insights erstellen Sie in wenigen Minuten
                    individuelle Business-Intelligence-Dashboards – ganz ohne
                    Programmierkenntnisse.
                  </Typography.Body>
                  <Typography.Body className="text-lg">
                    Das Modul bietet eine Vielzahl an anpassbaren Panels für
                    Kennzahlen, dynamische Listen, Zeitreihen, Messgeräte und
                    mehr, die sich flexibel anordnen und skalieren lassen. Dank
                    der Integration mit Microsoft Power BI profitieren Sie von
                    tiefergehenden Analysen, interaktiven Visualisierungen und
                    datengetriebenen Entscheidungen in Echtzeit.
                  </Typography.Body>
                  <Typography.Body className="text-lg">
                    So gewinnen Unternehmen wertvolle Einblicke und können
                    schneller und präziser handeln.
                  </Typography.Body>
                </div>
              </Content.Column>
            </Content.Row>
          </Content>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="animate-fade-slide-in-up">
          <Content maxWidth="7xl">
            <Content.Row cols={2} alignItems="start" gap="xl">
              <Content.Column>
                <Header.H3>
                  Mit Dimetrics Power BI Berichte lizenzfrei teilen
                </Header.H3>
                <div className="space-y-6">
                  <Typography.SectionTitle>
                    <strong>Die Herausforderung:</strong> Ein mittelständisches
                    Unternehmen möchte Power BI-Berichte mit 35 Mitarbeitenden
                    teilen. Klassische Lizenzmodelle kosten schnell über{" "}
                    <strong>400€ monatlich</strong> – nur für das Einsehen von
                    Berichten.
                  </Typography.SectionTitle>

                  <Typography.SectionTitle>
                    <strong>Die Dimetrics Lösung:</strong> Unsere
                    Low-Code-Plattform ermöglicht die{" "}
                    <strong>lizenzfreie Bereitstellung</strong> interaktiver
                    Power BI Berichte für beliebig viele interne Nutzer – ganz
                    ohne separate Power BI-Lizenzen.
                  </Typography.SectionTitle>

                  <Typography.SubHeadline className="text-lg">
                    Mehrwert für Ihr Unternehmen:
                  </Typography.SubHeadline>
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
                        <strong>Lizenzkosten senken:</strong> Nur eine Premium
                        Lizenz statt Lizenzen für jeden Nutzer
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
                        <strong>Zugänglichkeit steigern:</strong> Alle
                        Mitarbeitenden ohne technisches Know-how oder Login
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
                        <strong>Sicherheit & Kontrolle:</strong> Zentrale
                        Zugriffsverwaltung über Dimetrics
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
                        <strong>Nahtlose Integration:</strong> Power BI Berichte
                        in bestehende Intranets oder Apps
                      </span>
                    </li>
                  </ul>

                  <div className="relative mt-10">
                    <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-gray-100">
                      <Image
                        src={"/images/platform/powerbiembedded.png"}
                        alt={"Power BI Embedded - Lizenzfreie Bereitstellung"}
                        fill
                        className="object-contain p-3 sm:p-3"
                      />
                    </div>
                    {/* <div className="absolute -top-4 left-4">
                      <span className="bg-[#a100ff]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold border border-[#5facdb]/30">
                        Power BI Embedded
                      </span>
                    </div> */}
                  </div>
                </div>
              </Content.Column>

              <Content.Column>
                <div className="space-y-6">
                  <Typography.SubHeadline className="text-lg">
                    DSGVO-konform, benutzerfreundlich & maximal flexibel
                  </Typography.SubHeadline>

                  <Typography.Body className="text-lg">
                    Dimetrics kombiniert leistungsfähige Business Process
                    Automation mit einer nativ integrierten Power BI
                    Bereitstellung, die DSGVO-konform, benutzerfreundlich und
                    maximal flexibel ist.
                  </Typography.Body>

                  <Typography.SubHeadline className="text-lg">
                    So funktioniert das Modell:
                  </Typography.SubHeadline>

                  <Typography.Body className="text-lg">
                    <strong>Schritt 1:</strong> Sie benötigen nur eine Power BI
                    Premium Lizenz für Berichtserstellung und zentrale
                    Verarbeitung.
                  </Typography.Body>

                  <Typography.Body className="text-lg">
                    <strong>Schritt 2:</strong> Dimetrics stellt für jeden
                    Bericht eine sichere URL bereit auf welche zugegriffen
                    werden kann.
                  </Typography.Body>

                  <Typography.Body className="text-lg">
                    <strong>Schritt 3:</strong> Anwender greifen bequem im
                    Browser auf Berichte zu – ganz ohne Power BI Account.
                  </Typography.Body>

                  <Typography.Body className="text-lg">
                    Zusätzlich bietet Dimetrics eine{" "}
                    <strong>native Power BI Integration</strong> innerhalb der
                    Plattform: Berichte lassen sich mit wenigen Klicks direkt
                    einbinden, Benutzerrechte flexibel verwalten und
                    kontextbasiert in Workflows darstellen.
                  </Typography.Body>

                  <Typography.Body className="text-lg">
                    Darüber hinaus ermöglicht Dimetrics eine flexible
                    Datenverarbeitung über verschiedene relationale
                    Datenbanksysteme hinweg. Datenmodelle, Prozesse und
                    Auswertungen können zentral ohne Programmieraufwand
                    umgesetzt werden.
                  </Typography.Body>
                </div>
              </Content.Column>
            </Content.Row>
          </Content>
        </div>
      </section>
      <CallToActionSection />
      {/* Services Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="animate-fade-slide-in-up">
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
    </>
  );
}
