import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript (Node.js)", "TypeScript", "SQL", "Bash", "C"],
    },
    {
      title: "Frameworks",
      skills: ["FastAPI", "Express.js"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "APIs & Tools",
      skills: ["OpenAI API", "Google Vision API", "RESTful APIs"],
    },
    {
      title: "ML/NLP Tools",
      skills: ["Scikit-learn", "OpenAI models", "Google Vision", "GPT APIs"],
    },
    {
      title: "Dev Tools",
      skills: ["Docker", "Git", "Nginx", "AWS EC2"],
    },
    {
      title: "Authentication",
      skills: ["JWT", "OAuth2"],
    },
    {
      title: "Business & Soft Skills",
      skills: ["Analytical thinking", "Collaboration", "Curiosity", "Initiative"],
    },
  ]

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Technical Skills</h2>
          <div className="mt-2 h-1 w-20 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-slate-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
