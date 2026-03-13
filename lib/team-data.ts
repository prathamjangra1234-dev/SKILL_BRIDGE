export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  skills: { name: string; level: number }[]
  avatar: string
  social: {
    instagram?: string
    twitter?: string
    linkedin?: string
    github?: string
  }
  projects: {
    title: string
    description: string
    category: string
  }[]
}

export const teamMembers: TeamMember[] = [
  {
    id: "pratham",
    name: "Pratham",
    role: "Founder & Frontend Developer",
    bio: "Pratham is the visionary founder of SkillBridge Agency. With a passion for clean code and pixel-perfect designs, he leads the team in creating exceptional digital experiences. His expertise in modern frontend technologies ensures every project meets the highest standards of quality and performance.",
    avatar: "P",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React/Next.js", level: 88 },
      { name: "UI/UX Design", level: 85 },
      { name: "Tailwind CSS", level: 92 },
    ],
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    projects: [
      {
        title: "E-Commerce Platform",
        description: "Full-stack shopping experience with seamless checkout",
        category: "Web Development",
      },
      {
        title: "SaaS Dashboard",
        description: "Analytics dashboard with real-time data visualization",
        category: "Web Development",
      },
      {
        title: "Portfolio Website",
        description: "Modern portfolio site for creative agency",
        category: "Web Development",
      },
    ],
  },
  {
    id: "nishant",
    name: "Nishant",
    role: "Video Editor",
    bio: "Nishant brings stories to life through video. As our lead video editor, he specializes in creating engaging content for social media, YouTube, and promotional campaigns. His creative eye and technical expertise make every video project a masterpiece.",
    avatar: "N",
    skills: [
      { name: "Video Editing", level: 95 },
      { name: "Reels Editing", level: 92 },
      { name: "Motion Graphics", level: 85 },
      { name: "Color Grading", level: 88 },
      { name: "Sound Design", level: 80 },
    ],
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
    projects: [
      {
        title: "Brand Video Campaign",
        description: "Multi-platform video series for product launch",
        category: "Video Production",
      },
      {
        title: "Social Media Reels",
        description: "Viral reels content for fashion brand",
        category: "Video Production",
      },
      {
        title: "YouTube Series",
        description: "Educational content series for tech startup",
        category: "Video Production",
      },
    ],
  },
  {
    id: "harshit",
    name: "Harshit",
    role: "Backend Developer",
    bio: "Harshit is the backbone of our technical operations. With deep expertise in server-side development, databases, and API design, he ensures our applications are robust, secure, and scalable. His attention to detail guarantees reliable performance.",
    avatar: "H",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Databases", level: 90 },
      { name: "APIs", level: 88 },
      { name: "Server Management", level: 85 },
      { name: "Cloud Services", level: 82 },
    ],
    social: {
      linkedin: "#",
      github: "#",
    },
    projects: [
      {
        title: "Payment Integration",
        description: "Secure payment gateway implementation",
        category: "Backend Development",
      },
      {
        title: "API Development",
        description: "RESTful API for mobile application",
        category: "Backend Development",
      },
      {
        title: "Database Architecture",
        description: "Scalable database design for e-commerce",
        category: "Backend Development",
      },
    ],
  },
  {
    id: "ansh",
    name: "Ansh",
    role: "Template Designer",
    bio: "Ansh crafts beautiful, functional website templates that serve as the foundation for stunning digital experiences. His expertise in UI layouts and web components ensures every design is both aesthetically pleasing and highly usable.",
    avatar: "A",
    skills: [
      { name: "Website Templates", level: 94 },
      { name: "UI Layouts", level: 90 },
      { name: "Web Components", level: 88 },
      { name: "Figma", level: 85 },
      { name: "CSS Frameworks", level: 92 },
    ],
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
    projects: [
      {
        title: "Agency Template",
        description: "Premium agency website template",
        category: "Template Design",
      },
      {
        title: "E-Commerce Template",
        description: "Modern shopping platform template",
        category: "Template Design",
      },
      {
        title: "Dashboard UI Kit",
        description: "Comprehensive admin dashboard kit",
        category: "Template Design",
      },
    ],
  },
]

export function getTeamMember(id: string): TeamMember | undefined {
  return teamMembers.find((member) => member.id === id)
}
