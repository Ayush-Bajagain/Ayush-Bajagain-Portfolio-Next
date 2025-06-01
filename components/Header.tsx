"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="group">
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 transition-all duration-500">
              <span className="tracking-wider">AYUSH</span>
              <span
                className={`text-sm ml-1 font-medium tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isScrolled ? "text-slate-900 dark:text-white" : "text-white"
                }`}
              >
                .dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 font-medium ${
                  isScrolled 
                    ? "text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400" 
                    : "text-white hover:text-blue-300"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled 
                ? "text-slate-900 dark:text-white" 
                : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 ${
            isScrolled 
              ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md" 
              : "bg-transparent"
          }`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-2 transition-colors duration-300 ${
                  isScrolled 
                    ? "text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400" 
                    : "text-white hover:text-blue-300"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
