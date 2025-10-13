"use client";

// import { motion } from "framer-motion"; // ERSETZT DURCH NATIVE TAILWIND ANIMATIONEN
import {
  GradientHeadline,
  GradientText,
} from "./ui/typography/gradient-headline";
import { SectionDescription } from "./ui/typography/section-description";
import { TestimonialCard } from "./sections/testimonials/testimonial-card";

export function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      quote:
        "Dimetrics hat unsere Projektmanagement-Prozesse revolutioniert. Die maßgeschneiderte Low-Code-Lösung hat unsere Effizienz um 60% gesteigert.",
      company: "WP Werkportal GmbH",
      role: "Geschäftsführung",
      logo: "/images/logos/wp-werkportal.png",
      delay: 0.1,
    },
    {
      rating: 5,
      quote:
        "Die Integration unserer bestehenden Systeme verlief reibungslos. Dimetrics versteht es, komplexe Anforderungen elegant zu lösen.",
      company: "BrandReact",
      role: "IT-Leitung",
      logo: "/images/logos/brandreact.png",
      delay: 0.2,
    },
    {
      rating: 5,
      quote:
        "Das WKO Cashback-System wurde termingerecht und im Budget geliefert. Die Zusammenarbeit war professionell und zielführend.",
      company: "WKO Kärnten",
      role: "Projektleitung",
      logo: "/images/logos/wko-kaernten.png",
      delay: 0.3,
    },
    {
      rating: 5,
      quote:
        "Dank der Dimetrics-Plattform konnten wir den Bestellprozess und die Lieferantenverwaltung erfolgreich automatisieren. Erhebliche Zeiteinsparungen und verbesserte Effizienz.",
      company: "BioEnergie Kärnten",
      role: "Betriebsleitung",
      logo: "/images/logos/bioenergie-kaernten.png",
      delay: 0.4,
    },
  ];

  return (
    <section className="bg-gray-950 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fade-slide-in-up">
          <GradientHeadline>
            <GradientText gradient="secondary">Erfolgs</GradientText>
            <GradientText gradient="primary">geschichten</GradientText>
          </GradientHeadline>
          <SectionDescription className="text-gray-400">
            Unsere Partner vertrauen auf unsere Expertise für ihre digitale
            Transformation.
          </SectionDescription>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
