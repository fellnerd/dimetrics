"use client";

// import { motion } from "framer-motion"; // ERSETZT DURCH NATIVE TAILWIND ANIMATIONEN
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
    <div className="absolute right-0 top-0 bottom-0 w-full">
      <div className="relative h-full w-full animate-fade-slide-in-right-delayed">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/60 lg:to-black/20"></div>
      </div>
    </div>
  );
}
