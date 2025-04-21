"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ServiceModal } from "./service-modal";
import {
  FileText,
  Clipboard,
  Calculator,
  Search,
  Briefcase,
  Scroll,
} from "lucide-react";

const services = [
  {
    title: "Income Tax Filing",
    description:
      "File your ITR accurately and on time with our expert assistance.",
    icon: <FileText className="text-4xl mb-4 text-blue-400" size={80} />,
  },
  {
    title: "GST Registration",
    description: "Get your GST registration done hassle-free.",
    icon: <Clipboard className="text-4xl mb-4 text-blue-400" size={80} />,
  },
  {
    title: "CTC Calculation",
    description: "Understand your salary structure and tax implications.",
    icon: <Calculator className="text-4xl mb-4 text-blue-400" size={80} />,
  },
  {
    title: "Audit Support",
    description:
      "Navigate audits with confidence using our professional support.",
    icon: <Search className="text-4xl mb-4 text-blue-400" size={80} />,
  },
  {
    title: "Payroll Services",
    description:
      "Simplify payroll processing and ensure compliance with labor laws.",
    icon: <Briefcase className="text-4xl mb-4 text-blue-400" size={80} />,
  },
  {
    title: "Other Statutory Compliances",
    description: "Stay updated and compliant with all statutory regulations.",
    icon: <Scroll className="text-4xl mb-4 text-blue-400" size={80} />,
  },
];

export function ServiceOverviewSection() {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    description: string;
    icon: JSX.Element;
  } | null>(null);

  return (
    <section className="py-20 bg-gray-100 dark:bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          LOOKING FOR PAY MY TAX SERVICES? <br />
          <span className="text-blue-500">HERE IT IS</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white dark:bg-slate-800 rounded-3xl border text-center border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
            >
              <div className="flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}
