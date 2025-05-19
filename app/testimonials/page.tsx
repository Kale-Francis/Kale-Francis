import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Oliver Chen",
      role: "CTO, HealthTech Startup",
      company: "MediScan Technologies",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Kale developed our backend system for Bailey-AI with exceptional skill. His understanding of ML integration and data processing was invaluable. The system has been running smoothly and efficiently since launch, and his documentation made it easy for our team to maintain and extend the codebase.",
    },
    {
      id: 2,
      name: "Lucy Kimani",
      role: "Project Manager",
      company: "Pixelete Creations",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Working with Kale on the Pixelete Creations project was a pleasure. His technical expertise and problem-solving abilities helped us overcome several challenges. He's proactive, communicative, and delivers high-quality work consistently. I particularly appreciated his ability to explain complex technical concepts in simple terms.",
    },
    {
      id: 3,
      name: "David Mwangi",
      role: "Founder",
      company: "InnovateTech Solutions",
      image: "/placeholder.svg?height=100&width=100",
      rating: 4,
      text: "Kale helped us build a robust API system that significantly improved our data processing capabilities. His attention to detail and commitment to best practices resulted in a scalable solution that continues to serve us well. He was always willing to go the extra mile to ensure the project's success.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Product Owner",
      company: "DataFlow Systems",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Kale's expertise in backend development and AI integration was exactly what our project needed. He quickly understood our requirements and delivered a solution that exceeded our expectations. His work on our data extraction tool has saved our team countless hours of manual processing.",
    },
    {
      id: 5,
      name: "Michael Odhiambo",
      role: "Lead Developer",
      company: "TechHub Kenya",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "I had the pleasure of collaborating with Kale on a complex backend project. His code quality and architectural decisions were impressive. He's a team player who brings valuable insights to technical discussions and isn't afraid to tackle challenging problems head-on.",
    },
    {
      id: 6,
      name: "Grace Wanjiku",
      role: "Operations Manager",
      company: "Kitnege Kisasa",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Kale's work on our inventory management system transformed our business operations. The automation he implemented reduced manual errors by 90% and gave us much better visibility into our stock levels. He took the time to understand our business processes before suggesting technical solutions.",
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />

      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Client Testimonials</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
              What people say about working with me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-800"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                        <p className="text-xs text-emerald-600 dark:text-emerald-400">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <Quote className="absolute top-0 left-0 h-8 w-8 text-slate-200 dark:text-slate-700 -translate-x-2 -translate-y-2" />
                    <p className="text-slate-600 dark:text-slate-300 relative z-10 pl-4">"{testimonial.text}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
