"use client";

import { motion } from "framer-motion";
import { CheckCircle, Target, Zap, Workflow } from "lucide-react";
import { GradientHeadline } from "./ui/typography/gradient-headline";
import { SectionDescription } from "./ui/typography/section-description";
import { FloatingDecorations } from "./ui/decorations/floating-decorations";
import { CategoryBadge } from "./ui/badges/category-badge";
import { PremiumButton } from "./ui/buttons/premium-button";

export default function PartnershipSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const processSteps = [
    {
      icon: Target,
      number: "01",
      title: "Ausgangsanalyse & Bedarfsermittlung",
      description:
        "Wir stellen Ihnen eine IST-Analyse sicher, um zu identifizieren, welche Faktoren in Ihrer Wertschöpfungskette besondere Aufmerksamkeit benötigen.",
      gradient: "from-[#3d55e2] to-[#5facdb]",
      bgGradient: "from-[#3d55e2]/10 to-[#5facdb]/5",
      borderColor: "border-[#3d55e2]/20",
    },
    {
      icon: Workflow,
      number: "02",
      title: "Entwicklung der Digitalstrategie",
      description:
        "Mit unserer Erfahrung im IT-Projektmanagement, gepaart mit der umfangreichen Expertise in der Softwareentwicklung, planen und entwickeln wir Ihr digitales Framework.",
      gradient: "from-[#5facdb] to-[#A100FF]",
      bgGradient: "from-[#5facdb]/10 to-[#A100FF]/5",
      borderColor: "border-[#5facdb]/20",
    },
    {
      icon: Zap,
      number: "03",
      title: "Integration der Systemlandschaft",
      description:
        "Dank unserer langjährigen Erfahrung mit Microsoft Azure, AWS und Google Cloud Platform können wir Ihnen dabei helfen, Ihre Services auf unterschiedliche PaaS-Lösungen nahtlos zu migrieren.",
      gradient: "from-[#A100FF] to-[#3d55e2]",
      bgGradient: "from-[#A100FF]/10 to-[#3d55e2]/5",
      borderColor: "border-[#A100FF]/20",
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Strategisches Geschäftsmodell",
      description:
        "Bei der Entwicklung Ihres digitalen Geschäftsmodells berücksichtigen wir drei wesentliche Aspekte: Effizienzsteigerungen, Umsatzsteigerungen und Kostenreduktion.",
      gradient: "from-[#3d55e2] to-[#5facdb]",
      bgGradient: "from-[#3d55e2]/8 to-[#5facdb]/4",
      borderColor: "border-[#3d55e2]/15",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(61, 85, 226, 0.02) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(95, 172, 219, 0.015) 0%, transparent 50%), radial-gradient(circle at 40% 90%, rgba(161, 0, 255, 0.01) 0%, transparent 50%)",
        }}
      ></div>

      <FloatingDecorations />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-16">
          <div className="mb-16">
            <div className="text-[#A100FF] text-sm font-semibold tracking-wide uppercase mb-6">
              PARTNERSCHAFT
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Eine Partnerschaft, die Lösungen schafft
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light lg:pt-2">
                Von der ersten Anfrage bis zur Umsetzung – klar, unkompliziert
                und auf den Punkt. So läuft unsere Zusammenarbeit. Wir begleiten
                Sie durch jeden Schritt Ihrer digitalen Transformation, von der
                strategischen Planung über die technische Umsetzung bis hin zur
                nachhaltigen Optimierung. Transparenz, Effizienz und messbare
                Ergebnisse stehen dabei im Mittelpunkt unseres
                partnerschaftlichen Ansatzes.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:direction-rtl"
                  }`}
                >
                  <div className={`space-y-4 ${isEven ? "" : "lg:order-2"}`}>
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`text-xs font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}
                        >
                          SCHRITT {step.number}
                        </span>
                        <div className="w-6 h-0.5 bg-gradient-to-r from-gray-400 to-gray-500"></div>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight text-gray-900">
                        {step.title}
                      </h3>

                      <p className="text-gray-600 text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex justify-center ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="group relative">
                      <div
                        className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-xl`}
                      >
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      <div
                        className={`absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-sm font-bold border-2 border-white shadow-lg`}
                      >
                        {step.number}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center pt-12">
            <PremiumButton href="#contact" size="md">
              Lassen Sie uns Ihre Vision verwirklichen
            </PremiumButton>
          </div>
        </div>
      </div>
    </section>
  );
}
