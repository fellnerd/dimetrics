"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ServiceSlideshow } from "@/components/ui/service-slideshow";

interface Service {
  title: string;
  subtitle: string;
  fullTitle: string;
  description: string;
  backgroundImage: string;
  icon: string;
  href: string;
  slideshow?: string[];
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
    <div className="border-b border-gray-200 mb-6 sm:mb-8 lg:mb-12">
      <nav className="flex space-x-2 sm:space-x-4 lg:space-x-8 overflow-x-auto pb-1 scrollbar-hide">
        {services.map((service, index) => (
          <button
            key={service.title}
            onClick={() => onTabChange(index)}
            className={`pb-3 sm:pb-4 px-2 sm:px-1 whitespace-nowrap text-xs sm:text-base lg:text-lg font-medium transition-all duration-300 border-b-2 flex-shrink-0 ${
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
      <div
        className={`grid gap-8 sm:gap-12 lg:gap-16 items-center ${
          service.slideshow && service.slideshow.length > 1
            ? "lg:grid-cols-5"
            : "lg:grid-cols-2"
        }`}
      >
        {/* Content Side */}
        <div
          className={`space-y-6 sm:space-y-8 order-2 lg:order-1 ${
            service.slideshow && service.slideshow.length > 1
              ? "lg:col-span-2"
              : ""
          }`}
        >
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              {service.subtitle}
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="pt-2 sm:pt-4">
            <a
              href={service.href}
              className="inline-flex items-center text-[#A100FF] hover:text-[#FF6A00] transition-colors duration-300 font-semibold text-base sm:text-lg group"
            >
              Mehr erfahren
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Visual Side */}
        <div
          className={`relative order-1 lg:order-2 ${
            service.slideshow && service.slideshow.length > 1
              ? "h-[250px] sm:h-[350px] lg:h-[600px] lg:col-span-3"
              : "h-[200px] sm:h-[280px] lg:h-[500px]"
          } rounded-2xl overflow-hidden ${
            service.slideshow && service.slideshow.length > 1
              ? "bg-transparent"
              : "bg-gradient-to-br from-gray-50 to-gray-100"
          }`}
        >
          {/* Conditional Rendering: Slideshow or Single Image */}
          {service.slideshow && service.slideshow.length > 1 ? (
            <ServiceSlideshow
              images={service.slideshow}
              alt={service.fullTitle}
              autoPlay={activeTab === index}
              interval={4000}
            />
          ) : (
            <>
              {/* Single Background Image */}
              <Image
                src={service.backgroundImage}
                alt={service.fullTitle}
                fill
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A100FF]/10 via-transparent to-[#00D9FF]/10"></div>

              {/* Corner Accent */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#A100FF]/10 rounded-full"></div>
              <div className="absolute bottom-6 left-6 w-24 h-24 bg-[#00D9FF]/10 rounded-full"></div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
