import { notFound } from "next/navigation"
import blogData from "@/data/blog-posts.json"
import BlogPostClient from "./BlogPostClient"

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogData.posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogData.posts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Article non trouvé | BioÉnergie Solidaire Bénin",
    }
  }

  return {
    title: `${post.title} | Blog Briqu'Vert`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogData.posts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogData.posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2)

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />
}
