"use client"

import { Leaf, Users, TreePine, TrendingDown } from "lucide-react"
import impactData from "@/data/impact.json"
import { useLanguage } from "@/components/language-provider"

export default function ImpactClientPage() {
  const { t, language } = useLanguage()

  if (!t || !t.impact_page) {
    return <div className="py-20 text-center">{t?.common?.loading || "Loading..."}</div>
  }

  const methodologie =
    typeof impactData.methodologie === "object"
      ? impactData.methodologie[language as "fr" | "en"]
      : impactData.methodologie

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {t.impact_page.title}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">{t.impact_page.subtitle}</p>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{impactData.menages}+</div>
              <div className="text-muted-foreground font-medium">{t.impact_page.households_served}</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <TrendingDown className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{impactData.tco2}</div>
              <div className="text-muted-foreground font-medium">{t.impact_page.co2_avoided}</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <TreePine className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{impactData.hectares}</div>
              <div className="text-muted-foreground font-medium">{t.impact_page.forest_preserved}</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                {impactData.emplois_femmes + impactData.emplois_jeunes}
              </div>
              <div className="text-muted-foreground font-medium">{t.impact_page.jobs_created}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Details */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans text-3xl font-bold text-foreground mb-8 text-center">
              {t.impact_page.how_we_create_impact}
            </h2>

            <div className="space-y-8">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-sans text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <TrendingDown className="w-6 h-6 text-primary" />
                  {t.impact_page.co2_reduction_title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t.impact_page.co2_reduction_desc}</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-sans text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <TreePine className="w-6 h-6 text-primary" />
                  {t.impact_page.forest_protection_title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t.impact_page.forest_protection_desc}</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-sans text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  {t.impact_page.jobs_title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{t.impact_page.jobs_desc}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{impactData.emplois_femmes}</div>
                    <div className="text-sm text-muted-foreground">{t.impact_page.women_employed}</div>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{impactData.emplois_jeunes}</div>
                    <div className="text-sm text-muted-foreground">{t.impact_page.youth_employed}</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-sans text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Leaf className="w-6 h-6 text-primary" />
                  {t.impact_page.health_title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t.impact_page.health_desc}</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground italic">
                <strong>{t.impact_page.methodology}</strong> {methodologie}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans text-3xl font-bold text-foreground mb-8 text-center">
              {t.impact_page.case_study_title}
            </h2>

            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <img
                src="/african-women-cooperative-biomass-briquettes.jpg"
                alt={t.impact_page.case_study_heading}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="font-sans text-2xl font-semibold text-foreground mb-4">
                  {t.impact_page.case_study_heading}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{t.impact_page.case_study_desc}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">-40%</div>
                    <div className="text-sm text-muted-foreground">{t.impact_page.energy_cost}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">-60%</div>
                    <div className="text-sm text-muted-foreground">{t.impact_page.smoke_produced}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">25</div>
                    <div className="text-sm text-muted-foreground">{t.impact_page.families_served_case}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">3</div>
                    <div className="text-sm text-muted-foreground">{t.impact_page.jobs_created_case}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
