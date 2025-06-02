"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Zap, Calendar, TrendingUp } from "lucide-react"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState("All")
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

  const projects = [
    {
      title: "Employee Attendance System",
      description:
        "Attendance system built with Java Spring Boot, React, and MySQL. Includes basic check-in, check-out, and reporting features.",
      techStack: ["Java Spring Boot", "MySQL", "React.js", "Tailwind CSS"],
      category: "Enterprise",
      features: ["Check-In/Check-Out", "Daily Reports", "User Management"],
      metrics: { users: "50+", uptime: "99.9%", performance: "2x faster" },
      image: "/employee_attendacen.png",
      gradient: "from-blue-600 to-purple-600",
      status: "Live",
      year: "2025 ",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A Java-based e-commerce system built using Spring Boot, MySQL, React, and Tailwind. Supports essential shopping features.",
      techStack: ["Java Spring Boot", "MySQL", "React.js", "Tailwind CSS"],
      category: "E-Commerce",
      features: ["Product Listing", "Cart & Checkout", "Order Management"],
      metrics: { sales: "-", conversion: "-", users: "-" },
      image: "/ecommerce.png",
      gradient: "from-emerald-600 to-teal-600",
      status: "Development",
      year: "2025",
    },
    {
      title: "Student Fee Management",
      description:
        "College project developed using PHP and MySQL. Allows institutions to manage student fee records and generate reports.",
      techStack: ["PHP", "MySQL", "HTML", "CSS"],
      category: "Education",
      features: ["Student Records", "Fee Collection", "Report Generation"],
      metrics: { institutions: "-", transactions: "-", accuracy: "-" },
      image: "/fee_management.png",
      gradient: "from-orange-600 ",
      status: "Live",
      year: "2023",
    },
    {
      title: "Car Rental System",
      description:
        "Simple PHP-based car renting system that allows users to book cars and manage rental schedules.",
      techStack: ["PHP", "MySQL", "HTML", "CSS"],
      category: "IoT",
      features: ["Car Listings", "Booking System", "Rental History"],
      metrics: { spaces: "-", efficiency: "-", revenue: "-" },
      image: "/car_renting.png",
      gradient: "from-purple-600",
      status: "-",
      year: "2024",
    },
    {
      title: "Expense Tracker",
      description:
        "Web-based personal finance tool built using PHP, JavaScript, and MySQL to record income and expenses.",
      techStack: ["PHP", "MySQL", "JavaScript", "HTML"],
      category: "Finance",
      features: ["Add Expenses", "Income Tracking", "Basic Analytics"],
      metrics: { savings: "-", users: "-",  accuracy: "-" },
      image: "/expensen-tracker.png",
      gradient: "from-indigo-600 to-blue-600",
      status: "Beta",
      year: "2024",
    },
    {
      title: "Healthcare Portal",
      description:
        "Under-development healthcare platform to manage appointments and health records using Java backend and blockchain.",
      techStack: ["Spring Boot", "PostgreSQL", "React.js"],
      category: "Healthcare",
      features: ["Appointment Booking", "Patient Records", "Doctor Portal"],
      metrics: { consultations: "-", satisfaction: "-", response: "-" },
      image: "/placeholder.jpg",
      gradient: "from-green-600 to-emerald-600",
      status: "Development",
      year: "2024",
    },
  ];
  

  const categories = ["All", "Enterprise", "E-Commerce", "Education", "IoT", "Finance", "Healthcare"]

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-12 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-48 sm:w-72 h-48 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 mb-4 sm:mb-6">
              PROJECT SHOWCASE
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Innovative solutions that push the boundaries of technology and create meaningful impact
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white/70 backdrop-blur-sm border border-white/50 text-slate-700 hover:bg-white/90"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}></div>

                  {/* Overlay Actions */}
                  <div
                    className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredProject === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="flex space-x-3 sm:space-x-4">
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                        <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                      </button>
                      <a 
                        href="https://github.com/Ayush-Bajagain"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                      >
                        <Github size={16} className="sm:w-5 sm:h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span
                      className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold ${
                        project.status === "Live"
                          ? "bg-green-500 text-white"
                          : project.status === "Beta"
                            ? "bg-yellow-500 text-white"
                            : "bg-blue-500 text-white"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <div className="bg-white/20 backdrop-blur-sm text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Calendar size={10} className="sm:w-3 sm:h-3" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">{project.title}</h3>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-100 text-slate-700 px-2 py-0.5 sm:py-1 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-slate-600">
                        <Zap size={10} className="text-blue-600 mr-1 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 sm:pt-4 border-t border-slate-200">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-base sm:text-lg font-bold text-slate-900">{value}</div>
                        <div className="text-xs text-slate-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <a 
              href="https://github.com/Ayush-Bajagain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center space-x-2">
                <Github size={16} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Explore All Projects</span>
                <TrendingUp size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
