"use client";
import { Layout } from "@/components/ui/root-layout";
import { motion } from "framer-motion";
import { ITROverview } from "@/components/itr/itr-overview";
import { ITRForms } from "@/components/itr/itr-forms";
import { ITRBenefits } from "@/components/itr/itr-benefits";
import { ITRFAQs } from "@/components/itr/itr-faq";
import Image from "next/image";
import tax_svg from "@/public/illustrations/Business deal-pana.svg";

export default function ITRPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-slate-100 dark:bg-slate-900 py-24">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full md:w-1/2 mx-auto"
          >
            <Image
              src={tax_svg}
              alt="ITR Illustration"
              width={400}
              height={400}
              className="md:w-[60%] h-auto mx-auto "
            />
          </motion.div>
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent mb-8"
            >
              Income Tax Return (ITR) Services
            </motion.h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Simplify your tax filing process with our expert ITR services.
              File your returns accurately and on time.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-20 space-y-20">
        <ITROverview />
        <ITRForms />
        <ITRBenefits />
        <ITRFAQs />
      </div>
    </Layout>
  );
}
