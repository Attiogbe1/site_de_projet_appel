"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function CTA() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-[#2E8B57] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 text-balance">
            {t?.cta?.title || "Prêt à passer à l'énergie verte ?"}
          </h2>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 text-pretty">
            {t?.cta?.subtitle || "Rejoignez des milliers de familles béninoises"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#2E8B57] hover:bg-white/90">
              <Link href="/contact">
                {t?.cta?.button || "Contactez-nous"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <a href="https://wa.me/22965388096" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t?.cta?.whatsapp || "WhatsApp"}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
