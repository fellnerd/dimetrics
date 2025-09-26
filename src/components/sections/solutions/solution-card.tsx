"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { CategoryBadge } from "@/components/ui/badges/category-badge";
import { AccentLine } from "@/components/ui/decorations/accent-line";

interface Solution {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

interface SolutionCardProps {
  solution: Solution;
  index: number;
}

export function SolutionCard({ solution, index }: SolutionCardProps) {
  return (
    <motion.div
      key={solution.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`grid lg:grid-cols-2 gap-16 items-center ${
        index % 2 === 1 ? "lg:direction-rtl" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <div className="relative">
          {/* Static background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d55e2]/30 via-[#5facdb]/20 to-[#A100FF]/30 rounded-3xl blur-sm"></div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700/50">
            <Image
              src={solution.image}
              alt={solution.title}
              fill
              className="object-contain p-6"
            />

            {/* Static overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

            {/* Visible category badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-[#3d55e2]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold border border-[#5facdb]/30">
                {solution.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <div className="relative">
          <AccentLine position="left" className="-left-6" />

          <div className="mb-6">
            <CategoryBadge color="primary">{solution.category}</CategoryBadge>
          </div>

          <h3 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              {solution.title}
            </span>
          </h3>
        </div>

        <div className="relative">
          <p className="text-gray-300 text-lg leading-relaxed font-light tracking-wide">
            {solution.description}
          </p>

          {/* Subtle accent decoration */}
          <div className="absolute -bottom-2 left-0 w-20 h-0.5 bg-gradient-to-r from-[#5facdb] to-transparent opacity-60"></div>
        </div>

        {/* Enhanced CTA Button */}
        <div className="pt-8">
          <a
            href={solution.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#3d55e2]/10 to-[#5facdb]/10 backdrop-blur-sm border border-[#5facdb]/30 rounded-xl hover:from-[#3d55e2]/20 hover:to-[#5facdb]/20 hover:border-[#5facdb]/50 transition-all duration-500 overflow-hidden"
          >
            {/* Button background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3d55e2] to-[#5facdb] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

            <span className="relative text-[#5facdb] group-hover:text-white transition-colors duration-300 font-semibold text-lg">
              Mehr erfahren
            </span>
            <ExternalLink className="relative ml-3 h-5 w-5 text-[#5facdb] group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
