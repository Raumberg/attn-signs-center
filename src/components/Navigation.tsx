"use client";

import { motion } from "framer-motion";

export default function Navigation() {
  const navItems = ["About", "Research", "Blog", "Contact"];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 p-6 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.div 
          className="text-xl font-bold"
          whileHover={{ scale: 1.1 }}
        >
          AS
        </motion.div>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
} 