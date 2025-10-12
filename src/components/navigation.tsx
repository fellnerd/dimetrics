"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
    setDropdownTimeout(timeout);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/70 backdrop-blur-md border-b border-gray-800/60 py-1.5"
          : "bg-gray-900/50 backdrop-blur-sm border-b border-gray-800/40 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300"
            >
              <img
                src="/images/logos/dimetrics-logo.png"
                alt="Dimetrics"
                className={`object-contain transition-all duration-300 ${
                  isScrolled ? "w-6 h-6" : "w-8 h-8"
                }`}
              />
              <span
                className={`font-light text-white transition-all duration-300 ${
                  isScrolled ? "text-sm" : "text-base"
                }`}
              >
                dimetrics
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex items-center space-x-10"
          >
            {/* Services Dropdown */}
            <div className="relative">
              <div
                className={`flex items-center space-x-1 text-gray-300 hover:text-white transition-all duration-300 font-light cursor-pointer ${
                  isScrolled ? "text-sm" : "text-base"
                }`}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  href="/#services"
                  className={`text-gray-300 transition-all duration-300 font-light ${
                    isScrolled ? "text-sm" : "text-base"
                  }`}
                >
                  Unsere Kompetenzen
                </a>
              </div>

              {/* Mega Menu Dropdown - Footer Style */}
              <div
                className={`absolute top-full left-0 w-96 bg-gray-950 rounded-xl shadow-2xl mt-2 p-6 z-50 border border-gray-800 transition-all duration-300 ${
                  dropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 80%, rgba(61, 85, 226, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(95, 172, 219, 0.03) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(161, 0, 255, 0.04) 0%, transparent 50%)",
                }}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Services
                    </h4>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="/services/cloud-strategy"
                          className="text-sm text-gray-400 hover:text-[#5facdb] transition-colors duration-300 hover:translate-x-1 transform inline-flex items-center group"
                        >
                          Cloud Strategie & Beratung
                          <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/application-integration"
                          className="text-sm text-gray-400 hover:text-[#5facdb] transition-colors duration-300 hover:translate-x-1 transform inline-flex items-center group"
                        >
                          Enterprise Integration
                          <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/business-insights-integrations"
                          className="text-sm text-gray-400 hover:text-[#5facdb] transition-colors duration-300 hover:translate-x-1 transform inline-flex items-center group"
                        >
                          Business Insights & Analytics
                          <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-800 pt-4">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Plattform
                    </h4>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="/business-process-automation-platform"
                          className="text-sm text-gray-400 hover:text-[#5facdb] transition-colors duration-300 hover:translate-x-1 transform inline-flex items-center group"
                        >
                          Dimetrics Platform
                          <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/#solutions"
              className={`text-gray-300 transition-all duration-300 font-light ${
                isScrolled ? "text-sm" : "text-base"
              }`}
            >
              Lösungen
            </a>
            <a
              href="/about"
              className={`text-gray-300 hover:text-white transition-all duration-300 font-light ${
                isScrolled ? "text-sm" : "text-base"
              }`}
            >
              Wer wir sind
            </a>
            <a
              href="/contact-us"
              className={`text-gray-300 hover:text-white transition-all duration-300 font-light ${
                isScrolled ? "text-sm" : "text-base"
              }`}
            >
              Kontakt
            </a>
            {isScrolled ? (
              <a
                href="/contact-us"
                className="text-gray-300 hover:text-white transition-all duration-300 font-light text-sm"
              >
                Beratung vereinbaren
              </a>
            ) : (
              <Button className="bg-gradient-to-r from-[#3d55e2] to-[#5facdb] hover:from-[#5facdb] hover:to-[#A100FF] text-white font-light transition-all duration-300 text-base px-6 py-2">
                Beratung vereinbaren
              </Button>
            )}
          </motion.div>

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
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-gray-800"
          >
            <div className="px-6 py-4 space-y-4">
              <a href="#services" className="block text-gray-300">
                Unsere Kompetenzen
              </a>
              <a href="#solutions" className="block text-gray-300">
                Lösungen
              </a>
              <a href="about" className="block text-gray-300">
                Wer wir sind
              </a>
              <a href="/contact-us" className="block text-gray-300">
                Kontakt
              </a>
              <Button className="w-full bg-accenture-purple hover:bg-accenture-purple/90 text-white font-light">
                Beratung vereinbaren
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
