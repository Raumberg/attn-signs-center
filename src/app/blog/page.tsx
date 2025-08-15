import { getAllPosts, getAllTags } from "@/lib/blog";
import BlogPageClient from "@/components/pages/BlogPageClient";

// Get posts at build time
const posts = getAllPosts();
const allTags = getAllTags();

export default function BlogPage() {
  return (
    <BlogPageClient posts={posts} allTags={allTags} />
  );
} 