"use client";

import { motion } from "framer-motion";
import { AccentLine } from "@/components/ui/decorations/accent-line";

interface HeroTitleProps {
  primaryText: string;
  accentText: string;
}

export function HeroTitle({ primaryText, accentText }: HeroTitleProps) {
  return (
    <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-none text-left">
      <span className="block text-white mb-2">{primaryText}</span>
      <span className="block text-[#5facdb] mb-4">{accentText}</span>
    </h1>
  );
}

interface HeroDescriptionProps {
  children: React.ReactNode;
}

export function HeroDescription({ children }: HeroDescriptionProps) {
  return (
    <div className="space-y-6">
      <div className="relative">
        <AccentLine position="left" />
        <p className="text-xl lg:text-2xl text-gray-100 font-light leading-relaxed pl-8">
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="absolute bottom-24 right-4 w-[28rem] grid grid-cols-2 gap-3"
    >
      {kpis.map((kpi, index) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/40 rounded-lg p-3 text-center hover:border-[#5facdb]/50 transition-colors duration-300"
        >
          <div className="text-lg lg:text-2xl font-bold text-[#A100FF] mb-1">
            {kpi.number}
          </div>
          <div className="text-xs text-gray-300 font-light">{kpi.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
