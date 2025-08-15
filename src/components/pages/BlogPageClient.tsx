"use client";

import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";
import { BlogPost } from "@/lib/blog";
import VideoBackground from "@/components/effects/VideoBackground";
import InteractiveCursor from "@/components/effects/InteractiveCursor";
import RippleEffect from "@/components/effects/RippleEffect";
import Navigation from "@/components/ui/Navigation";
import BlogContent from "./BlogContent";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface BlogPageClientProps {
  posts: BlogPost[];
  allTags: string[];
}

export default function BlogPageClient({ posts, allTags }: BlogPageClientProps) {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <VideoBackground />

      <RippleEffect />

      <InteractiveCursor />

      <Navigation />

      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              BLOG
            </motion.h1>
            <motion.p
              className={`text-xl md:text-2xl text-gray-300 font-mono tracking-wide ${jetbrainsMono.className}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Deep Learning Research & Insights
            </motion.p>
          </motion.div>

          <BlogContent posts={posts} allTags={allTags} />
        </div>
      </div>
    </div>
  );
} 