"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import revenu_svg from "@/public/illustrations/Revenue-bro.svg";
import growth_svg from "@/public/illustrations/Manage money-bro.svg";
import money_svg from "@/public/illustrations/Manage money-cuate.svg";

const reasons = [
  {
    title: "Expert Guidance",
    description:
      "Our tax professionals have years of experience in tax laws, ensuring you maximize returns while staying compliant.",
    src: money_svg,
    name: "Rajesh Iyer",
    role: "Finance Manager, BharatTech",
    quote: "The expertise of their CA team is unparalleled in the industry.",
  },
  {
    title: "Hassle-Free Filing",
    description:
      "We handle all the paperwork, deadlines, and compliance so you can focus on what truly matters—your business.",
    src: growth_svg,
    name: "Priya Sharma",
    role: "Entrepreneur, Finova India",
    quote: "Their cost-effective services have been a boon for my startup.",
  },
  {
    title: "Maximized Savings",
    description:
      "We identify every deduction you qualify for, ensuring you save the maximum amount on your taxes.",
    src: revenu_svg,
    name: "Amit Verma",
    role: "Accountant, StartUp India",
    quote: "Their prompt service keeps us compliant with all deadlines.",
  },
];

export function WhyChooseSection({ autoplay = true }) {
  const [active, setActive] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % reasons.length);
  const handlePrev = () =>
    setActive((prev) => (prev - 1 + reasons.length) % reasons.length);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <section className="relative py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-96 lg:h-[500px]">
            <AnimatePresence>
              {reasons.map(
                (reason, index) =>
                  active === index && (
                    <motion.div
                      key={reason.src}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0 flex justify-center items-center"
                    >
                      <Image
                        src={reason.src}
                        alt={reason.title}
                        width={500}
                        height={500}
                        className="rounded-lg shadow-lg dark:filter dark:brightness-90"
                      />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-6">
            <motion.h3
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-3xl font-semibold"
            >
              {reasons[active].title}
            </motion.h3>

            <p className="text-gray-600 dark:text-gray-400">
              {reasons[active].description}
            </p>

            <motion.blockquote
              key={reasons[active].quote}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="border-l-4 border-blue-400 pl-4 italic text-gray-700 dark:text-gray-300"
            >
              &quot;{reasons[active].quote}&quot;
            </motion.blockquote>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-bold">{reasons[active].name}</span>,{" "}
              {reasons[active].role}
            </p>

            <div className="flex items-center space-x-4 mt-6">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                <ArrowLeft
                  size={24}
                  className="text-gray-800 dark:text-gray-200"
                />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                <ArrowRight
                  size={24}
                  className="text-gray-800 dark:text-gray-200"
                />
              </button>
            </div>

            <div className="flex space-x-2 mt-6 justify-center">
              {reasons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    active === index
                      ? "bg-blue-400 scale-125"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
