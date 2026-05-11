"use client"

import { useEffect, useState } from "react"
import { MessageCircle, ArrowRight } from "lucide-react"

export function ContactHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Premium animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background animate-gradient" />
      
      {/* Floating premium orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/30 to-accent/20 rounded-full blur-3xl animate-float-rotate opacity-50" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-accent/30 to-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      
      {/* Premium grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
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
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 glass-premium px-4 py-3 rounded-full mb-8 animate-slide-in-down">
            <MessageCircle size={16} className="text-primary animate-bounce" style={{ animationDelay: "0.2s" }} />
            <span className="text-sm text-muted-foreground font-medium">Let's Connect & Create</span>
          </div>

          {/* Main Headline */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-balance transition-all duration-1200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: mounted ? "100ms" : "0ms" }}>
            Let&apos;s Start Your <span className="animate-text-shimmer">Premium Project</span>
          </h1>

          {/* Subheading */}
          <p className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-pretty transition-all duration-1200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: mounted ? "200ms" : "0ms" }}>
            Have a project in mind? We&apos;d love to hear from you. Reach out and let&apos;s discuss how we can transform your vision into an exceptional digital experience.
          </p>

          {/* Contact Info Cards with animations */}
          <div className={`grid md:grid-cols-3 gap-6 max-w-2xl mx-auto transition-all duration-1200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: mounted ? "300ms" : "0ms" }}>
            {[
              { icon: "⚡", label: "Quick Response", desc: "24-hour turnaround" },
              { icon: "🎯", label: "Dedicated Team", desc: "Focused on your goals" },
              { icon: "✨", label: "Premium Quality", desc: "Excellence always" },
            ].map((item, index) => (
              <div 
                key={item.label}
                className="glass-premium rounded-2xl p-6 hover:scale-110 transition-all duration-500 group"
                style={{
                  transitionDelay: mounted ? `${300 + index * 75}ms` : "0ms",
                }}
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">{item.icon}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
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
