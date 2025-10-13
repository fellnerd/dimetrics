"use client";

// import { motion } from "framer-motion"; // Deaktiviert - Ersetzt durch native Tailwind Animationen
import { Header } from "../ui/header";

const SimpleSection = () => {
  return (
    <section
      id="services"
      className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div
        >
          <Header
            description="description"
            sectionLabel="label"
            title="title"
            subtitle="subtitle"
          />
        </div>
      </div>
    </section>
  );
};

export default SimpleSection;
