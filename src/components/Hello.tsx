"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ZoomHello() {
  const containerRef = useRef<HTMLDivElement>(null)
  const helloRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const hello = helloRef.current
    if (!container || !hello) return

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
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="h-screen flex bg-gray-950 justify-center place-items-center"
    >
      <h1 ref={helloRef} className="text-white text-9xl font-bold">
        Hello!
      </h1>
    </div>
  )
}
