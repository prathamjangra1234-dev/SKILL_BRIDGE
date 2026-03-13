"use client"

import { useEffect, useState } from "react"

export function ServicesHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div 
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Services</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 text-balance">
            Premium <span className="gradient-text">Digital Solutions</span> for Your Brand
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We offer a comprehensive suite of digital services designed to elevate your 
            brand, engage your audience, and drive measurable results.
          </p>
        </div>
      </div>
    </section>
  )
}
