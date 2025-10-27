"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/african-agricultural-waste-corn-stalks-cashew-shel.jpg"
          alt="Déchets agricoles transformés"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C]/90 via-[#2C2C2C]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-in-up text-balance">
            {t?.hero?.title || "Transformons les déchets agricoles en énergie propre"}
          </h1>
          <p
            className="text-lg sm:text-xl text-[#EDE6DB] leading-relaxed mb-8 animate-fade-in-up text-pretty"
            style={{ animationDelay: "0.2s" }}
          >
            {t?.hero?.subtitle || "Des briquettes écologiques pour un avenir durable au Bénin"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="bg-[#2E8B57] hover:bg-[#267347] text-white">
              <Link href="/contact">
                {t?.hero?.cta_primary || "Nous contacter"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/solution">
                <Play className="mr-2 h-5 w-5" />
                {t?.hero?.cta_secondary || "Découvrir notre solution"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
