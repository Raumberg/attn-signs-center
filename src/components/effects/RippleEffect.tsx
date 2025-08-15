"use client";

import { motion } from "framer-motion";
import { useMouse } from "@/contexts/MouseContext";

// Clean, high-contrast ring ripple that inverts underlying colors via mix-blend-difference
export default function RippleEffect() {
  const { ripples } = useMouse();

  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full border border-white mix-blend-difference"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 24,  // base diameter 24px → scales up
            height: 24,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 0.4, opacity: 0.9 }}
          animate={{ scale: 8, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      ))}
    </div>
  );
} 