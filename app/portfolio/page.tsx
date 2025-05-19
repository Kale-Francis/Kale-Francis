import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioPage() {
  const projects = [
    {
      id: "bailey-ai",
      title: "Bailey-AI",
      description: "AI-Powered Media Summarization Platform",
      category: "AI/ML",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["FastAPI", "MongoDB", "OpenAI API", "Google Vision", "NLP", "JWT"],
    },
    {
      id: "pixelete-creations",
      title: "Pixelete Creations",
      description: "Project Management App (Ongoing)",
      category: "Backend",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Backend", "ML", "Task Automation", "Scheduling", "API Design"],
    },
    {
      id: "agent47",
      title: "Agent47",
      description: "Autonomous AI Agent Network (Private)",
      category: "AI/ML",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Microservices", "AI Agents", "Low-latency APIs", "Automation"],
    },
    {
      id: "airbnb-clone",
      title: "AirBnB Clone",
      description: "Backend Redesign",
      category: "Backend",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "MySQL", "RESTful APIs", "Booking System"],
    },
    {
      id: "company-website",
      title: "Company Website",
      description: "E-commerce Website for Family Business",
      category: "Web",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Next.js", "Tailwind CSS", "E-commerce"],
    },
    {
      id: "data-extraction-tool",
      title: "Data Extraction Tool",
      description: "Automated Data Extraction from Documents",
      category: "AI/ML",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "OCR", "NLP", "Data Processing"],
    },
  ]

  // Filter projects by category
  const aiProjects = projects.filter((project) => project.category === "AI/ML")
  const backendProjects = projects.filter((project) => project.category === "Backend")
  const webProjects = projects.filter((project) => project.category === "Web")

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />

      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">My Portfolio</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
              A showcase of my projects and work in backend development, AI/ML, and web applications
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 max-w-md mx-auto">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="ai-ml">AI/ML</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ai-ml" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="backend" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {backendProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="web" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  )
}

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    category: string
    image: string
    tags: string[]
  }
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.id}`}>
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full dark:bg-slate-800">
        <div className="relative h-48 w-full">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          <div className="absolute top-2 right-2">
            <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white">{project.category}</Badge>
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="secondary" className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                +{project.tags.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
