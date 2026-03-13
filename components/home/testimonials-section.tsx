"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "CEO, TechStart India",
    content: "SkillBridge Agency transformed our online presence completely. Their website development team delivered a stunning, fast, and responsive site that exceeded our expectations. Highly recommended!",
    avatar: "RS",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Marketing Director, StyleHub",
    content: "The video editing team at SkillBridge is phenomenal. They created engaging reels and promotional videos that boosted our social media engagement by 300%. Truly exceptional work!",
    avatar: "PP",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Founder, GreenLeaf Organics",
    content: "From logo design to complete brand identity, SkillBridge delivered outstanding graphic design work. Our brand now stands out in a crowded market. Professional team with creative vision.",
    avatar: "AK",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Owner, Fashion Forward",
    content: "Their social media marketing strategies helped us grow our Instagram following from 5K to 50K in just 6 months. The ROI on our ad campaigns has been incredible. Thank you, SkillBridge!",
    avatar: "SR",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const { ref, isInView } = useInView()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goTo = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prev = () => goTo((currentIndex - 1 + testimonials.length) % testimonials.length)
  const next = () => goTo((currentIndex + 1) % testimonials.length)

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="relative">
            {/* Main testimonial card */}
            <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={80} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-bold text-primary-foreground">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      currentIndex === index
                        ? "bg-gradient-to-r from-primary to-accent w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
