"use client";

import { motion } from "framer-motion";
import { useMouse } from "@/contexts/MouseContext";

export default function InteractiveCursor() {
  const { isHovering, getMagneticPosition } = useMouse();
  const magneticPosition = getMagneticPosition();
  return (
    <>
      <motion.div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: magneticPosition.x - 8,
          y: magneticPosition.y - 8,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      <motion.div
        className="fixed w-8 h-8 border border-white rounded-full pointer-events-none z-40"
        animate={{
          x: magneticPosition.x - 16,
          y: magneticPosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
    </>
  );
} 