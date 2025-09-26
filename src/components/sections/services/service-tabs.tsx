"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface Service {
  title: string;
  subtitle: string;
  fullTitle: string;
  description: string;
  backgroundImage: string;
  icon: string;
  href: string;
}

interface ServiceTabNavigationProps {
  services: Service[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

export function ServiceTabNavigation({
  services,
  activeTab,
  onTabChange,
}: ServiceTabNavigationProps) {
  return (
    <div className="border-b border-gray-200 mb-12">
      <nav className="flex space-x-8 overflow-x-auto">
        {services.map((service, index) => (
          <button
            key={service.title}
            onClick={() => onTabChange(index)}
            className={`pb-4 px-1 whitespace-nowrap text-lg font-medium transition-all duration-300 border-b-2 ${
              activeTab === index
                ? "border-[#A100FF] text-[#A100FF]"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {service.title}
          </button>
        ))}
      </nav>
    </div>
  );
}

interface ServiceTabContentProps {
  service: Service;
  index: number;
  activeTab: number;
}

export function ServiceTabContent({
  service,
  index,
  activeTab,
}: ServiceTabContentProps) {
  return (
    <motion.div
      key={service.title}
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: activeTab === index ? 1 : 0,
        x: activeTab === index ? 0 : 20,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`absolute inset-0 ${activeTab === index ? "block" : "hidden"}`}
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Content Side */}
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {service.subtitle}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="pt-4">
            <a
              href={service.href}
              className="inline-flex items-center text-[#A100FF] hover:text-[#FF6A00] transition-colors duration-300 font-semibold text-lg group"
            >
              Mehr erfahren
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Visual Side */}
        <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          {/* Background Image */}
          <Image
            src={service.backgroundImage}
            alt={service.fullTitle}
            fill
            className="object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#A100FF]/10 via-transparent to-[#00D9FF]/10"></div>

          {/* Central Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: activeTab === index ? 1 : 0.8,
                opacity: activeTab === index ? 1 : 0,
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-32 h-32 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl"
            >
              <Image
                src="/images/logos/dimetrics-logo.png"
                alt="dimetrics"
                width={80}
                height={80}
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Corner Accent */}
          <div className="absolute top-6 right-6 w-16 h-16 bg-[#A100FF]/10 rounded-full"></div>
          <div className="absolute bottom-6 left-6 w-24 h-24 bg-[#00D9FF]/10 rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
}
