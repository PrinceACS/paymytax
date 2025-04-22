"use client";
import React, { useEffect, useState } from "react";
import { Briefcase, Calendar, FileText, Scale, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/ui/root-layout";
import GSTReturnTable from "@/components/gst/gst-return-table";
import { GST_RETURNS } from "@/constants/gst";
import FAQ from "@/components/gst/faq";
import { gstPricingData } from "@/constants/gst";
// import { CheckCircle, Zap, Star } from "lucide-react";

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
      <div className="grid gap-4 sm:table w-full">
        <div className="hidden sm:table-header-group">
          <div className="table-row">
            {gstPricingData.map((item) => (
              <div key={item.label} className="table-cell p-4 font-semibold">
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className="contents sm:table-row-group">
          <div className="flex flex-col border p-4 rounded-lg sm:table-row sm:border-0 sm:p-0 sm:rounded-none">
            {gstPricingData.map((item) => (
              <div
                key={item.label}
                className="flex justify-between sm:table-cell p-2 sm:p-4"
              >
                <span className="font-semibold sm:hidden">{item.label}:</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// export function GSTPricing() {
//   return (
//     <section className="py-20 bg-gray-50 dark:bg-slate-900">
//       <div className="container mx-auto px-4 sm:px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
//         >
//           GST Registration Pricing
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {/* Basic Plan */}
//           <motion.div
//             whileHover={{ y: -10 }}
//             className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg dark:shadow-slate-700/20"
//           >
//             <div className="mb-6">
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//                 Basic
//               </h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 GST Registration - Individuals & Startups
//               </p>
//             </div>
//             <div className="mb-8">
//               <span className="text-4xl font-bold text-gray-900 dark:text-white">
//                 ₹1,500
//               </span>
//               <span className="text-gray-600 dark:text-gray-400">
//                 {" "}
//                 (One-time)
//               </span>
//             </div>
//             <ul className="space-y-4 mb-8">
//               {[
//                 "GST Registration Filing",
//                 "No Govt Fee applicable",
//                 "Document Review by Experts",
//                 "Guidance for Certificate Issuance",
//                 "Email Support",
//               ].map((item, index) => (
//                 <li key={index} className="flex items-start">
//                   <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
//                   <span className="text-gray-700 dark:text-gray-300">
//                     {item}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//             <button className="w-full py-3 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-900 dark:text-white rounded-lg font-medium transition-colors">
//               Choose Basic
//             </button>
//           </motion.div>

//           {/* Standard Plan */}
//           <motion.div
//             whileHover={{ y: -10 }}
//             className="p-8 bg-white dark:bg-slate-800 rounded-2xl border-2 border-blue-500 dark:border-blue-600 shadow-xl dark:shadow-blue-900/20 relative overflow-hidden"
//           >
//             <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
//               POPULAR
//             </div>
//             <div className="mb-6">
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
//                 Standard <Star className="w-5 h-5 text-yellow-400 ml-2" />
//               </h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 GST Registration + Filing for MSMEs
//               </p>
//             </div>
//             <div className="mb-8">
//               <span className="text-4xl font-bold text-gray-900 dark:text-white">
//                 ₹2,499
//               </span>
//               <span className="text-gray-600 dark:text-gray-400">
//                 {" "}
//                 (One-time)
//               </span>
//             </div>
//             <ul className="space-y-4 mb-8">
//               {[
//                 "GST Registration Filing",
//                 "Govt Fee ₹0",
//                 "Professional Consultation",
//                 "3 Month Filing Assistance",
//                 "Phone & Email Support",
//               ].map((item, index) => (
//                 <li key={index} className="flex items-start">
//                   <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
//                   <span className="text-gray-700 dark:text-gray-300">
//                     {item}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//             <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
//               Choose Standard
//             </button>
//           </motion.div>

//           {/* Premium Plan */}
//           <motion.div
//             whileHover={{ y: -10 }}
//             className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg dark:shadow-slate-700/20"
//           >
//             <div className="mb-6">
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
//                 Premium <Zap className="w-5 h-5 text-purple-500 ml-2" />
//               </h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 Complete GST Service for Small Businesses
//               </p>
//             </div>
//             <div className="mb-8">
//               <span className="text-4xl font-bold text-gray-900 dark:text-white">
//                 ₹4,999
//               </span>
//               <span className="text-gray-600 dark:text-gray-400">
//                 {" "}
//                 (One-time)
//               </span>
//             </div>
//             <ul className="space-y-4 mb-8">
//               {[
//                 "GST Registration Filing",
//                 "Govt Fee ₹0",
//                 "CA Consultation & Review",
//                 "6 Month Filing Assistance",
//                 "Late Penalty Guidance",
//                 "Dedicated Relationship Manager",
//               ].map((item, index) => (
//                 <li key={index} className="flex items-start">
//                   <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
//                   <span className="text-gray-700 dark:text-gray-300">
//                     {item}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//             <button className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-medium transition-colors">
//               Choose Premium
//             </button>
//           </motion.div>
//         </div>

//         {/* Additional Note */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="text-center text-gray-600 dark:text-gray-400 mt-16 max-w-2xl mx-auto"
//         >
//           *Prices exclude late penalty charges. If you’ve missed the deadline, a
//           late fee may apply as per GST norms.
//         </motion.p>
//       </div>
//     </section>
//   );
// }

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
