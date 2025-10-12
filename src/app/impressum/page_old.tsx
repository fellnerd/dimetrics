"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import Content from "@/components/ui/content/content";
import Typography from "@/components/ui/typography/typography";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Content maxWidth="4xl">
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center text-[#3d55e2] hover:text-[#5facdb] transition-colors duration-300 mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Link>
            </div>
            <Header.H1 className="mb-6">
              <span className="bg-gradient-to-r from-[#3d55e2] via-[#5facdb] to-[#A100FF] bg-clip-text text-transparent">
                Impressum
              </span>
            </Header.H1>
            <Typography.Body className="text-lg text-gray-600">
              Informationen und Offenlegung gemäß §5 (1) ECG, § 25 MedienG, § 63 GewO und § 14 UGB
            </Typography.Body>
          </Content>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <Content maxWidth="4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            {/* Webseitenbetreiber */}
            <div className="mb-12">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <Typography.Body className="text-gray-800 leading-relaxed">
                  <strong className="text-[#3d55e2]">Webseitenbetreiber:</strong> Daniel Fellner<br />
                  <strong>Anschrift:</strong> Untermühlbach 2, 9300 St. Veit an der Glan<br />
                  <strong>UID-Nr:</strong> ATU80281035<br />
                  <strong>Gewerbeaufsichtbehörde:</strong> Bezirkshauptmannschaft St. Veit an der Glan<br />
                  <strong>Mitgliedschaften:</strong> Mitglied der WKO
                </Typography.Body>
              </div>
            </div>

            {/* Kontaktdaten */}
            <div className="mb-12">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                Kontaktdaten
              </Header.H2>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <Typography.Body className="text-gray-800 leading-relaxed">
                  <strong>Telefon:</strong> <a href="tel:+436641969013" className="text-[#3d55e2] hover:text-[#5facdb] transition-colors">+43 (0)6641969013</a><br />
                  <strong>Email:</strong> <a href="mailto:office@dimetrics.io" className="text-[#3d55e2] hover:text-[#5facdb] transition-colors">office@dimetrics.io</a>
                </Typography.Body>
              </div>
            </div>

            {/* Anwendbare Rechtsvorschrift */}
            <div className="mb-12">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                Anwendbare Rechtsvorschrift
              </Header.H2>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <Typography.Body className="text-gray-800 leading-relaxed">
                  <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="text-[#3d55e2] hover:text-[#5facdb] transition-colors">
                    www.ris.bka.gv.at
                  </a>
                </Typography.Body>
              </div>
            </div>

            {/* Online Streitbeilegung */}
            <div className="mb-12">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                Online Streitbeilegung
              </Header.H2>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <Typography.Body className="text-gray-800 leading-relaxed">
                  Verbraucher, welche in Österreich oder in einem sonstigen Vertragsstaat der ODR-VO niedergelassen sind, haben die Möglichkeit Probleme bezüglich dem entgeltlichen Kauf von Waren oder Dienstleistungen im Rahmen einer Online-Streitbeilegung (nach OS, AStG) zu lösen. Die Europäische Kommission stellt eine Plattform hierfür bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#3d55e2] hover:text-[#5facdb] transition-colors">https://ec.europa.eu/consumers/odr</a>
                </Typography.Body>
              </div>
            </div>

            {/* Urheberrecht */}
            <div className="mb-12">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                Urheberrecht
              </Header.H2>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <Typography.Body className="text-gray-800 leading-relaxed">
                  Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich möglich ist, diversen Schutzrechten (z.B dem Urheberrecht). Jegliche Verwendung/Verbreitung von bereitgestelltem Material, welche urheberrechtlich untersagt ist, bedarf schriftlicher Zustimmung des Webseitenbetreibers.
                </Typography.Body>
              </div>
            </div>

            {/* Haftungsausschluss */}
            <div className="mb-12">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                Haftungsausschluss
              </Header.H2>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <Typography.Body className="text-gray-800 leading-relaxed">
                  Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Webseitenbetreiber dieser Webseite keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Sollten Sie dennoch auf ausgehende Links aufmerksam werden, welche auf eine Webseite mit rechtswidriger Tätigkeit/Information verweisen, ersuchen wir um dementsprechenden Hinweis, um diese nach § 17 Abs. 2 ECG umgehend zu entfernen.
                  <br /><br />
                  Die Urheberrechte Dritter werden vom Betreiber dieser Webseite mit größter Sorgfalt beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden derartiger Rechtsverletzungen werden wir den betroffenen Inhalt umgehend entfernen.
                </Typography.Body>
              </div>
            </div>

            {/* Quelle */}
            <div className="mb-12">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                Quelle
              </Header.H2>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <Typography.Body className="text-gray-800 leading-relaxed">
                  Impressum Generator Österreich
                </Typography.Body>
              </div>
            </div>
          </motion.div>
        </Content>
      </section>
    </div>
  );
}