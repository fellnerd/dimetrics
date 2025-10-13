"use client";

// import { motion } from "framer-motion"; // Deaktiviert - Ersetzt durch native Tailwind Animationen
import { Header } from "@/components/ui/header";
import Content from "@/components/ui/content/content";
import Typography from "@/components/ui/typography/typography";
import { PremiumButton } from "@/components/ui/buttons/premium-button";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Projektmanagement System inkl. Power BI",
      category: "Projektmanagement",
      description:
        "Das Tool optimiert Arbeitsabläufe, beschleunigt Prozesse und liefert Echtzeit-Insights. Die Power BI-Integration bietet den Mitarbeitern Transparenz und interaktive Steuerung – für smartere Entscheidungen und maximale Effizienz.",
      image: "/images/projects/projektmanagement-tool.png",
      externalUrl:
        "https://dimetrics.io/projektmanagement-system-inkl-power-bi/",
      technologies: ["Power BI", "Microsoft Azure", "Low-Code Platform"],
      client: "Enterprise Kunde",
    },
    {
      id: 2,
      title: "WKO Cashback Aktion",
      category: "Prozessautomatisierung",
      description:
        "Dimetrics Cashback ermöglicht der WKO Kärnten die digitale Verarbeitung von 15.000+ Rechnungseinreichungen und optimiert den Abwicklungsprozess – mit 8 erfolgreichen Aktionen in Klagenfurt, Villach und Kötschach-Mauthen.",
      image: "/images/projects/wko-cashback.png",
      externalUrl: "https://dimetrics.io/wko-cashback-aktion/",
      technologies: ["Process Automation", "Document Processing", "OCR"],
      client: "WKO Kärnten",
    },
    {
      id: 3,
      title: "Customer Relationship Management Tool",
      category: "CRM & Vertrieb",
      description:
        "Dimetrics CRM optimiert Vertriebsteams mit Office Exchange Integration, smarten Reporting-Tools und automatisierter Interaktionserfassung – für effiziente Lead-Qualifizierung und höhere Produktivität.",
      image: "/images/projects/customer-crm.png",
      externalUrl:
        "https://dimetrics.io/customer-relationship-management-tool/",
      technologies: ["CRM System", "Office Integration", "Analytics"],
      client: "Vertriebsunternehmen",
    },
    {
      id: 4,
      title: "Dynamisches Recruiting CRM",
      category: "HR & Recruiting",
      description:
        "Die Dimetrics-Recruiting-Software automatisiert Bewerbungsprozesse, verbessert die Zusammenarbeit und schafft Transparenz – für schnellere Entscheidungen und effizientes Bewerbermanagement.",
      image: "/images/projects/recruiting-crm.png",
      externalUrl: "https://dimetrics.io/dynamisches-recruiting-crm/",
      technologies: ["HR Management", "Workflow Automation", "Collaboration"],
      client: "HR-Abteilung",
    },
    {
      id: 5,
      title: "Lieferantenmanagement in der Energietechnik",
      category: "Supply Chain",
      description:
        "Wir entwickelten eine Plattform zur Optimierung der Lieferantenverwaltung, automatischen Gutschrifterstellung und Verbesserung der Buchhaltungsprozesse – für mehr Effizienz und Transparenz.",
      image: "/images/projects/lieferantenmanagement.png",
      externalUrl:
        "https://dimetrics.io/lieferantenmanagement-in-der-energietechnik/",
      technologies: [
        "Supply Chain Management",
        "ERP Integration",
        "Automation",
      ],
      client: "Energietechnik Unternehmen",
    },
    {
      id: 6,
      title: "Dokumentenautomatisierung mit OCR",
      category: "Dokumentenmanagement",
      description:
        "Dimetrics OCR digitalisiert Rechnungen, Lieferscheine und Aufträge – sogar handschriftliche. Die nahtlose Integration in Buchhaltungssysteme wie BMD spart Zeit, reduziert Kosten und steigert die Produktivität.",
      image: "/images/projects/dokumentenautomatisierung-ocr.png",
      externalUrl: "https://dimetrics.io/dokumentenautomatisierung-mit-ocr/",
      technologies: ["OCR Technology", "AI Processing", "System Integration"],
      client: "Buchhaltungsunternehmen",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div>
          <Content maxWidth="6xl">
            <div className="text-center mb-16">
              <Header.H1 className="mb-6">
                <span className="block bg-gradient-to-r from-[#3d55e2] via-[#5facdb] to-[#A100FF] bg-clip-text text-transparent">
                  Unsere Projekte
                </span>
              </Header.H1>
              <Typography.Body className="text-xl text-gray-600 max-w-3xl mx-auto">
                Entdecken Sie erfolgreiche Digitalisierungsprojekte, die wir für
                unsere Kunden umgesetzt haben. Von automatisierten
                Geschäftsprozessen bis hin zu intelligenten Datenanalysesystemen
                – jedes Projekt zeigt unsere Expertise in der digitalen
                Transformation.
              </Typography.Body>
            </div>
          </Content>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4 sm:px-6">
        <Content maxWidth="7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50"
              >
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3d55e2]/20 via-[#5facdb]/10 to-[#A100FF]/20"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center bg-white/90 backdrop-blur-sm text-[#3d55e2] px-4 py-2 rounded-full text-sm font-semibold border border-[#3d55e2]/20">
                      <div className="w-2 h-2 bg-[#3d55e2] rounded-full mr-2"></div>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <Header.H3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#3d55e2] transition-colors duration-300">
                      {project.title}
                    </Header.H3>
                    <Typography.Body className="text-gray-600 text-sm mb-4">
                      {project.description}
                    </Typography.Body>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Client */}
                  <div className="mb-6">
                    <Typography.Body className="text-gray-500 text-sm">
                      Kunde: {project.client}
                    </Typography.Body>
                  </div>

                  {/* CTA */}
                  <Link
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center text-[#3d55e2] hover:text-[#5facdb] font-semibold transition-colors duration-300"
                  >
                    <span className="mr-2">Projekt Details ansehen</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Content>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-[#3d55e2] via-[#5facdb] to-[#A100FF]">
        <div>
          <Content maxWidth="4xl">
            <div className="text-center text-white">
              <Header.H2 className="mb-6">
                Bereit für Ihr nächstes Projekt?
              </Header.H2>
              <Typography.Body className="text-xl mb-8 text-white/90">
                Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen.
                Vereinbaren Sie ein kostenloses Beratungsgespräch.
              </Typography.Body>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us">
                  <PremiumButton variant="secondary" size="lg">
                    Beratungsgespräch vereinbaren
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </PremiumButton>
                </Link>
                <Link href="/services">
                  <PremiumButton variant="ghost" size="lg">
                    Services entdecken
                  </PremiumButton>
                </Link>
              </div>
            </div>
          </Content>
        </div>
      </section>
    </div>
  );
}
