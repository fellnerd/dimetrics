"use client";

import { motion } from "framer-motion";
import {
  GradientHeadline,
  GradientText,
} from "../../ui/typography/gradient-headline";
import {
  SectionDescription,
  HighlightedText,
} from "../../ui/typography/section-description";

interface CTAHeaderProps {
  title?: string;
  highlightText?: string;
  description?: string;
  theme?: "dark" | "light";
}

export function CTAHeader({
  title = "Bereit für Ihre",
  highlightText = "digitale Transformation?",
  description = "Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen. Vereinbaren Sie noch heute ein unverbindliches Beratungsgespräch.",
  theme = "dark",
}: CTAHeaderProps) {
  // Theme-spezifische Farben
  const themeClasses = {
    dark: {
      titleGradient: "from-white via-gray-200 to-white",
      highlightGradient: "from-[#3d55e2] via-[#5facdb] to-[#A100FF]",
      description: "text-gray-400",
    },
    light: {
      titleGradient: "from-gray-900 via-gray-700 to-gray-900",
      highlightGradient: "from-[#3d55e2] via-[#5facdb] to-[#A100FF]",
      description: "text-gray-600",
    },
  }[theme];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8 text-center"
    >
      <h3 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
        <span
          className={`block bg-gradient-to-r ${themeClasses.titleGradient} bg-clip-text text-transparent`}
        >
          {title}
        </span>
        <span
          className={`block bg-gradient-to-r ${themeClasses.highlightGradient} bg-clip-text text-transparent`}
        >
          {highlightText}
        </span>
      </h3>
      <SectionDescription
        className={`${themeClasses.description} max-w-3xl mx-auto`}
      >
        {description}
      </SectionDescription>
    </motion.div>
  );
}
