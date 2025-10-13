"use client";

import { motion } from "framer-motion";
import { Header } from "./ui/header";
import Content from "./ui/content/content";
import Typography from "./ui/typography/typography";
import { AccentLine } from "./ui";

const IntroductionSection = () => {
  return (
    <section
      id="about"
      className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Header.H2
          sectionLabel="Systeme verbinden. Effizienz entfalten."
          orientation="center"
        >
          Ihre Brücke zwischen Strategie und Technologie für nachhaltigen
          digitalen Erfolg.​
        </Header.H2>

        <Content>
          <Content.Row cols={1} gap="lg">
            <Content.Column>
              <Typography.SubHeadline>
                Dimetrics ist Ihr Experte für digitale Transformation und
                maßgeschneiderte Geschäftsanwendungen. Wir kombinieren tief
                gehende Expertise in der Digital Excellence Beratung mit
                innovativen Low-Code-Entwicklungsmöglichkeiten und intelligenten
                Business-Integrationen und bieten innovative Lösungen, die
                Unternehmen effizienter, flexibler und datengetriebener machen.
                Von strategischer Digitalberatung über agile
                Low-Code-Entwicklung bis hin zur nahtlosen Integration Ihrer
                Daten und Prozesse – wir schaffen die Grundlage für nachhaltigen
                Erfolg im digitalen Zeitalter.
              </Typography.SubHeadline>
              <div className="-bottom-2 left-0 w-80 h-0.5 bg-gradient-to-r from-[#5facdb] to-transparent opacity-60"></div>
            </Content.Column>
          </Content.Row>
        </Content>
      </motion.div>
    </section>
  );
};

export default IntroductionSection;
