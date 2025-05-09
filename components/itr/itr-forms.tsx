"use client";

import { useState } from "react";
import { ITR_FORMS, ITRForm } from "@/constants/itr-forms";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ITRContactModal } from "./itr-contact-modal";

export const ITRForms = () => {
  const [expandedForm, setExpandedForm] = useState<string | null>(null);
  const [selectedForm, setSelectedForm] = useState<ITRForm | null>(null);

  return (
    <div // Add to your main container
      className="max-w-6xl mx-auto px-4 sm:px-6 py-8 overflow-x-hidden"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-50 mb-8">
        ITR Forms
      </h2>
      <div className="space-y-4">
        {ITR_FORMS.map((form) => (
          <motion.div
            key={form.id}
            whileHover={{ scale: 1.01 }}
            className={`p-6 bg-white dark:bg-slate-800 rounded-xl border ${
              expandedForm === form.id
                ? "border-blue-300 dark:border-blue-500"
                : "border-gray-200 dark:border-slate-700"
            } shadow-sm dark:shadow-none transition-all`}
          >
            <div
              onClick={() =>
                setExpandedForm(expandedForm === form.id ? null : form.id)
              }
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-14 h-12 px-2 bg-blue-100 dark:bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-nowrap">
                    {form.id}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {form.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {form.category}
                  </p>
                </div>
              </div>

              <ChevronRight
                className={`text-gray-500 dark:text-gray-400 transform transition-transform ${
                  expandedForm === form.id ? "rotate-90" : ""
                }`}
              />
            </div>

            {expandedForm === form.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-4 pl-8 sm:pl-16 space-y-2"
              >
                {form.details.map((detail) => (
                  <div key={detail} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">{detail}</p>
                  </div>
                ))}

                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedForm(form)}
                    className="w-full sm:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Need Help with {form.id}?
                  </motion.button>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {selectedForm && (
        <ITRContactModal
          form={selectedForm}
          onClose={() => setSelectedForm(null)}
        />
      )}
    </div>
  );
};
