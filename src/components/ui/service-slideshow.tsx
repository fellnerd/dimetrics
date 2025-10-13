"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface ServiceSlideshowProps {
  images: string[];
  alt: string;
  autoPlay?: boolean;
  interval?: number;
}

export function ServiceSlideshow({
  images,
  alt,
  autoPlay = true,
  interval = 4000,
}: ServiceSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentSlide, isPlaying, images.length, interval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (images.length <= 1) {
    // Fallback to single image if no slideshow needed
    return (
      <div className="relative w-full h-full">
        <Image
          src={images[0] || "/images/platform/platform_dark.png"}
          alt={alt}
          fill
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full group">
      {/* Main slideshow container */}
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <div
            key={currentSlide}
            className="absolute inset-0"
          >
            <Image
              src={images[currentSlide]}
              alt={`${alt} - Slide ${currentSlide + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={goToPrevious}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 transform hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 transform hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Play/Pause Control */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={togglePlayPause}
          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gray-800 scale-110"
                : "bg-gray-600 hover:bg-gray-700"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-4 right-4 text-white/80 text-sm font-medium bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
        {currentSlide + 1} / {images.length}
      </div>
    </div>
  );
}
