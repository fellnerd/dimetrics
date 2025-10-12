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
            {/* Einleitung */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>1. Datenschutz auf einen Blick</Header.H2>
                <Header.H3 className="text-gray-900 mb-4">Allgemeine Hinweise</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. 
                  Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
                  Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Datenerfassung */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H3 className="text-gray-900 mb-4">Datenerfassung auf dieser Website</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  <strong>Wie erfassen wir Ihre Daten?</strong><br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. 
                  Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). 
                  Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Datenverwendung */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H3 className="text-gray-900 mb-4">Wofür nutzen wir Ihre Daten?</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                  Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Rechte */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H3 className="text-gray-900 mb-4">Welche Rechte haben Sie bezüglich Ihrer Daten?</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. 
                  Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. 
                  Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. 
                  Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
                  Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Hosting */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>2. Hosting</Header.H2>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </Typography.Body>
                <Header.H3 className="text-gray-900 mb-4 mt-6">Externes Hosting</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. 
                  Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). 
                  Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Allgemeine Hinweise */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>3. Allgemeine Hinweise und Pflichtinformationen</Header.H2>
                <Header.H3 className="text-gray-900 mb-4">Datenschutz</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Verantwortliche Stelle */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H3 className="text-gray-900 mb-4">Hinweis zur verantwortlichen Stelle</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  <strong>Dimetrics - Daniel Fellner</strong><br />
                  Untermühlbach 2<br />
                  9300 St. Veit an der Glan<br />
                  Österreich<br /><br />
                  Telefon: <a href="tel:+436641969013" className="text-blue-600 hover:text-blue-800 transition-colors">+43 (0)6641969013</a><br />
                  E-Mail: <a href="mailto:office@dimetrics.io" className="text-blue-600 hover:text-blue-800 transition-colors">office@dimetrics.io</a>
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Speicherdauer */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H3 className="text-gray-900 mb-4">Speicherdauer</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Rechtsgrundlagen */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H3 className="text-gray-900 mb-4">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Betroffenenrechte */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H3 className="text-gray-900 mb-4">Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen datenschutzrechtlich nicht sicheren Drittstaaten. Wenn diese Tools aktiv sind, können Ihre personenbezogene Daten in diese Drittstaaten übertragen und dort verarbeitet werden. Wir weisen darauf hin, dass in diesen Ländern kein mit der EU vergleichbares Datenschutzniveau garantiert werden kann. Beispielsweise sind US-Unternehmen dazu verpflichtet, personenbezogene Daten an Sicherheitsbehörden herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich vorgehen könnten. Es kann daher nicht ausgeschlossen werden, dass US-Behörden (z. B. Geheimdienste) Ihre auf US-Servern befindlichen Daten zu Überwachungszwecken verarbeiten, auswerten und dauerhaft speichern. Wir haben auf diese Verarbeitungstätigkeiten keinen Einfluss.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Widerruf */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H3 className="text-gray-900 mb-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Datenerfassung auf dieser Website */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H2>4. Datenerfassung auf dieser Website</Header.H2>
                <Header.H3 className="text-gray-900 mb-4">Server-Log-Dateien</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  • Browsertyp und Browserversion<br />
                  • verwendetes Betriebssystem<br />
                  • Referrer URL<br />
                  • Hostname des zugreifenden Rechners<br />
                  • Uhrzeit der Serveranfrage<br />
                  • IP-Adresse
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* Kontaktformular */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H3 className="text-gray-900 mb-4">Kontaktformular</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </Typography.Body>
              </Content.Column>
            </Content.Row>

            {/* E-Mail, Telefon, Fax */}
            <Content.Row cols={1}>
              <Content.Column>
                <Header.H3 className="text-gray-900 mb-4">Anfrage per E-Mail, Telefon oder Telefax</Header.H3>
                <Typography.Body className="text-gray-700 leading-relaxed">
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                </Typography.Body>
                <Typography.Body className="text-gray-700 leading-relaxed mt-4">
                  Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                </Typography.Body>
              </Content.Column>
            </Content.Row>
          </motion.div>
        </Content>
      </section>
    </PageLayout>
  );
}