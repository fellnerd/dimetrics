"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
// import { motion } from "framer-motion"; // ERSETZT DURCH NATIVE TAILWIND ANIMATIONEN
import { useState, useEffect } from "react";
import Link from "next/link";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 ${
        isScrolled
          ? "bg-gray-900/70 backdrop-blur-md border-b border-gray-800/60"
          : "bg-gray-900/50 backdrop-blur-sm border-b border-gray-800/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-fade-slide-in-left">
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300"
            >
              <img
                src="/images/logos/dimetrics-logo.png"
                alt="Dimetrics"
                className="object-contain transition-all duration-300 w-8 h-8"
              />
              <span className="font-light text-white transition-all duration-300 text-base">
                dimetrics
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 animate-fade-slide-in-right">
            <a
              href="/#services"
              className="text-gray-300 hover:text-white transition-all duration-300 font-light text-base"
            >
              Unsere Kompetenzen
            </a>
            <a
              href="/#solutions"
              className="text-gray-300 hover:text-white transition-all duration-300 font-light text-base"
            >
              Lösungen
            </a>
            <a
              href="/business-process-automation-platform"
              className="text-gray-300 hover:text-white transition-all duration-300 font-light text-base"
            >
              Plattform
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:text-white transition-all duration-300 font-light text-base"
            >
              Wer wir sind
            </a>
            <a
              href="/contact-us"
              className="text-gray-300 hover:text-white transition-all duration-300 font-light text-base"
            >
              Kontakt
            </a>
            <Link href="/contact-us">
              <Button className="bg-gradient-to-r from-[#3d55e2] to-[#5facdb] hover:from-[#5facdb] hover:to-[#A100FF] text-white font-light transition-all duration-300 text-base px-6 py-2">
                Beratung vereinbaren
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 animate-fade-slide-in-down">
            <div className="px-6 py-4 space-y-4">
              <a
                href="/#services"
                className="block text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Unsere Kompetenzen
              </a>
              <a
                href="/#solutions"
                className="block text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Lösungen
              </a>
              <Link
                href="/about"
                className="block text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Wer wir sind
              </Link>
              <Link
                href="/contact-us"
                className="block text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
              <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-[#3d55e2] to-[#5facdb] hover:from-[#5facdb] hover:to-[#A100FF] text-white font-light transition-all duration-300">
                  Beratung vereinbaren
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
