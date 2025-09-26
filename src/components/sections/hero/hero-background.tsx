"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroBackgroundProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function HeroBackground({
  imageSrc = "/images/hero/bg-hero.png",
  imageAlt = "Digital Transformation",
}: HeroBackgroundProps) {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-5/12">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative h-full w-full"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20"></div>
      </motion.div>
    </div>
  );
}
