import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, GraduationCap, Award, MapPin } from "lucide-react"

const EducationSection = () => {
  const education = [
    {
      institution: "ALX Africa",
      program: "Software Engineering Program (Backend Focus)",
      location: "Nairobi, Kenya",
      period: "March 2023 – July 2025",
      description: [
        "Emphasis on backend systems, Python development, DevOps, and real-world project work.",
        "Mentorship-driven learning with exposure to system design, APIs, cloud deployment, and agile collaboration.",
      ],
    },
    {
      institution: "Peter Kibukosya Secondary School",
      program: "KCSE Certification",
      location: "Nairobi, Kenya",
      period: "2019 – 2022",
      description: [],
    },
  ]

  const certifications = [
    {
      title: "How to Start Your Own Startup",
      issuer: "Founder Academy",
      date: "",
    },
    {
      title: "Sustainability Foundations: Core Concepts",
      issuer: "LinkedIn",
      date: "May 2025",
    },
    {
      title: "Environmental Sustainability",
      issuer: "LinkedIn",
      date: "May 2025",
    },
  ]

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Education</h2>
          <div className="mt-2 h-1 w-20 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-slate-700">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle className="text-xl text-slate-900 dark:text-white flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      {edu.institution}
                    </CardTitle>
                    <CardDescription className="text-lg text-slate-700 dark:text-slate-300">
                      {edu.program}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-start md:items-end text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              {edu.description.length > 0 && (
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                    {edu.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Certifications</h2>
            <div className="mt-2 h-1 w-20 bg-emerald-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-emerald-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{cert.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300">{cert.issuer}</p>
                      {cert.date && <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{cert.date}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
