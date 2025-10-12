"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PremiumButton } from "@/components/ui/buttons/premium-button";

export function SolutionsCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="text-center mt-16 md:mt-24 lg:mt-32"
    >
      <div className="relative group">
        {/* Enhanced background with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3d55e2]/20 via-[#5facdb]/20 to-[#A100FF]/20 rounded-2xl md:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl md:rounded-3xl border border-gray-700/50 group-hover:border-[#5facdb]/30 transition-all duration-500"></div>

        <div className="relative p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute top-8 left-8 w-6 h-6 bg-[#3d55e2] rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-12 right-12 w-4 h-4 bg-[#5facdb] rounded-full opacity-40 animate-pulse delay-700"></div>
          <div className="absolute bottom-8 left-16 w-3 h-3 bg-[#A100FF] rounded-full opacity-50 animate-pulse delay-1000"></div>

          <h3 className="text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
            <span className="block text-white">Ihre maßgeschneiderte</span>
            <span className="block bg-gradient-to-r from-[#3d55e2] via-[#5facdb] to-[#A100FF] bg-clip-text text-transparent">
              Lösung entwickeln
            </span>
          </h3>

          <p className="text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre{" "}
            <span className="text-[#5facdb] font-medium">
              individuellen Herausforderungen
            </span>{" "}
            in{" "}
            <span className="text-white font-medium">
              innovative Geschäftsanwendungen
            </span>{" "}
            verwandeln.
          </p>

          <PremiumButton href="/contact-us" variant="primary" size="xl">
            Jetzt Beratung vereinbaren
          </PremiumButton>
        </div>
      </div>
    </motion.div>
  );
}
