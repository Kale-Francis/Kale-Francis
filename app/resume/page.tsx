import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Calendar, MapPin, Briefcase, GraduationCap, Award } from "lucide-react"

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />

      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Resume</h1>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                My professional background, experience, and qualifications
              </p>
            </div>
            <Button className="flex items-center gap-2" asChild>
              <a href="/files/kale-francis-resume.pdf" download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Professional Summary */}
          <Card className="mb-10 border-none shadow-lg dark:bg-slate-800">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Professional Summary</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Backend Developer and ALX Africa Software Engineering student with hands-on experience building scalable
                systems using Node.js, Python, and MySQL. Skilled in RESTful API development, database optimization, AI
                tool integration, and cloud deployment. Adept at transforming business needs into functional digital
                solutions, having led impactful software projects for both startups and family businesses. Actively
                contributing to renewable energy innovation through Enel's global challenge and building a feature-rich
                project management platform at Pixelete Creations. Committed to sustainable development and leveraging
                tech for measurable business growth.
              </p>
            </CardContent>
          </Card>

          {/* Experience */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Briefcase className="mr-2 h-6 w-6 text-emerald-500" />
              Professional Experience
            </h2>

            <div className="space-y-6">
              <Card className="border-none shadow-md dark:bg-slate-800">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Software Engineer (Project Management App)
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium">Pixelete Creations</p>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 text-slate-600 dark:text-slate-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Apr 2025 – Present</span>
                      <MapPin className="h-4 w-4 ml-3 mr-1" />
                      <span>Remote</span>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 mb-4 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>Leading backend and architecture for a modern project management application.</li>
                    <li>
                      Key features include task creation, scheduling, frequent reminders, and client-specific folders.
                    </li>
                    <li>
                      Developed approval workflows, calendar integration (Google Calendar), and marketing competitive
                      analysis tools.
                    </li>
                    <li>Designed for simplicity and inspired by platforms like Monday.com.</li>
                    <li>Contributing to team management tools and workflow automation strategies.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">Backend</Badge>
                    <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                      Project Management
                    </Badge>
                    <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                      Workflow Automation
                    </Badge>
                    <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                      API Integration
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md dark:bg-slate-800">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Sales Management Operative & Software Engineer
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                        Kitenege Kisasa (Family Business)
                      </p>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 text-slate-600 dark:text-slate-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Jan 2023 – Present</span>
                      <MapPin className="h-4 w-4 ml-3 mr-1" />
                      <span>Nairobi, Kenya</span>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 mb-4 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>Oversaw sales operations, managed inventory systems, and improved logistics coordination.</li>
                    <li>
                      Designed and deployed a custom business website that increased customer engagement and led to a
                      30% revenue boost.
                    </li>
                    <li>
                      Proposed and implemented tech-driven solutions to modernize internal processes and record-keeping.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                      Sales Operations
                    </Badge>
                    <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                      Web Development
                    </Badge>
                    <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                      Inventory Management
                    </Badge>
                    <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                      Process Optimization
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Briefcase className="mr-2 h-6 w-6 text-emerald-500" />
              Projects
            </h2>

            <div className="space-y-6">
              <Card className="border-none shadow-md dark:bg-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Bailey-AI — AI-Powered Media Summarization Platform
                  </h3>
                  <ul className="list-disc pl-5 mb-4 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>Engineered backend with FastAPI and MongoDB for summarizing media content.</li>
                    <li>
                      Integrated OpenAI and Google Vision APIs for intelligent processing of videos, images, and text.
                    </li>
                    <li>Deployed secure cloud infrastructure with JWT-based user authentication.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">FastAPI</Badge>
                    <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">MongoDB</Badge>
                    <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                      OpenAI API
                    </Badge>
                    <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                      Google Vision API
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md dark:bg-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Agent47 (Private, In Progress) — AI Agent Network
                  </h3>
                  <ul className="list-disc pl-5 mb-4 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>Architecting microservices to coordinate 47 AI agents for task automation and security ops.</li>
                    <li>
                      Designed low-latency APIs and scalable logic tailored for healthcare and business automation.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                      Microservices
                    </Badge>
                    <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                      AI Agents
                    </Badge>
                    <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                      Low-latency APIs
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md dark:bg-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    AirBnB Clone — Backend System Overhaul
                  </h3>
                  <ul className="list-disc pl-5 mb-4 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>Refactored the booking system using Python, MySQL, and ORM-based architecture.</li>
                    <li>Improved transactional performance and data efficiency for a multi-user platform.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">Python</Badge>
                    <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">MySQL</Badge>
                    <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">ORM</Badge>
                    <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                      Booking System
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Challenges & Initiatives */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Briefcase className="mr-2 h-6 w-6 text-emerald-500" />
              Challenges & Initiatives
            </h2>

            <Card className="border-none shadow-md dark:bg-slate-800">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">WinDesign Global Challenge</h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium">Enel Group – Participant</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0 text-slate-600 dark:text-slate-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Apr 2025 – Present</span>
                  </div>
                </div>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-slate-600 dark:text-slate-300">
                  <li>
                    Collaborating with global innovators to design sustainable wind turbine concepts for the future.
                  </li>
                  <li>Contributing technical insights in renewable energy, design thinking, and digital simulation.</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                    Sustainability
                  </Badge>
                  <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                    Renewable Energy
                  </Badge>
                  <Badge className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                    Global Collaboration
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <GraduationCap className="mr-2 h-6 w-6 text-emerald-500" />
              Education
            </h2>

            <div className="space-y-6">
              <Card className="border-none shadow-md dark:bg-slate-800">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Software Engineering Program (Backend Focus)
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium">ALX Africa</p>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 text-slate-600 dark:text-slate-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>March 2023 – July 2025</span>
                      <MapPin className="h-4 w-4 ml-3 mr-1" />
                      <span>Nairobi, Kenya</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    Intensive, full-time program covering backend development, system design, cloud deployment, DevOps,
                    and real-world team collaboration.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md dark:bg-slate-800">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Kenya Certificate of Secondary Education (KCSE)
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                        Peter Kibukosya Secondary School
                      </p>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 text-slate-600 dark:text-slate-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>2019 – 2022</span>
                      <MapPin className="h-4 w-4 ml-3 mr-1" />
                      <span>Nairobi, Kenya</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Award className="mr-2 h-6 w-6 text-emerald-500" />
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-md dark:bg-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Languages</h3>
                  <div className="space-y-3">
                    {["JavaScript (Node.js)", "Python", "TypeScript", "SQL", "Bash", "C"].map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md dark:bg-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Frameworks</h3>
                  <div className="space-y-3">
                    {["FastAPI", "Express.js"].map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md dark:bg-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Databases</h3>
                  <div className="space-y-3">
                    {["MySQL", "PostgreSQL", "MongoDB"].map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md dark:bg-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">APIs</h3>
                  <div className="space-y-3">
                    {["RESTful APIs", "OpenAI API", "Google Vision API", "Paystack API"].map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md dark:bg-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Tools & Platforms</h3>
                  <div className="space-y-3">
                    {["Docker", "Git", "Nginx", "AWS EC2"].map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md dark:bg-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Business & Team Skills</h3>
                  <div className="space-y-3">
                    {["Sales operations", "Digital strategy", "Project planning", "Collaboration"].map(
                      (skill, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                          <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Award className="mr-2 h-6 w-6 text-emerald-500" />
              Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-none shadow-md dark:bg-slate-800">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-emerald-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        How to Start Your Own Startup
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">Founder Academy</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md dark:bg-slate-800">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-emerald-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Sustainability Foundations: Core Concepts
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">LinkedIn</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">May 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md dark:bg-slate-800">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-emerald-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Environmental Sustainability
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">LinkedIn</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">May 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
