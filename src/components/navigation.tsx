"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <img
              src="/images/logos/dimetrics-logo.png"
              alt="Dimetrics"
              className="w-8 h-8 object-contain"
            />
            <span className="text-2xl font-light text-white">dimetrics</span>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex items-center space-x-10"
          >
            <a
              href="#services"
              className="text-gray-300 hover:text-accenture-purple transition-colors font-light"
            >
              Unsere Kompetenzen
            </a>
            <a
              href="#solutions"
              className="text-gray-300 hover:text-accenture-purple transition-colors font-light"
            >
              Lösungen
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-accenture-purple transition-colors font-light"
            >
              Über Dimetrics
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-accenture-purple transition-colors font-light"
            >
              Kontakt
            </a>
            <Button
              className="bg-accenture-purple hover:bg-accenture-purple/90 text-white font-light"
              size="sm"
            >
              Beratung vereinbaren
            </Button>
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
              <a href="#about" className="block text-gray-300">
                Über Dimetrics
              </a>
              <a href="#contact" className="block text-gray-300">
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
