"use client"

import { useEffect, useRef, useState } from "react"
import { TreePine, Users, Factory, TrendingUp } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

function CountUpAnimation({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime: number | null = null
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return <span ref={countRef}>{count.toLocaleString("fr-FR")}</span>
}

export function ImpactMetrics() {
  const { t } = useLanguage()

  const metrics = [
    {
      icon: TreePine,
      value: 500,
      suffix: "+",
      label: t?.impact_metrics?.co2_saved || "Tonnes de CO2 économisées",
      color: "#2E8B57",
    },
    {
      icon: Users,
      value: 150,
      suffix: "+",
      label: t?.impact_metrics?.jobs_created || "Emplois créés",
      color: "#D4A574",
    },
    {
      icon: Factory,
      value: 1200,
      suffix: "+",
      label: t?.impact_metrics?.briquettes_produced || "Tonnes de briquettes produites",
      color: "#2E8B57",
    },
    {
      icon: TrendingUp,
      value: 5000,
      suffix: "+",
      label: t?.impact_metrics?.families_served || "Familles servies",
      color: "#D4A574",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
            {t?.impact_metrics?.title || "Notre Impact"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t?.impact_metrics?.subtitle || "Des résultats concrets pour un avenir durable"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div key={metric.label} className="text-center p-8 rounded-lg bg-card hover:shadow-lg transition-shadow">
                <div
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full mb-4"
                  style={{ backgroundColor: `${metric.color}20` }}
                >
                  <Icon className="h-8 w-8" style={{ color: metric.color }} />
                </div>
                <div className="font-sans font-bold text-4xl sm:text-5xl mb-2" style={{ color: metric.color }}>
                  <CountUpAnimation end={metric.value} />
                  {metric.suffix}
                </div>
                <p className="text-muted-foreground font-medium">{metric.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
