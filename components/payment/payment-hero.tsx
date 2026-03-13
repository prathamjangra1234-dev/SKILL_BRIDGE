"use client"

import { useEffect, useState } from "react"
import { Shield, Lock, CreditCard } from "lucide-react"

export function PaymentHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative pt-32 pb-12 overflow-hidden">
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
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Secure Payment</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 text-balance">
            Simple & <span className="gradient-text">Secure</span> Payments
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose your service, complete your order, and pay securely. 
            All transactions are protected with industry-standard encryption.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield size={20} className="text-green-500" />
              <span className="text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Lock size={20} className="text-green-500" />
              <span className="text-sm">256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CreditCard size={20} className="text-green-500" />
              <span className="text-sm">Safe Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
