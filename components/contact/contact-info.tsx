"use client"

import { Mail, Phone, MapPin, MessageCircle, Instagram, Twitter, Linkedin, Github, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@skillbridge.agency",
    href: "mailto:hello@skillbridge.agency",
  },
  {
    icon: Phone,
    label: "Phone (Pratham)",
    value: "+91 9991153921",
    href: "tel:+919991153921",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Sonipat, Haryana, India",
    href: "#map",
  },
]

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram", color: "hover:bg-pink-500/20 hover:text-pink-500" },
  { href: "#", icon: Twitter, label: "Twitter", color: "hover:bg-sky-500/20 hover:text-sky-500" },
  { href: "#", icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-500/20 hover:text-blue-500" },
  { href: "#", icon: Github, label: "GitHub", color: "hover:bg-gray-500/20 hover:text-gray-400" },
  { href: "#", icon: Facebook, label: "Facebook", color: "hover:bg-blue-600/20 hover:text-blue-600" },
]

export function ContactInfo() {
  const { ref, isInView } = useInView()

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`space-y-8 transition-all duration-700 delay-200 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Contact info cards */}
      <div className="space-y-4">
        {contactInfo.map((info, index) => (
          <a
            key={info.label}
            href={info.href}
            className="glass-card rounded-2xl p-6 flex items-center gap-4 group hover:scale-[1.02] transition-all duration-300"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <info.icon size={24} className="text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{info.label}</p>
              <p className="text-foreground font-medium">{info.value}</p>
            </div>
          </a>
        ))}
      </div>

      {/* WhatsApp CTA */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Quick Response</h3>
        <p className="text-muted-foreground text-sm mb-4">
          Need an instant reply? Chat with us on WhatsApp for quick responses.
        </p>
        <Button
          asChild
          className="w-full bg-green-600 hover:bg-green-700 text-white"
        >
          <a href="https://wa.me/919991153921" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2" size={20} />
            Chat on WhatsApp
          </a>
        </Button>
      </div>

      {/* Social media */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className={`w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color}`}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Business hours */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Business Hours</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Monday - Sunday</span>
            <span className="text-foreground">9:00 AM - 9:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-accent font-medium">Open All Week</span>
            <span className="text-accent font-medium">7 Days</span>
          </div>
        </div>
      </div>
    </div>
  )
}
