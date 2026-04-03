"use client"

import React, { useRef, useState, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowLeft, GraduationCap, Building2, CheckCircle } from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const muetSemesters = [
  { num: "01", title: "Engineering Fundamentals", courses: ["Applied Physics", "Calculus", "English Composition", "Engineering Drawing"] },
  { num: "02", title: "Core Sciences", courses: ["Chemistry", "Linear Algebra", "Workshop Practice", "Programming Fundamentals"] },
  { num: "03", title: "Civil Core I", courses: ["Fluid Mechanics", "Surveying", "Engineering Mechanics", "Concrete Technology"] },
  { num: "04", title: "Civil Core II", courses: ["Structural Analysis I", "Soil Mechanics", "Hydraulics", "Transportation Engineering"] },
  { num: "05", title: "Structural Design", courses: ["Structural Analysis II", "Foundation Engineering", "Environmental Engineering", "Irrigation Engineering"] },
  { num: "06", title: "Advanced Design", courses: ["Steel Structure Design", "RCC Design", "Highway Engineering", "Construction Management"] },
  { num: "07", title: "Final Year I — Active", courses: ["Project Management", "Quantity Surveying", "Earthquake Engineering", "Final Year Project I"] },
]

const staticDegrees = [
  {
    inst: "Government College of Technology, Hyderabad",
    degree: "Diploma of Associate Engineering — Electrical Technology",
    period: "Jan 2021 – May 2024",
    status: "Completed",
    color: "text-blue-400 border-blue-400/30",
    bg: "bg-blue-500/5",
  },
  {
    inst: "Allama Iqbal Open University (AIOU)",
    degree: "Associate Degree in Arts",
    period: "Sep 2023 – Dec 2025",
    status: "Upcoming Completion",
    color: "text-yellow-400 border-yellow-400/30",
    bg: "bg-yellow-500/5",
  }
]

export default function EducationPage() {
  const container = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  useGSAP(() => {
    gsap.from(".header-content", { y: 30, opacity: 0, duration: 1, ease: "power3.out" })
    gsap.from(".sem-row", {
      y: 12, stagger: 0.06, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: ".sem-table", start: "top 90%" }
    })
    gsap.from(".static-card", {
      y: 16, stagger: 0.1, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: ".static-grid", start: "top 92%" }
    })
  }, { scope: container })

  if (!mounted) return null

  return (
    <div ref={container} className="bg-background min-h-screen text-foreground transition-colors duration-500">
      <Navbar />

      <main className="pt-36 pb-32 px-6">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* Back link */}
          <Link href="/" className="inline-flex items-center gap-3 text-[9px] font-mono uppercase tracking-[0.4em] text-secondary hover:text-foreground transition-all group">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Home
          </Link>

          {/* ── Header ── */}
          <div className="header-content space-y-8">
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.4em] text-secondary">
              <GraduationCap className="w-3.5 h-3.5" />
              Academic Profile
            </div>

            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              Engineering<br />
              <span className="font-serif italic font-light normal-case opacity-30 text-3xl md:text-6xl">degrees &amp; education</span>
            </h1>

            <p className="text-base md:text-lg text-secondary font-light leading-relaxed max-w-2xl border-l-2 border-foreground/10 pl-5">
              A rigorous multi-disciplinary academic record spanning Civil Engineering, Electrical Technology,
              and Arts — grounded in analytical thinking and real-world engineering application.
              Currently in my <strong className="text-foreground font-semibold">7th Semester at MUET</strong>,
              pursuing a Bachelor of Engineering in Civil Engineering, with concurrent credentials from two additional institutions.
            </p>
          </div>

          {/* ── MUET Primary Block ── */}
          <div className="rounded-3xl border border-foreground/10 bg-muted/20 dark:bg-zinc-900/30 overflow-hidden">
            {/* Institution Header */}
            <div className="p-8 md:p-10 border-b border-foreground/5">
              <div className="flex flex-col md:flex-row md:items-start gap-6 justify-between">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-green-500/30 text-green-500 text-[8px] font-mono uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Continuing — 7th Semester Active
                  </span>
                  <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-tight">
                    Mehran University of<br />Engineering &amp; Technology
                  </h2>
                  <p className="flex items-center gap-2 text-sm text-secondary font-medium">
                    <GraduationCap className="w-4 h-4 opacity-50" />
                    B.E. Civil Engineering &nbsp;·&nbsp; 2022 – 2026
                  </p>
                </div>
                <div className="text-[9px] font-mono text-secondary opacity-40 shrink-0 md:text-right">
                  Jamshoro, Sindh<br />Government of Pakistan
                </div>
              </div>
            </div>

            {/* Semester Table */}
            <div className="sem-table divide-y divide-foreground/5">
              {muetSemesters.map((sem) => (
                <div key={sem.num} className="sem-row flex flex-col sm:flex-row sm:items-center gap-4 px-8 md:px-10 py-5 hover:bg-foreground/5 transition-colors duration-200">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center">
                    <span className="text-[10px] font-mono font-bold opacity-50">{sem.num}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold tracking-tight mb-1">{sem.title}</p>
                    <p className="text-[10px] font-mono opacity-40 truncate">{sem.courses.join("  ·  ")}</p>
                  </div>
                  {sem.num === "07" && (
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Static Degrees ── */}
          <div className="space-y-5">
            <p className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40">Additional Academic Credentials</p>
            <div className="static-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              {staticDegrees.map((d) => (
                <div key={d.inst} className={`static-card rounded-2xl border border-foreground/10 ${d.bg} p-7 space-y-4`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-9 h-9 rounded-lg bg-foreground/5 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4 opacity-30" />
                    </div>
                    <span className={`text-[8px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border ${d.color}`}>
                      {d.status}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-sm md:text-base font-bold tracking-tight uppercase leading-snug">{d.inst}</h3>
                    <p className="text-xs text-secondary font-medium">{d.degree}</p>
                  </div>
                  <p className="text-[9px] font-mono opacity-30 tracking-widest">{d.period}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
