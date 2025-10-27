"use client"

import { Quote } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const testimonials = [
  {
    name: "Aminata Koudjo",
    role: "Restauratrice, Djacotomey",
    roleFr: "Restauratrice, Djacotomey",
    roleEn: "Restaurant Owner, Djacotomey",
    content:
      "Les briquettes Briqu'Vert ont réduit mes coûts de combustible de 40%. La qualité est excellente et la combustion dure plus longtemps.",
    contentFr:
      "Les briquettes Briqu'Vert ont réduit mes coûts de combustible de 40%. La qualité est excellente et la combustion dure plus longtemps.",
    contentEn:
      "Briqu'Vert briquettes have reduced my fuel costs by 40%. The quality is excellent and the burn time is longer.",
    image: "/smiling-african-woman.png",
  },
  {
    name: "Jean-Baptiste Soglo",
    role: "Chef de ménage, Azove",
    roleFr: "Chef de ménage, Azove",
    roleEn: "Head of Household, Azove",
    content:
      "Enfin une alternative écologique et abordable ! Ma famille respire mieux et je contribue à protéger nos forêts.",
    contentFr:
      "Enfin une alternative écologique et abordable ! Ma famille respire mieux et je contribue à protéger nos forêts.",
    contentEn:
      "Finally an ecological and affordable alternative! My family breathes better and I'm helping protect our forests.",
    image: "/smiling-african-man.png",
  },
  {
    name: "Marie Adjovi",
    role: "Agricultrice",
    roleFr: "Agricultrice",
    roleEn: "Farmer",
    content:
      "Grâce à Briqu'Vert, mes déchets de récolte ont maintenant de la valeur. C'est un revenu supplémentaire bienvenu pour ma famille.",
    contentFr:
      "Grâce à Briqu'Vert, mes déchets de récolte ont maintenant de la valeur. C'est un revenu supplémentaire bienvenu pour ma famille.",
    contentEn: "Thanks to Briqu'Vert, my harvest waste now has value. It's a welcome additional income for my family.",
    image: "/african-woman-farmer-portrait.jpg",
  },
]

export function Testimonials() {
  const { t, language } = useLanguage()

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
            {t?.testimonials?.title || "Témoignages"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t?.testimonials?.subtitle || "Ce que nos clients disent de nous"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="h-10 w-10 text-[#2E8B57]/20 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                "{language === "fr" ? testimonial.contentFr : testimonial.contentEn}"
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {language === "fr" ? testimonial.roleFr : testimonial.roleEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
