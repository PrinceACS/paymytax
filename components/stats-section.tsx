// // components/StatsSection.tsx
// "use client";

// import { motion } from "framer-motion";

// const stats = [
//   { number: "98%", label: "Accuracy Rate" },
//   { number: "24/7", label: "Support" },
//   { number: "1M+", label: "Transactions" },
//   { number: "50+", label: "Integrations" },
// ];

// export const StatsSection = () => {
//   return (
//     <section className="py-20 relative overflow-hidden">
//       <BackgroundGradient className="top-0 left-1/2 transform -translate-x-1/2 opacity-40" />
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               className="p-6 bg-slate-800 rounded-xl relative overflow-hidden"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <div className="text-center">
//                 <div className="text-4xl font-bold text-blue-500 mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-300 text-lg">{stat.label}</div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
