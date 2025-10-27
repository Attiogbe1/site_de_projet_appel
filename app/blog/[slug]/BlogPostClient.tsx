"use client"

import Link from "next/link"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

interface ContentBlock {
  type: string
  text?: string
  textEn?: string
  items?: string[]
  itemsEn?: string[]
  author?: string
  authorEn?: string
}

interface BlogPost {
  id: number
  slug: string
  title: string
  titleEn: string
  excerpt: string
  excerptEn: string
  date: string
  image: string
  category: string
  categoryEn: string
  author: string
  authorEn: string
  readTime: string
  readTimeEn: string
  content: ContentBlock[]
}

interface BlogPostClientProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const { language, t } = useLanguage()
  const isFrench = language === "fr"

  if (!t || !t.blog) {
    return <div className="min-h-screen flex items-center justify-center">{t?.common?.loading || "Loading..."}</div>
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img
          src={post.image || "/placeholder.svg"}
          alt={isFrench ? post.title : post.titleEn}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="absolute top-8 left-4 md:left-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 bg-background/90 backdrop-blur-sm text-foreground rounded-lg hover:bg-background transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">{t?.blog?.back_to_blog || "Retour au blog"}</span>
            </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg mb-8">
            <div className="mb-4">
              <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                {isFrench ? post.category : post.categoryEn}
              </span>
            </div>

            <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {isFrench ? post.title : post.titleEn}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{isFrench ? post.author : post.authorEn}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(isFrench ? "fr-FR" : "en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>
                  {isFrench ? post.readTime : post.readTimeEn} {t?.blog?.reading_time || "de lecture"}
                </span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">{isFrench ? post.excerpt : post.excerptEn}</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg mb-8">
            <div className="prose prose-lg max-w-none">
              {post.content.map((block, index) => {
                const text = isFrench ? block.text : block.textEn || block.text
                const items = isFrench ? block.items : block.itemsEn || block.items
                const author = isFrench ? block.author : block.authorEn || block.author

                switch (block.type) {
                  case "paragraph":
                    return (
                      <p key={index} className="text-foreground leading-relaxed mb-6">
                        {text}
                      </p>
                    )

                  case "heading":
                    return (
                      <h2 key={index} className="font-sans text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                        {text}
                      </h2>
                    )

                  case "subheading":
                    return (
                      <h3 key={index} className="font-sans text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">
                        {text}
                      </h3>
                    )

                  case "list":
                    return (
                      <ul key={index} className="space-y-3 mb-6 ml-6">
                        {items?.map((item, i) => (
                          <li key={i} className="text-foreground leading-relaxed flex items-start gap-3">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )

                  case "quote":
                    return (
                      <blockquote
                        key={index}
                        className="border-l-4 border-primary bg-secondary/20 pl-6 pr-6 py-6 my-8 rounded-r-lg"
                      >
                        <p className="text-lg text-foreground italic leading-relaxed mb-3">{text}</p>
                        {author && (
                          <cite className="text-sm text-muted-foreground font-medium not-italic">— {author}</cite>
                        )}
                      </blockquote>
                    )

                  default:
                    return null
                }
              })}
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center justify-between">
              <h3 className="font-sans text-lg font-semibold text-foreground">{t?.blog?.share_article || "Partager cet article"}</h3>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="font-medium">{t?.blog?.share || "Partager"}</span>
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="font-sans text-2xl font-bold text-foreground mb-6">{t?.blog?.related_articles || "Articles similaires"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <img
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={isFrench ? relatedPost.title : relatedPost.titleEn}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                      {isFrench ? relatedPost.category : relatedPost.categoryEn}
                    </span>
                    <h4 className="font-sans text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {isFrench ? relatedPost.title : relatedPost.titleEn}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {isFrench ? relatedPost.excerpt : relatedPost.excerptEn}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 bg-secondary/5 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-sans text-3xl font-bold text-foreground mb-4">{t?.blog?.ready_to_switch || "Prêt à passer à Briqu'Vert ?"}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t?.blog?.ready_desc || "Rejoignez les familles qui ont choisi l'énergie propre."}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/distribution"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                {t?.blog?.find_sales_point || "Trouver un point de vente"}
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-colors"
              >
                {t?.contact?.title || "Contact"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
