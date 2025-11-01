"use client";

// import { motion } from "framer-motion"; // ERSETZT DURCH NATIVE TAILWIND ANIMATIONEN
import {
  GradientHeadline,
  GradientText,
} from "./ui/typography/gradient-headline";
import {
  SectionDescription,
  HighlightedText,
} from "./ui/typography/section-description";
import { FloatingDecorations } from "./ui/decorations/floating-decorations";
import { SolutionCard } from "./sections/solutions/solution-card";
import { CustomerLogos } from "./sections/solutions/customer-logos";
import { SolutionsCTA } from "./sections/solutions/solutions-cta";

export function SolutionsSection() {
  const solutions = [
    {
      title: "Projektmanagement System inkl. Power BI",
      description:
        "Das Tool optimiert Arbeitsabläufe, beschleunigt Prozesse und liefert Echtzeit-Insights. Die Power BI-Integration bietet den Mitarbeitern Transparenz und interaktive Steuerung – für smartere Entscheidungen und maximale Effizienz.",
      image: "/images/projects/projektmanagement-tool.png",
      link: "/solutions/projektmanagement-system-inkl-power-bi",
      category: "Projektmanagement",
    },
    {
      title: "WKO Cashback Aktion",
      description:
        "Dimetrics Cashback ermöglicht der WKO Kärnten die digitale Verarbeitung von 15.000+ Rechnungseinreichungen und optimiert den Abwicklungsprozess – mit 8 erfolgreichen Aktionen in Klagenfurt, Villach und Kötschach-Mauthen.",
      image: "/images/projects/wko-cashback.png",
      link: "/solutions/wko-cashback-aktion",
      category: "Prozessautomatisierung",
    },
    {
      title: "Customer Relationship Management Tool",
      description:
        "Dimetrics CRM optimiert Vertriebsteams mit Office Exchange Integration, smarten Reporting-Tools und automatisierter Interaktionserfassung – für effiziente Lead-Qualifizierung und höhere Produktivität.",
      image: "/images/projects/crm2.png",
      link: "/solutions/customer-relationship-management-tool",
      category: "CRM & Vertrieb",
    },
    {
      title: "Dynamisches Recruiting CRM",
      description:
        "Die Dimetrics-Recruiting-Software automatisiert Bewerbungsprozesse, verbessert die Zusammenarbeit und schafft Transparenz – für schnellere Entscheidungen und effizientes Bewerbermanagement.",
      image: "/images/projects/recruiting-crm.png",
      link: "/solutions/dynamisches-recruiting-crm",
      category: "HR & Recruiting",
    },
    {
      title: "Lieferantenmanagement in der Energietechnik",
      description:
        "Wir entwickelten eine Plattform zur Optimierung der Lieferantenverwaltung, automatischen Gutschrifterstellung und Verbesserung der Buchhaltungsprozesse – für mehr Effizienz und Transparenz.",
      image: "/images/projects/lieferantenmanagement.png",
      link: "/solutions/lieferantenmanagement-in-der-energietechnik",
      category: "Supply Chain",
    },
    {
      title: "Dokumentenautomatisierung mit OCR",
      description:
        "Dimetrics OCR digitalisiert Rechnungen, Lieferscheine und Aufträge – sogar handschriftliche. Die nahtlose Integration in Buchhaltungssysteme wie BMD spart Zeit, reduziert Kosten und steigert die Produktivität.",
      image: "/images/projects/dokumentenautomatisierung-ocr.png",
      link: "/solutions/dokumentenautomatisierung-mit-ocr",
      category: "Dokumentenmanagement",
    },
  ];

  return (
    <section
      id="solutions"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-slide-in-up">
          <div className="relative">
            <GradientHeadline>
              <GradientText gradient="secondary">Lösungen,</GradientText>
              <GradientText gradient="primary">die inspirieren</GradientText>
            </GradientHeadline>
            <FloatingDecorations />
          </div>
          <SectionDescription>
            Beispiele von{" "}
            <HighlightedText color="primary">
              maßgeschneiderten Geschäftsanwendungen
            </HighlightedText>
            , entstanden aus fundierter Beratung und innovativer Entwicklung –
            <HighlightedText color="white">
              intelligente Systeme
            </HighlightedText>{" "}
            und automatisierte Lösungen, die Effizienz steigern und{" "}
            <HighlightedText color="accent">
              nachhaltiges Wachstum
            </HighlightedText>{" "}
            ermöglichen.
          </SectionDescription>
        </div>

        {/* Alternating Layout */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              solution={solution}
              index={index}
            />
          ))}
        </div>

        <SolutionsCTA />
        <CustomerLogos />
      </div>
    </section>
  );
}
