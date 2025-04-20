// components/pricing-section.tsx
"use client";

import { motion } from "framer-motion";

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$99/mo",
      features: ["Basic Tax Automation", "Real-time Tracking", "Email Support"],
    },
    {
      name: "Professional",
      price: "$299/mo",
      features: [
        "Advanced Tax Automation",
        "Compliance Check",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Dedicated Account Manager",
        "Custom Integrations",
        "24/7 Support",
      ],
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
          Pricing Plans
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="p-8 bg-slate-800 rounded-3xl border border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold text-blue-500 mb-6">
                {plan.price}
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-300">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
