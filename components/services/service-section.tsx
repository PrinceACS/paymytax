"use client";
import { useState } from "react";
import { QuickITRSelector, ITRFormAccordion } from "./index";
import { ITR_FORMS } from "@/constants/itr-forms";

export const ServiceSection = () => {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 mb-8">
            <button
              className={`px-4 py-2 rounded-lg ${
                activeTab === "basic"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-700 text-gray-300"
              }`}
              onClick={() => setActiveTab("basic")}
            >
              Basic View
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                activeTab === "advanced"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-700 text-gray-300"
              }`}
              onClick={() => setActiveTab("advanced")}
            >
              Advanced View
            </button>
          </div>

          {activeTab === "basic" ? (
            <QuickITRSelector />
          ) : (
            <ITRFormAccordion forms={ITR_FORMS} />
          )}
        </div>
      </div>
    </section>
  );
};
