"use client";

// import { motion } from "framer-motion"; // Deaktiviert - Ersetzt durch native Tailwind Animationen
import { Header } from "@/components/ui/header";
import Content from "@/components/ui/content/content";
import Typography from "@/components/ui/typography/typography";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageLayout } from "@/components/page-layout";

export default function ImpressumPage() {
  return (
    <PageLayout>
      {/* Header Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div>
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
            <Header.H1 className="mb-6">Impressum</Header.H1>
            <Typography.Body className="text-lg text-gray-600">
              Informationen und Offenlegung gemäß §5 (1) ECG, § 25 MedienG, § 63
              GewO und § 14 UGB
            </Typography.Body>
          </Content>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <Content maxWidth="4xl">
          <div className="space-y-12">
            {/* Webseitenbetreiber */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Webseitenbetreiber</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  <strong>Daniel Fellner</strong>
                  <br />
                  Anschrift: Untermühlbach 2, 9300 St. Veit an der Glan
                  <br />
                  <strong>UID-Nr:</strong> ATU80281035
                  <br />
                  <strong>Gewerbeaufsichtbehörde:</strong>{" "}
                  Bezirkshauptmannschaft St. Veit an der Glan
                  <br />
                  <strong>Mitgliedschaften:</strong> Mitglied der WKO
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Kontaktdaten */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Kontaktdaten</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  <strong>Telefon:</strong>{" "}
                  <a
                    href="tel:+436641969013"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    +43 (0)6641969013
                  </a>
                  <br />
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:office@dimetrics.io"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    office@dimetrics.io
                  </a>
                  <br />
                  <strong>Fax:</strong>
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Anwendbare Rechtsvorschrift */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Anwendbare Rechtsvorschrift</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  <a
                    href="https://www.ris.bka.gv.at"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    www.ris.bka.gv.at
                  </a>
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Online Streitbeilegung */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Online Streitbeilegung</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Verbraucher, welche in Österreich oder in einem sonstigen
                  Vertragsstaat der ODR-VO niedergelassen sind, haben die
                  Möglichkeit Probleme bezüglich dem entgeltlichen Kauf von
                  Waren oder Dienstleistungen im Rahmen einer
                  Online-Streitbeilegung (nach OS, AStG) zu lösen. Die
                  Europäische Kommission stellt eine Plattform hierfür bereit:
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors ml-1"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Urheberrecht */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Urheberrecht</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich
                  möglich ist, diversen Schutzrechten (z.B dem Urheberrecht).
                  Jegliche Verwendung/Verbreitung von bereitgestelltem Material,
                  welche urheberrechtlich untersagt ist, bedarf schriftlicher
                  Zustimmung des Webseitenbetreibers.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Haftungsausschluss */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Haftungsausschluss</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der
                  Webseitenbetreiber dieser Webseite keine Haftung für die
                  Inhalte externer Links. Für den Inhalt der verlinkten Seiten
                  sind ausschließlich deren Betreiber verantwortlich. Sollten
                  Sie dennoch auf ausgehende Links aufmerksam werden, welche auf
                  eine Webseite mit rechtswidriger Tätigkeit/Information
                  verweisen, ersuchen wir um dementsprechenden Hinweis, um diese
                  nach § 17 Abs. 2 ECG umgehend zu entfernen.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  Die Urheberrechte Dritter werden vom Betreiber dieser Webseite
                  mit größter Sorgfalt beachtet. Sollten Sie trotzdem auf eine
                  Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                  entsprechenden Hinweis. Bei Bekanntwerden derartiger
                  Rechtsverletzungen werden wir den betroffenen Inhalt umgehend
                  entfernen.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Quelle */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Quelle</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  <a
                    href="https://www.impressum-generator.at/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Impressum Generator Österreich
                  </a>
                </Typography.Body>
              </Content.Column>
            </Content.Row>
          </div>
        </Content>
      </section>
    </PageLayout>
  );
}
