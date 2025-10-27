"use client"

import { CheckCircle2, Leaf, DollarSign, Users, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function SolutionClientPage() {
  const { t, language } = useLanguage()

  if (!t || !t.solution) {
    return <div className="py-20 text-center">{t?.common?.loading || "Loading..."}</div>
  }

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 text-balance">{t.solution.title}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">{t.solution.subtitle}</p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-muted py-16 mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl mb-6 text-balance">{t.solution.problem_title}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t.solution.problem_intro}</p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>{t.solution.problem_1}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>{t.solution.problem_2}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>{t.solution.problem_3}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>{t.solution.problem_4}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/deforestation-african-landscape-environmental-prob.jpg"
                alt={t.solution.problem_title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/ecological-briquettes-biomass-fuel-african-innovat.jpg"
              alt={t.solution.solution_title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl mb-6 text-balance">{t.solution.solution_title}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>{t.solution.solution_intro}</p>
              <p>{t.solution.solution_desc}</p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Leaf, text: t.solution.benefit_1 },
                { icon: DollarSign, text: t.solution.benefit_2 },
                { icon: Flame, text: t.solution.benefit_3 },
                { icon: Users, text: t.solution.benefit_4 },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-[#2E8B57]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-[#2E8B57]" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="bg-muted py-16 mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-center mb-12 text-balance">
            {t.solution.features_title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t.solution.feature_1_title,
                description: t.solution.feature_1_desc,
              },
              {
                title: t.solution.feature_2_title,
                description: t.solution.feature_2_desc,
              },
              {
                title: t.solution.feature_3_title,
                description: t.solution.feature_3_desc,
              },
              {
                title: t.solution.feature_4_title,
                description: t.solution.feature_4_desc,
              },
              {
                title: t.solution.feature_5_title,
                description: t.solution.feature_5_desc,
              },
              {
                title: t.solution.feature_6_title,
                description: t.solution.feature_6_desc,
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card rounded-lg p-6">
                <CheckCircle2 className="h-8 w-8 text-[#2E8B57] mb-4" />
                <h3 className="font-sans font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2E8B57] rounded-2xl p-12 text-center text-white">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl mb-6 text-balance">{t.solution.cta_title}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty">{t.solution.cta_subtitle}</p>
          <Button asChild size="lg" className="bg-white text-[#2E8B57] hover:bg-white/90">
            <Link href="/contact">{t.solution.cta_button}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
