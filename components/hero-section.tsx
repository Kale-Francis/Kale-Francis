import { Button } from "@/components/ui/button"
import { MapPin, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
              <MapPin className="h-4 w-4" />
              <span>Nairobi, Kenya</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">Kale Francis</h1>
            <h2 className="text-xl md:text-2xl text-slate-700 dark:text-slate-300">
              Backend Developer | AI Enthusiast | ALX Software Engineering Student
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
              Building robust backend systems and exploring the frontiers of machine learning and natural language
              processing.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
            <div className="flex space-x-4 pt-2">
              <Link
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:contact@kalefrancis.com"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Kale Francis"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
