import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineer (ML-Ready Product)",
      company: "Pixelete Creations",
      location: "Remote",
      period: "Apr 2025 – Present",
      description: [
        "Contributing to the backend codebase with task automation, scheduling, and approval features.",
        "Collaborating with a product team to ensure ML-readiness of structured client data.",
        "Exploring data extraction needs and testing backend modules using structured metrics.",
      ],
      tags: ["Backend", "ML", "Task Automation", "Data Extraction"],
    },
    {
      title: "Sales Ops & Software Engineer",
      company: "Kitnege Kisasa (Family Business)",
      location: "Nairobi, Kenya",
      period: "Jan 2023 – Present",
      description: [
        "Managed sales records, inventory, and internal process improvements.",
        "Designed and deployed the company website, increasing customer conversion and revenue by 30%.",
        "Introduced backend automation for stock flow and data logging.",
      ],
      tags: ["Sales Operations", "Web Development", "Automation", "Inventory Management"],
    },
  ]

  const challenges = [
    {
      title: "WinDesign Global Challenge",
      organization: "Enel Group",
      role: "Participant",
      period: "Apr 2025 – Present",
      description: [
        "Collaborating with global teams to conceptualize sustainable turbine technology.",
        "Applying research and data analysis to support renewable design ideas.",
      ],
      tags: ["Sustainability", "Global Collaboration", "Research", "Data Analysis"],
    },
  ]

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Professional Experience</h2>
          <div className="mt-2 h-1 w-20 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-slate-800">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle className="text-xl text-slate-900 dark:text-white">{exp.title}</CardTitle>
                    <CardDescription className="text-lg text-slate-700 dark:text-slate-300">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-start md:items-end text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-slate-600 dark:text-slate-300">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Challenges & Initiatives</h2>
            <div className="mt-2 h-1 w-20 bg-emerald-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-slate-800">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl text-slate-900 dark:text-white">{challenge.title}</CardTitle>
                      <CardDescription className="text-lg text-slate-700 dark:text-slate-300">
                        {challenge.organization} – {challenge.role}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                      <CalendarDays className="h-4 w-4" />
                      <span>{challenge.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 mb-4 space-y-2 text-slate-600 dark:text-slate-300">
                    {challenge.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {challenge.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200"
                      >
                        {tag}
                      </Badge>
                    ))}
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

export default ExperienceSection
