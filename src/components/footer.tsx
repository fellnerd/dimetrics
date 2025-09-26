"use client";

import { Button } from "@/components/ui/button";

export function Footer() {
  const services = [
    { name: "Cloud Strategy", href: "#" },
    { name: "System Integration", href: "#" },
    { name: "Business Insights", href: "#" },
    { name: "Low-Code Development", href: "#" },
  ];

  const company = [
    { name: "Über uns", href: "#" },
    { name: "Team", href: "#" },
    { name: "Karriere", href: "#" },
    { name: "Kontakt", href: "#" },
  ];

  const legal = [
    { name: "Impressum", href: "#" },
    { name: "Datenschutz", href: "#" },
    { name: "AGB", href: "#" },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-accenture-purple"></div>
              <span className="text-2xl font-light text-white">dimetrics</span>
            </div>
            <p className="text-gray-400 font-light">
              Digitale Transformation. Strategisch durchdacht. Technisch
              exzellent.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-white font-light">Services</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="hover:text-accenture-purple transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-white font-light">Unternehmen</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-accenture-purple transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-light">Kontakt</h4>
            <div className="space-y-3 text-gray-400 font-light">
              <p>Österreich</p>
              <p>office@dimetrics.io</p>
              <Button
                size="sm"
                className="mt-4 bg-accenture-purple hover:bg-accenture-purple/90 text-white font-light"
              >
                Termin vereinbaren
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm font-light">
              © 2024 Dimetrics. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 text-gray-400 text-sm font-light">
              {legal.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-accenture-purple transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
