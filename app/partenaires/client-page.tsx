"use client"
import partenairesData from "@/data/partenaires.json"
import { Handshake, Building2, Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const iconMap = {
  Gouvernement: Building2,
  ONG: Handshake,
  International: Globe,
}

export default function PartenairesPage() {
  const { language, t } = useLanguage()
  const data = partenairesData[language as keyof typeof partenairesData]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {t.partners.title}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">{t.partners.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.partenaires.map((partenaire) => {
                const Icon = iconMap[partenaire.type as keyof typeof iconMap] || Handshake
                return (
                  <div
                    key={partenaire.id}
                    className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-sm text-primary font-medium mb-2">{partenaire.type}</div>
                    <h3 className="font-sans text-xl font-semibold text-foreground mb-3">{partenaire.nom}</h3>
                    <p className="text-muted-foreground leading-relaxed">{partenaire.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call for Partners */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center">
              <Handshake className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="font-sans text-3xl font-bold text-foreground mb-4">{t.partners.become_partner}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">{data.appel}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-background rounded-lg p-6">
                  <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{t.partners.local_authorities}</h3>
                  <p className="text-sm text-muted-foreground">{t.partners.local_authorities_desc}</p>
                </div>
                <div className="bg-background rounded-lg p-6">
                  <Handshake className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{t.partners.ngos}</h3>
                  <p className="text-sm text-muted-foreground">{t.partners.ngos_desc}</p>
                </div>
                <div className="bg-background rounded-lg p-6">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{t.partners.programs}</h3>
                  <p className="text-sm text-muted-foreground">{t.partners.programs_desc}</p>
                </div>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-lg"
              >
                {t.partners.contact_partnership}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
