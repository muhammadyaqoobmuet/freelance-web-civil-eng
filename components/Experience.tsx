"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Briefcase } from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const experiences = [
  {
    role: "Senior Structural Designer",
    company: "Metro Infrastructure Ltd",
    period: "2024 - Present",
    desc: "Leading structural analysis for complex infrastructure projects."
  },
  {
    role: "Junior Structural Engineer",
    company: "Urban Builders Group",
    period: "2023 - 2024",
    desc: "Detailed structural drafting and seismic verification."
  },
  {
    role: "Engineering Intern",
    company: "Global Construction Co.",
    period: "Summer 2022",
    desc: "On-site quality control and material stress testing."
  }
]

export function Experience() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".exp-item", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".exp-row",
        start: "top 80%",
      }
    })
  }, { scope: container })

  return (
    <section id="experience" ref={container} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24 space-y-4">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-secondary">
             <Briefcase className="w-3 h-3" />
             Professional History
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">WORK EXPERIENCE</h2>
        </div>

        <div className="exp-row divide-y divide-border">
          {experiences.map((exp) => (
            <div key={exp.company} className="exp-item py-12 grid grid-cols-1 md:grid-cols-12 gap-8 group">
              <div className="md:col-span-3">
                 <span className="font-mono text-xs text-secondary">{exp.period}</span>
              </div>
              <div className="md:col-span-6">
                 <h3 className="text-2xl font-bold group-hover:italic transition-all duration-300">{exp.role}</h3>
                 <p className="text-secondary mt-2 leading-relaxed">{exp.desc}</p>
              </div>
              <div className="md:col-span-3 text-right">
                 <span className="text-sm font-medium tracking-tight opacity-50 group-hover:opacity-100">{exp.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
