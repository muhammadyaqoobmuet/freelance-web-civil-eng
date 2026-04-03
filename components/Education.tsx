"use client"

import React, { useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BookOpen, ArrowUpRight } from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const educationSummary = [
  { year: "Fourth Year", focus: "Graduation & Specialization" },
  { year: "Third Year", focus: "Advanced Structural Analysis" },
  { year: "Second Year", focus: "Core Engineering Principles" },
  { year: "First Year", focus: "Foundational Sciences" }
]

export function Education() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const items = gsap.utils.toArray(".edu-item") as HTMLElement[]

    items.forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        x: -40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })
    })

    gsap.from(".edu-line", {
      scaleY: 0,
      transformOrigin: "top",
      scrollTrigger: {
        trigger: ".edu-line-container",
        start: "top 70%",
        end: "bottom 70%",
        scrub: 1.5
      }
    })
  }, { scope: container })

  return (
    <section id="education" ref={container} className="py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-secondary">
              <BookOpen className="w-3 h-3" />
              Academic Progression
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">THE ACADEMIC <br /> JOURNEY</h2>
          </div>

          <Link href="/education" className="group flex items-center gap-4 px-10 py-5 bg-muted border border-border rounded-full text-xs font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-all">
            View Full Curriculum <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        <div className="relative pl-12 md:pl-32 edu-line-container">
          <div className="absolute left-[20px] md:left-[31px] top-0 bottom-0 w-px bg-border/40">
            <div className="edu-line w-full h-full bg-foreground origin-top" />
          </div>

          <div className="space-y-32">
            {educationSummary.map((item, i) => (
              <div key={item.year} className="edu-item relative group">
                <div className="absolute -left-[24px] md:-left-[35px] top-2 w-[11px] h-[11px] bg-background border-2 border-border group-hover:border-foreground transition-colors rounded-full" />

                <div className="space-y-4">
                  <span className="font-mono text-sm tracking-[0.5em] text-secondary">0{4 - i} {"//"} LEVEL</span>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter group-hover:italic transition-all duration-500">{item.year}</h3>
                  <p className="text-xl text-secondary font-light max-w-sm">{item.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
