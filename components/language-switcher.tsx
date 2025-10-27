"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  
  // Log language changes
  useEffect(() => {
    console.log('Current language:', language)
  }, [language])

  // Simple two-button switcher
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        className={language === "fr" ? "bg-accent" : ""}
        onClick={() => setLanguage("fr")}
      >
        🇫🇷
      </Button>
      <Button
        variant="ghost"
        className={language === "en" ? "bg-accent" : ""}
        onClick={() => setLanguage("en")}
      >
        🇬🇧
      </Button>
    </div>
  )
}