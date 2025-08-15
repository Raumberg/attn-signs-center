"use client";

import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";
import { BlogPost } from "@/lib/blog";
import MarkdownRenderer from "@/components/ui/MarkdownRenderer";
import VideoBackground from "@/components/effects/VideoBackground";
import InteractiveCursor from "@/components/effects/InteractiveCursor";
import RippleEffect from "@/components/effects/RippleEffect";
import Navigation from "@/components/ui/Navigation";
import { useMouse } from "@/contexts/MouseContext";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface BlogPostPageClientProps {
  post: BlogPost;
}

export default function BlogPostPageClient({ post }: BlogPostPageClientProps) {
  const { setMagneticTargetForElement, clearMagneticTarget } = useMouse();

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <VideoBackground />
      
      <RippleEffect />

      <InteractiveCursor />

      <Navigation />

      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <motion.article
            className="mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.header
              className="mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.div
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className={`text-sm text-gray-400 ${jetbrainsMono.className}`}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="text-gray-600 mx-2">•</span>
                <span className={`text-sm text-gray-400 ${jetbrainsMono.className}`}>
                  {post.author}
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {post.title}
              </motion.h1>

              <motion.p
                className={`text-xl text-gray-300 mb-6 ${jetbrainsMono.className}`}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {post.excerpt}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-sm px-3 py-1 bg-gray-800 text-gray-300 rounded-full ${jetbrainsMono.className}`}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.header>

            {/* Article Content */}
            <motion.div
              className="prose prose-invert prose-lg max-w-none"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <MarkdownRenderer content={post.content} />
            </motion.div>
          </motion.article>

          {/* Back to Blog Button */}
          <motion.div
            className="text-center pt-8 border-t border-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <motion.a
              href="/blog"
              className={`inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 font-medium no-underline ${jetbrainsMono.className}`}
              style={{ textDecoration: 'none' }}
              whileHover={{ scale: 0.95, y: 2 }}
              onMouseEnter={(e) => setMagneticTargetForElement(e.currentTarget)}
              onMouseLeave={clearMagneticTarget}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              ← Back to Blog
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 