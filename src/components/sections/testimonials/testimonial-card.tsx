"use client";

// import { motion } from "framer-motion"; // Deaktiviert - Ersetzt durch native Tailwind Animationen
import Image from "next/image";

interface Testimonial {
  rating: number;
  quote: string;
  company: string;
  role: string;
  logo: string;
  delay: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <div
      key={index}
      className="bg-black border border-gray-800 rounded-lg p-8"
    >
      <div className="mb-6">
        <div className="flex text-accenture-purple mb-4">
          {"★".repeat(testimonial.rating)}
        </div>
        <blockquote className="text-gray-300 font-light leading-relaxed">
          "{testimonial.quote}"
        </blockquote>
      </div>
      <div className="border-t border-gray-800 pt-6 flex items-center space-x-4">
        <Image
          src={testimonial.logo}
          alt={testimonial.company}
          width={48}
          height={48}
          className="object-contain bg-white rounded-lg p-2"
        />
        <div>
          <div className="font-light text-white">{testimonial.company}</div>
          <div className="text-sm text-gray-400">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
