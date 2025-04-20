"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ITRForm } from "@/constants/itr-forms";
import toast from "react-hot-toast";
import { sendMail } from "@/action/send-mail";
import { EmailTemplate } from "../email-template";
import { render } from "@react-email/render";

export function ITRContactModal({
  form,
  onClose,
}: {
  form: ITRForm;
  onClose: () => void;
}) {
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
          service={`${form.id} - ${form.name}`}
          additionalInfo={`${additionalInfo}\n\nSelected Form Details:\n${form.details.join("\n")}`}
        />
      );

      await sendMail({
        emailHtml,
        service: `ITR Consultation - ${form.id}`,
      });

      toast.success("Our tax expert will contact you within 1 hour!");
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit request. Please try again.");
    }
  };

  const getFormSpecificFields = () => {
    switch (form.id) {
      case "ITR-1":
        return (
          <>
            <label className="block text-gray-400 mb-2 text-sm">
              Employment Type
            </label>
            <select
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full p-3 bg-slate-700 rounded-lg text-white text-sm"
              required
            >
              <option value="">Select Employment Type</option>
              <option value="Salaried">Salaried</option>
              <option value="Pension">Pension</option>
            </select>
          </>
        );

      case "ITR-2":
        return (
          <>
            <label className="block text-gray-400 mb-2 text-sm">
              Foreign Assets Value (₹)
            </label>
            <input
              type="number"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Approximate value"
              className="w-full p-3 bg-slate-700 rounded-lg text-white text-sm"
              required
            />
          </>
        );

      case "ITR-3":
        return (
          <>
            <label className="block text-gray-400 mb-2 text-sm">
              Business Type
            </label>
            <input
              type="text"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="e.g., Consulting, Manufacturing"
              className="w-full p-3 bg-slate-700 rounded-lg text-white text-sm"
              required
            />
          </>
        );

      case "ITR-4":
        return (
          <>
            <label className="block text-gray-400 mb-2 text-sm">
              Presumptive Income Type
            </label>
            <select
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full p-3 bg-slate-700 rounded-lg text-white text-sm"
              required
            >
              <option value="">Select Income Type</option>
              <option value="44AD">Business (44AD)</option>
              <option value="44ADA">Profession (44ADA)</option>
              <option value="44AE">Transport (44AE)</option>
            </select>
          </>
        );

      default:
        return (
          <>
            <label className="block text-gray-400 mb-2 text-sm">
              Specific Query
            </label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full p-3 bg-slate-700 rounded-lg text-white text-sm"
              rows={3}
              placeholder="Describe your requirement..."
              required
            />
          </>
        );
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-slate-800 rounded-xl p-6 w-full max-w-md"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">
            {form.id} Consultation
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2 text-sm">
              Your Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-slate-700 rounded-lg text-white text-sm"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2 text-sm">
              WhatsApp Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 bg-slate-700 rounded-lg text-white text-sm"
              placeholder="98XXXXXX21"
              pattern="[0-9]{10}"
            />
          </div>

          <div>{getFormSpecificFields()}</div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
          >
            Get Expert Assistance
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
