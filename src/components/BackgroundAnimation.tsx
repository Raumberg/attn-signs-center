"use client";

import { motion } from "framer-motion";

interface BackgroundAnimationProps {
  mousePosition: { x: number; y: number };
}

export default function BackgroundAnimation({ mousePosition }: BackgroundAnimationProps) {
  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none"
      animate={{
        x: (mousePosition.x - window.innerWidth / 2) * 0.02,
        y: (mousePosition.y - window.innerHeight / 2) * 0.02,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
      }}
    >
      {/* Static particles */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gray-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.3,
          }}
        />
      ))}
      
      {/* Larger static elements */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`large-${i}`}
          className="absolute w-3 h-3 border border-gray-600 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.4 + 0.2,
          }}
        />
      ))}
      
      {/* Grid lines */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`line-${i}`}
          className="absolute w-full h-px bg-gray-800"
          style={{ 
            top: `${10 + i * 10}%`,
            opacity: 0.3,
          }}
        />
      ))}
      
      {[...Array(8)].map((_, i) => (
        <div
          key={`vline-${i}`}
          className="absolute h-full w-px bg-gray-800"
          style={{ 
            left: `${10 + i * 10}%`,
            opacity: 0.3,
          }}
        />
      ))}
    </motion.div>
  );
} 