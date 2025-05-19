import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "building-scalable-apis-with-fastapi",
      title: "Building Scalable APIs with FastAPI",
      excerpt:
        "Learn how to create high-performance, scalable APIs using FastAPI and best practices for production deployments.",
      date: "May 15, 2025",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=600",
      categories: ["Backend", "Python", "API Design"],
    },
    {
      id: "integrating-openai-apis-in-production",
      title: "Integrating OpenAI APIs in Production Applications",
      excerpt:
        "A comprehensive guide to effectively integrating OpenAI's APIs into production applications with proper error handling and optimization.",
      date: "April 28, 2025",
      readTime: "12 min read",
      image: "/placeholder.svg?height=300&width=600",
      categories: ["AI/ML", "API Integration", "Production"],
    },
    {
      id: "microservices-architecture-for-ml-systems",
      title: "Microservices Architecture for ML Systems",
      excerpt:
        "Exploring the benefits and challenges of implementing microservices architecture for machine learning systems.",
      date: "April 10, 2025",
      readTime: "10 min read",
      image: "/placeholder.svg?height=300&width=600",
      categories: ["Architecture", "Microservices", "ML Systems"],
    },
    {
      id: "data-extraction-techniques-using-nlp",
      title: "Advanced Data Extraction Techniques Using NLP",
      excerpt:
        "How to leverage natural language processing for extracting structured data from unstructured text sources.",
      date: "March 22, 2025",
      readTime: "15 min read",
      image: "/placeholder.svg?height=300&width=600",
      categories: ["NLP", "Data Extraction", "Python"],
    },
    {
      id: "securing-backend-apis-best-practices",
      title: "Securing Backend APIs: Best Practices and Common Pitfalls",
      excerpt: "Essential security practices for protecting your backend APIs from common vulnerabilities and attacks.",
      date: "March 5, 2025",
      readTime: "11 min read",
      image: "/placeholder.svg?height=300&width=600",
      categories: ["Security", "Backend", "API Design"],
    },
    {
      id: "optimizing-mongodb-for-large-datasets",
      title: "Optimizing MongoDB for Large Datasets",
      excerpt: "Strategies and techniques for optimizing MongoDB performance when working with large-scale data.",
      date: "February 18, 2025",
      readTime: "9 min read",
      image: "/placeholder.svg?height=300&width=600",
      categories: ["Database", "MongoDB", "Performance"],
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />

      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Blog & Articles</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
              Sharing insights and knowledge about backend development, AI/ML, and software engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-800">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map((category, index) => (
                        <Badge
                          key={index}
                          className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100"
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">{post.title}</h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-emerald-600 dark:text-emerald-400 font-medium">
                      <span>Read more</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
