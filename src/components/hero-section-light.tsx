"use client";

import {
  HeroCTALight,
  HeroDescriptionLight,
  HeroKPIsLight,
  HeroTitleLight,
} from "./sections";
import { HeroBackgroundLight } from "./sections/hero/hero-background-light";

export function HeroSectionLight() {
  const kpis = [
    { number: "50+", label: "Projekte erfolgreich umgesetzt" },
    { number: "95%", label: "Kundenzufriedenheit" },
    { number: "24/7", label: "Support & Monitoring" },
    { number: "15+", label: "Jahre Branchenerfahrung" },
  ];

  return (
    <section className="relative bg-white overflow-hidden pt-20">
      <div className="flex flex-col lg:flex-row lg:items-center lg:min-h-screen">
        {/* Left Content - Text */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-8 lg:space-y-10">
              <div className="space-y-6 lg:space-y-8">
                <HeroTitleLight
                  primaryText="Systeme verbinden."
                  accentText="Effizienz entfalten."
                />

                <HeroDescriptionLight>
                  Von isolierten Systemen zu harmonischer Vernetzung – wir bauen
                  Brücken zwischen Strategie und Technologie für nachhaltigen
                  digitalen Erfolg.
                </HeroDescriptionLight>
              </div>

              <HeroCTALight />

              {/* KPI Cards - Mobile positioned here */}
              <div className="lg:hidden pt-8">
                <HeroKPIsLight kpis={kpis} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <HeroBackgroundLight />

        {/* KPI Cards - Desktop positioned absolutely */}
        <div className="hidden lg:block">
          <HeroKPIsLight kpis={kpis} />
        </div>
      </div>

      {/* Background - Clean and minimal */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50/20 to-white"></div>
    </section>
  );
}
