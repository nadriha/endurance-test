"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ZoomHello() {
  const containerRef = useRef<HTMLDivElement>(null)
  const helloRef = useRef<HTMLHeadingElement>(null)
  const newPageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const hello = helloRef.current
    const newPage = newPageRef.current

    if (!container || !hello || !newPage) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true
      },
    })

    tl.to(hello, {
      scale: 60,
      x: "-1550%",
      y: "-600%",
      ease: "power2.inOut",
    }).to(
        hello,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=0.3"
      )
    .fromTo(
        newPage,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.5"
      )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="h-screen flex bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 justify-center place-items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          ref={helloRef}
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-9xl font-bold"
        >
          Hello!
        </h1>
      </div>
      <div ref={newPageRef} className="absolute inset-0 flex justify-center items-center opacity-0 z-0">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 md:text-8xl text-6xl font-bold">
            I&apos;m Nadhira!
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A passionate web developer, continuously learning and growing.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-sm font-medium">
              Frontend Developer
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
