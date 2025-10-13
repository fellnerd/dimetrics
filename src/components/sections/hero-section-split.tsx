"use client";

import Image from "next/image";
// import { motion } from "framer-motion"; // Deaktiviert - Ersetzt durch native Tailwind Animationen

interface HeroSectionSplitProps {
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  title: string;
  description: string;
  subText?: string;
  backgroundColor?: "black" | "white" | "gray";
  textColor?: "white" | "black";
}

export function HeroSectionSplit({
  imageSrc,
  imageAlt,
  imageWidth = 700,
  imageHeight = 600,
  title,
  description,
  backgroundColor = "black",
  textColor = "white",
  subText = "",
}: HeroSectionSplitProps) {
  const bgClass = {
    black: "bg-black",
    white: "bg-white",
    gray: "bg-gray-100",
  }[backgroundColor];

  const textClass = {
    white: "text-white",
    black: "text-black",
  }[textColor];

  const descriptionClass = {
    white: "text-gray-100",
    black: "text-gray-700",
  }[textColor];

  return (
    <section className={`relative ${bgClass} overflow-hidden py-12 lg:py-16`}>
      <div className="flex flex-col lg:flex-row">
        {/* Left Image - Auto height based on content */}
        <div className="lg:w-1/2 relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            height={imageHeight}
            width={imageWidth}
            className="object-contain"
          />
        </div>

        {/* Right Content - Text */}
        <div className="lg:w-1/2 relative z-10 px-4 sm:px-6 py-12 sm:py-16 lg:py-16">
          <div className="space-y-8 lg:space-y-12">
            <div
              className="space-y-6 lg:space-y-8"
            >
              <h1
                className={`text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-none text-left mt-8 lg:mt-16 ${textClass}`}
              >
                <span className={`block mb-1 sm:mb-2 ${textClass}`}>
                  {title}
                </span>
              </h1>
              <div className="space-y-4 lg:space-y-6">
                <p
                  className={`text-lg sm:text-xl lg:text-2xl font-light leading-relaxed ${descriptionClass}`}
                >
                  {description}
                </p>
                {subText && (
                  <p
                    className={`text-lg sm:text-xl lg:text-2xl font-light leading-relaxed ${descriptionClass}`}
                  >
                    {subText}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#3d55e2]/5 via-transparent to-[#5facdb]/5"></div>
    </section>
  );
}
