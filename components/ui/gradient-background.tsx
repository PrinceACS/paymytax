"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random";

export function GradientBackground() {
  const pointsRef = useRef<any>();

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta / 10;
      pointsRef.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points
      ref={pointsRef}
      positions={
        inSphere(new Float32Array(5000), { radius: 1.5 }) as Float32Array
      }
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#2563eb"
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}
