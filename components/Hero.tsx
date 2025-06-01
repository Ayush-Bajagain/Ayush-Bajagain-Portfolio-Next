"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Download, Eye, Code, Database, Globe } from "lucide-react"

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const texts = ["Full-Stack Software Developer", "Problem Solver", "UI/UX Enthusiast", "Database Architect"]

  const typingRef = useRef<NodeJS.Timeout | null>(null)

  // Predefined positions and animations for particles
  const particlePositions = [
    { left: "74.84%", top: "55.97%", delay: "2.75s", duration: "5.06s" },
    { left: "84.78%", top: "49.95%", delay: "1.74s", duration: "4.86s" },
    { left: "40.41%", top: "24.97%", delay: "0.43s", duration: "3.76s" },
    { left: "25.39%", top: "87.77%", delay: "3.20s", duration: "3.74s" },
    { left: "19.89%", top: "86.36%", delay: "2.12s", duration: "6.06s" },
    { left: "18.57%", top: "60.86%", delay: "4.39s", duration: "6.05s" },
    { left: "22.46%", top: "50.76%", delay: "1.11s", duration: "5.39s" },
    { left: "20.20%", top: "16.08%", delay: "0.38s", duration: "4.30s" },
    { left: "30.08%", top: "81.20%", delay: "1.01s", duration: "3.15s" },
    { left: "29.33%", top: "62.89%", delay: "0.46s", duration: "5.56s" },
    { left: "24.01%", top: "88.67%", delay: "4.11s", duration: "6.67s" },
    { left: "28.74%", top: "90.37%", delay: "4.44s", duration: "4.61s" },
    { left: "68.42%", top: "53.21%", delay: "2.92s", duration: "5.19s" },
    { left: "33.75%", top: "35.03%", delay: "3.53s", duration: "3.69s" },
    { left: "44.52%", top: "78.51%", delay: "3.82s", duration: "4.08s" },
    { left: "16.05%", top: "67.38%", delay: "3.16s", duration: "5.31s" },
    { left: "32.67%", top: "65.88%", delay: "4.54s", duration: "6.33s" },
    { left: "83.35%", top: "43.19%", delay: "0.36s", duration: "6.34s" },
    { left: "8.63%", top: "88.67%", delay: "0.33s", duration: "5.03s" },
    { left: "99.96%", top: "42.35%", delay: "2.00s", duration: "3.00s" },
  ]

  const floatingElements = [
    { icon: Code, delay: 0, position: "top-20 left-20" },
    { icon: Database, delay: 1000, position: "top-40 right-32" },
    { icon: Globe, delay: 2000, position: "bottom-32 left-32" },
  ]

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentTextIndex]

      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1))
        setTypingSpeed(100)

        if (displayText === currentText) {
          setTypingSpeed(2000) // Pause at the end
          setIsDeleting(true)
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1))
        setTypingSpeed(50)

        if (displayText === "") {
          setIsDeleting(false)
          setCurrentTextIndex((currentTextIndex + 1) % texts.length)
        }
      }
    }

    typingRef.current = setTimeout(handleTyping, typingSpeed)
    return () => {
      if (typingRef.current) clearTimeout(typingRef.current)
    }
  }, [displayText, currentTextIndex, isDeleting, typingSpeed, texts])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#000080" }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particlePositions.map((pos, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-float"
            style={{
              left: pos.left,
              top: pos.top,
              animationDelay: pos.delay,
              animationDuration: pos.duration,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              {/* SEO-friendly H1 */}
              <h1 className="sr-only">Ayush Bajagain - Software Developer</h1>
              
              {/* Animated Name */}
              <div className="relative">
                <h2 className="text-4xl sm:text-5xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 leading-tight animate-text-slide">
                  AYUSH
                </h2>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 transform origin-left animate-expand"></div>
              </div>

              <div className="relative">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">BAJAGAIN</h3>
                <div className="h-16 flex items-center justify-center lg:justify-start">
                  <div className="bg-black/30 backdrop-blur-sm border border-blue-400/30 rounded-2xl px-4 sm:px-6 py-3">
                    <span className="text-lg sm:text-xl lg:text-2xl font-mono text-cyan-400">
                      {displayText}
                      <span className="animate-pulse text-cyan-400">|</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {["Java Spring Boot", "React.js", "MySQL"].map((tech, index) => (
                  <div
                    key={tech}
                    className="bg-black/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-3 sm:px-4 py-2 text-sm sm:text-base text-blue-300 font-medium hover:bg-black/30 hover:text-cyan-300 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {tech}
                  </div>
                ))}
              </div>

              <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
                Crafting digital experiences with cutting-edge technologies. Specialized in building scalable,
                high-performance applications that push the boundaries of modern web development.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <Eye size={20} />
                  <span className="text-sm sm:text-base">Explore Projects</span>
                </div>
              </button>

              <button className="group relative border-2 border-blue-400/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold backdrop-blur-sm hover:bg-blue-600/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-center gap-2">
                  <Download size={20} />
                  <span className="text-sm sm:text-base">Download CV</span>
                </div>
              </button>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Profile Card */}
              <div className="relative bg-black/20 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-4 sm:p-8 shadow-2xl">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl relative group">
                  <img
                    src="/ayush.png"
                    alt="Ayush - Professional portrait"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Simple border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/20"></div>
                </div>

                {/* Status Indicator */}
                <div className="absolute top-4 right-4 bg-green-500 w-4 h-4 rounded-full animate-pulse shadow-lg shadow-green-500/50">
                  <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                </div>
              </div>

              {/* Floating Tech Icons - Only visible on lg screens and up */}
              <div className="hidden lg:block">
                {floatingElements.map((Element, index) => (
                  <div
                    key={index}
                    className={`absolute ${Element.position} bg-black/20 backdrop-blur-sm border border-blue-400/30 p-4 rounded-2xl shadow-xl animate-float hover:bg-black/30 transition-all duration-300 cursor-pointer`}
                    style={{
                      animationDelay: `${Element.delay}ms`,
                      animationDuration: "6s",
                    }}
                  >
                    <Element.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-black/30 backdrop-blur-sm border border-blue-400/30 rounded-full p-3 animate-bounce">
          <ChevronDown size={24} className="text-blue-300" />
        </div>
      </div>
    </section>
  )
}
