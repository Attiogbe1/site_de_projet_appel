"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/components/language-provider"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const { t, language } = useLanguage()
  
  useEffect(() => {
    console.log('Contact page - Current language:', language)
    console.log('Contact page - Translations:', t)
  }, [language, t])

  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    localite: "",
    quantite: "",
    retrait: "point-vente",
    commentaire: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Format WhatsApp message
    const message = `Bonjour Briqu'Vert,\n\nJe souhaite commander des briquettes:\n\nNom: ${formData.nom}\nTéléphone: ${formData.telephone}\nLocalité: ${formData.localite}\nQuantité: ${formData.quantite} sacs de 10kg\nMode de retrait: ${formData.retrait}\n\nCommentaire: ${formData.commentaire}`
    const whatsappUrl = `https://wa.me/22965388096?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {t.contact?.title || "Contactez-nous"}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              {t.contact?.subtitle || "Commandez vos briquettes écologiques ou contactez notre équipe pour toute question. Nous sommes là pour vous accompagner."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-sans text-2xl font-bold text-foreground mb-6">{t.contact?.contact_info || "Nos coordonnées"}</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                    <a href="tel:+2290165388096" className="text-muted-foreground hover:text-primary transition-colors">
                      +229 01 65 38 80 96
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:attiogbeemile315@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      attiogbeemile315@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Localisation</h3>
                    <p className="text-muted-foreground">Bénin (Aplahoue,Dékpo)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#25D366]/10 border border-[#25D366]/20 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Commande rapide via WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contactez-nous directement sur WhatsApp pour une réponse rapide
                </p>
                <a
                  href="https://wa.me/22965388096?text=Bonjour%20Briqu'Vert,%20je%20souhaite%20commander..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#25D366]/90 transition-colors w-full"
                >
                  Ouvrir WhatsApp
                </a>
              </div>
            </div>

            {/* Order Form */}
            <div>
              <h2 className="font-sans text-2xl font-bold text-foreground mb-6">{t.contact?.form_title || "Formulaire de commande"}</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact?.form?.name || "Nom complet"} *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-foreground mb-2">
                    Téléphone (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+229 XX XX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="localite" className="block text-sm font-medium text-foreground mb-2">
                    Localité *
                  </label>
                  <input
                    type="text"
                    id="localite"
                    name="localite"
                    required
                    value={formData.localite}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ville ou quartier"
                  />
                </div>

                <div>
                  <label htmlFor="quantite" className="block text-sm font-medium text-foreground mb-2">
                    Quantité (sacs de 10 kg) *
                  </label>
                  <input
                    type="number"
                    id="quantite"
                    name="quantite"
                    required
                    min="1"
                    value={formData.quantite}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nombre de sacs"
                  />
                </div>

                <div>
                  <label htmlFor="retrait" className="block text-sm font-medium text-foreground mb-2">
                    Mode de retrait *
                  </label>
                  <select
                    id="retrait"
                    name="retrait"
                    required
                    value={formData.retrait}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="point-vente">Point de vente</option>
                    <option value="livraison">Livraison à domicile</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="commentaire" className="block text-sm font-medium text-foreground mb-2">
                    Commentaire (optionnel)
                  </label>
                  <textarea
                    id="commentaire"
                    name="commentaire"
                    rows={4}
                    value={formData.commentaire}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Informations complémentaires..."
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-5 h-5 mr-2" />
                  {t.contact?.form?.submit || "Envoyer la commande via WhatsApp"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  En soumettant ce formulaire, vous serez redirigé vers WhatsApp pour finaliser votre commande.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
