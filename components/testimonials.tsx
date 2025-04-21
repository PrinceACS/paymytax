"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Ramesh Verma",
    role: "Small Business Owner, Jaipur",
    quote:
      "Earlier I used to struggle with GST filings every month. Since I switched to PAYMYTAX, it's all on auto-pilot. Timely reminders, accurate filing, and zero penalties — highly recommended!",
  },
  {
    name: "Sneha Tiwari",
    role: "Freelancer, Mumbai",
    quote:
      "As a freelancer, I was always confused about ITR. PAYMYTAX not only filed it for me but also explained how I could save more tax. Super helpful and professional team!",
  },
  {
    name: "Aditya Singh",
    role: "Startup Founder, Bangalore",
    quote:
      "Compliance used to take up so much of our team's time. PAYMYTAX helped us streamline everything — GST, TDS, ITR. Now we focus on growing the business, not paperwork.",
  },
  {
    name: "Neha Arora",
    role: "Online Seller, Delhi",
    quote:
      "They handle everything — from GST returns to annual filings — and they're always available when I need help. PAYMYTAX is like having a personal CA team on call.",
  },
  {
    name: "Rajeev Kapoor",
    role: "Retired Govt. Officer, Chandigarh",
    quote:
      "I was worried about pension income and ITR filing, but PAYMYTAX made it super simple. Their support is very patient and explains everything clearly. Thank you!",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-100 dark:bg-slate-900 relative items-center justify-center mx-auto">
      <div className="container text-center m-10 px-4 items-center justify-between mx-auto flex flex-col">
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white items-center">
          What Our Clients Say
        </h2>
        <div className="relative gap-12 max-w-4xl items-center justify-center flex flex-col">
          <div className="flex flex-col text-gray-800 dark:text-white text-center items-center">
            <motion.h3
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-bold text-center text-blue-600 dark:text-blue-400"
            >
              {testimonials[active].name}
            </motion.h3>
            <motion.p
              key={testimonials[active].quote}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mt-4 italic text-gray-600 dark:text-gray-300 text-center"
            >
              &quot;{testimonials[active].quote}&quot;
            </motion.p>
            <motion.p
              key={testimonials[active].role}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="mt-6 italic text-center text-blue-500 dark:text-blue-200"
            >
              {testimonials[active].role}
            </motion.p>
            <div className="flex mt-6 space-x-4">
              <button
                onClick={handlePrev}
                className="bg-gray-200 dark:bg-slate-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors"
              >
                <ArrowLeft
                  size={24}
                  className="text-gray-800 dark:text-gray-200"
                />
              </button>
              <button
                onClick={handleNext}
                className="bg-gray-200 dark:bg-slate-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors"
              >
                <ArrowRight
                  size={24}
                  className="text-gray-800 dark:text-gray-200"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
