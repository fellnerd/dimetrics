"use client";

// import { motion } from "framer-motion"; // Deaktiviert - Ersetzt durch native Tailwind Animationen
import { Header } from "@/components/ui/header";
import Content from "@/components/ui/content/content";
import Typography from "@/components/ui/typography/typography";
import { PremiumButton } from "@/components/ui/buttons/premium-button";
import Link from "next/link";
import { ArrowRight, Phone, MapPin, Mail, Send } from "lucide-react";
import {
  CTAButtons,
  CTAHeader,
  HeroSectionSplit,
} from "../../components/sections";
import { ServicesSection } from "../../components/services-section";
import { useState } from "react";
import { Metadata } from "next";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns bald bei Ihnen.",
        });
        // Formular zurücksetzen
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error(result.error || "Fehler beim Senden der Nachricht");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Main Content Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 mt-20">
        <div className="animate-fade-slide-in-up">
          <Content maxWidth="7xl">
            <Content.Row cols={2} alignItems="start">
              <Content.Column>
                <Header.H2>Nehmen Sie Kontakt mit uns auf</Header.H2>
              </Content.Column>

              <Content.Column>
                <div className="space-y-6">
                  <Typography.Lead className="text-lg">
                    Egal, ob Sie mehr über unsere Dienstleistungen oder die
                    Möglichkeiten unserer Low-Code-Plattform erfahren möchten –
                    wir beraten Sie unverbindlich und zeigen Ihnen, wie
                    Dimetrics Ihre individuellen Anforderungen optimal umsetzen
                    kann.
                  </Typography.Lead>

                  <Typography.Lead className="text-lg">
                    Kontaktieren Sie uns und starten Sie Ihre digitale
                    Transformation!
                  </Typography.Lead>
                </div>
              </Content.Column>
            </Content.Row>
          </Content>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="animate-fade-slide-in-up">
          <Content maxWidth="6xl">
            <Content.Row cols={3} alignItems="start">
              {/* Telefon */}
              <Content.Column>
                <div>
                  <Typography.SectionTitle className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">
                    Telefon
                  </Typography.SectionTitle>
                  <a
                    href="tel:+436641969013"
                    className="block text-xl font-bold text-gray-900 hover:text-[#3d55e2] transition-colors duration-300"
                  >
                    +43 (0) 664 1969 013
                  </a>
                </div>
              </Content.Column>

              {/* Standort */}
              <Content.Column>
                <div>
                  <Typography.SectionTitle className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">
                    Standort
                  </Typography.SectionTitle>
                  <div className="text-xl font-bold text-gray-900">
                    <div>9300 St. Veit an der Glan</div>
                    <div className="text-lg text-gray-600">Österreich</div>
                  </div>
                </div>
              </Content.Column>

              {/* E-Mail */}
              <Content.Column>
                <div>
                  <Typography.SectionTitle className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">
                    E-Mail
                  </Typography.SectionTitle>
                  <a
                    href="mailto:office@dimetrics.io"
                    className="block text-xl font-bold text-gray-900 hover:text-[#A100FF] transition-colors duration-300"
                  >
                    office@dimetrics.io
                  </a>
                </div>
              </Content.Column>
            </Content.Row>
          </Content>
        </div>
      </section>

      {/* Team Contacts Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="animate-fade-slide-in-up">
          <Content maxWidth="6xl">
            <div className="text-center mb-12">
              <Header.H2 className="mb-6">Ihr Ansprechpartner-Team</Header.H2>
            </div>

            <Content.Row cols={4} alignItems="start">
              {/* Dimetrics Office */}
              <Content.Column>
                <div>
                  <Typography.SectionTitle className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">
                    Dimetrics Office
                  </Typography.SectionTitle>
                  <div className="text-xl font-bold text-gray-900">
                    <div>Backoffice</div>
                    <div className="text-lg text-gray-600 mt-2">
                      Allgemeine Anfragen
                    </div>
                  </div>
                  <a
                    href="mailto:office@dimetrics.io"
                    className="inline-block mt-3 text-lg font-medium text-[#3d55e2] hover:text-[#5facdb] transition-colors duration-300"
                  >
                    office@dimetrics.io
                  </a>
                </div>
              </Content.Column>

              {/* Daniel Fellner */}
              <Content.Column>
                <div>
                  <Typography.SectionTitle className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">
                    Daniel Fellner
                  </Typography.SectionTitle>
                  <div className="text-xl font-bold text-gray-900">
                    <div>Geschäftsführung</div>
                    <div className="text-lg text-gray-600 mt-2">
                      Strategie & Consulting
                    </div>
                  </div>
                  <div className="mt-3">
                    <a
                      href="tel:+436641969013"
                      className="block text-lg font-medium text-[#3d55e2] hover:text-[#5facdb] transition-colors duration-300"
                    >
                      +43 (0) 664 1969 013
                    </a>
                    <a
                      href="mailto:d.fellner@dimetrics.io"
                      className="block mt-1 text-lg font-medium text-[#3d55e2] hover:text-[#5facdb] transition-colors duration-300"
                    >
                      d.fellner@dimetrics.io
                    </a>
                  </div>
                </div>
              </Content.Column>

              {/* Anna Fellner */}
              <Content.Column>
                <div>
                  <Typography.SectionTitle className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">
                    Anna Maria Fellner
                  </Typography.SectionTitle>
                  <div className="text-xl font-bold text-gray-900">
                    <div>Digital Marketing</div>
                    <div className="text-lg text-gray-600 mt-2">
                      Solution Specialist
                    </div>
                  </div>
                  <div className="mt-3">
                    <a
                      href="tel:+4368120671691"
                      className="block text-lg font-medium text-[#3d55e2] hover:text-[#5facdb] transition-colors duration-300"
                    >
                      +43 (0) 681 20671691
                    </a>
                    <a
                      href="mailto:anna@dimetrics.io"
                      className="block mt-1 text-lg font-medium text-[#3d55e2] hover:text-[#5facdb] transition-colors duration-300"
                    >
                      anna@dimetrics.io
                    </a>
                  </div>
                </div>
              </Content.Column>

              {/* Julian Silva-Martinez */}
              <Content.Column>
                <div>
                  <Typography.SectionTitle className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">
                    Julian Silva-Martinez
                  </Typography.SectionTitle>
                  <div className="text-xl font-bold text-gray-900">
                    <div>Operation Consultant</div>
                    <div className="text-lg text-gray-600 mt-2">
                      Business Operations
                    </div>
                  </div>
                  <div className="mt-3">
                    <a
                      href="tel:+436507220808"
                      className="block text-lg font-medium text-[#3d55e2] hover:text-[#5facdb] transition-colors duration-300"
                    >
                      +43 (0) 650 722 0808
                    </a>
                    <a
                      href="mailto:j.silva@dimetrics.io"
                      className="block mt-1 text-lg font-medium text-[#3d55e2] hover:text-[#5facdb] transition-colors duration-300"
                    >
                      j.silva@dimetrics.io
                    </a>
                  </div>
                </div>
              </Content.Column>
            </Content.Row>

            {/* Second Row */}
            <Content.Row cols={4} alignItems="start" className="mt-12">
              {/* Dimetrics Support */}
              <Content.Column>
                <div>
                  <Typography.SectionTitle className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">
                    Dimetrics Support
                  </Typography.SectionTitle>
                  <div className="text-xl font-bold text-gray-900">
                    <div>Technical Support</div>
                    <div className="text-lg text-gray-600 mt-2">
                      Technische Unterstützung
                    </div>
                  </div>
                  <div className="mt-3">
                    <a
                      href="mailto:support@dimetrics.io"
                      className="block text-lg font-medium text-[#3d55e2] hover:text-[#5facdb] transition-colors duration-300"
                    >
                      support@dimetrics.io
                    </a>
                  </div>
                </div>
              </Content.Column>

              {/* Stefan Pinter */}
              <Content.Column>
                <div>
                  <Typography.SectionTitle className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">
                    Stefan Pinter
                  </Typography.SectionTitle>
                  <div className="text-xl font-bold text-gray-900">
                    <div>Dimetrics Sales</div>
                    <div className="text-lg text-gray-600 mt-2">
                      Vertrieb & Akquise
                    </div>
                  </div>
                  <div className="mt-3">
                    <a
                      href="tel:+4366488614626"
                      className="block text-lg font-medium text-[#3d55e2] hover:text-[#5facdb] transition-colors duration-300"
                    >
                      +43 (0) 664 886 14626
                    </a>
                    <a
                      href="mailto:sales@dimetrics.io"
                      className="block mt-1 text-lg font-medium text-[#3d55e2] hover:text-[#5facdb] transition-colors duration-300"
                    >
                      sales@dimetrics.io
                    </a>
                  </div>
                </div>
              </Content.Column>

              {/* Empty columns for alignment */}
              <Content.Column>
                <div></div>
              </Content.Column>
              <Content.Column>
                <div></div>
              </Content.Column>
            </Content.Row>
          </Content>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="animate-fade-slide-in-up">
          <Content maxWidth="4xl">
            <Content.Row cols={1} alignItems="center">
              <Content.Column>
                <div className=" mb-12">
                  <Header.H2 className="mb-6">
                    <span className="bg-gradient-to-r from-[#3d55e2] via-[#5facdb] to-[#A100FF] bg-clip-text text-transparent">
                      Kontakt aufnehmen
                    </span>
                  </Header.H2>
                  <p className="text-lg text-gray-600 ">
                    Haben Sie Fragen zu unseren Lösungen oder möchten Sie ein
                    unverbindliches Beratungsgespräch vereinbaren? Wir freuen
                    uns auf Ihre Nachricht und melden uns schnellstmöglich bei
                    Ihnen zurück.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-200"
                >
                  {/* Status-Meldungen */}
                  {submitStatus.type && (
                    <div
                      className={`mb-6 p-4 rounded-xl border ${
                        submitStatus.type === "success"
                          ? "bg-green-50 border-green-200 text-green-800"
                          : "bg-red-50 border-red-200 text-red-800"
                      }`}
                    >
                      <p className="font-medium">{submitStatus.message}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        Vorname *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#3d55e2] focus:ring-2 focus:ring-[#3d55e2]/20 outline-none transition-all duration-300"
                        placeholder="Ihr Vorname"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        Nachname *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#3d55e2] focus:ring-2 focus:ring-[#3d55e2]/20 outline-none transition-all duration-300"
                        placeholder="Ihr Nachname"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        E-Mail Adresse *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#3d55e2] focus:ring-2 focus:ring-[#3d55e2]/20 outline-none transition-all duration-300"
                        placeholder="ihre.email@beispiel.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        Telefonnummer
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#3d55e2] focus:ring-2 focus:ring-[#3d55e2]/20 outline-none transition-all duration-300"
                        placeholder="+43 664 123 4567"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#3d55e2] focus:ring-2 focus:ring-[#3d55e2]/20 outline-none transition-all duration-300"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#3d55e2] focus:ring-2 focus:ring-[#3d55e2]/20 outline-none transition-all duration-300 resize-vertical"
                      placeholder="Beschreiben Sie Ihr Anliegen oder Ihre Anforderungen..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group relative inline-flex items-center px-12 py-4 bg-gradient-to-r from-[#3d55e2] to-[#5facdb] hover:from-[#5facdb] hover:to-[#A100FF] text-white rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-[#5facdb]/25 overflow-hidden ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                      <Send
                        className={`w-5 h-5 mr-3 relative ${
                          isSubmitting ? "animate-pulse" : ""
                        }`}
                      />
                      <span className="relative">
                        {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                      </span>
                    </button>
                  </div>
                </form>
              </Content.Column>
            </Content.Row>
          </Content>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="animate-fade-slide-in-up">
          <Content maxWidth="4xl">
            <Content.Row cols={1} alignItems="center">
              <Content.Column>
                <div className="text-center">
                  <Header.H2 className="mb-6">
                    <span className="block text-gray-900 mb-2">
                      Einzigartige Software für
                    </span>
                    <span className="block bg-gradient-to-r from-[#3d55e2] via-[#5facdb] to-[#A100FF] bg-clip-text text-transparent">
                      einzigartige Unternehmen
                    </span>
                  </Header.H2>
                </div>
              </Content.Column>
            </Content.Row>
          </Content>
        </div>
      </section>
    </>
  );
}
