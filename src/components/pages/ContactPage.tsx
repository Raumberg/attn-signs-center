"use client";

import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const socialLinks = [
  {
    name: "Discord",
    url: "https://discord.gg/your-server",
    color: "hover:text-indigo-400",
    description: "Join our community"
  },
  {
    name: "GitHub",
    url: "https://github.com/attention-signs",
    color: "hover:text-gray-400",
    description: "Check out my code"
  },
  {
    name: "Telegram",
    url: "https://t.me/attention_signs",
    color: "hover:text-blue-400",
    description: "Direct messages"
  },
  {
    name: "Email",
    url: "mailto:attention@signs.dev",
    color: "hover:text-red-400",
    description: "Professional inquiries"
  }
];

export default function ContactPage() {
  return (
    <motion.div 
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          CONTACT
        </motion.h1>
        
        <motion.p 
          className={`text-xl md:text-2xl text-gray-300 mb-12 font-mono tracking-wide ${jetbrainsMono.className}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Let's connect and collaborate
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 rounded-lg hover:bg-gray-900 transition-all duration-300 no-underline ${jetbrainsMono.className}`}
              style={{ textDecoration: 'none' }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
            >
              <div className={`text-xl font-bold mb-2 transition-colors duration-300 ${link.color}`}>
                {link.name}
              </div>
              <div className="text-gray-400 text-sm">
                {link.description}
              </div>
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.a
            href="/"
            className={`inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 font-medium no-underline ${jetbrainsMono.className}`}
            style={{ textDecoration: 'none' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Home
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
} 