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
}

export function CTAHeader({
  title = "Bereit für Ihre",
  highlightText = "digitale Transformation?",
  description = "Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen. Vereinbaren Sie noch heute ein unverbindliches Beratungsgespräch.",
}: CTAHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8 text-center"
    >
      <h3 className="text-4xl lg:text-5xl font-bold mb-8">
        <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
          Bereit für Ihre
        </span>
        <br />
        <span className="bg-gradient-to-r from-[#3d55e2] via-[#5facdb] to-[#A100FF] bg-clip-text text-transparent">
          digitale Transformation?
        </span>
      </h3>
      <SectionDescription className="text-gray-400 max-w-3xl mx-auto">
        {description}
      </SectionDescription>
    </motion.div>
  );
}
