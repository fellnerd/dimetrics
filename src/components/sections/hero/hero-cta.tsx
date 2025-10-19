"use client";

// import { motion } from "framer-motion"; // ERSETZT DURCH NATIVE TAILWIND ANIMATIONEN
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface HeroCTAProps {
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function HeroCTA({
  primaryButtonText = "Was wir machen",
  primaryButtonHref = "/about",
  secondaryButtonText = "Jetzt Beratung vereinbaren",
  secondaryButtonHref = "/contact-us",
}: HeroCTAProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 animate-fade-slide-in-up-delayed">
      <Link href={primaryButtonHref}>
        <Button
          variant="ghost"
          size="lg"
          className="text-[#5facdb] hover:text-white hover:bg-[#5facdb]/10 font-medium group px-8 py-4 text-lg"
        >
          {primaryButtonText}
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
      <Link href={secondaryButtonHref}>
        <Button
          variant="outline"
          size="lg"
          className="border-white text-white hover:bg-white hover:text-black font-medium px-8 py-4 text-lg"
        >
          {secondaryButtonText}
        </Button>
      </Link>
    </div>
  );
}
