import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github, Facebook } from "lucide-react"

const footerLinks = {
  company: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#web-development", label: "Web Development" },
    { href: "/services#video-editing", label: "Video Editing" },
    { href: "/services#graphic-design", label: "Graphic Design" },
    { href: "/services#social-media", label: "Social Media Marketing" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" },
  ],
}

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Github, label: "GitHub" },
  { href: "#", icon: Facebook, label: "Facebook" },
]

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-background via-secondary/10 to-background border-t border-primary/20 overflow-hidden">
      {/* Premium animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none animate-gradient" />
      
      {/* Floating orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      
      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          {/* Brand Section with animation */}
          <div className="lg:col-span-2 animate-fade-up">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                <span className="text-xl font-bold text-primary-foreground">S</span>
              </div>
              <span className="text-2xl font-bold">
                <span className="text-foreground group-hover:gradient-text transition-all">Skill</span>
                <span className="gradient-text group-hover:animate-text-shimmer">Bridge</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Building Premium Digital Experiences That Transform Brands. Crafting excellence in every pixel.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const SocialIcon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300 hover:scale-125 hover:-translate-y-2 group/social"
                    aria-label={social.label}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    <SocialIcon size={18} className="group-hover/social:animate-bounce" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company Links with stagger */}
          <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
            <h4 className="font-bold text-foreground mb-6 text-lg gradient-text">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={link.label} className="animate-fade-up" style={{ animationDelay: `${100 + index * 50}ms` }}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 group flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links with stagger */}
          <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <h4 className="font-bold text-foreground mb-6 text-lg gradient-text">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={link.label} className="animate-fade-up" style={{ animationDelay: `${200 + index * 50}ms` }}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 group flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info with animations */}
          <div className="animate-fade-up" style={{ animationDelay: "300ms" }}>
            <h4 className="font-bold text-foreground mb-6 text-lg gradient-text">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group cursor-pointer">
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:scale-125 group-hover:glow-primary transition-all duration-300">
                  <Mail size={18} className="text-primary" />
                </div>
                <span>theskillbridge@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group cursor-pointer">
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:scale-125 group-hover:glow-primary transition-all duration-300">
                  <Phone size={18} className="text-primary" />
                </div>
                <span>+91 9991153921</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors group cursor-pointer">
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:scale-125 group-hover:glow-primary transition-all duration-300 mt-1 flex-shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span>Sonipat, Haryana, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Bottom Bar with animations */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-up" style={{ animationDelay: "400ms" }}>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} SkillBridge Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {footerLinks.legal.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary hover:translate-y-(-1) transition-all duration-300"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Premium accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-primary via-accent to-primary opacity-30" />
      </div>
    </footer>
  )
}
