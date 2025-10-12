"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import Content from "@/components/ui/content/content";
import Typography from "@/components/ui/typography/typography";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageLayout } from "@/components/page-layout";

export default function AGBPage() {
  return (
    <PageLayout>
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
                Allgemeine Geschäftsbedingungen
              </span>
            </Header.H1>
            <Typography.Body className="text-lg text-gray-600">
              Gültig ab: 12. Oktober 2025
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
            className="prose prose-lg max-w-none space-y-12"
          >
            {/* Geltungsbereich */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                1. Geltungsbereich
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der Dimetrics (Daniel Fellner) und ihren Kunden über die Erbringung von IT-Dienstleistungen, Beratungsleistungen und Softwareentwicklung.
                <br /><br />
                Abweichende Bedingungen des Kunden werden nur wirksam, wenn sie von uns ausdrücklich schriftlich anerkannt werden.
              </Typography.Body>
            </div>

            {/* Vertragsschluss */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                2. Vertragsschluss
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                Angebote sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch unsere schriftliche Auftragsbestätigung oder durch Beginn der Leistungserbringung zustande.
                <br /><br />
                Alle Vereinbarungen, Änderungen und Ergänzungen bedürfen der Schriftform. Mündliche Nebenabreden sind unwirksam.
              </Typography.Body>
            </div>

            {/* Leistungen */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                3. Leistungsumfang
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                <strong>3.1 IT-Beratung und Consulting:</strong><br />
                Wir erbringen Beratungsleistungen im Bereich digitale Transformation, Cloud-Strategien und IT-Architektur nach dem aktuellen Stand der Technik.
                <br /><br />
                <strong>3.2 Softwareentwicklung:</strong><br />
                Die Entwicklung erfolgt nach den vereinbarten Spezifikationen. Änderungswünsche während der Entwicklung werden gesondert berechnet.
                <br /><br />
                <strong>3.3 Support und Wartung:</strong><br />
                Support- und Wartungsleistungen werden nach separater Vereinbarung erbracht.
              </Typography.Body>
            </div>

            {/* Mitwirkungspflichten */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                4. Mitwirkungspflichten des Kunden
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                Der Kunde ist verpflichtet, alle für die Leistungserbringung erforderlichen Informationen, Daten und Unterlagen rechtzeitig und vollständig zur Verfügung zu stellen.
                <br /><br />
                Der Kunde stellt die erforderliche technische Infrastruktur und den Zugang zu seinen IT-Systemen zur Verfügung.
                <br /><br />
                Verzögerungen durch mangelhafte Mitwirkung des Kunden gehen zu dessen Lasten und können zu Mehrkosten führen.
              </Typography.Body>
            </div>

            {/* Vergütung und Zahlung */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                5. Vergütung und Zahlung
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                <strong>5.1</strong> Die Vergütung richtet sich nach der getroffenen Vereinbarung (Festpreis, Zeitaufwand oder Mischform).
                <br /><br />
                <strong>5.2</strong> Rechnungen sind binnen 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig.
                <br /><br />
                <strong>5.3</strong> Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9,2 % über dem Basiszinssatz berechnet.
                <br /><br />
                <strong>5.4</strong> Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.
              </Typography.Body>
            </div>

            {/* Gewährleistung */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                6. Gewährleistung
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                <strong>6.1</strong> Bei Beratungsleistungen übernehmen wir die Gewähr für die fachgerechte Erbringung der Leistung entsprechend den anerkannten Regeln der Technik.
                <br /><br />
                <strong>6.2</strong> Bei Softwareentwicklung gewährleisten wir die Funktionsfähigkeit gemäß der vereinbarten Spezifikation.
                <br /><br />
                <strong>6.3</strong> Mängel sind unverzüglich, spätestens binnen 14 Tagen nach Abnahme, schriftlich anzuzeigen.
                <br /><br />
                <strong>6.4</strong> Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme.
              </Typography.Body>
            </div>

            {/* Haftung */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                7. Haftungsbeschränkung
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                <strong>7.1</strong> Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.
                <br /><br />
                <strong>7.2</strong> Für leichte Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten, beschränkt auf den vorhersehbaren, vertragstypischen Schaden.
                <br /><br />
                <strong>7.3</strong> Die Haftung für mittelbare Schäden, entgangenen Gewinn und Datenverlust ist ausgeschlossen, soweit gesetzlich zulässig.
              </Typography.Body>
            </div>

            {/* Vertraulichkeit */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                8. Vertraulichkeit und Datenschutz
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                Beide Parteien verpflichten sich, alle im Rahmen der Geschäftsbeziehung erhaltenen vertraulichen Informationen streng vertraulich zu behandeln.
                <br /><br />
                Die Verarbeitung personenbezogener Daten erfolgt ausschließlich im Rahmen der geltenden Datenschutzbestimmungen (DSGVO).
                <br /><br />
                Bei Bedarf wird eine separate Auftragsverarbeitungsvereinbarung geschlossen.
              </Typography.Body>
            </div>

            {/* Urheberrecht */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                9. Urheberrecht und Nutzungsrechte
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                <strong>9.1</strong> Alle Urheberrechte an von uns erstellten Werken (Software, Dokumentationen, Konzepte) bleiben bei uns.
                <br /><br />
                <strong>9.2</strong> Der Kunde erhält die für den Vertragszweck erforderlichen Nutzungsrechte.
                <br /><br />
                <strong>9.3</strong> Eine Weitergabe an Dritte bedarf unserer schriftlichen Zustimmung.
              </Typography.Body>
            </div>

            {/* Kündigung */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                10. Kündigung
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                <strong>10.1</strong> Dauerschuldverhältnisse können von beiden Parteien mit einer Frist von 3 Monaten zum Monatsende gekündigt werden.
                <br /><br />
                <strong>10.2</strong> Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
                <br /><br />
                <strong>10.3</strong> Kündigungen bedürfen der Schriftform.
              </Typography.Body>
            </div>

            {/* Schlussbestimmungen */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                11. Schlussbestimmungen
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                <strong>11.1</strong> Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts.
                <br /><br />
                <strong>11.2</strong> Erfüllungsort und Gerichtsstand ist St. Veit an der Glan, Österreich.
                <br /><br />
                <strong>11.3</strong> Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit des übrigen Vertrages unberührt.
                <br /><br />
                <strong>11.4</strong> Änderungen dieser AGB werden dem Kunden schriftlich mitgeteilt und gelten als genehmigt, wenn nicht binnen 30 Tagen widersprochen wird.
              </Typography.Body>
            </div>

            {/* Kontakt */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                Kontakt bei Fragen
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                Bei Fragen zu diesen AGB kontaktieren Sie uns unter:
                <br /><br />
                <strong>Dimetrics - Daniel Fellner</strong><br />
                Untermühlbach 2<br />
                9300 St. Veit an der Glan<br />
                Österreich<br /><br />
                E-Mail: <a href="mailto:office@dimetrics.io" className="text-[#3d55e2] hover:text-[#5facdb] transition-colors">office@dimetrics.io</a><br />
                Telefon: <a href="tel:+436641969013" className="text-[#3d55e2] hover:text-[#5facdb] transition-colors">+43 (0)6641969013</a>
              </Typography.Body>
            </div>
          </motion.div>
        </Content>
      </section>
    </PageLayout>
  );
}