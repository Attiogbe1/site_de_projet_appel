"use client"
import faqData from "@/data/faq.json"
import { HelpCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function FaqClientPage() {
  const { language, t } = useLanguage()
  const data = faqData[language as keyof typeof faqData]

  if (!t || !t.faq) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Chargement...</p>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {t.faq.title}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">{t.faq.subtitle}</p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {data.questions.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sans text-xl font-semibold text-foreground mb-3">{item.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.reponse}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-sans text-2xl font-bold text-foreground mb-4">{t.faq.more_questions}</h2>
            <p className="text-muted-foreground mb-6">{t.faq.more_questions_desc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                {t.faq.contact_us}
              </a>
              <a
                href="https://wa.me/2290165388096?text=Bonjour%20Briqu'Vert,%20j'ai%20une%20question..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#25D366]/90 transition-colors"
              >
                {t.faq.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
