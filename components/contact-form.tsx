"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import GoogleMap from "@/components/location-map";
import { sendMail } from "@/action/send-mail";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendMail({
        emailHtml: `Name: ${formData.name}<br>Email: ${formData.email}<br>Message: ${formData.message}`,
        service: "Contact Form Submission",
        // Remove email property if not needed in sendMail
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            {submitted ? (
              <motion.div
                className="text-center p-8 bg-green-500/10 rounded-3xl border border-green-500/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-2xl font-bold text-green-500 mb-4">
                  Thank you!
                </h3>
                <p className="text-gray-300">
                  We&apos;ll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 bg-slate-800 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
          <div className="flex-1 mt-16 lg:mt-0">
            <GoogleMap />
          </div>
        </div>
      </div>
    </section>
  );
}
