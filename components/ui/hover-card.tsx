"use client";

import { motion } from "framer-motion";

export function HoverCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <motion.div
      className="p-8 bg-slate-900 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all"
      whileHover={{ y: -10 }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}
