// components/header.tsx
"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()

  const navigation = [
    { name: t.nav?.home || "Accueil", href: "/" },
    { name: t.nav?.solution || "Notre Solution", href: "/solution" },
    { name: t.nav?.impact || "Impact", href: "/impact" },
    { name: t.nav?.team || "Équipe", href: "/equipe" },
    { name: t.nav?.partners || "Partenaires", href: "/partenaires" },
    { name: t.nav?.faq || "FAQ", href: "/faq" },
    { name: t.nav?.blog || "Blog", href: "/blog" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-[#2E8B57] flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="font-sans font-bold text-xl text-foreground">Briqu'Vert</span>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-[#2E8B57] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hidden sm:flex">
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button asChild className="hidden sm:inline-flex bg-[#2E8B57] hover:bg-[#267347]">
              <Link href="/contact">{t.nav?.contact || "Contact"}</Link>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-[#2E8B57] hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="sm:hidden">
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
              <Button asChild className="w-full bg-[#2E8B57] hover:bg-[#267347]">
                <Link href="/contact">{t.nav?.contact || "Contact"}</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
