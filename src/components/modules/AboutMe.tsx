"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AboutMeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const aboutMeRef = useRef<HTMLHeadingElement>(null)
  const textContainerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  const wordSegments = [
  "Third-year", "Computer", "Science", "undergraduate",
  "at", "Universitas", "Indonesia,",
  "passionate", "about", "web", "development.",
  "Motivated", "to", "continuously", "improve",
  "both", "technical", "and", "non-technical", "skills",
  "to", "enhance", "my", "capabilities",
  "and", "make", "valuable", "contributions.",
]

  useEffect(() => {
    const section = sectionRef.current
    const aboutMe = aboutMeRef.current
    const textContainer = textContainerRef.current
    const image = imageRef.current
    if (!section || !aboutMe || !textContainer || !image) return

    
    wordSegments.forEach((segment) => {
        const span = document.createElement("span")
        span.textContent = segment + " "
        span.className = "text-segment md:text-3xl text-slate-200 opacity-0 transform translate-y-2 inline-block hover:text-blue-400 transition-colors duration-300"
        textContainer.appendChild(span)
    })

    const textElements = textContainer.querySelectorAll(".text-segment")

    gsap.fromTo(
      aboutMe,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      },
    )

    gsap.fromTo(
      image,
      {
        opacity: 0,
        x: 3000,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "top 40%",
          scrub: 1,
        },
      },
    )

    const tl = gsap.timeline({
    scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
    },
    })

    textElements.forEach((element, index) => {
    tl.fromTo(
        element,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        index * 0.1 // stagger timing
    )
    })


    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      textElements.forEach((el) => el.remove())
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 flex justify-center items-start py-20 max-w-screen overflow-x-hidden relative h-screen"
    >

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="flex flex-col items-center max-w-7xl gap-8 top-20 relative z-10">
        <h1
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 lg:text-6xl text-4xl font-bold"
          ref={aboutMeRef}
        >
          About Me
        </h1>
        <div className="flex md:flex-row flex-col items-center md:items-start gap-8 md:gap-16">
          <div className="flex flex-col gap-8 max-w-[600px] text-center md:text-left">
            <div
              ref={textContainerRef}
              className="text-slate-200 md:text-xl leading-relaxed flex flex-wrap gap-x-2 justify-center md:justify-start"
            ></div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Django", "Spring Boot","Hono", "Drizzle", "Python"].map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-300 text-sm rounded-full border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div
            ref={imageRef}
            className="overflow-hidden rounded-2xl w-[250px] h-[300px] md:w-[400px] md:h-[500px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl z-10"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur opacity-75"></div>
            <Image
              src="/image/foto-saya.jpg"
              alt="Nadhir Raihana Hafez"
              fill
              className="rounded-2xl object-cover relative z-20"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
