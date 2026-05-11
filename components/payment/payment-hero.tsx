"use client"

import { useEffect, useState } from "react"
import { Shield, Lock, CreditCard, Zap } from "lucide-react"

export function PaymentHero() {
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
      
      {/* Premium grid */}
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
            <CreditCard size={16} className="text-primary animate-bounce" style={{ animationDelay: "0.2s" }} />
            <span className="text-sm text-muted-foreground font-medium">Secure Premium Transactions</span>
          </div>

          {/* Main Headline */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-balance transition-all duration-1200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: mounted ? "100ms" : "0ms" }}>
            Simple & <span className="animate-text-shimmer">Secure</span>
            <br />
            <span className="gradient-text">Payment Portal</span>
          </h1>

          {/* Subheading */}
          <p className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-pretty transition-all duration-1200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: mounted ? "200ms" : "0ms" }}>
            Choose your service, complete your order, and pay securely with industry-leading encryption. 
            All transactions are protected and processed instantly.
          </p>

          {/* Trust Badges with animations */}
          <div className={`flex flex-wrap items-center justify-center gap-6 mb-12 transition-all duration-1200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: mounted ? "300ms" : "0ms" }}>
            {[
              { icon: Shield, label: "SSL Secured", desc: "Bank-level security", delay: 0 },
              { icon: Lock, label: "256-bit Encryption", desc: "Military-grade", delay: 100 },
              { icon: Zap, label: "Instant Processing", desc: "Real-time payment", delay: 200 },
            ].map((badge, index) => {
              const Icon = badge.icon
              return (
                <div 
                  key={badge.label}
                  className="glass-premium rounded-2xl px-6 py-4 flex items-center gap-3 hover:scale-110 transition-all duration-500 group"
                  style={{
                    transitionDelay: mounted ? `${badge.delay}ms` : "0ms",
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center group-hover:scale-125 transition-transform">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-foreground">{badge.label}</div>
                    <div className="text-xs text-muted-foreground">{badge.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Premium Stats */}
          <div className={`grid md:grid-cols-3 gap-6 max-w-2xl mx-auto transition-all duration-1200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: mounted ? "400ms" : "0ms" }}>
            {[
              { value: "10M+", label: "Transactions Secured" },
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "0s", label: "Processing Time" },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="glass-card rounded-2xl p-6 hover:scale-110 transition-all duration-500 hover:glow-primary"
                style={{
                  transitionDelay: mounted ? `${400 + index * 75}ms` : "0ms",
                }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
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
