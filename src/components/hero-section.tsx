"use client";

import { motion } from "framer-motion";
import {
  HeroTitle,
  HeroDescription,
  HeroKPIs,
} from "./sections/hero/hero-content";
import { HeroCTA } from "./sections/hero/hero-cta";
import { HeroBackground } from "./sections/hero/hero-background";

export function HeroSection() {
  const kpis = [
    { number: "50+", label: "Projekte erfolgreich umgesetzt" },
    { number: "95%", label: "Kundenzufriedenheit" },
    { number: "24/7", label: "Support & Monitoring" },
    { number: "15+", label: "Jahre Branchenerfahrung" },
  ];

  return (
    <section className="relative bg-black overflow-hidden pt-20">
      <div className="flex flex-col lg:flex-row lg:items-center lg:min-h-screen">
        {/* Left Content - Text with container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-8 lg:space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 lg:space-y-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800/40 rounded-2xl p-6 lg:p-8"
              >
                <HeroTitle
                  primaryText="Systeme verbinden."
                  accentText="Effizienz entfalten."
                />

                <HeroDescription>
                  Von isolierten Systemen zu harmonischer Vernetzung – wir bauen
                  Brücken zwischen Strategie und Technologie für nachhaltigen
                  digitalen Erfolg.
                </HeroDescription>
              </motion.div>

              <HeroCTA />

              {/* KPI Cards - Mobile positioned here */}
              <div className="lg:hidden">
                <HeroKPIs kpis={kpis} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Full-width Background Image & KPIs */}
        <HeroBackground />

        {/* KPI Cards - Desktop positioned absolutely */}
        <div className="hidden lg:block">
          <HeroKPIs kpis={kpis} />
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#3d55e2]/5 via-black to-[#5facdb]/5"></div>
    </section>
  );
}
