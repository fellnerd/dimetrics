"use client";

import { motion } from "framer-motion";
import { Header } from "./ui/header";
import Content from "./ui/content/content";

const IntroductionSection = () => {
  return (
    <section id="services" className="bg-white py-12 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Header
          sectionLabel="Systeme verbinden. Effizienz entfalten."
          title="Ihre Brücke zwischen Strategie und Technologie für nachhaltigen digitalen Erfolg.​"
          subtitle="subtitle"
          orientation="center"
        />

        <Content maxWidth="7xl" spacing="md">
          <Content.Row cols={1} gap="lg">
            <Content.Column>
              <p className="text-gray-600">
                Moderne Architekturen für maximale Geschäftskontinuität.
              </p>
            </Content.Column>
          </Content.Row>
        </Content>
      </motion.div>
    </section>
  );
};

export default IntroductionSection;
