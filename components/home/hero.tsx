"use client"

import Link from "next/link"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Premium animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background animate-gradient opacity-60" />
      
      {/* Floating premium orbs with enhanced animations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/30 to-accent/10 rounded-full blur-3xl animate-float-rotate opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/30 to-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-primary/20 to-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-1.5s" }} />

      {/* Premium shimmer grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 glass-premium px-4 py-3 rounded-full mb-8 animate-slide-in-down">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm text-muted-foreground font-medium">Premium Digital Agency</span>
            <Sparkles size={14} className="text-primary animate-bounce" style={{ animationDelay: "0.2s" }} />
          </div>

          {/* Main headline with premium gradient */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-balance transition-all duration-1200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: mounted ? "100ms" : "0ms" }}>
            We Build{" "}
            <span className="animate-text-shimmer">Premium Digital</span>
            <br />
            <span className="gradient-text">Experiences</span>
          </h1>

          {/* Premium subtext */}
          <p className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-pretty transition-all duration-1200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: mounted ? "200ms" : "0ms" }}>
            SkillBridge Agency transforms your vision into stunning digital realities. 
            From web development to social media marketing, we craft premium solutions that 
            elevate your brand and drive exponential growth.
          </p>

          {/* Premium CTA Buttons with enhanced animations */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: mounted ? "300ms" : "0ms" }}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 transition-all duration-300 text-primary-foreground border-0 px-10 py-7 text-lg hover-glow rounded-xl font-semibold group hover:scale-110"
            >
              <Link href="/catalog">
                <span>View Services</span>
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={22} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border-2 border-primary hover:bg-primary/10 px-10 py-7 text-lg group rounded-xl font-semibold transition-all duration-300 hover:scale-110 glass-premium"
            >
              <Link href="/contact">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mr-3 group-hover:scale-125 transition-transform group-hover:shadow-2xl">
                  <Play size={16} fill="white" className="text-white ml-1" />
                </div>
                <span>Discover More</span>
              </Link>
            </Button>
          </div>

          {/* Premium stats with staggered animation */}
          <div className={`mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: mounted ? "400ms" : "0ms" }}>
            {[
              { value: "150+", label: "Projects Delivered", delay: 0 },
              { value: "50+", label: "Happy Clients", delay: 100 },
              { value: "4", label: "Team Members", delay: 200 },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center glass-premium rounded-2xl p-6 hover:scale-110 transition-all duration-500 group"
                style={{
                  animationDelay: mounted ? `${stat.delay}ms` : "0ms",
                }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text-gold group-hover:animate-pulse mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: mounted ? "500ms" : "0ms" }}>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2 animate-bounce hover-glow">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
