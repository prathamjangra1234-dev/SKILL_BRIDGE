"use client"

import { useInView } from "@/hooks/use-in-view"
import { MapPin } from "lucide-react"

export function MapSection() {
  const { ref, isInView } = useInView()

  return (
    <section 
      id="map"
      className="relative py-16"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Location</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-balance">
            Find Us <span className="gradient-text">Here</span>
          </h2>
        </div>

        <div className={`glass-card rounded-3xl overflow-hidden transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Map placeholder with gradient overlay */}
          <div className="relative h-[400px] bg-secondary">
            {/* Grid pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

            {/* Location marker */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Pulse ring */}
                <div className="absolute inset-0 animate-ping">
                  <div className="w-32 h-32 rounded-full bg-primary/20" />
                </div>
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <MapPin size={32} className="text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Location info card */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm">
              <div className="glass-card rounded-xl p-4">
                <h3 className="font-semibold text-foreground mb-1">SkillBridge Agency</h3>
                <p className="text-sm text-muted-foreground">Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
