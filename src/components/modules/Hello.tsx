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
        pin: true,
        markers: true,
      },
    })

    tl.to(hello, {
      scale: 60,
      x: "-1650%",
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
    <div ref={containerRef} className="h-screen flex bg-gray-950 justify-center place-items-center">
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 ref={helloRef} className="text-white text-9xl font-bold">
                Hello!
            </h1>
        </div>
        <div ref={newPageRef} className="absolute inset-0 flex justify-center items-center opacity-0 z-0">
            <div className="text-center flex flex-col gap-2 ">
              <h1 className="text-white text-7xl font-bold">I&apos;m Nadhira!</h1>
              <p>A passionate web developer, continuously learning and growing.</p>
            </div>
        </div>
    </div>
  )
}
