"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface HeroCTAProps {
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function HeroCTALight({
  primaryButtonText = "Was wir machen",
  primaryButtonHref = "/about",
  secondaryButtonText = "Jetzt Beratung vereinbaren",
  secondaryButtonHref = "/contact-us",
}: HeroCTAProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Link href={secondaryButtonHref}>
        <Button
          size="lg"
          className="bg-gray-900 text-white hover:bg-gray-800 font-medium px-8 py-3 text-base transition-colors duration-200 rounded-md"
        >
          {secondaryButtonText}
        </Button>
      </Link>
      <Link href={primaryButtonHref}>
        <Button
          variant="ghost"
          size="lg"
          className="text-gray-700 hover:text-gray-900 font-medium px-8 py-3 text-base transition-colors duration-200"
        >
          {primaryButtonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}
