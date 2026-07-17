"use client"

import React, { useRef, useState, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GraduationCap, BookOpen, ArrowUpRight } from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const degrees = [
  {
    title: "Bachelor's in Civil Engineering",
    institution: "Mehran University of Engineering & Technology (MUET), Jamshoro",
    period: "Nov 2022 – Dec 2026",
    status: "Continuing",
    statusColor: "text-green-500 border-green-500/30",
    dot: "bg-green-500",
    note: "7th Semester Active"
  },
  {
    title: "Associate of Arts (A.D.)",
    institution: "Allama Iqbal Open University (AIOU)",
    period: "Sep 2023 – Dec 2025",
    status: "Upcoming",
    statusColor: "text-yellow-500 border-yellow-500/30",
    dot: "bg-yellow-500",
    note: ""
  },
  {
    title: "Diploma of Associate Electrical Engineering",
    institution: "Government College of Technology, Hyderabad",
    period: "Jan 2021 – May 2024",
    status: "Completed",
    statusColor: "text-blue-400 border-blue-400/30",
    dot: "bg-blue-400",
    note: ""
  },
  {
    title: "Intermediate (Pre-Engineering)",
    institution: "Board of Intermediate Education, Sindh",
    period: "2018 – 2020",
    status: "Completed",
    statusColor: "text-blue-400 border-blue-400/30",
    dot: "bg-blue-400",
    note: ""
  },
  {
    title: "Matriculation (Science Group)",
    institution: "Board of Secondary Education, Sindh",
    period: "2016 – 2018",
    status: "Completed",
    statusColor: "text-blue-400 border-blue-400/30",
    dot: "bg-blue-400",
    note: ""
  }
]

export function Education() {
  const container = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTimeout(() => { ScrollTrigger.refresh() }, 500)
  }, [])

  useGSAP(() => {
    if (!mounted) return
    gsap.from(".edu-row", {
      y: 14,
      opacity: 0,
      stagger: 0.08,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: ".edu-list", start: "top 90%" }
    })
  }, { scope: container, dependencies: [mounted] })

  if (!mounted) return null

  return (
    <section id="education" ref={container} className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.4em] text-foreground/40">
              <BookOpen className="w-3 h-3" />
              Academic Background
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">
              Education &amp; <br />
              <span className="font-serif italic font-light lowercase opacity-30">Academic Degrees.</span>
            </h2>
          </div>

          {/* CTA Button */}
          <Link
            href="/education"
            className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3 rounded-full text-[10px] font-mono uppercase tracking-widest border border-foreground/20 bg-foreground/5 hover:bg-foreground hover:text-background transition-all duration-300 shrink-0 group"
          >
            View Full Academic Record
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>

        {/* Degrees List */}
        <div className="edu-list rounded-2xl border border-border overflow-hidden divide-y divide-border card">
          {degrees.map((d, idx) => (
            <div
              key={idx}
              className="edu-row flex items-center gap-4 sm:gap-5 px-5 sm:px-6 py-5 sm:py-6 hover:bg-muted transition-colors duration-200"
            >
              {/* Index */}
              <span className="shrink-0 w-9 h-9 rounded-lg bg-foreground/5 flex items-center justify-center text-[10px] font-mono font-bold opacity-40">
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="shrink-0 w-10 h-10 rounded-xl bg-foreground/5 hidden sm:flex items-center justify-center">
                <GraduationCap className="w-5 h-5 opacity-40" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-base font-bold tracking-tight leading-snug">{d.title}</p>
                <p className="text-[11px] text-foreground/50 truncate mt-0.5">{d.institution}</p>
              </div>

              {/* Right side */}
              <div className="shrink-0 text-right hidden sm:block">
                <p className="text-[9px] font-mono opacity-40">{d.period}</p>
                {d.note && <p className="text-[8px] font-mono text-green-500 mt-0.5">{d.note}</p>}
              </div>

              {/* Status badge - desktop */}
              <span className={`shrink-0 text-[8px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${d.statusColor} hidden md:block`}>
                {d.status}
              </span>

              {/* Status dot - mobile */}
              <span className={`shrink-0 w-2 h-2 rounded-full ${d.dot} md:hidden`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
