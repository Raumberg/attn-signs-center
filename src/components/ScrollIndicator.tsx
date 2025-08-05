"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <motion.div
        className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="w-1 h-3 bg-white rounded-full mt-2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
} 