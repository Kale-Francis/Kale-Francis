import { Card, CardContent } from "@/components/ui/card"

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-emerald-500 mx-auto"></div>
        </div>

        <Card className="border-none shadow-lg dark:bg-slate-700">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Professional Summary</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Backend Developer and ALX Software Engineering student with a strong interest in machine learning, natural
              language processing (NLP), and data automation. Skilled in Python and backend frameworks like FastAPI and
              Express.js. Proven ability to collaborate with teams, research data extraction solutions, and build
              production-ready systems.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Currently working on real-world machine learning and data automation challenges at Pixelete Creations and
              participating in global tech initiatives like the Enel WinDesign Challenge. Eager to grow under
              experienced mentorship and contribute to meaningful, ML-powered products.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default AboutSection
