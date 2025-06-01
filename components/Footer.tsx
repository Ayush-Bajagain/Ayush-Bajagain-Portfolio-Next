"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Ayush-Bajagain",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/ayush-bajagain/",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:ayushbajagain@gmail.com",
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900/20 to-blue-900/20 animate-gradient-shift"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute w-2 h-2 bg-blue-400/20 rounded-full top-1/4 left-1/4 animate-float-1"></div>
          <div className="absolute w-3 h-3 bg-blue-300/20 rounded-full top-1/3 right-1/4 animate-float-2"></div>
          <div className="absolute w-2 h-2 bg-blue-500/20 rounded-full bottom-1/4 left-1/3 animate-float-3"></div>
          <div className="absolute w-4 h-4 bg-blue-400/20 rounded-full bottom-1/3 right-1/3 animate-float-4"></div>
          <div className="absolute w-3 h-3 bg-blue-300/20 rounded-full top-2/3 left-2/3 animate-float-5"></div>
        </div>

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] animate-mesh"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-12 sm:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">Ayush Bajagain</h3>
              <p className="text-blue-200 text-sm sm:text-base">
                Full Stack Developer crafting innovative solutions with modern technologies
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-blue-200 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-blue-200 hover:text-white transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-blue-200 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-blue-200 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex justify-center md:justify-end space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-8"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-blue-200">
              © {currentYear} Ayush Bajagain. All rights reserved.
            </p>
          
          </div>
        </div>
      </div>
    </footer>
  )
} 