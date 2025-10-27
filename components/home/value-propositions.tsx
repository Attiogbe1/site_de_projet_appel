"use client"

import { Leaf, TrendingDown, Users, Zap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function ValuePropositions() {
  const { t } = useLanguage()

  const values = [
    {
      number: "1",
      icon: Leaf,
      title: t?.value_props?.eco_title || "Écologique",
      description: t?.value_props?.eco_desc || "Réduction de 60% des émissions de CO2",
    },
    {
      number: "2",
      icon: TrendingDown,
      title: t?.value_props?.affordable_title || "Économique",
      description: t?.value_props?.affordable_desc || "40% moins cher que le charbon de bois",
    },
    {
      number: "3",
      icon: Users,
      title: t?.value_props?.social_title || "Social",
      description: t?.value_props?.social_desc || "Création d'emplois locaux",
    },
    {
      number: "4",
      icon: Zap,
      title: t?.value_props?.efficient_title || "Performant",
      description: t?.value_props?.efficient_desc || "Combustion longue durée",
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
            {t?.value_props?.title || "Pourquoi choisir Briqu'Vert ?"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t?.value_props?.subtitle || "Une solution complète pour un avenir énergétique durable au Bénin"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={value.number}
                className="bg-card rounded-lg p-8 hover:shadow-lg transition-shadow"
                style={{
                  animation: "fadeInUp 0.8s ease-out forwards",
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <span className="font-sans font-bold text-5xl text-[#2E8B57]/20">{value.number}</span>
                  <div className="h-12 w-12 rounded-full bg-[#2E8B57]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-[#2E8B57]" />
                  </div>
                </div>
                <h3 className="font-sans font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
