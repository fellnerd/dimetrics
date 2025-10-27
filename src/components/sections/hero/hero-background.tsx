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
          priority={true}
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/60 lg:to-black/20"></div>
      </div>
    </div>
  );
}
