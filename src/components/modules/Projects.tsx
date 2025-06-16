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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".project-section")

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 2, // membuat scroll lebih lambat dan smooth
            snap: 1 / (sections.length - 1),
            end: () => "+=" + sectionRef.current!.offsetWidth * 1.2,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="h-screen bg-gray-950 overflow-hidden">
      <div
        ref={containerRef}
        className="flex h-screen"
        style={{ width: `${projects.length * 100}vw` }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-section w-screen h-screen flex items-center justify-center"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-12">
              <div className="project-content">
                <div className="space-y-4">
                  <p className="text-white/60 text-lg font-medium">Projects</p>
                  <h2 className="text-white text-5xl font-bold">{project.title}</h2>
                </div>

                <p className="text-white/80 text-xl pt-4">{project.description}</p>

                <div className="flex flex-wrap gap-3 pt-4">
                  {project.technologies.map((tech, i) => (
                    <p
                      key={i}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full border border-white/20"
                    >
                      {tech}
                    </p>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
                    >
                      View Project
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>

              <div className="project-image">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl transform rotate-6" />
                  <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="rounded-xl object-cover w-full"
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
