"use client"

import { Wheat, Recycle, Flame, Home } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function HowItWorks() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: Wheat,
      title: t?.how_it_works?.step1_title || "Collecte",
      description: t?.how_it_works?.step1_desc || "Collecte des déchets agricoles",
    },
    {
      icon: Recycle,
      title: t?.how_it_works?.step2_title || "Transformation",
      description: t?.how_it_works?.step2_desc || "Transformation en briquettes",
    },
    {
      icon: Flame,
      title: t?.how_it_works?.step3_title || "Production",
      description: t?.how_it_works?.step3_desc || "Production de briquettes de qualité",
    },
    {
      icon: Home,
      title: t?.how_it_works?.step4_title || "Distribution",
      description: t?.how_it_works?.step4_desc || "Distribution aux ménages",
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
            {t?.how_it_works?.title || "Comment ça marche ?"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t?.how_it_works?.subtitle || "Un processus simple et efficace"}
          </p>
        </div>

        <div className="relative">
          {/* Connection line - hidden on mobile */}
          <div
            className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-border"
            style={{ left: "12.5%", right: "12.5%" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 h-20 w-20 rounded-full bg-[#2E8B57] flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-sans font-semibold text-xl mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
