"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CustomerLogo {
  src: string;
  alt: string;
  animationDelay: number;
}

export function CustomerLogos() {
  const logos: CustomerLogo[] = [
    {
      src: "/images/logos/a1-telekom-austria.png",
      alt: "A1 Telekom Austria",
      animationDelay: 0,
    },
    { src: "/images/logos/ppmc-logo.svg", alt: "PPMC", animationDelay: 0.5 },
    { src: "/images/logos/jobidy.png", alt: "Jobidy", animationDelay: 1 },
    { src: "/images/logos/rundata.png", alt: "Rundata", animationDelay: 1.5 },
    {
      src: "/images/logos/wko-kaernten.png",
      alt: "WKO Kärnten",
      animationDelay: 2,
    },
    {
      src: "/images/logos/wp-werkportal.png",
      alt: "WP Werkportal",
      animationDelay: 2.5,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
      className="mt-32"
    >
      <div className="bg-white rounded-3xl py-16 px-8">
        <p className="text-gray-600 text-lg mb-12 font-light text-center">
          Vertraut von führenden Unternehmen
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 max-w-6xl mx-auto">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.alt}
              className="flex items-center justify-center h-12 w-28"
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: logo.animationDelay,
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={128}
                height={48}
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
