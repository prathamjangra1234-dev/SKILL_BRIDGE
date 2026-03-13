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
        className={`glass-card rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center min-h-[500px] transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent!</h3>
        <p className="text-muted-foreground text-center max-w-md">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          className="mt-6"
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
      className={`glass-card rounded-3xl p-8 md:p-12 transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
      <p className="text-muted-foreground mb-8">Fill out the form below and we&apos;ll get back to you soon.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            required
            className="bg-secondary/50 border-border focus:border-primary"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            className="bg-secondary/50 border-border focus:border-primary"
          />
        </div>

        {/* Service */}
        <div className="space-y-2">
          <Label htmlFor="service">Service Needed</Label>
          <select
            id="service"
            name="service"
            required
            className="w-full h-10 px-3 rounded-md bg-secondary/50 border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message">Your Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your project..."
            rows={5}
            required
            className="bg-secondary/50 border-border focus:border-primary resize-none"
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 text-primary-foreground border-0"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 animate-spin" size={20} />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2" size={20} />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
