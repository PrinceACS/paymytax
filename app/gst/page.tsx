"use client";
import React, { useEffect, useState } from "react";
import { Briefcase, Calendar, FileText, Scale, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/ui/root-layout";
import GSTReturnTable from "@/components/gst/gst-return-table";
import { GST_RETURNS } from "@/constants/gst";
import FAQ from "@/components/gst/faq";

const HeroSection = () => {
  const text = "File GST Returns 3x Faster";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100); // Faster typing effect

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section
      className={`relative text-center mt-16 py-24 transition-colors dark:bg-slate-900 dark:text-white`}
    >
      {/* Background Gradient for Light/Dark Mode */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${"dark:bg-blue-900 dark:to-gray-800 bg-blue-300 to-cyan-100"} opacity-10`}
      ></div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
        >
          {displayText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="ml-1"
          >
            |
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg mt-4 font-medium dark:text-white"
        >
          Fast & Accurate GST Returns | 100% Penalty Protection | Expert Support
        </motion.p>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/gst/get-started"
            className="px-6 py-3 text-lg font-semibold rounded-lg transition shadow-lg 
                      bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-900 dark:text-white dark:hover:bg-blue-800"
          >
            Get Started
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/gst/learn-more"
            className="px-6 py-3 text-lg font-semibold rounded-lg transition shadow-lg 
                      bg-gray-700 text-white hover:bg-gray-800 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
          >
            Learn More
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const KeyServices = () => (
  <section className="py-16 m-10 dark:text-white">
    <h2 className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-4xl text-center font-bold mb-10">
      Our Key Services
    </h2>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto"
    >
      {[
        { name: "GST Registration", icon: <FileText size={80} /> },
        { name: "Monthly Return Filing", icon: <Calendar size={80} /> },
        { name: "Annual Compliance & Audit", icon: <Scale size={80} /> },
        { name: "E-Way Bill Management", icon: <Truck size={80} /> },
        { name: "Litigation Support", icon: <Briefcase size={80} /> },
      ].map(({ name, icon }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-6 dark:bg-slate-800 border border-slate-700 dark:border-slate-600 rounded-xl"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex flex-col items-center">
            <div className="text-blue-400">{icon}</div>
            <h3 className="text-2xl text-center font-semibold mb-3 ml-4 dark:text-white">
              {name}
            </h3>
          </div>
          <p className="text-center dark:text-gray-400">
            Comprehensive support with expert guidance.
          </p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const PricingTable = () => (
  <section className="py-16 bg-slate-100 dark:bg-slate-900 text-black dark:text-white">
    <h2 className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-4xl text-center font-bold mb-10">
      Pricing Plans
    </h2>
    <div className="max-w-4xl mx-5 sm:mx-auto bg-slate-100 dark:bg-slate-800 p-8 rounded-lg border border-slate-300 dark:border-slate-700">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b p-4">Service</th>
            <th className="border-b p-4">Our Fee</th>
            <th className="border-b p-4">Govt Fee</th>
            <th className="border-b p-4">Late Penalty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4">GST Registration</td>
            <td className="p-4">₹1,500</td>
            <td className="p-4">₹0</td>
            <td className="p-4">₹10,000+</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default function GSTPage() {
  return (
    <Layout>
      <HeroSection />
      <KeyServices />
      <GSTReturnTable returns={GST_RETURNS} />
      <PricingTable />
      <FAQ />
    </Layout>
  );
}
