"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import Content from "@/components/ui/content/content";
import Typography from "@/components/ui/typography/typography";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageLayout } from "@/components/page-layout";

export default function DatenschutzPage() {
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
            <Header.H1 className="mb-6">Datenschutzerklärung</Header.H1>
            <Typography.Body className="text-lg text-gray-600">
              Stand: 8. April 2024
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
            {/* Präambel */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Präambel</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als „Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als „Onlineangebot").
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Verantwortlicher */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Verantwortlicher</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  <strong>Daniel Fellner, MSc</strong><br />
                  Untermühlbach 2<br />
                  9300 St. Veit an der Glan<br /><br />
                  E-Mail-Adresse: <a href="mailto:d.fellner@dimetrics.io" className="text-blue-600 hover:text-blue-800 transition-colors">d.fellner@dimetrics.io</a><br />
                  Impressum: <a href="https://dimetrics.at/impressum/" className="text-blue-600 hover:text-blue-800 transition-colors">https://dimetrics.at/impressum/</a>
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Übersicht der Verarbeitungen */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Übersicht der Verarbeitungen</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.
                </Typography.Body>
                
                <Header.H3 className="text-gray-900 mb-4 mt-6">Arten der verarbeiteten Daten</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  • Kontaktdaten.<br />
                  • Inhaltsdaten.<br />
                  • Nutzungsdaten.<br />
                  • Meta-, Kommunikations- und Verfahrensdaten.
                </Typography.Body>

                <Header.H3 className="text-gray-900 mb-4 mt-6">Kategorien betroffener Personen</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  • Kommunikationspartner.<br />
                  • Nutzer.
                </Typography.Body>

                <Header.H3 className="text-gray-900 mb-4 mt-6">Zwecke der Verarbeitung</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  • Kontaktanfragen und Kommunikation.<br />
                  • Verwaltung und Beantwortung von Anfragen.<br />
                  • Feedback.<br />
                  • Marketing.<br />
                  • Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Maßgebliche Rechtsgrundlagen */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Maßgebliche Rechtsgrundlagen</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  <strong>Maßgebliche Rechtsgrundlagen nach der DSGVO:</strong> Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  • <strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</strong> – Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.<br />
                  • <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> – die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten verlangen, nicht überwiegen.
                </Typography.Body>
                
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  <strong>Nationale Datenschutzregelungen in Österreich:</strong> Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Österreich. Hierzu gehört insbesondere das Bundesgesetz zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten (Datenschutzgesetz – DSG). Das Datenschutzgesetz enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Richtigstellung oder Löschung, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie zur automatisierten Entscheidungsfindung im Einzelfall.
                </Typography.Body>

                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  <strong>Hinweis auf Geltung DSGVO und Schweizer DSG:</strong> Diese Datenschutzhinweise dienen sowohl der Informationserteilung nach dem schweizerischen Bundesgesetz über den Datenschutz (Schweizer DSG) als auch nach der Datenschutzgrundverordnung (DSGVO). Aus diesem Grund bitten wir Sie zu beachten, dass aufgrund der breiteren räumlichen Anwendung und Verständlichkeit die Begriffe der DSGVO verwendet werden. Insbesondere statt der im Schweizer DSG verwendeten Begriffe „Bearbeitung" von „Personendaten", „überwiegendes Interesse" und „besonders schützenswerte Personendaten" werden die in der DSGVO verwendeten Begriffe „Verarbeitung" von „personenbezogenen Daten" sowie „berechtigtes Interesse" und „besondere Kategorien von Daten" verwendet. Die gesetzliche Bedeutung der Begriffe wird jedoch im Rahmen der Geltung des Schweizer DSG weiterhin nach dem Schweizer DSG bestimmt.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Löschung von Daten */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Löschung von Daten</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen (z. B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht erforderlich sind). Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt. D. h., die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z. B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person erforderlich ist. Unsere Datenschutzhinweise können ferner weitere Angaben zu der Aufbewahrung und Löschung von Daten beinhalten, die für die jeweiligen Verarbeitungen vorrangig gelten.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Rechte der betroffenen Personen */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Rechte der betroffenen Personen</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  <strong>Rechte der betroffenen Personen aus der DSGVO:</strong> Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  • <strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.<br />
                  • <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.<br />
                  • <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.<br />
                  • <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.<br />
                  • <strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.<br />
                  • <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.<br />
                  • <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Kontakt- und Anfrageverwaltung */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Kontakt- und Anfrageverwaltung</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  • <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern); Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung); Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen). Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen).<br />
                  • <strong>Betroffene Personen:</strong> Kommunikationspartner.<br />
                  • <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation; Verwaltung und Beantwortung von Anfragen; Feedback (z. B. Sammeln von Feedback via Online-Formular). Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.<br />
                  • <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
                </Typography.Body>
                
                <Header.H3 className="text-gray-900 mb-4 mt-6">Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  • <strong>Kontaktformular:</strong> Wenn Nutzer über unser Kontaktformular, E-Mail oder andere Kommunikationswege mit uns in Kontakt treten, verarbeiten wir die uns in diesem Zusammenhang mitgeteilten Daten zur Bearbeitung des mitgeteilten Anliegens; Rechtsgrundlagen: Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Präsenzen in sozialen Netzwerken (Social Media) */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Präsenzen in sozialen Netzwerken (Social Media)</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem Rahmen Nutzerdaten, um mit den dort aktiven Nutzern zu kommunizieren oder Informationen über uns anzubieten.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  Wir weisen darauf hin, dass dabei Nutzerdaten außerhalb des Raumes der Europäischen Union verarbeitet werden können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so zum Beispiel die Durchsetzung der Nutzerrechte erschwert werden könnte.
                </Typography.Body>
                
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  • <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern); Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung); Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen). Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen).<br />
                  • <strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).<br />
                  • <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation; Feedback (z. B. Sammeln von Feedback via Online-Formular). Marketing.<br />
                  • <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                </Typography.Body>

                <Header.H3 className="text-gray-900 mb-4 mt-6">Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  • <strong>LinkedIn:</strong> Soziales Netzwerk; Dienstanbieter: LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Irland; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); Website: <a href="https://www.linkedin.com" className="text-blue-600 hover:text-blue-800 transition-colors">https://www.linkedin.com</a>; Datenschutzerklärung: <a href="https://www.linkedin.com/legal/privacy-policy" className="text-blue-600 hover:text-blue-800 transition-colors">https://www.linkedin.com/legal/privacy-policy</a>; Grundlage Drittlandtransfers: Data Privacy Framework (DPF); Widerspruchsmöglichkeit (Opt-Out): <a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" className="text-blue-600 hover:text-blue-800 transition-colors">https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out</a>.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Plug-ins und eingebettete Funktionen sowie Inhalte */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Plug-ins und eingebettete Funktionen sowie Inhalte</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Wir binden Funktions- und Inhaltselemente in unser Onlineangebot ein, die von den Servern ihrer jeweiligen Anbieter (nachfolgend als „Drittanbieter" bezeichnet) bezogen werden. Dabei kann es sich zum Beispiel um Grafiken, Videos oder Stadtpläne handeln (nachfolgend einheitlich als „Inhalte" bezeichnet).
                </Typography.Body>
                
                <Header.H3 className="text-gray-900 mb-4 mt-6">Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  • <strong>Google Fonts (Bezug vom Google Server):</strong> Bezug von Schriften (und Symbolen) zum Zwecke einer technisch sicheren, wartungsfreien und effizienten Nutzung von Schriften und Symbolen im Hinblick auf Aktualität und Ladezeiten, deren einheitliche Darstellung und Berücksichtigung möglicher lizenzrechtlicher Beschränkungen. Dem Anbieter der Schriftarten wird die IP-Adresse des Nutzers mitgeteilt, damit die Schriftarten im Browser des Nutzers zur Verfügung gestellt werden können. Darüber hinaus werden technische Daten (Spracheinstellungen, Bildschirmauflösung, Betriebssystem, verwendete Hardware) übermittelt, die für die Bereitstellung der Schriften in Abhängigkeit von den verwendeten Geräten und der technischen Umgebung notwendig sind. Diese Daten können auf einem Server des Anbieters der Schriftarten in den USA verarbeitet werden – Beim Besuch unseres Onlineangebotes senden die Browser der Nutzer ihre Browser HTTP-Anfragen an die Google Fonts Web API (d. h. eine Softwareschnittstelle für den Abruf der Schriftarten). Die Google Fonts Web API stellt den Nutzern die Cascading Style Sheets (CSS) von Google Fonts und danach die in der CCS angegebenen Schriftarten zur Verfügung. Zu diesen HTTP-Anfragen gehören (1) die vom jeweiligen Nutzer für den Zugriff auf das Internet verwendete IP-Adresse, (2) die angeforderte URL auf dem Google-Server und (3) die HTTP-Header, einschließlich des User-Agents, der die Browser- und Betriebssystemversionen der Websitebesucher beschreibt, sowie die Verweis-URL (d. h. die Webseite, auf der die Google-Schriftart angezeigt werden soll). IP-Adressen werden weder auf Google-Servern protokolliert noch gespeichert und sie werden nicht analysiert. Die Google Fonts Web API protokolliert Details der HTTP-Anfragen (angeforderte URL, User-Agent und Verweis-URL). Der Zugriff auf diese Daten ist eingeschränkt und streng kontrolliert.; Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)); Website: <a href="https://fonts.google.com/" className="text-blue-600 hover:text-blue-800 transition-colors">https://fonts.google.com/</a>; Datenschutzerklärung: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:text-blue-800 transition-colors">https://policies.google.com/privacy</a>; Grundlage Drittlandtransfers: Data Privacy Framework (DPF). Weitere Informationen: <a href="https://developers.google.com/fonts/faq/privacy?hl=de" className="text-blue-600 hover:text-blue-800 transition-colors">https://developers.google.com/fonts/faq/privacy?hl=de</a>.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Änderung und Aktualisierung der Datenschutzerklärung */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Änderung und Aktualisierung der Datenschutzerklärung</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z. B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Quelle */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>Quelle</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Erstellt mit kostenlosem <a href="https://datenschutz-generator.de/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">Datenschutz-Generator.de</a> von Dr. Thomas Schwenke
                </Typography.Body>
              </Content.Column>
            </Content.Row>
          </motion.div>
        </Content>
      </section>
    </PageLayout>
  );
}