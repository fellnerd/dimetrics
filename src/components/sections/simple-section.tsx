"use client";

import { motion } from "framer-motion";
import { Header } from "../ui/header";

const SimpleSection = () => {
  return (
    <section
      id="services"
      className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Header
            description="description"
            sectionLabel="label"
            title="title"
            subtitle="subtitle"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleSection;
