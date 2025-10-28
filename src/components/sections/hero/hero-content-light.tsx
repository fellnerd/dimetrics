"use client";

import { AccentLineLight } from "@/components/ui/decorations/accent-line-light";

interface HeroTitleProps {
  primaryText: string;
  accentText: string;
}

export function HeroTitleLight({ primaryText, accentText }: HeroTitleProps) {
  return (
    <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight text-left tracking-tight">
      <span className="block text-gray-900 mb-2 font-medium">
        {primaryText}
      </span>
      <span className="block text-gray-700 font-light">{accentText}</span>
    </h1>
  );
}

interface HeroDescriptionProps {
  children: React.ReactNode;
}

export function HeroDescriptionLight({ children }: HeroDescriptionProps) {
  return (
    <p className="text-lg lg:text-xl text-gray-600 font-normal leading-relaxed max-w-2xl">
      {children}
    </p>
  );
}

interface KPIData {
  number: string;
  label: string;
}

interface HeroKPIsProps {
  kpis: KPIData[];
}

export function HeroKPIsLight({ kpis }: HeroKPIsProps) {
  return (
    <div className="w-full mt-12 lg:absolute lg:bottom-24 lg:right-4 lg:w-[28rem] grid grid-cols-2 gap-4 lg:gap-4 px-6 lg:px-0">
      {kpis.map((kpi, index) => (
        <div
          key={kpi.label}
          className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-4 text-center hover:bg-white/30 hover:border-white/40 transition-all duration-200"
        >
          <div className="text-xl lg:text-2xl font-semibold text-gray-900 mb-1">
            {kpi.number}
          </div>
          <div className="text-xs sm:text-sm text-gray-600 font-normal leading-tight break-words">
            {kpi.label}
          </div>
        </div>
      ))}
    </div>
  );
}
