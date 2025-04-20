// components/testimonials.tsx
"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "CFO, TechCorp",
    quote:
      "The team at PayMyTax made tax planning effortless. Their expert guidance helped us save significantly while staying compliant.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    role: "CEO, Finova",
    quote:
      "Their in-depth knowledge of GST regulations saved our company from costly mistakes. Highly professional and reliable service!",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Alex Johnson",
    role: "Accountant, StartUp Inc.",
    quote:
      "Handling taxes for a growing startup can be overwhelming, but [Your Finance Agency Name] made it seamless with their expert consultancy.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Anita Desai",
    role: "CFO, Tech Innovations",
    quote:
      "The personalized tax strategies they provided helped us optimize our filings and maximize deductions. Outstanding service!",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Rohit Kapoor",
    role: "CEO, Future Ventures",
    quote:
      "I trust them completely with my business and personal tax matters. Their expertise and attention to detail are unmatched.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
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
    <section className="py-20 bg-slate-900 relative">
      <div className="container mx-auto m-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          What Our Clients Say
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="relative h-80 w-full overflow-hidden rounded-3xl">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.avatar}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: active === index ? 1 : 0.04,
                    scale: active === index ? 1 : 0.95,
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={900}
                    height={900}
                    quality={80}
                    className="rounded-3xl"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex flex-col text-white justify-center">
            <motion.h3
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-bold"
            >
              {testimonials[active].name}
            </motion.h3>
            <motion.p
              key={testimonials[active].quote}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mt-4 italic text-gray-300"
            >
              &quot;{testimonials[active].quote}&quot;
            </motion.p>
            <motion.p
              key={testimonials[active].role}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="mt-6 italic text-gray-400"
            >
              {testimonials[active].role}
            </motion.p>
            <div className="flex mt-6 space-x-4">
              <button
                onClick={handlePrev}
                className="bg-slate-700 p-2 rounded-full hover:bg-slate-600"
              >
                <ArrowLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="bg-slate-700 p-2 rounded-full hover:bg-slate-600"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
