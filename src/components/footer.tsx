"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { PremiumButton } from "./ui/buttons/premium-button";

export function Footer() {
  const services = [
    { name: "Cloud Strategie & Beratung", href: "/services/cloud-strategy" },
    {
      name: "Enterprise Integration",
      href: "/services/enterprise-integration",
    },
    {
      name: "Business Insights & Analytics",
      href: "/services/business-insights",
    },
    { name: "Dimetrics Platform", href: "/services/platform" },
  ];

  const company = [
    { name: "Über uns", href: "/about" },
    { name: "Projekte", href: "/projects" },
    { name: "Karriere", href: "/karriere" },
    { name: "Blog", href: "/blog" },
  ];

  const legal = [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
    { name: "AGB", href: "/agb" },
    { name: "Cookies", href: "/cookies" },
  ];

  return (
    <footer className="relative bg-gray-950 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(61, 85, 226, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(95, 172, 219, 0.03) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(161, 0, 255, 0.04) 0%, transparent 50%)",
        }}
      />

      {/* Main Content */}
      <div className="relative">
        {/* Newsletter/CTA Section */}
        <div className="border-b border-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Bereit für Ihre digitale
                  <span className="block bg-gradient-to-r from-[#3d55e2] via-[#5facdb] to-[#A100FF] bg-clip-text text-transparent">
                    Transformation?
                  </span>
                </h3>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen.
                  Vereinbaren Sie jetzt ein kostenloses Beratungsgespräch.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <PremiumButton href="/kontakt" size="lg">
                  Beratungsgespräch vereinbaren
                </PremiumButton>
                <PremiumButton href="/projekte" variant="ghost" size="lg">
                  Projekte ansehen
                </PremiumButton>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-2 space-y-8">
                <div className="space-y-4">
                  <Image
                    src="/images/logos/dimetrics-logo.png"
                    alt="Dimetrics Logo"
                    width={180}
                    height={40}
                    className="h-10 w-auto"
                  />
                  <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                    Digitale Transformation strategisch durchdacht und technisch
                    exzellent umgesetzt. Ihr Partner für nachhaltigen digitalen
                    Erfolg.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-5 h-5 text-[#5facdb]" />
                    <span>Kärnten, Österreich</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail className="w-5 h-5 text-[#5facdb]" />
                    <a
                      href="mailto:office@dimetrics.io"
                      className="hover:text-[#5facdb] transition-colors"
                    >
                      office@dimetrics.io
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Phone className="w-5 h-5 text-[#5facdb]" />
                    <a
                      href="tel:+43123456789"
                      className="hover:text-[#5facdb] transition-colors"
                    >
                      +43 123 456 789
                    </a>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">Services</h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        className="text-gray-400 hover:text-[#5facdb] transition-colors duration-300 hover:translate-x-1 transform inline-flex items-center group"
                      >
                        {service.name}
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">
                  Unternehmen
                </h4>
                <ul className="space-y-3">
                  {company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-[#5facdb] transition-colors duration-300 hover:translate-x-1 transform inline-flex items-center group"
                      >
                        {item.name}
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">
                  Rechtliches
                </h4>
                <ul className="space-y-3">
                  {legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-[#5facdb] transition-colors duration-300 hover:translate-x-1 transform inline-flex items-center group"
                      >
                        {item.name}
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400">
                © 2024 Dimetrics. Alle Rechte vorbehalten.
              </div>
              <div className="text-gray-500 text-sm">
                Made with ❤️ in Austria
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
