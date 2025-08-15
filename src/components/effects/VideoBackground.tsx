"use client";

import { motion } from "framer-motion";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function VideoBackground() {


  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      // animate={{
      //   x: (mousePosition.x - width / 2) * 0.03,
      //   y: (mousePosition.y - height / 2) * 0.03,
      // }}
      // transition={{
      //   type: "spring",
      //   stiffness: 50,
      //   damping: 20,
      // }}
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={`${prefix}/assets/triangles.mp4`} type="video/mp4" />
      </video>
    </motion.div>
  );
} 