"use client";

import VideoBackground from "@/components/effects/VideoBackground";
import InteractiveCursor from "@/components/effects/InteractiveCursor";
import RippleEffect from "@/components/effects/RippleEffect";
import Navigation from "@/components/ui/Navigation";
import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400","700"]});

export default function Docs() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <VideoBackground />
      <RippleEffect />
      <InteractiveCursor />
      <Navigation />
      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <aside className="md:w-1/4">
            <nav className="sticky top-32 space-y-4">
              {[
                { id: "deepspeed", label: "DeepSpeed" },
                { id: "accelerate", label: "Accelerate" },
                { id: "config", label: "Configuration" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block text-gray-300 hover:text-white no-underline ${jetbrainsMono.className}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-24">
            <section id="deepspeed">
              <motion.h2 className="text-3xl font-bold mb-4" initial={{ opacity:0, y:20 }} whileInView={{opacity:1,y:0}} viewport={{ once:true }} transition={{duration:0.6}}>DeepSpeed</motion.h2>
              <p className={`text-gray-300 ${jetbrainsMono.className}`}>DeepSpeed integration docs coming soon. Stay tuned!</p>
            </section>

            <section id="accelerate">
              <motion.h2 className="text-3xl font-bold mb-4" initial={{ opacity:0, y:20 }} whileInView={{opacity:1,y:0}} viewport={{ once:true }} transition={{duration:0.6}}>Accelerate</motion.h2>
              <p className={`text-gray-300 ${jetbrainsMono.className}`}>Accelerate usage examples will appear here.</p>
            </section>

            <section id="config">
              <motion.h2 className="text-3xl font-bold mb-4" initial={{ opacity:0, y:20 }} whileInView={{opacity:1,y:0}} viewport={{ once:true }} transition={{duration:0.6}}>Configuration</motion.h2>
              <p className={`text-gray-300 ${jetbrainsMono.className}`}>Guide on configuring MyLLM is in progress.</p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
