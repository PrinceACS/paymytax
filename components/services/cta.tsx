"use client";
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8">
            Start Your Tax Compliance Journey
          </h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};
