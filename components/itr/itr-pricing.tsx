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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg dark:shadow-slate-700/20"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Basic
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                For simple tax filings
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
                "Simple ITR (Form ITR-1/2)",
                "Single Form 16",
                "Max 5 income entries",
                "Basic tax calculation",
                "Email support",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-900 dark:text-white rounded-lg font-medium transition-colors">
              Choose Basic
            </button>
          </motion.div>

          {/* Standard Plan (Featured) */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white dark:bg-slate-800 rounded-2xl border-2 border-blue-500 dark:border-blue-600 shadow-xl dark:shadow-blue-900/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              POPULAR
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                Standard <Star className="w-5 h-5 text-yellow-400 ml-2" />
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                For most individuals
              </p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                ₹1,499
              </span>
              <span className="text-gray-600 dark:text-gray-400">/filing</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Complex ITR (Form ITR-3/4)",
                "Multiple Form 16",
                "Unlimited income entries",
                "Tax optimization",
                "Capital gains support",
                "Priority email support",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
              Choose Standard
            </button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg dark:shadow-slate-700/20"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                Premium <Zap className="w-5 h-5 text-purple-500 ml-2" />
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                For businesses & professionals
              </p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                ₹2,999
              </span>
              <span className="text-gray-600 dark:text-gray-400">/filing</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Business ITR (Form ITR-5/6)",
                "Multiple Form 16/16A",
                "Unlimited entries",
                "Dedicated CA",
                "Tax planning consultation",
                "Audit support",
                "24/7 priority support",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-medium transition-colors">
              Choose Premium
            </button>
          </motion.div>
        </div>

        {/* Additional Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-gray-600 dark:text-gray-400 mt-16 max-w-2xl mx-auto"
        >
          *Additional charges may apply for complex cases. All plans include
          free revisions within 15 days of filing.
        </motion.p>
      </div>
    </section>
  );
}
