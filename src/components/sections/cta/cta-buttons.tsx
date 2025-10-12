"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonsProps {
  primaryText?: string;
  secondaryText?: string;
  primaryHref?: string;
  secondaryHref?: string;
  theme?: "dark" | "light";
}

export function CTAButtons({
  primaryText = "Beratungsgespräch vereinbaren",
  secondaryText = "Referenzen ansehen",
  primaryHref = "/contact-us",
  secondaryHref = "#testimonials",
  theme = "dark",
}: CTAButtonsProps) {
  // Theme-spezifische Button-Styles
  const themeClasses = {
    dark: {
      primary:
        "bg-gradient-to-r from-[#3d55e2] to-[#5facdb] hover:from-[#5facdb] hover:to-[#A100FF] text-white font-light group px-8 py-3",
      secondary:
        "border-white text-white hover:bg-white hover:text-black font-light px-8 py-3",
    },
    light: {
      primary:
        "bg-gradient-to-r from-[#3d55e2] to-[#5facdb] hover:from-[#5facdb] hover:to-[#A100FF] text-white font-light group px-8 py-3",
      secondary:
        "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-light px-8 py-3",
    },
  }[theme];

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-5">
      <Button size="lg" className={themeClasses.primary}>
        {primaryText}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
      <Button variant="outline" size="lg" className={themeClasses.secondary}>
        {secondaryText}
      </Button>
    </div>
  );
}
