"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

export function CTASection() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "-1s" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div 
          className={`max-w-4xl mx-auto glass-card rounded-3xl p-12 md:p-16 text-center transition-all duration-700 ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Sparkles size={32} className="text-primary-foreground" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Build Your{" "}
            <span className="gradient-text">Digital Presence</span>?
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Let&apos;s work together to create something extraordinary. Contact us today 
            and let&apos;s discuss how we can help transform your brand.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 text-primary-foreground border-0 px-8 py-6 text-lg hover-glow"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary/50 px-8 py-6 text-lg"
            >
              <Link href="/services">
                View Pricing
              </Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="text-sm">Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="text-sm">Flexible Pricing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
