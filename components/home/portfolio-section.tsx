"use client"

import { useState } from "react"
import { ExternalLink, Eye } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const categories = ["All", "Web", "Video", "Design", "Marketing"]

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web",
    description: "Full-stack e-commerce solution with payment integration",
    image: "/placeholder.svg?height=400&width=600",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Brand Video Campaign",
    category: "Video",
    description: "Promotional video series for tech startup launch",
    image: "/placeholder.svg?height=400&width=600",
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    id: 3,
    title: "Corporate Identity Design",
    category: "Design",
    description: "Complete branding package including logo and guidelines",
    image: "/placeholder.svg?height=400&width=600",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 4,
    title: "Social Media Growth",
    category: "Marketing",
    description: "Instagram growth campaign achieving 200% engagement increase",
    image: "/placeholder.svg?height=400&width=600",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 5,
    title: "SaaS Dashboard",
    category: "Web",
    description: "Modern analytics dashboard with real-time data visualization",
    image: "/placeholder.svg?height=400&width=600",
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
  {
    id: 6,
    title: "Product Launch Video",
    category: "Video",
    description: "Cinematic product reveal video for luxury brand",
    image: "/placeholder.svg?height=400&width=600",
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
]

export function PortfolioSection() {
  const { ref, isInView } = useInView()
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Work</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that showcase our expertise 
            and commitment to delivering exceptional results.
          </p>
        </div>

        {/* Category filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative glass-card rounded-2xl overflow-hidden transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-30">{project.category === "Web" ? "{ }" : project.category === "Video" ? "▶" : project.category === "Design" ? "◆" : "📱"}</div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Eye size={20} className="text-white" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-colors">
                    <ExternalLink size={20} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs text-primary uppercase tracking-wider">{project.category}</span>
                <h3 className="text-lg font-semibold mt-2 mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
