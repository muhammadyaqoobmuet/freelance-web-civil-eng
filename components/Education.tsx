"use client"

import React, { useRef, useState, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GraduationCap, ArrowUpRight, BookOpen, Building2 } from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const semesters = [
  { num: "01", title: "Engineering Fundamentals", courses: ["Applied Physics", "Calculus", "English Composition", "Engineering Drawing"] },
  { num: "02", title: "Core Sciences", courses: ["Chemistry", "Linear Algebra", "Workshop Practice", "Programming Fundamentals"] },
  { num: "03", title: "Civil Core I", courses: ["Fluid Mechanics", "Surveying", "Engineering Mechanics", "Concrete Technology"] },
  { num: "04", title: "Civil Core II", courses: ["Structural Analysis I", "Soil Mechanics", "Hydraulics", "Transportation Engineering"] },
  { num: "05", title: "Structural Design", courses: ["Structural Analysis II", "Foundation Engineering", "Environmental Engineering", "Irrigation Engineering"] },
  { num: "06", title: "Advanced Design", courses: ["Steel Structure Design", "RCC Design", "Highway Engineering", "Construction Management"] },
  { num: "07", title: "Final Year I", courses: ["Project Management", "Quantity Surveying", "Earthquake Engineering", "Final Year Project I"] },
]

const others = [
  {
    inst: "Government College of Technology, Hyderabad",
    degree: "Diploma of Associate Engineering — Electrical Technology",
    period: "2021 – 2024",
    status: "Completed",
  },
  {
    inst: "Allama Iqbal Open University (AIOU)",
    degree: "Associate Degree in Arts",
    period: "2023 – 2025",
    status: "Upcoming Completion",
  }
]

export function Education() {
  const container = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    setTimeout(() => { ScrollTrigger.refresh() }, 500)
  }, [])

  useGSAP(() => {
    if (!mounted) return
    gsap.from(".sem-row", {
      y: 12,
      stagger: 0.06,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: ".sem-grid", start: "top 90%" }
    })
    gsap.from(".other-card", {
      y: 16,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: ".others-row", start: "top 92%" }
    })
  }, { scope: container, dependencies: [mounted] })

  if (!mounted) return null

  return (
    <section id="education" ref={container} className="py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* ── Heading ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.4em] text-secondary">
            <BookOpen className="w-3 h-3" />
            Academic Background
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
            Engineering <br />
            <span className="font-serif italic font-light lowercase opacity-30">Degrees &amp; Education.</span>
          </h2>

          <p className="text-base md:text-lg text-secondary font-light leading-relaxed max-w-2xl">
            A multi-disciplinary academic journey spanning Civil Engineering, Electrical Technology, and the Arts —
            built on a foundation of precision thinking, structural creativity, and lifelong learning.
            Currently in my <strong className="text-foreground font-semibold">7th Semester at MUET</strong>,
            working toward becoming a professionally certified Civil Engineer.
          </p>
        </div>

        {/* ── MUET Primary Card ── */}
        <div className="rounded-3xl border border-foreground/10 bg-muted/30 dark:bg-zinc-900/30 overflow-hidden">
          {/* Card Header */}
          <div className="p-8 md:p-10 border-b border-foreground/5 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest text-secondary">
                <span className="px-2 py-0.5 rounded-full border border-green-500/30 text-green-500 text-[8px] font-bold">● Continuing</span>
                <span className="opacity-40">2022 – 2026 &nbsp;//&nbsp; 7th Semester Active</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-tight">
                Mehran University of Engineering<br />
                <span className="text-foreground/40 font-serif italic font-light lowercase text-xl md:text-3xl">& Technology, Jamshoro</span>
              </h3>
              <p className="flex items-center gap-2 text-sm text-secondary font-medium">
                <GraduationCap className="w-4 h-4 opacity-60" />
                Bachelor of Engineering — Civil Engineering
              </p>
            </div>
            <Link
              href="/education"
              className="shrink-0 self-start flex items-center gap-2 px-5 py-2.5 border border-foreground/10 rounded-full text-[10px] font-mono uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Full Curriculum <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Semester Grid */}
          <div className="sem-grid divide-y divide-foreground/5">
            {semesters.map((sem) => (
              <div key={sem.num} className="sem-row flex flex-col sm:flex-row sm:items-center gap-4 px-8 md:px-10 py-5 hover:bg-foreground/5 transition-colors duration-200">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center">
                  <span className="text-[10px] font-mono font-bold opacity-50">{sem.num}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold tracking-tight mb-1">{sem.title}</p>
                  <p className="text-[10px] font-mono opacity-40 truncate">{sem.courses.join("  ·  ")}</p>
                </div>
                {sem.num === "07" && (
                  <span className="shrink-0 px-2 py-0.5 rounded-full border border-green-500/30 text-green-500 text-[8px] font-mono uppercase tracking-widest">
                    Current
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Other Degrees ── */}
        <div className="space-y-4">
          <p className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40 italic">Additional Academic Credentials</p>
          <div className="others-row grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((o) => (
              <div key={o.inst} className="other-card rounded-2xl border border-foreground/10 bg-muted/20 dark:bg-zinc-900/20 p-7 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-9 h-9 rounded-lg bg-foreground/5 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4 opacity-30" />
                  </div>
                  <span className={`text-[8px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border ${o.status === "Completed" ? "border-blue-500/30 text-blue-400" : "border-yellow-500/30 text-yellow-500"}`}>
                    {o.status}
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm md:text-base font-bold tracking-tight uppercase leading-snug">{o.inst}</h4>
                  <p className="text-xs text-secondary font-medium">{o.degree}</p>
                </div>
                <p className="text-[9px] font-mono opacity-30 tracking-widest">{o.period}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
