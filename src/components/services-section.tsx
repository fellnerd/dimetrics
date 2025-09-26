"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ServicesHeader } from "./sections/services/services-header";
import { ServiceTabNavigation, ServiceTabContent } from "./sections/services/service-tabs";

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Cloud",
      subtitle: "Take the world by cloud",
      fullTitle: "Cloud Strategie & Beratung",
      description:
        "Jeden Tag wird Cloud-Computing wichtiger, um die Innovation voranzutreiben und die immer neuen Anforderungen von Menschen auf der ganzen Welt zu erfüllen. Nutzen Sie moderne Architekturtechnologien für maximale Geschäftskontinuität.",
      backgroundImage: "/images/services/cloud-strategy-bg.png",
      icon: "/images/services/cloud-strategy.svg",
      href: "/services/cloud-strategy",
    },
    {
      title: "Enterprise Integration",
      subtitle: "Integration neu gedacht",
      fullTitle: "Enterprise Application Integration",
      description:
        "Vereinheitlichen Sie Datenflüsse, reduzieren Sie Komplexität und steigern Sie Effizienz durch nahtlose Systemintegration. Moderne APIs und Microservices für maximale Flexibilität.",
      backgroundImage: "/images/services/enterprise-integration-bg.png",
      icon: "/images/services/enterprise-integration.png",
      href: "/services/enterprise-integration",
    },
    {
      title: "Data & Analytics",
      subtitle: "Datengetriebene Entscheidungen",
      fullTitle: "Business Insights & Analytics",
      description:
        "Messen & maximieren Sie Ihre Technologieinvestitionen – gewinnen Sie Transparenz, um den Wert zu definieren, Kosten zu optimieren & die digitale Transformation voranzutreiben.",
      backgroundImage: "/images/services/business-insights-bg.png",
      icon: "/images/services/business-insights.png",
      href: "/services/business-insights",
    },
  ];

  return (
    <section id="services" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ServicesHeader />
          <ServiceTabNavigation 
            services={services}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* Tab Content */}
          <div className="relative min-h-[500px]">
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