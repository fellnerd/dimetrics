"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import Content from "@/components/ui/content/content";
import Typography from "@/components/ui/typography/typography";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageLayout } from "@/components/page-layout";

export default function CookiesPage() {
  return (
    <PageLayout>
      {/* Header Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Content maxWidth="4xl">
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Link>
            </div>
            <Header.H1 className="mb-6">Cookie-Richtlinie</Header.H1>
            <Typography.Body className="text-lg text-gray-600">
              Informationen über die Verwendung von Cookies auf unserer Website
            </Typography.Body>
          </Content>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <Content maxWidth="4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Status Info */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <Header.H3 className="text-green-900 mb-4">Cookie-freundliche Website</Header.H3>
              <Typography.Body className="text-green-800">
                <strong>Gute Nachricht:</strong> Diese Website verwendet <span className="font-semibold">keine Tracking-Cookies</span> und benötigt daher <span className="font-semibold">kein Cookie-Banner</span>. 
                Wir respektieren Ihre Privatsphäre und verzichten bewusst auf Tracking-Tools.
              </Typography.Body>
            </div>

            {/* Was sind Cookies */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Was sind Cookies?</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Cookies sind kleine Textdateien, die von Websites auf Ihrem Gerät gespeichert werden. 
                  Sie dienen verschiedenen Zwecken, von der Bereitstellung grundlegender Funktionen bis hin zur Analyse des Nutzerverhaltens.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  <strong>Unterscheidung nach Zweck:</strong>
                  <br />• <strong>Technische Cookies:</strong> Notwendig für die Grundfunktionen der Website
                  <br />• <strong>Analyse-Cookies:</strong> Zur Verbesserung der Website-Performance
                  <br />• <strong>Marketing-Cookies:</strong> Für personalisierte Werbung und Tracking
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Unsere Cookie-Verwendung */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Cookies auf unserer Website</Header.H2>
                
                {/* Technische Cookies */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <Header.H3 className="text-gray-900 mb-4">Technische Cookies (Notwendig)</Header.H3>
                  <Typography.Body className="text-gray-700 mb-4">
                    Diese Cookies sind für die ordnungsgemäße Funktion unserer Website unerlässlich:
                  </Typography.Body>
                  <div className="bg-gray-50 p-4 rounded border">
                    <Typography.Body className="text-sm text-gray-600 font-mono">
                      <strong>__next_hmr_refresh_hash__</strong><br />
                      Zweck: NextJS Hot Module Replacement (nur während Entwicklung)<br />
                      Dauer: Session<br />
                      Typ: Technisch notwendig
                    </Typography.Body>
                  </div>
                </div>

                {/* Keine Tracking-Cookies */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Header.H3 className="text-gray-900 mb-4">Tracking- und Marketing-Cookies</Header.H3>
                  <Typography.Body className="text-gray-700">
                    <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      Nicht verwendet
                    </span>
                    <br />
                    Wir verwenden bewusst <strong>keine</strong> Tracking-Tools wie:
                    <br />• Google Analytics
                    <br />• Facebook Pixel
                    <br />• Marketing-Cookies
                    <br />• Remarketing-Tags
                  </Typography.Body>
                </div>
              </Content.Column>
            </Content.Row>

            {/* Datenschutz-Ansatz */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Unser Datenschutz-Ansatz</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  <strong>Privacy by Design:</strong> Wir haben uns bewusst dafür entschieden, auf Tracking und Überwachung zu verzichten. 
                  Ihre Privatsphäre ist uns wichtiger als detaillierte Nutzeranalysen.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  <strong>DSGVO-konform ohne Einwilligung:</strong> Da wir nur technisch notwendige Cookies verwenden, 
                  benötigen wir keine Einwilligung und müssen kein störendes Cookie-Banner anzeigen.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  <strong>Transparenz:</strong> Diese Seite erklärt vollständig, welche Daten wir sammeln (praktisch keine) 
                  und wie wir sie verwenden (ausschließlich für Website-Funktionen).
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Cookie-Kontrolle */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Ihre Cookie-Kontrolle</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  <strong>Browser-Einstellungen:</strong><br />
                  Sie können Cookies in Ihrem Browser deaktivieren oder löschen. Bei technischen Cookies kann dies jedoch die Funktionalität der Website beeinträchtigen.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  <strong>Anleitung für gängige Browser:</strong>
                  <br />• <strong>Chrome:</strong> Einstellungen → Datenschutz und Sicherheit → Cookies
                  <br />• <strong>Firefox:</strong> Einstellungen → Datenschutz & Sicherheit → Cookies
                  <br />• <strong>Safari:</strong> Einstellungen → Datenschutz → Cookies
                  <br />• <strong>Edge:</strong> Einstellungen → Cookies und Websiteberechtigungen
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Aktualisierungen */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Aktualisierungen dieser Richtlinie</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Diese Cookie-Richtlinie wurde zuletzt am <strong>12. Oktober 2025</strong> aktualisiert.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  Sollten wir in Zukunft zusätzliche Cookies verwenden, werden wir diese Seite entsprechend aktualisieren 
                  und Sie über wesentliche Änderungen informieren.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  <strong>Unser Versprechen:</strong> Wir werden Sie vor der Einführung von Tracking-Cookies informieren 
                  und Ihre Einwilligung einholen, falls dies rechtlich erforderlich ist.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Kontakt */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Fragen zu Cookies?</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Bei Fragen zu unserer Cookie-Verwendung kontaktieren Sie uns gerne:
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  <strong>Dimetrics - Daniel Fellner</strong><br />
                  Untermühlbach 2<br />
                  9300 St. Veit an der Glan<br />
                  Österreich<br /><br />
                  E-Mail: <a href="mailto:office@dimetrics.io" className="text-blue-600 hover:text-blue-800 transition-colors">office@dimetrics.io</a><br />
                  Telefon: <a href="tel:+436641969013" className="text-blue-600 hover:text-blue-800 transition-colors">+43 (0)6641969013</a>
                </Typography.Body>
              </Content.Column>
            </Content.Row>
          </motion.div>
        </Content>
      </section>
    </PageLayout>
  );
}