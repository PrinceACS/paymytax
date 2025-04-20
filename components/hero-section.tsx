// components/hero-section.tsx
"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { GradientBackground } from "./ui/gradient-background";
import tax_svg from "@/public/illustrations/Tax-rafiki.svg";
import { ConsultationModal } from "./global/consulatation-modal";

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  const handleConsultationClick = () => {
    // Track the conversion event
    setShowConsultationModal(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <GradientBackground />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen pt-32">
          <motion.div
            className={`lg:w-1/2 space-y-8 ${showConsultationModal ? "justify-center items-center" : ""}`}
            style={{
              transform: `translate(${smoothX.get() * 30}px, ${
                smoothY.get() * 30
              }px)`,
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              <span className="text-white">Hassle-Free</span>{" "}
              <span className="text-nowrap">Tax Filing</span> <br />
              <span className="text-white">Let Us Help You</span>
            </h1>
            <p className="text-gray-300 text-xl">
              <span className="font-bold">Simplify</span> your tax filing
              process with our expert guidance. We provide{" "}
              <span className="font-bold">efficient</span> and{" "}
              <span className="font-bold">trustworthy</span> services to meet
              all your needs.
            </p>
            <button
              onClick={handleConsultationClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
            >
              Book a Free Consultation
            </button>

            {showConsultationModal && (
              <ConsultationModal
                onClose={() => setShowConsultationModal(false)}
              />
            )}
          </motion.div>

          <div className="lg:w-1/2 w-full h-84 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-3xl blur-3xl" />
            <div className="relative h-full flex items-center justify-center">
              <Image src={tax_svg} alt="Tax rafiki" width={600} height={600} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
