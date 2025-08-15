"use client";

import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navigation() {
  const navItems = ["About", "Research", "Blog", "Docs", "Contact"];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 p-6 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <motion.a
            className={`text-2xl md:text-3xl font-bold no-underline text-white ${jetbrainsMono.className}`}
            whileHover={{ scale: 1.1 }}
            style={{ textDecoration: 'none' }}
          >
            AS
          </motion.a>
        </Link>
        <div className="hidden md:flex space-x-8">
                        {navItems.map((item, index) => (
                <Link key={item} href={
                    item === "Contact" ? "/contact" : 
                    item === "About" ? "/about" :
                    item === "Blog" ? "/blog" :
                    item === "Docs" ? "/docs" :
                    item === "Research" ? "/research" : "#"} legacyBehavior>
                  <motion.a
                    className={`text-gray-300 hover:text-white no-underline ${jetbrainsMono.className}`}
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  >
                    {item}
                  </motion.a>
                </Link>
              ))}
        </div>
      </div>
    </motion.nav>
  );
} 