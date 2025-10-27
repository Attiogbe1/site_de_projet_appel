"use client"

import { useMemo, useState } from "react"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

// Sample blog posts - in production, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "Lancement réussi à Cotonou : 50 familles adoptent Briqu'Vert",
    titleEn: "Successful launch in Cotonou: 50 families adopt Briqu'Vert",
    excerpt:
      "Retour sur notre première phase de distribution dans l'Arrondissement d'Azove. Les retours des utilisateurs sont très encourageants.",
    excerptEn:
      "Review of our first distribution phase in the Azove neighborhood. User feedback is very encouraging.",
    date: "2025-03-15",
    image: "/african-families-cooking-with-briquettes.jpg",
    category: "Impact",
    slug: "lancement-cotonou",
  },
  {
    id: 2,
    title: "Comment nos briquettes réduisent la déforestation",
    titleEn: "How our briquettes reduce deforestation",
    excerpt:
      "Découvrez les chiffres concrets de notre impact environnemental et comment chaque sac de briquettes préserve nos forêts.",
    excerptEn:
      "Discover the concrete figures of our environmental impact and how each bag of briquettes preserves our forests.",
    date: "2025-03-10",
    image: "/african-forest-conservation.jpg",
    category: "Environnement",
    categoryEn: "Environment",
    slug: "reduction-deforestation",
  },
  {
    id: 3,
    title: "Portrait : Mariama, transformatrice de briquettes",
    titleEn: "Portrait: Mariama, briquette maker",
    excerpt:
      "Rencontre avec Mariama, membre de notre coopérative, qui a trouvé une nouvelle source de revenus grâce à Briqu'Vert.",
    excerptEn: "Meet Mariama, a member of our cooperative, who found a new source of income thanks to Briqu'Vert.",
    date: "2025-03-05",
    image: "/african-woman-entrepreneur-biomass.jpg",
    category: "Témoignage",
    categoryEn: "Testimonial",
    slug: "portrait-mariama",
  },
  {
    id: 4,
    title: "Guide d'utilisation : Optimiser la combustion de vos briquettes",
    titleEn: "Usage guide: Optimize your briquettes combustion",
    excerpt:
      "Conseils pratiques pour tirer le meilleur parti de vos briquettes écologiques et maximiser leur durée de combustion.",
    excerptEn: "Practical tips to get the most out of your ecological briquettes and maximize their burn time.",
    date: "2025-02-28",
    image: "/cooking-stove-briquettes-tutorial.jpg",
    category: "Guide",
    slug: "guide-utilisation",
  },
  {
    id: 5,
    title: "Partenariat avec la commune de Djakomey",
    titleEn: "Partnership with Djakotomey municipality",
    excerpt: "Nous sommes fiers d'annoncer notre nouveau partenariat pour étendre la distribution dans la capitale.",
    excerptEn: "We are proud to announce our new partnership to extend distribution in the capital.",
    date: "2025-02-20",
    image: "/benin-porto-novo-partnership.jpg",
    category: "Actualité",
    categoryEn: "News",
    slug: "partenariat-porto-novo",
  },
  {
    id: 6,
    title: "Les déchets agricoles : une ressource sous-exploitée",
    titleEn: "Agricultural waste: an underutilized resource",
    excerpt: "Analyse du potentiel énergétique des résidus de maïs et de cajou au Bénin et leur valorisation.",
    excerptEn: "Analysis of the energy potential of corn and cashew residues in Benin and their valorization.",
    date: "2025-02-15",
    image: "/agricultural-waste-corn-stalks-cashew.jpg",
    category: "Éducation",
    categoryEn: "Education",
    slug: "dechets-agricoles-ressource",
  },
]

const categories = ["Tous", "Impact", "Environnement", "Témoignage", "Guide", "Actualité", "Éducation"]
const categoriesEn = ["All", "Impact", "Environment", "Testimonial", "Guide", "News", "Education"]

export default function BlogClientPage() {
  const { language, t } = useLanguage()
  const isFrench = language === "fr"

  // --- état du filtre ---
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]) // "Tous" par défaut

  // --- posts filtrés + triés par date (desc) ---
  const filteredPosts = useMemo(() => {
    const isAll = activeCategory === "Tous" || activeCategory === "All"
    const list = isAll
      ? blogPosts
      : blogPosts.filter((p) => {
          const fr = p.category
          const en = (p as any).categoryEn
          // On compare à l'étiquette cliquée dans la langue active
          return isFrench ? fr === activeCategory : (en ?? fr) === activeCategory
        })

    return list.slice().sort((a, b) => +new Date(b.date) - +new Date(a.date))
  }, [activeCategory, isFrench])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {t.blog.title}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">{t.blog.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {(isFrench ? categories : categoriesEn).map((category, index) => {
              const isActive = activeCategory === category
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={isFrench ? post.title : post.titleEn}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        {isFrench ? post.category : (post as any).categoryEn || post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString(isFrench ? "fr-FR" : "en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>

                    <h3 className="font-sans text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {isFrench ? post.title : post.titleEn}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {isFrench ? post.excerpt : post.excerptEn}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                    >
                      {t.blog.read_more}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination (statique démo) */}
            <div className="mt-12 flex justify-center gap-2">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium">1</button>
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors">
                2
              </button>
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors">
                3
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-sans text-2xl font-bold text-foreground mb-4">{t.blog.stay_informed}</h2>
            <p className="text-muted-foreground mb-6">{t.blog.newsletter_desc}</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.blog.email_placeholder}
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                {t.blog.subscribe}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
