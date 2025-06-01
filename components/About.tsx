"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Database, Globe, Zap, Rocket, Brain, Target } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
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

  const highlights = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Building lightning-fast applications with advanced caching and optimization techniques",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Tackling complex challenges with innovative solutions and clean architecture",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "User-Centric Design",
      description: "Creating intuitive interfaces that deliver exceptional user experiences",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Scalable Systems",
      description: "Architecting robust backend systems that grow with your business needs",
      color: "from-green-500 to-emerald-500",
    },
  ]

  const stats = [
    { number: "12+", label: "Projects Completed", icon: <Code className="w-6 h-6" /> },
    { number: "1+", label: "Years Experience", icon: <Zap className="w-6 h-6" /> },
    { number: "10+", label: "Technologies", icon: <Globe className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <Target className="w-6 h-6" /> },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-12 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 mb-6">
                ABOUT ME
              </h2>
              <div className="h-1 sm:h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full transform scale-x-0 animate-scale-x"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-center mb-12 sm:mb-20">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                <div className="pl-6 sm:pl-8 space-y-4 sm:space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                    Passionate{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      Full-Stack
                    </span>{" "}
                    Developer
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    I'm a dedicated software engineer who thrives on transforming complex problems into elegant,
                    scalable solutions. With a deep passion for both frontend aesthetics and backend architecture, I
                    create applications that not only look stunning but perform exceptionally.
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    My journey in software development has been driven by curiosity and a relentless pursuit of
                    excellence. I believe in writing code that tells a story, building systems that stand the test of
                    time, and creating experiences that users love.
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-white/70 backdrop-blur-sm border border-white/50 p-4 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                      <div className="text-blue-600">{stat.icon}</div>
                      <span className="text-2xl sm:text-3xl font-black text-slate-900">{stat.number}</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Card */}
            <div className="relative">
              <div className="bg-white/30 backdrop-blur-xl border border-white/50 rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-spin-slow"></div>
                      <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                        <Code className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600" />
                      </div>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Code Philosophy</h4>
                    <p className="text-sm sm:text-base text-slate-600">
                      "Clean code is not written by following a set of rules. Clean code is written by programmers who
                      care."
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-pink-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`group relative bg-white/40 backdrop-blur-xl border border-white/50 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${highlight.color} text-white mb-4 sm:mb-6 shadow-lg`}
                  >
                    {highlight.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">{highlight.title}</h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{highlight.description}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
