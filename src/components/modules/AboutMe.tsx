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
        span.className = "text-segment lg:text-3xl text-white opacity-0 transform translate-y-2 inline-block"
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
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
      },
    )

    textElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: `top ${75 - index * 2}%`,
            end: `top ${50 - index * 2}%`,
            scrub: 1
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      textElements.forEach((el) => el.remove())
    }
  }, [])

  return (
    <div ref={sectionRef} className="bg-gray-950 flex justify-center items-start py-20 max-w-screen overflow-x-hidden">
      <div className="flex flex-col items-center max-w-7xl gap-8 sticky top-20">
        <h1 className="text-white text-6xl font-bold" ref={aboutMeRef}>
          About Me
        </h1>
        <div className="flex items-start gap-16">
          <div className="flex flex-col gap-8 max-w-[600px]">
            <div ref={textContainerRef} className="text-white text-xl leading-relaxed flex flex-wrap gap-x-2">
            </div>
          </div>
          <div ref={imageRef} className="overflow-hidden rounded-2xl w-[400px] h-[500px] relative">
            <Image
              src="/image/foto-saya.jpg"
              alt="Nadhir Raihana Hafez"
              fill
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
