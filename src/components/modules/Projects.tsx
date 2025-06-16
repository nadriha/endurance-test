"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  longDescription?: string
  features?: string[]
  details?: string[]
  role?: string
  duration?: string
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const projects: Project[] = [
    {
      title: "LANCAR - Full Stack Engineer",
      description: "A web app that helps small businesses manage their finances digitally",
      longDescription:
        "LANCAR is a web app that simplifies financial record-keeping for small businesses through digitization.",
      image: "/image/lancar.png",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Django", "Git", "Sentry", "SonarQube"],
      liveUrl: "https://dkn-pos-umkm-fe.vercel.app/",
      role: "Full Stack Engineer",
      duration: "5 months",
      features: ["Manage small business products", "Record transactions", "Generate reports", "User role management"],
    },
    {
      title: "Qenerator App - Full Stack Engineer",
      description: "A web app to assist educators in generating exam questions using AI.",
      image: "/image/qen.png",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Hono", "Drizzle"],
      role: "Full Stack Engineer",
      duration: "1 months",
      features: ["MCQ & essay generation", "Math/image support", "PDF export"],
    },
    {
      title: "AIGREE - Frontend Engineer",
      description: "AI app to help farmers avoid crop failure with recommendations.",
      image: "/image/aigree.png",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind", "OpenAI API", "Git"],
      liveUrl: "https://aigree.vercel.app/",
      githubUrl: "https://github.com/hacky-nasa/hacky",
      role: "Frontend Engineer",
      duration: "1 Day Hackathon",
      features: ["Crop recommendations", "Soil assessment", "AI chatbot"],
    },
    {
      title: "National Folklore Festival 2024",
      description: "A cultural competition organized by FEB UI.",
      image: "/image/nff.png",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind", "AWS S3", "Django", "Git"],
      liveUrl: "https://www.nff-febui.com/",
      role: "Frontend Engineer",
      duration: "1 month",
      features: ["Event registration", "Payment integration"],
    },
    {
      title: "LabHub - Frontend Engineer",
      description: "Platform for lab equipment and service rentals by Pharmacy UI.",
      image: "/image/labhub.png",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind", "AWS S3", "Django", "Git"],
      role: "Frontend Engineer",
      duration: "3 months",
      features: ["Marketplace", "Booking system", "CRM", "Inventory"],
    },
  ]

  const getGradientClass = (index: number) => {
    const gradients = [
      "from-blue-600 to-purple-600",
      "from-purple-600 to-pink-600",
      "from-green-500 to-blue-600",
      "from-orange-500 to-red-600",
      "from-teal-500 to-cyan-600",
    ]
    return gradients[index % gradients.length]
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".project-section")

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 3,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + sectionRef.current!.offsetWidth * 1.2,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div ref={containerRef} className="flex h-screen relative z-10" style={{ width: `${projects.length * 100}vw` }}>
        {projects.map((project, index) => (
          <div key={index} className="project-section w-screen h-screen flex items-center justify-center">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-12">
              <div className="project-content">
                <div className="space-y-4">
                  <p className="text-blue-400 text-lg font-medium">Projects</p>
                  <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 text-5xl font-bold">
                    {project.title}
                  </h2>
                </div>

                <p className="text-slate-300 text-xl pt-4 leading-relaxed">{project.description}</p>

                {project.features && (
                  <div className="pt-4">
                    <h4 className="text-blue-300 font-semibold mb-2">Key Features:</h4>
                    <ul className="text-slate-400 text-sm space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-3 pt-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-300 text-sm rounded-full border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-6">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-gradient-to-r ${getGradientClass(index)} text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105`}
                    >
                      View Project
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>

              <div className="project-image">
                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${getGradientClass(index)} rounded-2xl blur-xl transform rotate-6 opacity-30`}
                  />
                  <div className="relative bg-slate-800/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="rounded-xl object-cover w-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
