"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import Content from "@/components/ui/content/content";
import Typography from "@/components/ui/typography/typography";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DatenschutzPage() {
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
                Datenschutzerklärung
              </span>
            </Header.H1>
            <Typography.Body className="text-lg text-gray-600">
              Stand: 8. April 2024
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
            {/* Präambel */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                Präambel
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als „Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als „Onlineangebot").
                <br /><br />
                Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
              </Typography.Body>
            </div>

            {/* Verantwortlicher */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                Verantwortlicher
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                Daniel Fellner, MSc<br />
                Untermühlbach 2<br />
                9300 St. Veit an der Glan<br /><br />
                E-Mail-Adresse: <a href="mailto:d.fellner@dimetrics.io" className="text-[#3d55e2] hover:text-[#5facdb] transition-colors">d.fellner@dimetrics.io</a><br />
                Impressum: <a href="https://dimetrics.at/impressum/" className="text-[#3d55e2] hover:text-[#5facdb] transition-colors">https://dimetrics.at/impressum/</a>
              </Typography.Body>
            </div>

            {/* Übersicht der Verarbeitungen */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                Übersicht der Verarbeitungen
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.
                <br /><br />
                <strong>Arten der verarbeiteten Daten</strong><br />
                • Kontaktdaten.<br />
                • Inhaltsdaten.<br />
                • Nutzungsdaten.<br />
                • Meta-, Kommunikations- und Verfahrensdaten.<br /><br />
                <strong>Kategorien betroffener Personen</strong><br />
                • Kommunikationspartner.<br />
                • Nutzer.<br /><br />
                <strong>Zwecke der Verarbeitung</strong><br />
                • Kontaktanfragen und Kommunikation.<br />
                • Verwaltung und Beantwortung von Anfragen.<br />
                • Feedback.<br />
                • Marketing.<br />
                • Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
              </Typography.Body>
            </div>

            {/* Maßgebliche Rechtsgrundlagen */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                Maßgebliche Rechtsgrundlagen
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                <strong>Maßgebliche Rechtsgrundlagen nach der DSGVO:</strong> Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
                <br /><br />
                • <strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</strong> – Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.<br />
                • <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> – die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten verlangen, nicht überwiegen.
                <br /><br />
                <strong>Nationale Datenschutzregelungen in Österreich:</strong> Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Österreich. Hierzu gehört insbesondere das Bundesgesetz zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten (Datenschutzgesetz – DSG). Das Datenschutzgesetz enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Richtigstellung oder Löschung, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie zur automatisierten Entscheidungsfindung im Einzelfall.
              </Typography.Body>
            </div>

            {/* Löschung von Daten */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                Löschung von Daten
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen (z. B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht erforderlich sind). Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt. D. h., die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z. B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person erforderlich ist.
              </Typography.Body>
            </div>

            {/* Rechte der betroffenen Personen */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                Rechte der betroffenen Personen
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                <strong>Rechte der betroffenen Personen aus der DSGVO:</strong> Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
                <br /><br />
                • <strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.<br />
                • <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.<br />
                • <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.<br />
                • <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.<br />
                • <strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.<br />
                • <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.<br />
                • <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde.
              </Typography.Body>
            </div>

            {/* Kontakt- und Anfrageverwaltung */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                Kontakt- und Anfrageverwaltung
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
                <br /><br />
                • <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern); Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung); Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen). Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen).<br />
                • <strong>Betroffene Personen:</strong> Kommunikationspartner.<br />
                • <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation; Verwaltung und Beantwortung von Anfragen; Feedback (z. B. Sammeln von Feedback via Online-Formular). Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.<br />
                • <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
              </Typography.Body>
            </div>

            {/* Quelle */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Header.H2 className="text-2xl font-bold text-gray-900 mb-6">
                Quelle
              </Header.H2>
              <Typography.Body className="text-gray-800 leading-relaxed">
                Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke
              </Typography.Body>
            </div>
          </motion.div>
        </Content>
      </section>
    </div>
  );
}