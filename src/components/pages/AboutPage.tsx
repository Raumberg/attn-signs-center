"use client";

import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import Link from "next/link";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const missions = [
  {
    category: "Collaborate",
    items: ["Share knowledge", "Open projects", "Community tools", "Research papers", "Code contributions"]
  },
  {
    category: "Innovate", 
    items: ["RL-driven adaptation", "Logical reasoning", "Ethical AI design", "Model architecture", "Training methods"]
  },
  {
    category: "Impact",
    items: ["Human empowerment", "Open-source models", "Educational resources", "AI safety", "Social benefit"]
  }
];

export default function AboutPage() {
  return (
    <div className="relative z-10">
        {/* Main Content Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              ABOUT
            </motion.h1>
            
            <motion.p 
              className={`text-xl md:text-2xl text-gray-300 mb-8 font-mono tracking-wide text-center ${jetbrainsMono.className}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              step small, dream big
            </motion.p>

            <motion.div 
              className={`text-lg text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto ${jetbrainsMono.className}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className="mb-8 text-center">
                <span className="text-white font-semibold">Attention Signs</span> is an open-source community of LLM engineers and AI enthusiasts, 
                united by a passion for advancing language models through reinforcement learning and reasoning. Our mission is to:
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {missions.map((missionGroup, index) => (
                <motion.div
                  key={missionGroup.category}
                  className={`p-6 rounded-lg border border-white hover:border-gray-300 transition-colors duration-300 ${jetbrainsMono.className}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
                >
                  <h3 className={`text-xl font-bold mb-4 text-white ${jetbrainsMono.className}`}>
                    {missionGroup.category}
                  </h3>
                  <div className="space-y-2">
                    {missionGroup.items.map((item) => (
                      <div key={item} className="text-gray-400 text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
                         <motion.p 
               className="text-lg text-gray-400 mb-8 text-center"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1.2, duration: 0.8 }}
             >
               Join us to shape the future of AI.
             </motion.p>
           </div>
                  </section>

         {/* Scroll Indicator */}
         <div className="relative">
           <ScrollIndicator />
         </div>

                  {/* Links Section */}
         <section className="py-20 pb-32 px-4 bg-black/20">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className={`text-3xl md:text-4xl font-bold mb-12 text-center ${jetbrainsMono.className}`}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Projects
            </motion.h2>
            
            <motion.div 
              className="space-y-6 max-w-3xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <motion.div 
                  className={`flex-1 p-6 border border-white rounded-lg ${jetbrainsMono.className}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white font-semibold mb-2">Hugging Face Organization</h3>
                  <p className="text-gray-400 text-sm">
                    Explore our models, datasets, and research on the leading AI platform
                  </p>
                </motion.div>
                <motion.a
                  href="https://huggingface.co/attn-signs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center p-6 border border-white rounded-lg text-white hover:bg-white hover:text-black transition-all duration-300 font-medium no-underline ${jetbrainsMono.className}`}
                  style={{ textDecoration: 'none' }}
                  whileHover={{ scale: 0.95, y: -2 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  Attention Signs
                </motion.a>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <motion.div 
                  className={`flex-1 p-6 border border-white rounded-lg ${jetbrainsMono.className}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white font-semibold mb-2">Multi-Node Distributed LLM Training Framework</h3>
                  <p className="text-gray-400 text-sm">
                    Our open-source framework for scalable language model training across multiple nodes
                  </p>
                </motion.div>
                <motion.a
                  href="https://github.com/Raumberg/myllm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center p-6 border border-white rounded-lg text-white hover:bg-white hover:text-black transition-all duration-300 font-medium no-underline ${jetbrainsMono.className}`}
                  style={{ textDecoration: 'none' }}
                  whileHover={{ scale: 0.95, y: -2 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  MyLLM (GitHub)
                </motion.a>
              </div>
            </motion.div>
            
                         <motion.div 
               className="text-center mt-12 mb-16"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.8, duration: 0.8 }}
               viewport={{ once: true }}
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
        </section>

        {/* Bottom Spacer */}
        <div className="h-32 bg-black/20"></div>
      </div>
    );
  } 