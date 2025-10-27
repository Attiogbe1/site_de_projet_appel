"use client"

import equipeData from "@/data/equipe.json"
import { Mail, Users } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export default function EquipeClientPage() {
  const { t, language } = useLanguage()

  if (!t || !t.team) {
    return <div className="py-20 text-center">{t?.common?.loading || "Loading..."}</div>
  }

  const getLocalizedValue = (value: any) => {
    if (typeof value === "object" && value !== null && (value.fr || value.en)) {
      return value[language as "fr" | "en"] || value.fr
    }
    return value
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {t.team.title}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">{t.team.subtitle}</p>
          </div>
        </div>
      </section>
   {/* Team Members */}

<section className="py-16 bg-background">
  <div className="container mx-auto px-6 lg:px-12">
    {/* max-w-7xl permet une section plus large */}
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {equipeData.membres.map((membre) => (
          <div
            key={membre.id}
            className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
          >
            {/* Image grande et ronde */}
            <div className="flex justify-center mt-10 mb-5">
              <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-primary/40 shadow-lg hover:scale-105 transition-transform duration-300">
                <Image
                  src={`${membre.photo}?width=600&height=600`}
                  alt={getLocalizedValue(membre.nom)}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Infos du membre */}
            <div className="p-8 text-center">
              {/* Nom + rôle sur la même ligne */}
              <div className="flex justify-center items-baseline gap-2 mb-3">
                <h5 className="font-sans text-[1.0rem] font-semibold text-primary tracking-tight whitespace-nowrap">
                  {getLocalizedValue(membre.nom)}
                </h5>/
                <span className="text-[1rem] font-medium text-secondary whitespace-nowrap">
                  {getLocalizedValue(membre.role)}
                </span>
              </div>

              {/* Spécialité */}
              <div className="text-[15px] leading-6 text-muted-foreground/90 mb-3">
                {getLocalizedValue(membre.specialite)}
              </div>

              {/* Description */}
              <p className="text-[15px] leading-7 text-muted-foreground/95 line-clamp-4">
                {getLocalizedValue(membre.description)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
{/* Cooperatives Network */}
  <section className="py-16 bg-secondary/5">
     <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="font-sans text-2xl font-bold text-foreground mb-4">{t.team.cooperatives_title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {getLocalizedValue(equipeData.cooperatives.description)}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                    <span className="text-2xl font-bold text-primary">{equipeData.cooperatives.nombre}</span>
                    <span className="text-muted-foreground">{t.team.cooperatives_members}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-sans text-2xl font-bold text-foreground mb-4">{t.team.join_title}</h2>
            <p className="text-muted-foreground mb-6">{t.team.join_desc}</p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {t.team.contact_button}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
