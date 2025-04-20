"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FormDetail {
  id: string;
  name: string;
  category: string;
  details: string[];
}

interface ITRFormAccordionProps {
  forms: FormDetail[];
}

export const ITRFormAccordion = ({ forms }: ITRFormAccordionProps) => {
  const [expandedForms, setExpandedForms] = useState<string[]>([]);

  const toggleForm = (formId: string) => {
    setExpandedForms((prev) =>
      prev.includes(formId)
        ? prev.filter((id) => id !== formId)
        : [...prev, formId]
    );
  };

  return (
    <div className="space-y-6">
      {forms.map((form) => (
        <div key={form.id} className="p-6 bg-slate-700 rounded-xl">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleForm(form.id)}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-500 font-bold">{form.id}</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  {form.name}
                </h4>
                <p className="text-gray-400 text-sm">{form.category}</p>
              </div>
            </div>
            <ChevronDown
              className={`transform transition-transform ${
                expandedForms.includes(form.id) ? "rotate-180" : ""
              }`}
            />
          </div>
          <AnimatePresence>
            {expandedForms.includes(form.id) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pl-16 space-y-2"
              >
                {form.details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                    <p className="text-gray-300">{detail}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
