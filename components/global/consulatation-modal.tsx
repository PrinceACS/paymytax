"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { sendMail } from "@/action/send-mail";
import { render } from "@react-email/render";
import { EmailTemplate } from "@/components/email-template";
import toast from "react-hot-toast";

export function ConsultationModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    serviceInterest: "General Consultation",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const emailHtml = await render(
        <EmailTemplate
          name={formData.name}
          phone={formData.phone}
          service={formData.serviceInterest}
          additionalInfo={`Company: ${formData.company || "Not provided"}`}
        />
      );

      await sendMail({
        emailHtml,
        service: "Free Consultation Request",
      });

      toast.success("Our expert will contact you within 1 business hour!");
      onClose();
    } catch (error) {
      toast.error("Failed to submit request. Please try again.");
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-md shadow-xl"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Schedule Consultation
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-2xl transition-colors"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 dark:text-gray-400 mb-2 text-sm">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full p-3 bg-gray-100 dark:bg-slate-700 rounded-lg text-gray-900 dark:text-white text-sm border border-gray-300 dark:border-slate-600"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-400 mb-2 text-sm">
              WhatsApp Number
            </label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              className="w-full p-3 bg-gray-100 dark:bg-slate-700 rounded-lg text-gray-900 dark:text-white text-sm border border-gray-300 dark:border-slate-600"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-400 mb-2 text-sm">
              Service Interest
            </label>
            <select
              className="w-full p-3 bg-gray-100 dark:bg-slate-700 rounded-lg text-gray-900 dark:text-white text-sm border border-gray-300 dark:border-slate-600"
              onChange={(e) =>
                setFormData({ ...formData, serviceInterest: e.target.value })
              }
            >
              <option>General Consultation</option>
              <option>ITR Filing</option>
              <option>GST Services</option>
              <option>Business Compliance</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-400 mb-2 text-sm">
              Company Name (Optional)
            </label>
            <input
              type="text"
              className="w-full p-3 bg-gray-100 dark:bg-slate-700 rounded-lg text-gray-900 dark:text-white text-sm border border-gray-300 dark:border-slate-600"
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all text-sm font-medium"
          >
            Schedule Now
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}
