"use client";

import { motion } from "framer-motion";
import { useWindowSize } from "@/hooks/useWindowSize";

interface BackgroundAnimationProps {
  mousePosition: { x: number; y: number };
}

export default function BackgroundAnimation({ mousePosition }: BackgroundAnimationProps) {
  const { width, height } = useWindowSize();
  
  // Predefined positions to avoid hydration mismatch
  const particlePositions = [
    { left: "10%", top: "15%", opacity: 0.7 },
    { left: "25%", top: "45%", opacity: 0.9 },
    { left: "40%", top: "20%", opacity: 0.8 },
    { left: "60%", top: "35%", opacity: 0.9 },
    { left: "80%", top: "10%", opacity: 0.6 },
    { left: "15%", top: "70%", opacity: 0.9 },
    { left: "35%", top: "85%", opacity: 0.7 },
    { left: "55%", top: "60%", opacity: 0.8 },
    { left: "75%", top: "25%", opacity: 0.8 },
    { left: "90%", top: "50%", opacity: 0.6 },
    { left: "5%", top: "30%", opacity: 0.9 },
    { left: "30%", top: "5%", opacity: 0.7 },
    { left: "50%", top: "80%", opacity: 0.8 },
    { left: "70%", top: "90%", opacity: 0.8 },
    { left: "85%", top: "40%", opacity: 0.9 },
    { left: "20%", top: "55%", opacity: 0.6 },
    { left: "45%", top: "75%", opacity: 0.9 },
    { left: "65%", top: "15%", opacity: 0.7 },
    { left: "95%", top: "65%", opacity: 0.8 },
    { left: "8%", top: "85%", opacity: 0.8 },
    { left: "28%", top: "25%", opacity: 0.9 },
    { left: "48%", top: "45%", opacity: 0.6 },
    { left: "68%", top: "70%", opacity: 0.9 },
    { left: "88%", top: "20%", opacity: 0.7 },
    { left: "12%", top: "40%", opacity: 0.8 },
    { left: "32%", top: "60%", opacity: 0.8 },
    { left: "52%", top: "10%", opacity: 0.9 },
    { left: "72%", top: "80%", opacity: 0.6 },
    { left: "92%", top: "30%", opacity: 0.9 },
    { left: "18%", top: "50%", opacity: 0.7 },
    { left: "38%", top: "90%", opacity: 0.8 },
    { left: "58%", top: "25%", opacity: 0.8 },
    { left: "78%", top: "55%", opacity: 0.9 },
    { left: "98%", top: "75%", opacity: 0.6 },
    { left: "22%", top: "15%", opacity: 0.9 },
    { left: "42%", top: "35%", opacity: 0.7 },
    { left: "62%", top: "65%", opacity: 0.8 },
    { left: "82%", top: "85%", opacity: 0.8 },
    { left: "2%", top: "5%", opacity: 0.9 },
    { left: "26%", top: "45%", opacity: 0.6 },
    { left: "46%", top: "70%", opacity: 0.9 },
    { left: "66%", top: "20%", opacity: 0.7 },
    { left: "86%", top: "40%", opacity: 0.8 },
    { left: "6%", top: "60%", opacity: 0.8 },
    { left: "36%", top: "80%", opacity: 0.9 },
    { left: "56%", top: "10%", opacity: 0.6 },
    { left: "76%", top: "30%", opacity: 0.9 },
    { left: "96%", top: "50%", opacity: 0.7 },
    { left: "16%", top: "70%", opacity: 0.8 },
    { left: "24%", top: "90%", opacity: 0.8 },
    { left: "44%", top: "25%", opacity: 0.9 },
    { left: "64%", top: "45%", opacity: 0.6 },
    { left: "84%", top: "65%", opacity: 0.9 },
    { left: "4%", top: "85%", opacity: 0.7 },
    { left: "34%", top: "5%", opacity: 0.8 },
    { left: "54%", top: "35%", opacity: 0.8 },
    { left: "74%", top: "55%", opacity: 0.9 },
    { left: "94%", top: "75%", opacity: 0.6 },
    { left: "14%", top: "15%", opacity: 0.9 },
    { left: "34%", top: "25%", opacity: 0.7 },
    { left: "54%", top: "45%", opacity: 0.8 },
    { left: "74%", top: "65%", opacity: 0.8 },
    { left: "94%", top: "85%", opacity: 0.9 },
  ];

  const largeElementPositions = [
    { left: "15%", top: "25%", opacity: 0.6 },
    { left: "35%", top: "45%", opacity: 0.8 },
    { left: "55%", top: "65%", opacity: 0.7 },
    { left: "75%", top: "85%", opacity: 0.8 },
    { left: "25%", top: "15%", opacity: 0.9 },
    { left: "45%", top: "35%", opacity: 0.6 },
    { left: "65%", top: "55%", opacity: 0.8 },
    { left: "85%", top: "75%", opacity: 0.7 },
    { left: "5%", top: "45%", opacity: 0.8 },
    { left: "95%", top: "25%", opacity: 0.6 },
    { left: "35%", top: "75%", opacity: 0.8 },
    { left: "65%", top: "35%", opacity: 0.7 },
  ];
  
  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none"
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
      {/* Static particles */}
      {particlePositions.map((pos, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gray-300 rounded-full"
          style={{
            left: pos.left,
            top: pos.top,
            opacity: pos.opacity,
          }}
        />
      ))}
      
      {/* Larger static elements */}
      {largeElementPositions.map((pos, i) => (
        <div
          key={`large-${i}`}
          className="absolute w-4 h-4 border-2 border-gray-400 rounded-full"
          style={{
            left: pos.left,
            top: pos.top,
            opacity: pos.opacity,
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