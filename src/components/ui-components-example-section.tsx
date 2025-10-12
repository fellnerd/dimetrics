"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Typography from "./ui/typography/typography";
import Content from "./ui/content/content";
import { Button } from "./ui/button";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

const UIComponentsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const serviceTabs = [
    "Cloud",
    "Enterprise Integration",
    "Data & Analytics",
    "Dimetrics Plattform",
  ];

  return (
    <section className="bg-white py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Content maxWidth="7xl">
          {/* Header */}
          <Content.Row cols={1}>
            <Content.Column className="text-center mb-20">
              <Typography.SectionLabel>UI COMPONENTS</Typography.SectionLabel>
              <Typography.Headline className="mb-6">
                Tatsächlich verwendete Komponenten
              </Typography.Headline>
              <Typography.Lead>
                Alle UI-Komponenten, die auf der dimetrics.io Homepage verwendet
                werden
              </Typography.Lead>
            </Content.Column>
          </Content.Row>

          {/* Service Tab Navigation (echte Komponente) */}
          <Content.Row cols={1}>
            <Content.Column className="mb-16">
              <Typography.SectionTitle className="mb-8">
                Service Tab Navigation
              </Typography.SectionTitle>
              <div className="border-b border-gray-200 mb-8">
                <nav className="flex space-x-8 overflow-x-auto pb-1">
                  {serviceTabs.map((tab, index) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(index)}
                      className={`pb-4 px-1 whitespace-nowrap text-lg font-medium transition-all duration-300 border-b-2 flex-shrink-0 ${
                        activeTab === index
                          ? "border-[#A100FF] text-[#A100FF]"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>
              <Typography.Small className="text-gray-500 text-center">
                Service Tab Navigation mit aktiven States und Hover-Effekten
              </Typography.Small>
            </Content.Column>
          </Content.Row>

          {/* Hero CTA Buttons (echte Implementierung) */}
          <Content.Row cols={2} gap="xl">
            <Content.Column className="mb-16">
              <Typography.SectionTitle className="mb-8">
                Hero CTA Buttons
              </Typography.SectionTitle>
              <div className="space-y-4">
                <div>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="bg-gradient-to-r from-[#A100FF] to-[#3d55e2] hover:from-[#8500dd] hover:to-[#2a42c7] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-[#A100FF]/25 group"
                  >
                    Was wir machen
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Typography.Small className="mt-2 text-gray-500">
                    Primary Hero CTA mit Gradient & Animation
                  </Typography.Small>
                </div>
                <div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    Jetzt Beratung vereinbaren
                  </Button>
                  <Typography.Small className="mt-2 text-gray-500">
                    Secondary Hero CTA mit Border-Style
                  </Typography.Small>
                </div>
              </div>
            </Content.Column>

            <Content.Column className="mb-16">
              <Typography.SectionTitle className="mb-8">
                Footer CTA Buttons
              </Typography.SectionTitle>
              <div className="space-y-4">
                <div>
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-gradient-to-r from-[#A100FF] to-[#3d55e2] hover:from-[#8500dd] hover:to-[#2a42c7] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
                  >
                    Beratungsgespräch vereinbaren
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Typography.Small className="mt-2 text-gray-500">
                    Footer Primary CTA
                  </Typography.Small>
                </div>
                <div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300"
                  >
                    Referenzen ansehen
                  </Button>
                  <Typography.Small className="mt-2 text-gray-500">
                    Footer Secondary CTA
                  </Typography.Small>
                </div>
              </div>
            </Content.Column>
          </Content.Row>

          {/* KPI Cards (echte Hero Stats) */}
          <Content.Row cols={1}>
            <Content.Column className="mb-16">
              <Typography.SectionTitle className="mb-8 text-center">
                Hero KPI Cards
              </Typography.SectionTitle>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800/40 rounded-2xl">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-300 text-sm">
                    Projekte erfolgreich umgesetzt
                  </div>
                </div>
                <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800/40 rounded-2xl">
                  <div className="text-3xl font-bold text-white mb-2">95%</div>
                  <div className="text-gray-300 text-sm">
                    Kundenzufriedenheit
                  </div>
                </div>
                <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800/40 rounded-2xl">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">
                    Support & Monitoring
                  </div>
                </div>
                <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800/40 rounded-2xl">
                  <div className="text-3xl font-bold text-white mb-2">15+</div>
                  <div className="text-gray-300 text-sm">
                    Jahre Branchenerfahrung
                  </div>
                </div>
              </div>
              <Typography.Small className="mt-4 text-gray-500 text-center">
                Hero Section KPI Cards mit Glasmorphism-Effekt
              </Typography.Small>
            </Content.Column>
          </Content.Row>

          {/* Category Badges (echte Lösung Kategorien) */}
          <Content.Row cols={1}>
            <Content.Column className="mb-16">
              <Typography.SectionTitle className="mb-8 text-center">
                Lösung Category Badges
              </Typography.SectionTitle>
              <div className="flex gap-4 justify-center flex-wrap">
                <span className="inline-flex items-center bg-gradient-to-r from-[#A100FF]/20 to-[#3d55e2]/20 text-[#A100FF] px-4 py-2 rounded-full text-sm font-semibold border border-[#A100FF]/20 backdrop-blur-sm">
                  Projektmanagement
                </span>
                <span className="inline-flex items-center bg-gradient-to-r from-[#3d55e2]/20 to-[#5facdb]/20 text-[#3d55e2] px-4 py-2 rounded-full text-sm font-semibold border border-[#3d55e2]/20 backdrop-blur-sm">
                  Prozessautomatisierung
                </span>
                <span className="inline-flex items-center bg-gradient-to-r from-[#5facdb]/20 to-[#A100FF]/20 text-[#5facdb] px-4 py-2 rounded-full text-sm font-semibold border border-[#5facdb]/20 backdrop-blur-sm">
                  CRM & Vertrieb
                </span>
                <span className="inline-flex items-center bg-gradient-to-r from-[#A100FF]/20 to-[#5facdb]/20 text-[#A100FF] px-4 py-2 rounded-full text-sm font-semibold border border-[#A100FF]/20 backdrop-blur-sm">
                  HR & Recruiting
                </span>
                <span className="inline-flex items-center bg-gradient-to-r from-[#3d55e2]/20 to-[#A100FF]/20 text-[#3d55e2] px-4 py-2 rounded-full text-sm font-semibold border border-[#3d55e2]/20 backdrop-blur-sm">
                  Supply Chain
                </span>
                <span className="inline-flex items-center bg-gradient-to-r from-[#5facdb]/20 to-[#3d55e2]/20 text-[#5facdb] px-4 py-2 rounded-full text-sm font-semibold border border-[#5facdb]/20 backdrop-blur-sm">
                  Dokumentenmanagement
                </span>
              </div>
            </Content.Column>
          </Content.Row>

          {/* Testimonial Components */}
          <Content.Row cols={2} gap="xl">
            <Content.Column className="mb-16">
              <Typography.SectionTitle className="mb-8">
                Testimonial Rating
              </Typography.SectionTitle>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 fill-current" />
                    ))}
                  </div>
                </div>
                <Typography.Small className="text-gray-500">
                  5-Sterne Rating System für Testimonials
                </Typography.Small>
              </div>
            </Content.Column>

            <Content.Column className="mb-16">
              <Typography.SectionTitle className="mb-8">
                Link Buttons
              </Typography.SectionTitle>
              <div className="space-y-4">
                <div>
                  <button className="group inline-flex items-center text-[#A100FF] hover:text-[#3d55e2] font-medium transition-colors duration-200">
                    Mehr erfahren
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <Typography.Small className="mt-2 text-gray-500">
                    Service Link mit Hover-Animation
                  </Typography.Small>
                </div>
              </div>
            </Content.Column>
          </Content.Row>

          {/* Partnership Steps (echte Schritt-Indikatoren) */}
          <Content.Row cols={1}>
            <Content.Column className="mb-16">
              <Typography.SectionTitle className="mb-8 text-center">
                Partnership Step Indicators
              </Typography.SectionTitle>
              <div className="flex justify-center space-x-8 lg:space-x-12">
                <div className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#A100FF] to-[#3d55e2] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg">
                      01
                    </div>
                  </div>
                  <Typography.Small className="text-gray-500">
                    Ausgangsanalyse
                  </Typography.Small>
                </div>
                <div className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#3d55e2] to-[#5facdb] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg">
                      02
                    </div>
                  </div>
                  <Typography.Small className="text-gray-500">
                    Digitalstrategie
                  </Typography.Small>
                </div>
                <div className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#5facdb] to-[#A100FF] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg">
                      03
                    </div>
                  </div>
                  <Typography.Small className="text-gray-500">
                    Integration
                  </Typography.Small>
                </div>
                <div className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#A100FF] to-[#5facdb] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg">
                      04
                    </div>
                  </div>
                  <Typography.Small className="text-gray-500">
                    Geschäftsmodell
                  </Typography.Small>
                </div>
              </div>
            </Content.Column>
          </Content.Row>

          {/* Partner Logos (echter Footer-Bereich) */}
          <Content.Row cols={1}>
            <Content.Column className="mb-16">
              <Typography.SectionTitle className="mb-8 text-center">
                Partner Logos
              </Typography.SectionTitle>
              <Typography.Small className="text-center text-gray-600 mb-8">
                Vertraut von führenden Unternehmen
              </Typography.Small>
              <div className="flex justify-center items-center space-x-8 lg:space-x-12 opacity-60 hover:opacity-100 transition-opacity duration-300 flex-wrap">
                <div className="bg-gray-100 h-12 w-24 rounded flex items-center justify-center text-gray-400 text-xs font-medium">
                  A1 Telekom
                </div>
                <div className="bg-gray-100 h-12 w-24 rounded flex items-center justify-center text-gray-400 text-xs font-medium">
                  PPMC
                </div>
                <div className="bg-gray-100 h-12 w-24 rounded flex items-center justify-center text-gray-400 text-xs font-medium">
                  Jobidy
                </div>
                <div className="bg-gray-100 h-12 w-24 rounded flex items-center justify-center text-gray-400 text-xs font-medium">
                  Rundata
                </div>
                <div className="bg-gray-100 h-12 w-24 rounded flex items-center justify-center text-gray-400 text-xs font-medium">
                  WKO Kärnten
                </div>
                <div className="bg-gray-100 h-12 w-24 rounded flex items-center justify-center text-gray-400 text-xs font-medium">
                  WP Werkportal
                </div>
              </div>
            </Content.Column>
          </Content.Row>

          {/* Navigation (Mobile Menu) */}
          <Content.Row cols={1}>
            <Content.Column className="text-center">
              <Typography.SectionTitle className="mb-8 text-center">
                Mobile Navigation
              </Typography.SectionTitle>
              <div className="flex justify-center">
                <button className="p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200">
                  <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                    <div className="w-full h-0.5 bg-white rounded"></div>
                    <div className="w-full h-0.5 bg-white rounded"></div>
                    <div className="w-full h-0.5 bg-white rounded"></div>
                  </div>
                </button>
              </div>
              <Typography.Small className="mt-2 text-gray-500">
                Hamburger Menu Button
              </Typography.Small>
            </Content.Column>
          </Content.Row>
        </Content>
      </motion.div>
    </section>
  );
};

export default UIComponentsSection;
