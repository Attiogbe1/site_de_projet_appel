"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t, language } = useLanguage()

  const getLocation = () => {
    return language === 'fr' ? 'Bénin (Aplahoue, Dékpo)' : 'Benin (Aplahoue, Dekpo)'
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-[#2E8B57] flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="font-sans font-bold text-xl">Briqu'Vert</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t?.footer?.about_text || "Des briquettes écologiques pour un avenir durable"}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-semibold text-lg mb-4">{t?.footer?.quick_links || "Liens rapides"}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solution" className="text-sm text-muted-foreground hover:text-[#2E8B57] transition-colors">
                  {t?.nav?.solution || "Notre Solution"}
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-sm text-muted-foreground hover:text-[#2E8B57] transition-colors">
                  {t?.nav?.impact || "Notre Impact"}
                </Link>
              </li>
              <li>
                <Link
                  href="/distribution"
                  className="text-sm text-muted-foreground hover:text-[#2E8B57] transition-colors"
                >
                  {t?.nav?.distribution || "Distribution"}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-[#2E8B57] transition-colors">
                  {t?.nav?.blog || "Blog"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans font-semibold text-lg mb-4">{t?.footer?.contact_us || "Contactez-nous"}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#2E8B57]" />
                <span>{getLocation()}</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0 text-[#2E8B57]" />
                <span>+229 01 65 38 80 96</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0 text-[#2E8B57]" />
                <span>contact@briquvert.bj</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-sans font-semibold text-lg mb-4">{t?.footer?.follow_us || "Suivez-nous"}</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/godfrieemileromaric.attiogbe"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                title="Suivez-nous sur Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kuechi-%C3%A9mile-attiogbe/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors"
                title="Suivez-nous sur LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} BioÉnergie Solidaire Bénin. {t?.footer?.rights || "Tous droits réservés."}
          </p>
        </div>
      </div>
    </footer>
  )
}
