import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// This would typically come from a database or CMS
const projectsData = {
  "bailey-ai": {
    title: "Bailey-AI",
    description: "AI-Powered Media Summarization Platform",
    fullDescription:
      "Bailey-AI is an advanced media summarization platform that leverages artificial intelligence to condense text, images, and videos into concise, digestible summaries. The platform is particularly useful for healthcare professionals who need to quickly extract key information from large volumes of content.",
    challenge:
      "Healthcare professionals often struggle with information overload, having to process large volumes of medical literature, patient records, and research papers. The challenge was to create a system that could accurately extract and summarize key information from various media types while maintaining context and relevance.",
    solution:
      "We developed a backend system using FastAPI and MongoDB that integrates with OpenAI and Google Vision APIs to process and analyze different types of media. The system uses advanced NLP techniques to identify key information and generate concise summaries while preserving critical details.",
    technologies: [
      "FastAPI",
      "MongoDB",
      "OpenAI API",
      "Google Vision API",
      "JWT Authentication",
      "Python",
      "NLP",
      "Docker",
    ],
    features: [
      "Multi-modal summarization (text, images, and videos)",
      "Customizable summary length and focus areas",
      "Healthcare-specific terminology recognition",
      "Secure API access with JWT authentication",
      "User-specific preferences and history tracking",
      "Batch processing capabilities for large document sets",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    demoLink: "#",
    repoLink: "#",
    category: "AI/ML",
  },
  "pixelete-creations": {
    title: "Pixelete Creations",
    description: "Project Management App (Ongoing)",
    fullDescription:
      "Pixelete Creations is a comprehensive project management application designed to streamline task tracking, scheduling, and client data organization. The platform features an ML-ready backend that can be easily integrated with AI tools for enhanced automation and insights.",
    challenge:
      "The client needed a robust project management system that could handle complex workflows, client-specific data organization, and prepare for future ML integration. The system needed to be scalable and flexible enough to accommodate various business processes.",
    solution:
      "We designed a backend architecture using Node.js and Express that implements a microservices approach for different functional areas. The system includes advanced scheduling capabilities, approval workflows, and a data structure optimized for future ML applications.",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "RESTful APIs",
      "JWT Authentication",
      "Docker",
      "CI/CD",
    ],
    features: [
      "Task automation and scheduling",
      "Client-specific data folders and access controls",
      "Approval workflows with multi-level permissions",
      "Calendar integrations with popular platforms",
      "Real-time notifications and updates",
      "Data structures optimized for ML applications",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    demoLink: "#",
    repoLink: "#",
    category: "Backend",
  },
  agent47: {
    title: "Agent47",
    description: "Autonomous AI Agent Network (Private)",
    fullDescription:
      "Agent47 is a sophisticated network of 47 autonomous AI agents designed to work together to solve complex problems. The system utilizes a microservices architecture with low-latency APIs to enable seamless communication between agents and efficient task execution.",
    challenge:
      "Creating a system where multiple AI agents could collaborate effectively required solving complex problems in communication, task delegation, and result aggregation. The system needed to maintain low latency while handling complex workflows across distributed agents.",
    solution:
      "We developed a microservices architecture where each agent operates independently but can communicate through a central orchestration layer. The system uses a custom protocol for agent communication and implements sophisticated algorithms for task distribution and result aggregation.",
    technologies: ["Python", "FastAPI", "RabbitMQ", "Redis", "Docker", "Kubernetes", "TensorFlow", "PyTorch"],
    features: [
      "Autonomous agent network with 47 specialized AI agents",
      "Low-latency communication protocol for inter-agent messaging",
      "Dynamic task allocation based on agent capabilities",
      "Result aggregation and consensus mechanisms",
      "Self-healing system architecture",
      "Extensible framework for adding new agent types",
    ],
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    demoLink: null,
    repoLink: null,
    category: "AI/ML",
  },
  "airbnb-clone": {
    title: "AirBnB Clone",
    description: "Backend Redesign",
    fullDescription:
      "This project involved a complete redesign of the backend system for an AirBnB clone application. The focus was on creating efficient RESTful APIs for booking management and optimizing data handling for improved performance and scalability.",
    challenge:
      "The existing system suffered from performance issues, data inconsistencies, and limited scalability. The challenge was to redesign the backend while maintaining compatibility with existing frontend applications and improving overall system performance.",
    solution:
      "We implemented a new backend architecture using Python and MySQL with optimized database schemas and query patterns. The system includes comprehensive RESTful APIs for all booking operations and implements efficient caching strategies for frequently accessed data.",
    technologies: ["Python", "MySQL", "RESTful APIs", "Redis", "Docker", "Nginx"],
    features: [
      "Optimized booking management APIs",
      "Efficient property search and filtering",
      "User authentication and authorization",
      "Payment processing integration",
      "Review and rating system",
      "Availability calendar management",
    ],
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    demoLink: "#",
    repoLink: "#",
    category: "Backend",
  },
  "company-website": {
    title: "Company Website",
    description: "E-commerce Website for Family Business",
    fullDescription:
      "Designed and developed a modern e-commerce website for a family business, resulting in a 30% increase in customer conversion and revenue. The site features a responsive design, product catalog, shopping cart, and secure checkout process.",
    challenge:
      "The family business needed an online presence to expand their customer base and streamline sales processes. The website needed to be user-friendly, mobile-responsive, and include e-commerce capabilities while maintaining the brand identity.",
    solution:
      "We created a custom website using React and Next.js with a clean, responsive design that works well on all devices. The site includes a comprehensive product catalog, shopping cart functionality, and secure payment processing integration.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe", "Vercel", "Content Management System"],
    features: [
      "Responsive design for all device sizes",
      "Product catalog with filtering and search",
      "Shopping cart and checkout process",
      "Secure payment processing",
      "Order tracking and history",
      "Content management system for easy updates",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    demoLink: "#",
    repoLink: "#",
    category: "Web",
  },
  "data-extraction-tool": {
    title: "Data Extraction Tool",
    description: "Automated Data Extraction from Documents",
    fullDescription:
      "A specialized tool that uses OCR and NLP techniques to automatically extract structured data from various document types. The system can process invoices, receipts, contracts, and other business documents to extract relevant information for further processing.",
    challenge:
      "Manual data entry from business documents is time-consuming and error-prone. The challenge was to create an automated system that could accurately extract structured data from various document formats and layouts with minimal human intervention.",
    solution:
      "We developed a Python-based tool that combines OCR technology with NLP techniques to identify and extract key information from documents. The system uses machine learning models trained on specific document types to improve accuracy over time.",
    technologies: ["Python", "OCR", "NLP", "TensorFlow", "Flask", "MongoDB"],
    features: [
      "Support for multiple document types (invoices, receipts, contracts)",
      "High-accuracy OCR with layout analysis",
      "Named entity recognition for data extraction",
      "Template matching for known document formats",
      "Confidence scoring for extracted data",
      "API integration for workflow automation",
    ],
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    demoLink: "#",
    repoLink: "#",
    category: "AI/ML",
  },
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = params.id
  const project = projectsData[projectId as keyof typeof projectsData]

  if (!project) {
    return (
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <Navbar />
        <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Project Not Found</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">The project you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
              </Link>
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />

      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="outline" size="sm">
              <Link href="/portfolio" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
              </Link>
            </Button>
          </div>

          <div className="mb-8">
            <Badge className="mb-4 bg-emerald-500 hover:bg-emerald-600 text-white">{project.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">{project.description}</p>
          </div>

          {/* Main Project Image */}
          <div className="mb-10 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={project.images[0] || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Project Overview */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h2>
            <Card className="border-none shadow-md dark:bg-slate-800">
              <CardContent className="p-6">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.fullDescription}</p>
              </CardContent>
            </Card>
          </div>

          {/* Challenge and Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Challenge</h2>
              <Card className="border-none shadow-md h-full dark:bg-slate-800">
                <CardContent className="p-6">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.challenge}</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Solution</h2>
              <Card className="border-none shadow-md h-full dark:bg-slate-800">
                <CardContent className="p-6">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.solution}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200 text-sm py-1 px-3"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h2>
            <Card className="border-none shadow-md dark:bg-slate-800">
              <CardContent className="p-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 mt-0.5 mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Additional Images */}
          {project.images.length > 1 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 2}`}
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Links */}
          {(project.demoLink || project.repoLink) && (
            <div className="flex flex-wrap gap-4">
              {project.demoLink && (
                <Button asChild className="flex items-center">
                  <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Live Demo
                  </Link>
                </Button>
              )}

              {project.repoLink && (
                <Button asChild variant="outline" className="flex items-center">
                  <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Source Code
                  </Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
