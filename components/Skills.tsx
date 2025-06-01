"use client"

import { useEffect, useRef, useState } from "react"
import { Server, Globe, Database, PenToolIcon as Tool, Zap } from "lucide-react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([])
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Mastery",
      subtitle: "Server-Side Excellence",
      gradient: "from-emerald-500 to-teal-600",
      skills: [
        { name: "Java", level: 85, icon: "☕" },
        { name: "Spring Boot", level: 80, icon: "🍃" },
        { name: "Spring Security", level: 75, icon: "🔒" },
        { name: "REST APIs", level: 85, icon: "🔗" },
        { name: "Microservices", level: 70, icon: "🏗️" },
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend Craft",
      subtitle: "User Interface Magic",
      gradient: "from-blue-500 to-cyan-600",
      skills: [
        { name: "React.js", level: 80, icon: "⚛️" },
        { name: "JavaScript", level: 85, icon: "🟨" },
        { name: "HTML5", level: 90, icon: "🌐" },
        { name: "CSS3", level: 85, icon: "🎨" },
        { name: "Tailwind CSS", level: 80, icon: "💨" },
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      subtitle: "Database Wizardry",
      gradient: "from-orange-500 to-red-600",
      skills: [
        { name: "MySQL", level: 80, icon: "🐬" },
        { name: "Database Design", level: 75, icon: "📊" },
        { name: "Query Optimization", level: 70, icon: "⚡" },
        { name: "Data Modeling", level: 75, icon: "🏛️" },
        { name: "Performance Tuning", level: 70, icon: "🚀" },
      ],
    },
    {
      icon: <Tool className="w-8 h-8" />,
      title: "DevOps & Tools",
      subtitle: "Development Ecosystem",
      gradient: "from-purple-500 to-pink-600",
      skills: [
        { name: "Git", level: 85, icon: "🌿" },
        { name: "Docker", level: 65, icon: "🐳" },
        { name: "Maven", level: 80, icon: "📦" },
        { name: "IntelliJ IDEA", level: 85, icon: "💡" },
        { name: "VS Code", level: 90, icon: "💻" },
      ],
    },
  ]

  const animateSkill = (skillName: string) => {
    if (!animatedSkills.includes(skillName)) {
      setAnimatedSkills((prev) => [...prev, skillName])
    }
  }

  useEffect(() => {
    if (isVisible) {
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          setTimeout(
            () => {
              animateSkill(skill.name)
            },
            categoryIndex * 300 + skillIndex * 50,
          )
        })
      })
    }
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-12 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_50%,transparent_75%)] bg-[length:60px_60px] animate-slide"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Enhanced Section Header */}
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-block relative">
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white drop-shadow-2xl mb-6 relative">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  TECH ARSENAL
                </span>
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
            </div>
            <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto mt-6 sm:mt-8 drop-shadow-lg">
              A comprehensive toolkit of cutting-edge technologies and frameworks that power modern applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`group relative bg-white/10 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:bg-white/15 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${categoryIndex * 150}ms` }}
                onMouseEnter={() => setHoveredCategory(categoryIndex)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-300`}
                ></div>

                {/* Header */}
                <div className="relative z-10 text-center mb-6 sm:mb-8">
                  <div
                    className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${category.gradient} text-white mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 drop-shadow-lg">{category.title}</h3>
                  <p className="text-sm text-blue-200 drop-shadow-md">{category.subtitle}</p>
                </div>

                {/* Skills List */}
                <div className="relative z-10 space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="text-base sm:text-lg">{skill.icon}</span>
                          <span className="text-sm font-medium text-blue-100 drop-shadow-sm">{skill.name}</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="w-full bg-slate-700/50 rounded-full h-1.5 sm:h-2 overflow-hidden shadow-inner">
                          <div
                            className={`h-1.5 sm:h-2 bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-700 ease-out relative shadow-lg`}
                            style={{
                              width: animatedSkills.includes(skill.name) ? `${skill.level}%` : "0%",
                            }}
                          >
                            <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                          </div>
                        </div>
                        <span className="absolute right-0 -top-5 sm:-top-6 text-xs text-blue-200 font-mono drop-shadow-sm">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 drop-shadow-sm" />
              <span className="text-sm sm:text-base text-white font-medium drop-shadow-sm">Always learning, always growing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
