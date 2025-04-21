"use client";
import { motion } from "framer-motion";
import {
  CheckCircle,
  BarChart,
  Shield,
  FileText,
  Calendar,
  Wallet,
  Truck,
} from "lucide-react";
import { Layout } from "@/components/ui/root-layout";
import { ConsultationModal } from "@/components/global/consulatation-modal";
import FAQ from "@/components/gst/faq";
import { useState } from "react";

export default function LearnMorePage() {
  const [showModal, setShowModal] = useState(false);

  const handleScheduleClick = () => {
    setShowModal(true);
  };

  return (
    <Layout>
      <div className="min-h-screen dark:bg-slate-900">
        {/* Hero Section */}
        <section className="my-20 py-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
          >
            The Complete GST Guide
          </motion.h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about GST compliance in India
          </p>
        </section>

        {/* GST Timeline */}
        <section className="py-12 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
            Your Monthly GST Timeline
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 h-full w-0.5 bg-blue-200 dark:bg-slate-700"></div>

            {[
              {
                date: "11th",
                task: "GSTR-1 Filing",
                desc: "Outward supplies details",
                icon: <FileText className="text-blue-500 " />,
              },
              {
                date: "20th",
                task: "GSTR-3B Filing",
                desc: "Summary return with tax payment",
                icon: <BarChart className="text-green-500" />,
              },
              {
                date: "31st",
                task: "Annual Reconciliation",
                desc: "GSTR-9/9C for financial year",
                icon: <Calendar className="text-purple-500" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative pl-12 pb-8"
              >
                <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {item.date} of each month
                  </div>
                  <h3 className="text-xl font-semibold mt-1 dark:text-white">
                    {item.task}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Compliance Deep Dive */}
        <section className="py-12 px-4 max-w-6xl mx-auto bg-slate-50 dark:bg-slate-800/30 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
            Key Compliance Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Invoice Matching",
                desc: "Reconcile GSTR-2A with purchase records",
                icon: <CheckCircle className="text-green-500" />,
              },
              {
                title: "ITC Claims",
                desc: "Maximize input tax credit benefits",
                icon: <Wallet className="text-yellow-500" />,
              },
              {
                title: "E-Way Bills",
                desc: "Generate bills for goods movement",
                icon: <Truck className="text-blue-500" />,
              },
              {
                title: "Annual Return",
                desc: "GSTR-9/9C filing before Dec 31",
                icon: <Calendar className="text-purple-500" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow flex items-start"
              >
                <div className="w-10 h-10 mr-4 flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
            Real Business Impact
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                  <BarChart className="text-blue-500" />
                </div>
                <h3 className="text-xl font-bold dark:text-white">
                  E-commerce Seller
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                &quot;Automated GST filing reduced our compliance time by 65%
                and eliminated late fees completely.&quot;
              </p>
              <div className="text-sm text-blue-600 dark:text-blue-400">
                Annual Savings: ₹78,000
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4">
                  <Shield className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold dark:text-white">
                  Manufacturer
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                &quot;ITC maximization strategy increased our working capital by
                ₹2.4L annually.&quot;
              </p>
              <div className="text-sm text-green-600 dark:text-green-400">
                ITC Recovery: 98.7%
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expert Advice Section */}
        <section className="py-12 px-4 max-w-4xl mx-auto text-center">
          <div className="bg-blue-50 dark:bg-slate-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">
              Need Personalized Advice?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Our certified GST practitioners can analyze your specific business
              needs and recommend optimal compliance strategies.
            </p>
            <button
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
              onClick={handleScheduleClick}
            >
              Schedule Free Consultation
            </button>
          </div>
        </section>

        {showModal && <ConsultationModal onClose={() => setShowModal(false)} />}

        <FAQ />
      </div>
    </Layout>
  );
}
