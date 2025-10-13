"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ServicesHeader } from "./sections/services/services-header";
import {
  ServiceTabNavigation,
  ServiceTabContent,
} from "./sections/services/service-tabs";

type ServicesSectionProps = {
  title?: string;
};

export function ServicesSection({ title }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "AI Cloud",
      subtitle: "Take the world by cloud",
      fullTitle: "Cloud Strategie & Beratung",
      description:
        "Eine durchdachte Cloud-Strategie ist der Schlüssel zu mehr Flexibilität, Skalierbarkeit und Effizienz. Wir unterstützen Sie dabei, die richtige Cloud-Lösung für Ihr Unternehmen zu finden – ob Public, Private oder Hybrid Cloud.Unsere Experten analysieren Ihre bestehenden IT-Strukturen, entwickeln eine maßgeschneiderte Migrationsstrategie und begleiten Sie von der Planung über die Umsetzung bis hin zum laufenden Betrieb. Dabei setzen wir auf sichere, performante und zukunftssichere Architekturen, die sich nahtlos in Ihre Geschäftsprozesse integrieren lassen.",
      backgroundImage: "/images/services/cloud-strategy-bg.png",
      icon: "/images/services/cloud-strategy.svg",
      href: "/services/cloud-strategy",
    },
    {
      title: "Enterprise Integration",
      subtitle: "Integration neu gedacht",
      fullTitle: "Enterprise Application Integration",
      description:
        "Mit unserer Enterprise Application Integration (EAI) schaffen wir eine harmonisierte Systemlandschaft, in der Ihre Anwendungen und Daten effizient miteinander kommunizieren. Wir bieten Ihnen Lösungen für effizientes API-Management, das eine reibungslose und moderne Schnittstellenkommunikation ermöglicht.",
      backgroundImage: "/images/services/enterprise-integration-bg.png",
      icon: "/images/services/enterprise-integration.png",
      href: "/services/application-integration",
    },
    {
      title: "Data & Analytics",
      subtitle: "Datengetriebene Entscheidungen",
      fullTitle: "Business Insights & Analytics",
      description:
        "Mit Dimetrics Business Insights verknüpfen und harmonisieren wir Daten aus unterschiedlichen Systemen, um eine zentrale Grundlage für datengetriebene Entscheidungen zu schaffen. Unsere Data Engineering-Expertise sorgt dafür, dass Sie komplexe Daten mit Power BI-Lösungen klar visualisieren können – inklusive direkt umsetzbarer Handlungsempfehlungen.",
      backgroundImage: "/images/services/business-insights-bg.png",
      icon: "/images/services/business-insights.png",
      href: "/services/business-insights-integrations",
    },
    {
      title: "Dimetrics Plattform",
      subtitle: "Die leistungsstarke Business Process Automation Plattform",
      fullTitle: "Dimetrics Platform Solutions",
      description:
        "Unsere selbst entwickelte Low-Code/No-Code Plattform ermöglicht es Ihnen, maßgeschneiderte Anwendungen schnell und ohne tiefgehende Programmierkenntnisse zu erstellen. Mit einer intuitiven Benutzeroberfläche und flexiblen Funktionen können Sie Prozesse automatisieren und digitale Lösungen effizient umsetzen – ganz nach Ihren individuellen Bedürfnissen.",
      backgroundImage: "/images/platform/platform_dark.png",
      icon: "/images/logos/dimetrics-logo.svg",
      href: "/business-process-automation-platform",
      slideshow: [
        "/images/platform/platform_dark.png",
        "/images/platform/platform_light.png",
        "/images/platform/platform_chatai_dark.png",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ServicesHeader title={title} />
          <ServiceTabNavigation
            services={services}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* Tab Content */}
          <div className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[650px]">
            {services.map((service, index) => (
              <ServiceTabContent
                key={service.title}
                service={service}
                index={index}
                activeTab={activeTab}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
