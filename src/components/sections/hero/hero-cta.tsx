"use client";

// import { motion } from "framer-motion"; // DEAKTIVIERT FÜR FLICKERING TEST
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroCTAProps {
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function HeroCTA({
  primaryButtonText = "Was wir machen",
  secondaryButtonText = "Jetzt Beratung vereinbaren",
  onPrimaryClick,
  onSecondaryClick,
}: HeroCTAProps) {
  return (
    <div
      className="flex flex-col sm:flex-row gap-4"
    >
      <Button
        variant="ghost"
        size="lg"
        onClick={onPrimaryClick}
        className="text-[#5facdb] hover:text-white hover:bg-[#5facdb]/10 font-medium group px-8 py-4 text-lg"
      >
        {primaryButtonText}
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Button>
      <Button
        variant="outline"
        size="lg"
        onClick={onSecondaryClick}
        className="border-white text-white hover:bg-white hover:text-black font-medium px-8 py-4 text-lg"
      >
        {secondaryButtonText}
      </Button>
    </div>
  );
}
