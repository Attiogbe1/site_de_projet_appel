// app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"

import Header from "@/components/header"              // <- default
import Footer from "@/components/footer"             // <- default
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BioÉnergie Solidaire Bénin - Briqu'Vert",
  description: "Transformons les déchets agricoles en briquettes écologiques pour un Bénin plus vert",
  keywords: "briquettes écologiques, Bénin, énergie verte, développement durable, charbon écologique",
  generator: "v0.app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LanguageProvider>
              <>
                <Header />
                <main>{children}</main>
                <Footer />
              </>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


