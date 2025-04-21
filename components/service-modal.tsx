"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { sendMail } from "@/action/send-mail";
import { render } from "@react-email/render";
import { EmailTemplate } from "@/components/email-template";
import toast from "react-hot-toast";

interface ServiceModalProps {
  service: {
    title: string;
    description: string;
    icon: JSX.Element;
  };
  onClose: () => void;
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    additionalInfo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { name, phone, additionalInfo } = formData;

      const emailHtml = await render(
        <EmailTemplate
          name={name}
          phone={phone}
          service={service.title}
          additionalInfo={additionalInfo}
        />
      );

      await sendMail({
        emailHtml,
        service: service.title,
      });

      toast.success("Our expert will contact you within 1 hour!");
      onClose();
    } catch (error) {
      toast.error("Failed to submit request. Please try again.");
    }
  };

  const getAdditionalField = () => {
    switch (service.title) {
      case "Income Tax Filing":
        return (
          <div>
            <label className="block text-gray-600 dark:text-gray-400 mb-2 text-sm">
              PAN Number
            </label>
            <input
              type="text"
              name="additionalInfo"
              placeholder="ABCDE1234F"
              pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 dark:bg-slate-700 rounded-lg text-gray-900 dark:text-white text-sm border border-gray-300 dark:border-slate-600"
              required
            />
          </div>
        );
      case "GST Registration":
        return (
          <div>
            <label className="block text-gray-600 dark:text-gray-400 mb-2 text-sm">
              Business Type
            </label>
            <select
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 dark:bg-slate-700 rounded-lg text-gray-900 dark:text-white text-sm border border-gray-300 dark:border-slate-600"
              required
            >
              <option value="">Select Business Type</option>
              <option value="Proprietorship">Proprietorship</option>
              <option value="Partnership">Partnership</option>
              <option value="LLP">LLP</option>
              <option value="Company">Company</option>
            </select>
          </div>
        );
      case "CTC Calculation":
        return (
          <div>
            <label className="block text-gray-600 dark:text-gray-400 mb-2 text-sm">
              Monthly Salary (₹)
            </label>
            <input
              type="number"
              name="additionalInfo"
              placeholder="e.g. 75000"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 dark:bg-slate-700 rounded-lg text-gray-900 dark:text-white text-sm border border-gray-300 dark:border-slate-600"
              required
            />
          </div>
        );
      case "Audit Support":
        return (
          <div>
            <label className="block text-gray-600 dark:text-gray-400 mb-2 text-sm">
              Financial Year
            </label>
            <input
              type="text"
              name="additionalInfo"
              placeholder="FY 2023-24"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 dark:bg-slate-700 rounded-lg text-gray-900 dark:text-white text-sm border border-gray-300 dark:border-slate-600"
              required
            />
          </div>
        );
      case "Payroll Services":
        return (
          <div>
            <label className="block text-gray-600 dark:text-gray-400 mb-2 text-sm">
              Employees Count
            </label>
            <input
              type="number"
              name="additionalInfo"
              placeholder="e.g. 50"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 dark:bg-slate-700 rounded-lg text-gray-900 dark:text-white text-sm border border-gray-300 dark:border-slate-600"
              required
            />
          </div>
        );
      default:
        return null;
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
            {service.title}
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
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 dark:bg-slate-700 rounded-lg text-gray-900 dark:text-white text-sm border border-gray-300 dark:border-slate-600"
              required
              autoFocus
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-400 mb-2 text-sm">
              WhatsApp Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="98XXXXXX21"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 dark:bg-slate-700 rounded-lg text-gray-900 dark:text-white text-sm border border-gray-300 dark:border-slate-600"
              required
              inputMode="numeric"
            />
          </div>

          {getAdditionalField()}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all text-sm font-medium"
          >
            Get Instant Callback
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}
