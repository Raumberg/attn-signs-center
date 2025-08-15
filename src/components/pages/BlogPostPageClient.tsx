"use client";

import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";
import { BlogPost } from "@/lib/blog";
import MarkdownRenderer from "@/components/ui/MarkdownRenderer";
// Removed VideoBackground & RippleEffect for distraction-free reading
import Navigation from "@/components/ui/Navigation";
import { useMouse } from "@/contexts/MouseContext";
import Link from "next/link";

// Difficulty tag styling map
const difficultyMap: Record<string, {bg: string; text: string; fires: number}> = {
  easy: { bg: "bg-gradient-to-r from-yellow-600 to-yellow-500", text: "text-yellow-50", fires: 1 },
  medium: { bg: "bg-gradient-to-r from-orange-600 to-orange-500", text: "text-orange-50", fires: 3 },
  hard: { bg: "bg-gradient-to-r from-red-600 to-red-500", text: "text-red-50", fires: 4 },
  extreme: { bg: "bg-gradient-to-r from-red-800 to-orange-700", text: "text-orange-50", fires: 5 },
};

// same pastel palette for non-difficulty tags
const otherPalette = [
  "bg-gradient-to-r from-teal-600/40 to-teal-500/40 text-teal-100/80",
  "bg-gradient-to-r from-sky-600/40 to-sky-500/40 text-sky-100/80",
  "bg-gradient-to-r from-violet-600/40 to-violet-500/40 text-violet-100/80",
  "bg-gradient-to-r from-green-600/40 to-green-500/40 text-green-100/80",
  "bg-gradient-to-r from-pink-600/40 to-pink-500/40 text-pink-100/80",
  "bg-gradient-to-r from-indigo-600/40 to-indigo-500/40 text-indigo-100/80",
];

const getTagClasses = (tag: string) => {
  const key = tag.toLowerCase();
  if (difficultyMap[key]) {
    const { bg, text } = difficultyMap[key];
    return `${bg} ${text}`;
  }
  const sum = [...tag].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return otherPalette[sum % otherPalette.length];
};

const renderTagLabel = (tag: string) => {
  const key = tag.toLowerCase();
  if (difficultyMap[key]) {
    const { fires } = difficultyMap[key];
    return `${tag} (${"🔥".repeat(fires)})`;
  }
  return tag;
};

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
    <div className="min-h-screen text-white bg-black relative overflow-hidden">
      
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
                    className={`text-sm px-3 py-1 rounded-full ${jetbrainsMono.className} ${getTagClasses(tag)}`}
                  >
                    {renderTagLabel(tag)}
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
            <Link href="/blog" legacyBehavior>
            <motion.a
              className={`inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 font-medium no-underline ${jetbrainsMono.className}`}
              style={{ textDecoration: 'none' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
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
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 