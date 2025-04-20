"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const QuickITRSelector = () => {
  const [answers, setAnswers] = useState({
    incomeType: "",
    businessIncome: false,
  });
  const [suggestion, setSuggestion] = useState("");

  const determineITR = () => {
    if (answers.incomeType === "salary" && !answers.businessIncome) {
      setSuggestion("ITR-1 (Sahaj)");
    } else if (answers.businessIncome) {
      setSuggestion("ITR-3 or ITR-4");
    } else {
      setSuggestion("ITR-2");
    }
  };

  return (
    <div className="p-6 bg-slate-800 rounded-xl mb-8">
      <h3 className="text-lg font-semibold text-white mb-4">
        Quick ITR Selector
      </h3>
      <div className="space-y-4">
        <div>
          <label className="text-gray-300 block mb-2">Main Income Source</label>
          <select
            className="w-full p-2 bg-slate-700 rounded-lg text-white"
            onChange={(e) =>
              setAnswers({ ...answers, incomeType: e.target.value })
            }
          >
            <option value="">Select Income Type</option>
            <option value="salary">Salary/Pension</option>
            <option value="business">Business/Profession</option>
            <option value="property">House Property</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="businessIncome"
            onChange={(e) =>
              setAnswers({ ...answers, businessIncome: e.target.checked })
            }
          />
          <label htmlFor="businessIncome" className="text-gray-300">
            Have business income?
          </label>
        </div>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={determineITR}
        >
          Suggest ITR Form
        </button>

        {suggestion && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-slate-700 rounded-lg"
          >
            <CheckCircle className="text-green-400 inline mr-2" />
            <span className="text-white">Recommended Form: {suggestion}</span>
          </motion.div>
        )}
      </div>
    </div>
  );
};
