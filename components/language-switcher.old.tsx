"use client"

import { useEffect } from "react"
import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/components/language-provider"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  
  // Log current language whenever it changes
  useEffect(() => {
    console.log('Current language:', language)
  }, [language])

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === "fr" ? "default" : "ghost"}
        onClick={() => setLanguage("fr")}
        size="sm"
      >
        🇫🇷 FR
      </Button>
      <Button
        variant={language === "en" ? "default" : "ghost"}
        onClick={() => setLanguage("en")}
        size="sm"
      >
        🇬🇧 EN
      </Button>
    </div>
  )
  
}
