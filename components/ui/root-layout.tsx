// components/layout.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { GradientBackground } from "./gradient-background";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 3D Background */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <GradientBackground />
        </Canvas>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
