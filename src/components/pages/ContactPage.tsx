"use client";

import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const socialLinks = [
  {
    name: "Discord",
    url: "https://discord.com/users/416312981270429696",
    color: "text-indigo-400",
    borderColor: "border-indigo-400",
    description: "Join our community"
  },
  {
    name: "GitHub",
    url: "https://github.com/Raumberg",
    color: "text-gray-300",
    borderColor: "border-gray-300",
    description: "Check out my code"
  },
  {
    name: "Telegram",
    url: "https://t.me/raumberg",
    color: "text-blue-400",
    borderColor: "border-blue-400",
    description: "Direct messages"
  },
  {
    name: "Email",
    url: "mailto:fallturm.bremen@gmail.com",
    color: "text-red-400",
    borderColor: "border-red-400",
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
          Let&apos;s connect and collaborate
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
              className={`group p-6 rounded-lg border border-transparent hover:bg-gray-900/50 no-underline ${jetbrainsMono.className}`}
              style={{ 
                textDecoration: 'none',
                borderColor: 'transparent'
              }}
              whileHover={{ 
                scale: 0.95, 
                y: 2,
                borderColor: link.borderColor === 'border-indigo-400' ? '#818cf8' : 
                             link.borderColor === 'border-gray-300' ? '#d1d5db' :
                             link.borderColor === 'border-blue-400' ? '#60a5fa' :
                             link.borderColor === 'border-red-400' ? '#f87171' : 'transparent',
                transition: { duration: 0.12 }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.8 + index * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
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
          <Link href="/" legacyBehavior>
          <motion.a
            className={`inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black font-medium no-underline ${jetbrainsMono.className}`}
            style={{ textDecoration: 'none' }}
            whileHover={{ scale: 0.95, y: 2 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          >
            ← Home
          </motion.a>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
} 