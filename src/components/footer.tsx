"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Linkedin } from "lucide-react";
import { PremiumButton } from "./ui/buttons/premium-button";

export function Footer() {
  const currentYear = new Date().getFullYear();

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
        <div className="border-b border-gray-800 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Bereit für Ihre digitale
                  <span className="block bg-gradient-to-r from-[#3d55e2] via-[#5facdb] to-[#A100FF] bg-clip-text text-transparent">
                    Transformation?
                  </span>
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">
                  Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen.
                  Vereinbaren Sie jetzt ein kostenloses Beratungsgespräch.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <PremiumButton
                  href="/kontakt"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Beratungsgespräch vereinbaren
                </PremiumButton>
                <PremiumButton
                  href="/projekte"
                  variant="ghost"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Projekte ansehen
                </PremiumButton>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Brand Section */}
              <div className="sm:col-span-2 lg:col-span-1 space-y-6 lg:space-y-8">
                <div className="space-y-4">
                  <Image
                    src="/images/logos/dimetrics-logo.png"
                    alt="Dimetrics Logo"
                    width={180}
                    height={40}
                    className="h-8 sm:h-10 w-auto"
                  />
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-md">
                    Digitale Transformation strategisch durchdacht und technisch
                    exzellent umgesetzt. Ihr Partner für nachhaltigen digitalen
                    Erfolg.
                  </p>
                </div>

                {/* LinkedIn & Partner Logos */}
                <div className="space-y-6">
                  {/* LinkedIn */}
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/company/dimetrics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-400 hover:text-[#5facdb] transition-colors group"
                    >
                      <Linkedin className="w-6 h-6 text-white group-hover:text-[#5facdb] transition-colors" />
                      <span>LinkedIn</span>
                    </a>
                  </div>

                  {/* Partner Logos */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap lg:flex-nowrap gap-3 lg:gap-6 items-center lg:max-w-sm">
                      <a
                        href="https://sic.or.at/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity hover:opacity-100"
                      >
                        <img
                          src="https://sic.or.at/wp-content/uploads/2018/05/sic_logo2018.png"
                          alt="SIC"
                          className="h-6 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                        />
                      </a>
                      <a
                        href="https://www.ppmcag.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity hover:opacity-100"
                      >
                        <Image
                          src="/images/logos/ppmc-logo.svg"
                          alt="PPMC"
                          width={60}
                          height={30}
                          className="h-6 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                        />
                      </a>
                      <a
                        href="https://www.systempro.at/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity hover:opacity-100"
                      >
                        <img
                          src="https://www.systempro.at/wp-content/uploads/2017/02/logo.png?_t=1488061157"
                          alt="Systempro"
                          className="h-6 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">Services</h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="text-sm text-gray-400 hover:text-[#5facdb] transition-colors duration-300 hover:translate-x-1 transform inline-flex items-center group"
                      >
                        {service.name}
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </Link>
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
                        className="text-sm text-gray-400 hover:text-[#5facdb] transition-colors duration-300 hover:translate-x-1 transform inline-flex items-center group"
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
                        className="text-sm text-gray-400 hover:text-[#5facdb] transition-colors duration-300 hover:translate-x-1 transform inline-flex items-center group"
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
        <div className="border-t border-gray-800 py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm sm:text-base">
                © {currentYear} Dimetrics. Alle Rechte vorbehalten.
              </div>
              <div className="text-gray-500 text-xs sm:text-sm">
                Made with ❤️ in Austria
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
