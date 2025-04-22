"use client";
import { motion } from "framer-motion";
import { CheckCircle, Star, Zap } from "lucide-react";

export function ITRPricing() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
        >
          ITR Pricing Plans
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* ITR-1 Plan */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg dark:shadow-slate-700/20"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                ITR-1 (Sahaj)
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                For salaried individuals with simple income
              </p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                ₹899
              </span>
              <span className="text-gray-600 dark:text-gray-400">/filing</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Income up to ₹50 lakh",
                "Income from salary/pension",
                "Income from one house property",
                "Income from other sources (excluding lottery and racehorses)",
                "Resident individuals only",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            {/* <button className="w-full py-3 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-900 dark:text-white rounded-lg font-medium transition-colors">
              Choose ITR-1
            </button> */}
          </motion.div>

          {/* ITR-2 Plan */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white dark:bg-slate-800 rounded-2xl border-2 border-blue-500 dark:border-blue-600 shadow-xl dark:shadow-blue-900/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              POPULAR
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                ITR-2 <Star className="w-5 h-5 text-yellow-400 ml-2" />
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                For individuals with capital gains or multiple properties
              </p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                ₹1,999
              </span>
              <span className="text-gray-600 dark:text-gray-400">/filing</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Income exceeding ₹50 lakh",
                "Income from salary/pension",
                "Income from multiple house properties",
                "Capital gains income",
                "Foreign assets or income",
                "Resident and non-resident individuals",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            {/* <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
              Choose ITR-2
            </button> */}
          </motion.div>

          {/* ITR-3 Plan */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg dark:shadow-slate-700/20"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                ITR-3 <Zap className="w-5 h-5 text-purple-500 ml-2" />
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                For individuals with business or professional income
              </p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                ₹2,599
              </span>
              <span className="text-gray-600 dark:text-gray-400">/filing</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Income from business or profession",
                "Income from salary/pension",
                "Income from house property",
                "Capital gains income",
                "Other sources of income",
                "Partners in firms",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            {/* <button className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-medium transition-colors">
              Choose ITR-3
            </button> */}
          </motion.div>

          {/* ITR-4 Plan */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg dark:shadow-slate-700/20"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                ITR-4 <Zap className="w-5 h-5 text-purple-500 ml-2" />
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                For individuals, Hindu Undivided Families (HUFs), and firms
                (other than LLP) having income from a profession or business
              </p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                ₹3,499
              </span>
              <span className="text-gray-600 dark:text-gray-400">/filing</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Income from profession or business",
                "Income from salary/pension",
                "Income from house property",
                "Income from capital gains",
                "Other sources of income",
                "For taxpayers opting for the presumptive taxation scheme under section 44AD/44AE",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            {/* <button className="w-full py-3 bg-blue-800 hover:bg-blue-900 text-white rounded-lg font-medium transition-colors">
              Choose ITR-4
            </button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
