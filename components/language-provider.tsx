"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { useTheme } from "@/components/theme-provider"


type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Record<string, any>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const FALLBACKS: Record<Language, Record<string, any>> = {
  fr: { partners: { title: "Nos Partenaires", subtitle: "Ils nous accompagnent." } },
  en: { partners: { title: "Our Partners", subtitle: "They support us." } },
}

function deepMerge<T>(base: T, override: Partial<T>): T {
  const out: any = Array.isArray(base) ? [...(base as any)] : { ...(base as any) }
  for (const k in override) {
    const b = (base as any)?.[k]
    const o = (override as any)?.[k]
    out[k] =
      b && typeof b === "object" && o && typeof o === "object" && !Array.isArray(b) && !Array.isArray(o)
        ? deepMerge(b, o)
        : o
  }
  return out
}

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "fr"
  const saved = localStorage.getItem("language")
  return saved === "fr" || saved === "en" ? (saved as Language) : "fr"
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)
  const [translations, setTranslations] = useState<Record<string, any>>(FALLBACKS[getInitialLanguage()])
  
  // Log initial state
  useEffect(() => {
    console.log('LanguageProvider mounted with initial language:', language)
  }, [])

  // charger les traductions
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch(`/translations/${language}.json`, { 
          cache: "no-store",
          headers: {
            'Accept': 'application/json'
          }
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        if (!cancelled) {
          const mergedTranslations = deepMerge(FALLBACKS[language], data)
          setTranslations(mergedTranslations)
          console.log(`Translations loaded successfully for: ${language}`)
        }
      } catch (e) {
        console.error(`Failed to load translations for ${language}:`, e)
        if (!cancelled) {
          setTranslations(FALLBACKS[language])
          console.warn(`Using fallback translations for ${language}`)
        }
      }
    })()
    return () => {
      cancelled = true
    }
  }, [language])

  // persistance + <html lang=...>
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("language", language)
        document.documentElement.lang = language
        console.log(`Language preference saved: ${language}`)
      } catch (e) {
        console.error("Failed to save language preference:", e)
      }
    }
  }, [language])

  const setLanguage = (lang: Language) => {
    console.log("LanguageProvider: setLanguage called with", lang)
    if (lang !== "fr" && lang !== "en") {
      console.warn("Invalid language:", lang)
      return
    }
    setLanguageState(lang)
    console.log("Language state updated to:", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider")
  return ctx
}
