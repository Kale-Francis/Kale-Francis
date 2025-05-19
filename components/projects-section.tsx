import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const ProjectsSection = () => {
  const projects = [
    {
      title: "Bailey-AI",
      description: "AI-Powered Media Summarization Platform",
      details: [
        "Developed backend using FastAPI and MongoDB, enabling summarization of text, images, and videos.",
        "Integrated OpenAI and Google Vision APIs, applying NLP to process and condense long-form content.",
        "Designed RESTful APIs and implemented JWT-based secure access for scalable deployment.",
        "Aligned closely with healthcare-related use cases requiring data extraction and summarization.",
      ],
      tags: ["FastAPI", "MongoDB", "OpenAI API", "Google Vision", "NLP", "JWT"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Pixelete Creations",
      description: "Project Management App (Ongoing)",
      details: [
        "Contributing to an ML-ready backend platform for task tracking, scheduling, and client-specific data folders.",
        "Developed backend for reminders, approval flows, calendar integrations, and team collaboration features.",
        "Conducting competitive analysis and designing flexible architecture for production-readiness.",
      ],
      tags: ["Backend", "ML", "Task Automation", "Scheduling", "API Design"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Agent47",
      description: "Autonomous AI Agent Network (Private)",
      details: [
        "Created low-latency APIs and a microservices architecture to orchestrate 47 AI agents.",
        "Applied knowledge in backend + automation for future ML/NLP model deployments.",
      ],
      tags: ["Microservices", "AI Agents", "Low-latency APIs", "Automation"],
      demoLink: null,
      repoLink: null,
    },
    {
      title: "AirBnB Clone",
      description: "Backend Redesign",
      details: [
        "Engineered RESTful booking APIs with Python and MySQL.",
        "Refined data handling and modeled user flows similar to appointment and task assignment systems.",
      ],
      tags: ["Python", "MySQL", "RESTful APIs", "Booking System"],
      demoLink: "#",
      repoLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Projects</h2>
          <div className="mt-2 h-1 w-20 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 dark:text-white">{project.title}</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-slate-600 dark:text-slate-300">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-slate-100 text-slate-800 dark:bg-slate-600 dark:text-slate-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {(project.demoLink || project.repoLink) && (
                <CardFooter className="flex gap-3">
                  {project.demoLink && (
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  )}
                  {project.repoLink && (
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
