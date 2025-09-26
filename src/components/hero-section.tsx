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
    <section className="relative bg-black overflow-hidden min-h-screen">
      <div className="flex items-center min-h-[80vh]">
        {/* Left Content - Text with container */}
        <div className="w-full max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
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
            </div>
          </div>
        </div>

        {/* Right Content - Full-width Background Image & KPIs */}
        <HeroBackground />

        {/* KPI Cards */}
        <HeroKPIs kpis={kpis} />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#3d55e2]/5 via-black to-[#5facdb]/5"></div>
    </section>
  );
}
