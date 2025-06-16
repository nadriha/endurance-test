"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const leftContentRef = useRef<HTMLDivElement>(null)
  const rightContentRef = useRef<HTMLDivElement>(null)
  const contactItemsRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const leftContent = leftContentRef.current
    const rightContent = rightContentRef.current
    const contactItems = contactItemsRef.current
    const form = formRef.current

    if (!section || !title || !leftContent || !rightContent || !contactItems || !form) return

    gsap.fromTo(
      title,
      {
        opacity: 0,
        y: -50,
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
      leftContent,
      {
        opacity: 0,
        x: -100,
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

    gsap.fromTo(
      rightContent,
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

    const contactItemElements = contactItems.querySelectorAll(".contact-item")
    gsap.fromTo(
      contactItemElements,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: contactItems,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      },
    )

    const formFields = form.querySelectorAll(".form-field")
    gsap.fromTo(
      formFields,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: form,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 relative md:px-0 px-4 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 overflow-hidden h-screen"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={titleRef}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-3xl sm:text-4xl font-bold text-center mb-12"
          >
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div ref={leftContentRef} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Let&apos;s work together</h3>
                <p className="md:text-lg text-slate-300 mb-6 text-justify leading-relaxed">
                  I&apos;m always interested in new opportunities and exciting projects. Whether you have a question or
                  just want to say hi, feel free to reach out!
                </p>
              </div>

              <div ref={contactItemsRef} className="space-y-4">
                <div className="contact-item flex items-center space-x-3 p-4 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-slate-200">hafez.nadhira@gmail.com</span>
                </div>
                <div className="contact-item flex items-center space-x-3 p-4 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-slate-200">+62 811 2004 041</span>
                </div>
                <div className="contact-item flex items-center space-x-3 p-4 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-slate-200">Depok, Indonesia</span>
                </div>
              </div>
            </div>

            <div ref={rightContentRef}>
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <CardHeader>
                  <CardTitle className="text-white">Send me a message</CardTitle>
                  <CardDescription className="text-slate-400">
                    I&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-field space-y-2">
                      <Label htmlFor="name" className="text-slate-200">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                      />
                    </div>
                    <div className="form-field space-y-2">
                      <Label htmlFor="email" className="text-slate-200">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                      />
                    </div>
                    <div className="form-field space-y-2">
                      <Label htmlFor="message" className="text-slate-200">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none"
                      />
                    </div>
                    <div className="form-field">
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
