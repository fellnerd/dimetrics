"use client";

// import { motion } from "framer-motion"; // Deaktiviert - Ersetzt durch native Tailwind Animationen
import Typography from "./ui/typography/typography";
import Content from "./ui/content/content";

const TypographyExampleSection = () => {
  return (
    <section className="bg-white py-24">
      <div
      >
        <Content maxWidth="7xl">
          {/* Header */}
          <Content.Row cols={1}>
            <Content.Column className="text-center mb-20">
              <Typography.SectionLabel>
                TYPOGRAPHY SYSTEM
              </Typography.SectionLabel>
              <Typography.Headline className="mb-6">
                Text-Komponenten Übersicht
              </Typography.Headline>
              <Typography.Lead>
                Alle verfügbaren Typography-Komponenten unserer Design-System
              </Typography.Lead>
            </Content.Column>
          </Content.Row>

          {/* Section Labels */}
          <Content.Row cols={1}>
            <Content.Column className="mb-16">
              <Typography.SectionTitle className="mb-8">
                Section Labels
              </Typography.SectionTitle>
              <div className="flex gap-8 justify-center">
                <div className="text-center">
                  <Typography.SectionLabel color="purple">
                    PURPLE LABEL
                  </Typography.SectionLabel>
                  <Typography.Small className="mt-2">
                    color="purple"
                  </Typography.Small>
                </div>
                <div className="text-center">
                  <Typography.SectionLabel color="blue">
                    BLUE LABEL
                  </Typography.SectionLabel>
                  <Typography.Small className="mt-2">
                    color="blue"
                  </Typography.Small>
                </div>
                <div className="text-center">
                  <Typography.SectionLabel color="cyan">
                    CYAN LABEL
                  </Typography.SectionLabel>
                  <Typography.Small className="mt-2">
                    color="cyan"
                  </Typography.Small>
                </div>
              </div>
            </Content.Column>
          </Content.Row>

          {/* Headlines */}
          <Content.Row cols={2} gap="xl">
            <Content.Column className="mb-16">
              <Typography.SectionTitle className="mb-8">
                Headlines
              </Typography.SectionTitle>
              <div className="space-y-8">
                <div>
                  <Typography.Headline>Headline</Typography.Headline>
                  <Typography.Small className="mt-2 text-gray-500">
                    Typography.Headline
                  </Typography.Small>
                </div>
                <div>
                  <Typography.SubHeadline>SubHeadline</Typography.SubHeadline>
                  <Typography.Small className="mt-2 text-gray-500">
                    Typography.SubHeadline
                  </Typography.Small>
                </div>
                <div>
                  <Typography.SectionTitle>
                    Section Title
                  </Typography.SectionTitle>
                  <Typography.Small className="mt-2 text-gray-500">
                    Typography.SectionTitle
                  </Typography.Small>
                </div>
              </div>
            </Content.Column>

            <Content.Column className="mb-16">
              <Typography.SectionTitle className="mb-8">
                Text Größen
              </Typography.SectionTitle>
              <div className="space-y-6">
                <div>
                  <Typography.Lead>
                    Lead Text - Wichtige einführende Beschreibung
                  </Typography.Lead>
                  <Typography.Small className="mt-2 text-gray-500">
                    Typography.Lead
                  </Typography.Small>
                </div>
                <div>
                  <Typography.Body>
                    Body Text - Standard Fließtext für Inhalte
                  </Typography.Body>
                  <Typography.Small className="mt-2 text-gray-500">
                    Typography.Body
                  </Typography.Small>
                </div>
                <div>
                  <Typography.Small>
                    Small Text - Kleinere Hinweise
                  </Typography.Small>
                  <Typography.Small className="mt-2 text-gray-500">
                    Typography.Small
                  </Typography.Small>
                </div>
                <div>
                  <Typography.Muted>
                    Muted Text - Sehr dezente Informationen
                  </Typography.Muted>
                  <Typography.Small className="mt-2 text-gray-500">
                    Typography.Muted
                  </Typography.Small>
                </div>
              </div>
            </Content.Column>
          </Content.Row>

          {/* Links */}
          <Content.Row cols={1}>
            <Content.Column className="mb-16">
              <Typography.SectionTitle className="mb-8 text-center">
                Links & Interaktion
              </Typography.SectionTitle>
              <div className="text-center space-y-4">
                <Typography.Body>
                  Hier ist ein{" "}
                  <Typography.Link href="/about">normaler Link</Typography.Link>{" "}
                  im Fließtext.
                </Typography.Body>
                <Typography.Body>
                  Und hier ein{" "}
                  <Typography.Link onClick={() => alert("Clicked!")}>
                    Click-Handler Link
                  </Typography.Link>{" "}
                  mit Interaktion.
                </Typography.Body>
              </div>
            </Content.Column>
          </Content.Row>

          {/* Farbpalette */}
          <Content.Row cols={1}>
            <Content.Column className="mb-16">
              <Typography.SectionTitle className="mb-8 text-center">
                Farbpalette
              </Typography.SectionTitle>
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="w-full h-20 bg-[#A100FF] rounded-xl mb-4 shadow-lg"></div>
                  <Typography.Body className="font-semibold">
                    Purple
                  </Typography.Body>
                  <Typography.Small className="text-gray-500">
                    #A100FF
                  </Typography.Small>
                </div>
                <div className="text-center">
                  <div className="w-full h-20 bg-[#3d55e2] rounded-xl mb-4 shadow-lg"></div>
                  <Typography.Body className="font-semibold">
                    Blue
                  </Typography.Body>
                  <Typography.Small className="text-gray-500">
                    #3d55e2
                  </Typography.Small>
                </div>
                <div className="text-center">
                  <div className="w-full h-20 bg-[#5facdb] rounded-xl mb-4 shadow-lg"></div>
                  <Typography.Body className="font-semibold">
                    Cyan
                  </Typography.Body>
                  <Typography.Small className="text-gray-500">
                    #5facdb
                  </Typography.Small>
                </div>
              </div>
            </Content.Column>
          </Content.Row>
        </Content>
      </div>
    </section>
  );
};

export default TypographyExampleSection;
