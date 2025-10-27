import { Hero } from "@/components/home/hero"
import { ValuePropositions } from "@/components/home/value-propositions"
import { ImpactMetrics } from "@/components/home/impact-metrics"
import { HowItWorks } from "@/components/home/how-it-works"
import { Testimonials } from "@/components/home/testimonials"
import { CTA } from "@/components/home/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuePropositions />
      <ImpactMetrics />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  )
}
