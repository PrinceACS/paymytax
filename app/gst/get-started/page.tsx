"use client";
import { motion } from "framer-motion";
import {
  FileText,
  Upload,
  CheckCircle,
  Shield,
  Clock,
  Users,
} from "lucide-react";
import { Layout } from "@/components/ui/root-layout";

export default function GetStartedPage() {
  return (
    <Layout>
      <div className="min-h-screen mt-14 dark:bg-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
          >
            Get GST Compliant in <span className="text-nowrap">15 Minutes</span>
          </motion.h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our expert team simplifies GST compliance with 99.9% accuracy
            guarantee
          </p>

          {/* Process Visualization */}
          <div className="m-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: <Upload size={32} />, text: "Upload Documents" },
              { icon: <CheckCircle size={32} />, text: "Verification" },
              { icon: <Shield size={32} />, text: "Filing Complete" },
            ].map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  {step.icon}
                </div>
                <p className="font-medium dark:text-white">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 px-4 max-w-6xl mx-auto bg-blue-50 dark:bg-slate-800/50 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
            Why 1000+ Businesses Trust Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "3x Faster Filing",
                desc: "Average processing time of 17 minutes",
                icon: <Clock className="text-blue-500" />,
              },
              {
                title: "Penalty Protection",
                desc: "100% accuracy guarantee",
                icon: <Shield className="text-green-500" />,
              },
              {
                title: "Expert Support",
                desc: "Dedicated CA assistance",
                icon: <Users className="text-purple-500" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow"
              >
                <div className="w-10 h-10 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Service Selection */}
        <section className="py-12 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
            Start With Your Needs
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "New Registration",
                desc: "Get your GSTIN in 3 working days",
                price: "₹1,499",
                features: [
                  "Digital signature",
                  "ARN generation",
                  "Portal assistance",
                ],
              },
              {
                title: "Monthly Compliance",
                desc: "Never miss a filing deadline",
                price: "₹999/month",
                features: ["GSTR-1 & 3B", "E-way bills", "Reconciliation"],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl border-2 ${index === 1 ? "border-blue-500 dark:border-blue-600" : "border-gray-200 dark:border-slate-700"} bg-white dark:bg-slate-800`}
              >
                <h3 className="text-2xl font-bold mb-2 dark:text-white">
                  {plan.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {plan.desc}
                </p>
                <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {plan.price}
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      <span className="dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Registration CTA */}
        <section className="py-12 px-4 max-w-2xl mx-auto text-center">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">
              Ready to Simplify GST?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our experts will guide you through every step
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
                Start Registration
              </button>
              <a
                href="tel:+919871871930"
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-lg font-medium"
              >
                Talk to Expert
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
