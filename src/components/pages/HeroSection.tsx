"use client";

import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface HeroSectionProps {
  randomPhrase: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onButtonHover: (element: HTMLElement) => void;
  onButtonLeave: () => void;
}

export default function HeroSection({ randomPhrase, onMouseEnter, onMouseLeave, onButtonHover, onButtonLeave }: HeroSectionProps) {
  return (
    <motion.section 
      className="flex-1 flex items-center justify-center px-4 relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.p 
          className={`text-xl md:text-2xl text-gray-300 mb-8 font-mono tracking-wide ${jetbrainsMono.className}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          {randomPhrase}
        </motion.p>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          ATTENTION SIGNS
        </motion.h1>
        
        <motion.p 
          className={`text-xl md:text-2xl text-gray-300 mb-8 font-mono tracking-wide ${jetbrainsMono.className}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Supervise. Reinforce. Align. Repeat.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link href="/research" legacyBehavior>
          <motion.a
            className={`px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 font-medium no-underline ${jetbrainsMono.className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={(e) => onButtonHover(e.currentTarget)}
            onMouseLeave={onButtonLeave}
          >
            View Research
          </motion.a>
          </Link>
          <Link href="/blog" legacyBehavior>
          <motion.a
            className={`px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors duration-300 font-medium no-underline ${jetbrainsMono.className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={(e) => onButtonHover(e.currentTarget)}
            onMouseLeave={onButtonLeave}
          >
            Read Blog
          </motion.a>
          </Link>
          <motion.a
            href="/docs"
            className={`px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 font-medium no-underline ${jetbrainsMono.className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={(e) => onButtonHover(e.currentTarget)}
            onMouseLeave={onButtonLeave}
          >
            MyLLM Docs
          </motion.a>

          <motion.a
            className="sm:basis-full h-0" aria-hidden="true" />

          <motion.a
            href="https://t.me/attnsigns"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 font-medium no-underline ${jetbrainsMono.className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={(e) => onButtonHover(e.currentTarget)}
            onMouseLeave={onButtonLeave}
          >
            Join Telegram
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
} 