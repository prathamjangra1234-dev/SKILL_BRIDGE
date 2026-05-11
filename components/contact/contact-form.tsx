"use client"

import { useState } from "react"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useInView } from "@/hooks/use-in-view"

const services = [
  { value: "", label: "Select a service" },
  { value: "web-development", label: "Website Development" },
  { value: "video-editing", label: "Video Editing" },
  { value: "graphic-design", label: "Graphic Design" },
  { value: "social-media", label: "Social Media Marketing" },
  { value: "other", label: "Other" },
]

export function ContactForm() {
  const { ref, isInView } = useInView()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`glass-premium rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center min-h-[500px] transition-all duration-700 animate-scale-in ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 flex items-center justify-center mb-6 animate-pulse-glow hover-glow">
          <svg className="w-12 h-12 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-foreground mb-3 animate-fade-up">Message Sent!</h3>
        <p className="text-muted-foreground text-center max-w-md animate-fade-up" style={{ animationDelay: "100ms" }}>
          Thank you for reaching out. We&apos;ll get back to you within 24 hours with premium insights.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          className="mt-8 px-8 py-6 text-lg glass-button rounded-xl font-semibold hover:scale-110 transition-all duration-300 animate-bounce-in"
          style={{ animationDelay: "200ms" }}
          variant="outline"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`glass-premium rounded-3xl p-8 md:p-12 transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mb-2">
        <h2 className="text-3xl font-bold text-foreground mb-2 animate-fade-up">Send Us a Message</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
      </div>
      <p className="text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "50ms" }}>
        Fill out the form below and we&apos;ll get back to you soon with a premium proposal.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="space-y-2 animate-fade-up" style={{ animationDelay: "100ms" }}>
          <Label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            required
            className="glass-input border-primary/20 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 h-11 rounded-lg"
          />
        </div>

        {/* Email */}
        <div className="space-y-2 animate-fade-up" style={{ animationDelay: "125ms" }}>
          <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            className="glass-input border-primary/20 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 h-11 rounded-lg"
          />
        </div>

        {/* Service */}
        <div className="space-y-2 animate-fade-up" style={{ animationDelay: "150ms" }}>
          <Label htmlFor="service" className="text-sm font-semibold text-foreground">Service Needed</Label>
          <select
            id="service"
            name="service"
            required
            className="w-full h-11 px-4 rounded-lg glass-input border-primary/20 text-foreground bg-secondary/30 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all duration-300"
          >
            {services.map((service) => (
              <option key={service.value} value={service.value} className="bg-background">
                {service.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="space-y-2 animate-fade-up" style={{ animationDelay: "175ms" }}>
          <Label htmlFor="message" className="text-sm font-semibold text-foreground">Your Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your project and vision..."
            rows={5}
            required
            className="glass-input border-primary/20 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 rounded-lg resize-none"
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/80 hover:via-accent/80 hover:to-primary/80 transition-all duration-300 text-primary-foreground border-0 h-12 rounded-lg font-semibold text-lg group hover:scale-105 animate-fade-up hover-glow"
          style={{ animationDelay: "200ms" }}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 animate-spin" size={20} />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 group-hover:translate-x-2 transition-transform" size={20} />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
}
