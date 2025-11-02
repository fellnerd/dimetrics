"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// import { motion } from "framer-motion"; // ERSETZT DURCH NATIVE TAILWIND ANIMATIONEN

type MegaMenuItem = {
  label: string;
  description: string;
  href: string;
};

type NavLink = {
  label: string;
  href: string;
  megaMenu?: MegaMenuItem[];
};

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const [activeMegaMenuLabel, setActiveMegaMenuLabel] = useState<string | null>(
    null
  );
  const [activeMegaItemLabel, setActiveMegaItemLabel] = useState<string | null>(
    null
  );
  const pathname = usePathname();

  const navLinks = useMemo<NavLink[]>(
    () => [
      {
        label: "Unsere Kompetenzen",
        href: "/#services",
        megaMenu: [
          {
            label: "AI Cloud",
            description:
              "Cloud-Strategien für skalierbare und sichere Plattformen.",
            href: "/services/cloud-strategy",
          },
          {
            label: "Enterprise Integration",
            description: "Nahtlose Integration Ihrer Unternehmenssysteme.",
            href: "/services/application-integration",
          },
          {
            label: "Data & Analytics",
            description: "Datengetriebene Entscheidungen durch Insights & BI.",
            href: "/services/business-insights-integrations",
          },
          {
            label: "Dimetrics Plattform",
            description: "Low-Code-Plattform für Business Process Automation.",
            href: "/business-process-automation-platform",
          },
        ],
      },
      {
        label: "Lösungen",
        href: "/#solutions",
        megaMenu: [
          {
            label: "Projektmanagement System",
            description:
              "Optimierte Arbeitsablaeufe, Echtzeit-Insights und Power BI fuer transparente Steuerung.",
            href: "/solutions/projektmanagement-system-inkl-power-bi",
          },
          {
            label: "WKO Cashback Aktion",
            description:
              "Digitale Verarbeitung von mehr als 15000 Einreichungen fuer effiziente Abwicklung.",
            href: "/solutions/wko-cashback-aktion",
          },
          {
            label: "Customer Relationship Management",
            description:
              "CRM mit Exchange-Integration, Reporting und automatischer Interaktionserfassung.",
            href: "/solutions/customer-relationship-management-tool",
          },
          {
            label: "Dynamisches Recruiting CRM",
            description:
              "Automatisierte Bewerbungsprozesse, bessere Zusammenarbeit und hohe Transparenz.",
            href: "/solutions/dynamisches-recruiting-crm",
          },
          {
            label: "Lieferantenmanagement",
            description:
              "Plattform zur Optimierung von Lieferanten, Gutschriften und Buchhaltungsprozessen.",
            href: "/solutions/lieferantenmanagement-in-der-energietechnik",
          },
          {
            label: "Dokumentenautomatisierung mit OCR",
            description:
              "Digitalisiert Rechnungen und Lieferscheine und integriert nahtlos in Systeme wie BMD.",
            href: "/solutions/dokumentenautomatisierung-mit-ocr",
          },
        ],
      },
      { label: "Plattform", href: "/business-process-automation-platform" },
      { label: "Wer wir sind", href: "/about" },
      { label: "Kontakt", href: "/contact-us" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setActiveMegaMenuLabel(null);
      setActiveMegaItemLabel(null);
    };

    const updateHash = () => {
      setCurrentHash(window.location.hash);
    };

    updateHash();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
    };
  }, []);

  useEffect(() => {
    // Ensure hash state stays in sync when navigating between routes.
    setCurrentHash(window.location.hash);
    setActiveMegaMenuLabel(null);
    setActiveMegaItemLabel(null);
  }, [pathname]);

  const activeMegaMenuConfig = activeMegaMenuLabel
    ? navLinks.find((link) => link.label === activeMegaMenuLabel)
    : undefined;
  const megaMenuItems = activeMegaMenuConfig?.megaMenu ?? [];
  const activeMegaItem =
    megaMenuItems.find((item) => item.label === activeMegaItemLabel) ??
    megaMenuItems[0] ??
    null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(15,23,42,0.45)]"
          : "bg-white/70 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center gap-3 md:gap-6 py-2">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300"
            >
              <Image
                src="/images/logos/dimetrics-logo.png"
                alt="Dimetrics"
                width={32}
                height={32}
                className="object-contain transition-all duration-300"
                priority={false}
                sizes="32px"
              />
              <span className="font-semibold text-gray-900 transition-all duration-300 text-base tracking-tight">
                dimetrics
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div
              className="relative"
              onMouseLeave={() => {
                setActiveMegaMenuLabel(null);
                setActiveMegaItemLabel(null);
              }}
            >
              <nav className="flex items-center gap-1.5 rounded-full bg-white/40 border border-gray-200/60 px-3 py-1">
                {navLinks.map((link) => {
                  const isAnchor = link.href.startsWith("/#");
                  const isActive = !isAnchor && pathname === link.href;
                  const linkHash = isAnchor ? link.href.split("#")[1] : null;
                  const isAnchorActive =
                    isAnchor &&
                    pathname === "/" &&
                    currentHash === `#${linkHash}`;
                  const isMegaActive = activeMegaMenuLabel === link.label;

                  const baseClasses =
                    "px-3.5 py-1 text-sm font-medium tracking-tight transition-all duration-200 rounded-full whitespace-nowrap";
                  const stateClasses =
                    isActive || isAnchorActive || isMegaActive
                      ? "bg-gray-900 text-white shadow-sm"
                      : "text-gray-900 hover:text-black";

                  const handleMouseEnter = () => {
                    if (link.megaMenu && link.megaMenu.length > 0) {
                      setActiveMegaMenuLabel(link.label);
                      setActiveMegaItemLabel(link.megaMenu[0]?.label ?? null);
                    } else {
                      setActiveMegaMenuLabel(null);
                      setActiveMegaItemLabel(null);
                    }
                  };

                  const commonProps = {
                    onMouseEnter: handleMouseEnter,
                    onFocus: handleMouseEnter,
                    onClick: () => {
                      setActiveMegaMenuLabel(null);
                      setActiveMegaItemLabel(null);
                    },
                    className: `${baseClasses} ${stateClasses}`,
                  };

                  if (link.href.startsWith("/#")) {
                    return (
                      <a key={link.label} href={link.href} {...commonProps}>
                        {link.label}
                      </a>
                    );
                  }

                  return (
                    <Link key={link.label} href={link.href} {...commonProps}>
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {activeMegaMenuLabel && megaMenuItems.length > 0 && (
                <div className="absolute left-1/2 top-full z-40 hidden -translate-x-1/2 pt-4 md:block">
                  <div className="w-[780px] rounded-3xl border border-gray-200/70 bg-white/95 p-8 shadow-[0_30px_50px_-35px_rgba(15,23,42,0.65)] backdrop-blur-xl">
                    <div className="flex gap-10">
                      <div className="w-2/5 space-y-1.5">
                        {megaMenuItems.map((item) => {
                          const isItemActive =
                            activeMegaItem?.label === item.label;
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              className={`flex items-center justify-between rounded-2xl px-4 py-2 transition-all duration-200 leading-tight ${
                                isItemActive
                                  ? "text-gray-900 font-semibold"
                                  : "text-gray-700 hover:text-gray-900"
                              }`}
                              onMouseEnter={() =>
                                setActiveMegaItemLabel(item.label)
                              }
                              onFocus={() => setActiveMegaItemLabel(item.label)}
                              onClick={() => {
                                setActiveMegaMenuLabel(null);
                                setActiveMegaItemLabel(null);
                              }}
                            >
                              <span className="text-lg font-semibold tracking-tight leading-tight">
                                {item.label}
                              </span>
                              <span className="text-sm font-medium opacity-70">
                                &gt;
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="flex-1">
                        {activeMegaItem && (
                          <div className="rounded-2xl border border-gray-200/60 bg-gray-50/70 p-6">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                              {activeMegaMenuLabel}
                            </p>
                            <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-900">
                              {activeMegaItem.label}
                            </h3>
                            <p className="mt-4 text-base leading-relaxed text-gray-600">
                              {activeMegaItem.description}
                            </p>
                            <Link
                              href={activeMegaItem.href}
                              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors duration-200 hover:text-black"
                              onClick={() => {
                                setActiveMegaMenuLabel(null);
                                setActiveMegaItemLabel(null);
                              }}
                            >
                              Mehr erfahren
                              <span aria-hidden className="text-base">
                                &gt;
                              </span>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex">
            <Link href="/contact-us">
              <Button className="rounded-full bg-gray-900 text-white hover:bg-black text-sm font-medium tracking-tight px-5 py-2">
                Beratung vereinbaren
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="ml-auto md:hidden">
            <button
              className="text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 animate-fade-slide-in-down">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <div key={link.label} className="space-y-2">
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="block text-gray-800 hover:text-gray-900 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="block text-gray-800 hover:text-gray-900 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}

                  {link.megaMenu && (
                    <div className="space-y-2 pl-3">
                      {link.megaMenu.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full rounded-full bg-gray-900 text-white hover:bg-black text-sm font-medium tracking-tight">
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
