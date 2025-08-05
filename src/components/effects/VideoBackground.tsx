"use client";

import { motion } from "framer-motion";
import { useWindowSize } from "@/hooks/useWindowSize";

interface VideoBackgroundProps {
  mousePosition: { x: number; y: number };
}

export default function VideoBackground({ mousePosition }: VideoBackgroundProps) {
  const { width, height } = useWindowSize();

  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none overflow-hidden"
      animate={{
        x: (mousePosition.x - width / 2) * 0.02,
        y: (mousePosition.y - height / 2) * 0.02,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
      }}
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        style={{
          transform: 'scale(1.1)', // Slightly larger to avoid black edges during parallax
        }}
      >
        <source src="/assets/triangles.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20" />
    </motion.div>
  );
} 