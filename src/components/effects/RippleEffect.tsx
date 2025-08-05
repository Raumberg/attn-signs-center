"use client";

import { motion } from "framer-motion";

interface Ripple {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

interface RippleEffectProps {
  ripples: Ripple[];
}

export default function RippleEffect({ ripples }: RippleEffectProps) {
  return (
    <>
      {ripples.map((ripple) => (
        <div key={ripple.id} className="fixed pointer-events-none z-30" style={{ left: ripple.x, top: ripple.y }}>
          {/* Primary ripple */}
          <motion.div
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: [0, 1, 2, 3, 4, 5],
              opacity: [1, 0.9, 0.7, 0.5, 0.3, 0],
            }}
            transition={{
              duration: 2.5,
              ease: "easeOut",
            }}
          >
            <div className="w-6 h-6 border border-white rounded-full" />
          </motion.div>
          
          {/* Secondary ripple */}
          <motion.div
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 0.7 }}
            animate={{
              scale: [0, 1.5, 3, 4.5, 6],
              opacity: [0.7, 0.5, 0.3, 0.1, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            <div className="w-4 h-4 border border-gray-400 rounded-full" />
          </motion.div>
          
          {/* Tertiary ripple */}
          <motion.div
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{
              scale: [0, 2, 4, 6, 8],
              opacity: [0.5, 0.3, 0.2, 0.1, 0],
            }}
            transition={{
              duration: 1.8,
              ease: "easeOut",
              delay: 0.4,
            }}
          >
            <div className="w-2 h-2 border border-gray-600 rounded-full" />
          </motion.div>
        </div>
      ))}
    </>
  );
} 