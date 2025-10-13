"use client";

// import { motion } from "framer-motion"; // Deaktiviert - Ersetzt durch native Tailwind Animationen
import { Header } from "@/components/ui/header";
import Content from "@/components/ui/content/content";
import Typography from "@/components/ui/typography/typography";
import { PremiumButton } from "@/components/ui/buttons/premium-button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CTAButtons,
  CTAHeader,
  HeroSectionSplit,
} from "../../components/sections";
import { ServicesSection } from "../../components/services-section";

export default function CloudStrategyPage() {
  return (
    <>
      <HeroSectionSplit
        imageSrc="/images/about/_U0A0605.jpg"
        imageAlt="Enterprise Application Integration"
        imageWidth={700}
        imageHeight={800}
        title="Lösungen schaffen, die heute wirken und morgen noch stärker machen."
        description="Dimetrics ist Ihr persönlicher Partner für digitale Effizienz im Unternehmen.  Wir bieten innovative Lösungen, die Unternehmen effizienter, flexibler und datengetriebener machen. Von strategischer Digitalberatung über agile Low- Code-Entwicklung bis hin zur nahtlosen Integration Ihrer Daten und Prozesse auf unserer eigenentwickelten Dimetrics Plattform."
        backgroundColor="black"
        textColor="white"
        subText="- Daniel Fellner, Gründer -"
      />

      {/* Main Content Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="animate-fade-slide-in-up">
          <Content maxWidth="7xl">
            <Content.Row cols={2} alignItems="start">
              <Content.Column>
                <Header.H2>
                  Unsere Philosophie – Partnerschaft für Ihren Erfolg
                </Header.H2>
              </Content.Column>

              <Content.Column>
                <div className="space-y-6">
                  <Typography.Lead className="text-lg">
                    Wir glauben, dass Digitalisierung mehr ist als nur
                    Technologie – sie ist der Schlüssel zu besserer Effizienz,
                    höherer Wettbewerbsfähigkeit und langfristigem Erfolg. Mit
                    einem klaren Blick für Qualität und nachhaltigen Mehrwert
                    entwickeln wir digitale Lösungen, die speziell auf die
                    Bedürfnisse unserer Kunden zugeschnitten sind.
                  </Typography.Lead>

                  <Typography.Lead className="text-lg">
                    Unser Ansatz verbindet strategische Beratung mit modernster
                    Entwicklung – zielgerichtet und lösungsorientiert.
                  </Typography.Lead>

                  <Typography.Lead className="text-lg">
                    So unterstützen wir Unternehmen dabei, effizienter und
                    wettbewerbsfähiger zu werden und sich für die Anforderungen
                    einer digitalen Zukunft optimal aufzustellen.
                  </Typography.Lead>
                </div>
              </Content.Column>
            </Content.Row>
          </Content>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="animate-fade-slide-in-up">
          <Content maxWidth="7xl">
            <Content.Row cols={1} alignItems="start">
              <Content.Column>
                <Header.H2>Unser Ansatz – Vom Plan zur Performance</Header.H2>
              </Content.Column>

              <Content.Column>
                <div className="space-y-6">
                  <Typography.Body className="text-lg">
                    Dimetrics kombiniert tiefgehende Expertise in der Digital
                    Excellence Beratung mit innovativen
                    Low-Code-Entwicklungsmöglichkeiten und intelligenten
                    Business-Integrationen.
                  </Typography.Body>

                  <Typography.Body className="text-lg">
                    Unsere selbst entwickelte Low-Code/No-Code-Plattform
                    ermöglicht es uns, hochflexible und individuell angepasste
                    Geschäftsanwendungen schnell und effizient umzusetzen. Der
                    Fokus liegt immer auf der optimalen Lösung für unsere Kunden
                    – sei es auf Basis unserer Plattform oder anderer, optimal
                    geeigneter Technologien.
                  </Typography.Body>

                  <Typography.Body className="text-lg">
                    Wir legen besonderen Wert darauf, Daten und Prozesse nahtlos
                    zu integrieren, um fundierte Entscheidungen zu unterstützen
                    und reibungslose, effektive Abläufe sicherzustellen.
                  </Typography.Body>
                </div>
              </Content.Column>
            </Content.Row>
          </Content>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection title="Unsere Leistungen" />
    </>
  );
}
