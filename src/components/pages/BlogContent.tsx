"use client";

import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";
import { useState } from "react";
import { BlogPost } from "@/lib/blog";
import Link from "next/link";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface BlogContentProps {
  posts: BlogPost[];
  allTags: string[];
}

export default function BlogContent({ posts, allTags }: BlogContentProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = selectedTag ? posts.filter(post => post.tags.includes(selectedTag)) : posts;

  // Difficulty tag styles & fire emojis
  const difficultyMap: Record<string, {bg: string; text: string; fires: number}> = {
    easy: { bg: "bg-gradient-to-r from-yellow-600 to-yellow-500", text: "text-yellow-50", fires: 1 },
    medium: { bg: "bg-gradient-to-r from-orange-600 to-orange-500", text: "text-orange-50", fires: 3 },
    hard: { bg: "bg-gradient-to-r from-red-600 to-red-500", text: "text-red-50", fires: 4 },
    extreme: { bg: "bg-gradient-to-r from-red-800 to-orange-700", text: "text-orange-50", fires: 5 },
  };

  // Pastel gradient palette for regular tags (subtle opacity)
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
    // choose gradient deterministically
    const sum = [...tag].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const paletteClass = otherPalette[sum % otherPalette.length];
    return paletteClass;
  };

  const renderTagLabel = (tag: string) => {
    const key = tag.toLowerCase();
    if (difficultyMap[key]) {
      const { fires } = difficultyMap[key];
      return `${tag} (${"🔥".repeat(fires)})`;
    }
    return tag;
  };

  const difficultyKeys = Object.keys(difficultyMap);
  const difficultyTags = allTags.filter(t => difficultyKeys.includes(t.toLowerCase()));
  const otherTags = allTags.filter(t => !difficultyKeys.includes(t.toLowerCase()));

  return (
    <>
      {/* Tags Filter */}
      <motion.div
        className="mb-12"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="flex flex-wrap gap-3 justify-center">
          <motion.button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-lg border transition-all duration-300 ${jetbrainsMono.className} ${
              selectedTag === null
                ? 'border-white text-white bg-white/10'
                : 'border-gray-600 text-gray-400 hover:border-white hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Posts
          </motion.button>
          {otherTags.map((tag, index) => (
            <motion.button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-lg border transition-all duration-300 ${jetbrainsMono.className} ${
                selectedTag === tag ? 'border-white' : 'border-gray-600 hover:border-white'} ${getTagClasses(tag)}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
            >
              {renderTagLabel(tag)}
            </motion.button>
          ))}
        </div>
        {/* Difficulty row */}
        <div className="flex flex-wrap gap-3 justify-center mt-4">
          {difficultyTags.map((tag, index) => (
            <motion.button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-lg border transition-all duration-300 ${jetbrainsMono.className} ${
                selectedTag === tag ? 'border-white' : 'border-gray-600 hover:border-white'} ${getTagClasses(tag)}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
            >
              {renderTagLabel(tag)}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Posts Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {filteredPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            className="bg-black/20 border border-white/20 rounded-lg p-6 hover:border-white/40 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link href={`/blog/${post.slug}`} legacyBehavior>
              <motion.a
                className="block"
              >
                <div className="mb-4">
                  <span className={`text-sm text-gray-400 ${jetbrainsMono.className}`}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                
                <h2 className={`text-xl font-bold mb-3 text-white ${jetbrainsMono.className}`}>
                  {post.title}
                </h2>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-1 rounded ${jetbrainsMono.className} ${getTagClasses(tag)}`}
                    >
                      {renderTagLabel(tag)}
                    </span>
                  ))}
                </div>
              </motion.a>
            </Link>
          </motion.article>
        ))}
      </motion.div>

      {/* No posts message */}
      {filteredPosts.length === 0 && (
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <p className={`text-xl text-gray-400 ${jetbrainsMono.className}`}>
            No posts found for the selected tag.
          </p>
        </motion.div>
      )}
    </>
  );
} 