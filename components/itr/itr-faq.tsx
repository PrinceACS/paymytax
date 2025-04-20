import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export const ITRFAQs = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {[
          {
            question: "Who needs to file an ITR?",
            answer:
              "Individuals with income above the basic exemption limit, businesses, and entities earning taxable income must file ITR.",
          },
          {
            question: "What is the deadline for filing ITR?",
            answer:
              "The deadline is usually July 31st for individuals, but it may vary for businesses and audits.",
          },
          {
            question: "Can I revise my ITR?",
            answer:
              "Yes, you can revise your ITR if you discover any errors or omissions.",
          },
        ].map((faq, index) => (
          <div
            key={index}
            className="p-6 bg-slate-800 rounded-xl border border-slate-700"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
            >
              <h3 className="text-lg font-semibold text-white">
                {faq.question}
              </h3>
              <ChevronRight
                className={`transform transition-transform ${
                  activeFAQ === index ? "rotate-90" : ""
                }`}
              />
            </div>
            {activeFAQ === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 text-gray-300"
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
