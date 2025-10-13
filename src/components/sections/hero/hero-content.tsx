"use client";

// import { motion } from "framer-motion"; // DEAKTIVIERT FÜR FLICKERING TEST
import { AccentLine } from "@/components/ui/decorations/accent-line";

interface HeroTitleProps {
  primaryText: string;
  accentText: string;
}

export function HeroTitle({ primaryText, accentText }: HeroTitleProps) {
  return (
    <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-none text-left">
      <span className="block text-white mb-1 sm:mb-2">{primaryText}</span>
      <span className="block text-[#5facdb] mb-3 sm:mb-4">{accentText}</span>
    </h1>
  );
}

interface HeroDescriptionProps {
  children: React.ReactNode;
}

export function HeroDescription({ children }: HeroDescriptionProps) {
  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="relative">
        <AccentLine position="left" />
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 font-light leading-relaxed pl-6 lg:pl-8">
          {children}
        </p>
      </div>
    </div>
  );
}

interface KPIData {
  number: string;
  label: string;
}

interface HeroKPIsProps {
  kpis: KPIData[];
}

export function HeroKPIs({ kpis }: HeroKPIsProps) {
  return (
    <div
      className="w-full mt-12 lg:absolute lg:bottom-24 lg:right-4 lg:w-[28rem] grid grid-cols-2 gap-3 lg:gap-3 px-6 lg:px-0"
    >
      {kpis.map((kpi, index) => (
        <div
          key={kpi.label}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/40 rounded-lg p-3 lg:p-3 text-center hover:border-[#5facdb]/50 transition-colors duration-300 min-h-[80px] lg:min-h-[auto] flex flex-col justify-center"
        >
          <div className="text-lg lg:text-2xl font-bold text-[#A100FF] mb-1 lg:mb-1">
            {kpi.number}
          </div>
          <div className="text-xs lg:text-xs text-gray-300 font-light leading-tight">
            {kpi.label}
          </div>
        </div>
      ))}
    </div>
  );
}
