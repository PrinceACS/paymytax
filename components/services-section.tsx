// components/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import { HoverCard } from "./ui/hover-card";

export function ServicesSection() {
  const services = [
    {
      title: "Tax Automation",
      description: "Automated tax calculations and payment scheduling",
      icon: "💸",
    },
    {
      title: "Real-time Tracking",
      description: "Live dashboard for all tax transactions",
      icon: "📊",
    },
    {
      title: "Compliance Check",
      description: "AI-powered regulatory compliance verification",
      icon: "🛡️",
    },
    {
      title: "Multi-platform",
      description: "Integrates with all major accounting software",
      icon: "🔗",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Solutions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <HoverCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
