"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonsProps {
  primaryText?: string;
  secondaryText?: string;
  primaryHref?: string;
  secondaryHref?: string;
}

export function CTAButtons({
  primaryText = "Beratungsgespräch vereinbaren",
  secondaryText = "Referenzen ansehen",
  primaryHref = "#contact",
  secondaryHref = "#testimonials",
}: CTAButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        size="lg"
        className="bg-accenture-purple hover:bg-accenture-purple/90 text-white font-light group px-8 py-3"
      >
        {primaryText}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="border-white text-white hover:bg-white hover:text-black font-light px-8 py-3"
      >
        {secondaryText}
      </Button>
    </div>
  );
}
