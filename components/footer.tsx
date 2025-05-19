import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Kale Francis</h3>
            <p className="text-slate-400 mt-1">Backend Developer | AI Enthusiast</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#home" className="text-slate-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-slate-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-slate-300 hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-slate-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-6 pt-6 text-center text-slate-400">
          <p>© {currentYear} Kale Francis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
