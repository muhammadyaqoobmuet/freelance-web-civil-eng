"use client"

import React, { useRef, useState, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ArrowLeft, GraduationCap, ChevronDown } from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { cn } from "@/lib/utils"

gsap.registerPlugin(useGSAP)

const educationData = [
  {
    id: "muet",
    title: "Bachelor's in Civil Engineering",
    institution: "Mehran University of Engineering & Technology (MUET), Jamshoro",
    period: "Nov 2022 – Dec 2026",
    status: "Continuing",
    statusColor: "text-green-500 border-green-500/30",
    note: "7th Semester Active",
    details: [
      {
        label: "Semester 01",
        content: "Applied Physics · Calculus · English Composition · Engineering Drawing"
      },
      {
        label: "Semester 02",
        content: "Chemistry · Linear Algebra · Workshop Practice · Programming Fundamentals"
      },
      {
        label: "Semester 03",
        content: "Fluid Mechanics · Surveying · Engineering Mechanics · Concrete Technology"
      },
      {
        label: "Semester 04",
        content: "Structural Analysis I · Soil Mechanics · Hydraulics · Transportation Engineering"
      },
      {
        label: "Semester 05",
        content: "Structural Analysis II · Foundation Engineering · Environmental Engineering · Irrigation Engineering"
      },
      {
        label: "Semester 06",
        content: "Steel Structure Design · RCC Design · Highway Engineering · Construction Management"
      },
      {
        label: "Semester 07 — Current",
        content: "Project Management · Quantity Surveying · Earthquake Engineering · Final Year Project I",
        active: true
      }
    ]
  },
  {
    id: "aiou",
    title: "Associate of Arts (A.D)",
    institution: "Allama Iqbal Open University (AIOU)",
    period: "Sep 2023 – Dec 2025",
    status: "Upcoming",
    statusColor: "text-yellow-500 border-yellow-500/30",
    note: "",
    details: [
      { label: "Year 1 — Semester 01", content: "English I · Mass Communication · General Science" },
      { label: "Year 1 — Semester 02", content: "English II · Psychology · Statistics" },
      { label: "Year 2 — Semester 03", content: "Sociology · Islamic Studies · Elective I" },
      { label: "Year 2 — Semester 04", content: "Final Thesis · Pak Studies · Elective II" }
    ]
  },
  {
    id: "gct",
    title: "Diploma of Associate Electrical Engineering",
    institution: "Government College of Technology, Hyderabad",
    period: "Jan 2021 – May 2024",
    status: "Completed",
    statusColor: "text-blue-400 border-blue-400/30",
    note: "",
    details: [
      { label: "Semester 01–02", content: "Mathematics · Physics · Applied Chemistry · Engineering Drawing" },
      { label: "Semester 03–04", content: "Electrical Circuits · Digital Electronics · Instrumentation · Microprocessors" },
      { label: "Semester 05–06", content: "AC Machines · Power Electronics · Control Systems · Switchgear & Protection · Final Project" }
    ]
  },
  {
    id: "intermediate",
    title: "Intermediate",
    institution: "Board of Intermediate Education, Sindh",
    period: "2018 – 2020",
    status: "Completed",
    statusColor: "text-blue-400 border-blue-400/30",
    note: "",
    details: [
      { label: "Subjects", content: "Physics · Chemistry · Mathematics · English · Urdu · Islamiat" }
    ]
  },
  {
    id: "matric",
    title: "Matriculation",
    institution: "Board of Secondary Education, Sindh",
    period: "2016 – 2018",
    status: "Completed",
    statusColor: "text-blue-400 border-blue-400/30",
    note: "",
    details: [
      { label: "Subjects", content: "Mathematics · Physics · Chemistry · Biology · English · Urdu · Islamiat" }
    ]
  }
]

export default function EducationPage() {
  const container = useRef<HTMLDivElement>(null)
  const [openId, setOpenId] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useGSAP(() => {
    if (!mounted) return
    gsap.fromTo(".edu-card", 
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.1
      }
    )
  }, { scope: container, dependencies: [mounted] })

  if (!mounted) return null

  return (
    <div ref={container} className="bg-transparent min-h-screen text-foreground">
      <Navbar />

      <main className="pt-36 pb-32 px-6">
        <div className="max-w-3xl mx-auto space-y-12">

          {/* Back */}
          <Link href="/" className="inline-flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.4em] text-secondary hover:text-foreground transition-all group">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Home
          </Link>

          {/* Header */}
          <div className="space-y-4 border-b border-foreground/5 pb-10">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.4em] text-secondary">
              <GraduationCap className="w-3.5 h-3.5" />
              Academic Profile
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
              Education &amp;<br />
              <span className="font-serif italic font-light normal-case opacity-30 text-3xl md:text-5xl">Academic Degrees.</span>
            </h1>
            <p className="text-sm md:text-base text-secondary font-light leading-relaxed max-w-xl">
              A five-stage academic journey spanning Civil Engineering, Electrical Technology, Liberal Arts,
              and foundational sciences — structured for professional excellence.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {educationData.map((edu, idx) => (
              <div
                key={edu.id}
                className={cn(
                  "edu-card rounded-2xl border overflow-hidden transition-all duration-300",
                  openId === edu.id
                    ? "border-foreground/20 bg-muted/30 dark:bg-zinc-900/50"
                    : "border-foreground/10 bg-muted/10 dark:bg-zinc-900/20 hover:border-foreground/15"
                )}
              >
                {/* Header button */}
                <button
                  onClick={() => setOpenId(openId === edu.id ? null : edu.id)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left"
                >
                  {/* Index */}
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center text-[10px] font-mono font-bold opacity-40">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm md:text-base font-bold tracking-tight">{edu.title}</p>
                    <p className="text-[10px] text-secondary opacity-50 truncate mt-0.5">{edu.institution}</p>
                  </div>

                  {/* Right */}
                  <div className="shrink-0 flex items-center gap-3">
                    <div className="hidden sm:flex flex-col items-end">
                      <span className={`text-[8px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border ${edu.statusColor}`}>
                        {edu.status}
                      </span>
                      {edu.note && (
                        <span className="text-[8px] font-mono text-green-500 mt-1">{edu.note}</span>
                      )}
                    </div>
                    <span className="text-[9px] font-mono opacity-30 hidden md:block">{edu.period}</span>
                    <ChevronDown className={cn(
                      "w-4 h-4 opacity-40 transition-transform duration-300 shrink-0",
                      openId === edu.id ? "rotate-180" : ""
                    )} />
                  </div>
                </button>

                {/* Expandable details */}
                <div className={cn(
                  "grid transition-all duration-500 ease-in-out",
                  openId === edu.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-2 border-t border-foreground/5 space-y-2">
                      {edu.details.map((d) => (
                        <div key={d.label} className={cn(
                          "flex flex-col sm:flex-row sm:gap-6 p-4 rounded-xl",
                          d.active ? "bg-green-500/5 border border-green-500/10" : "bg-foreground/5"
                        )}>
                          <p className={cn(
                            "text-[10px] font-mono uppercase tracking-widest shrink-0 mb-1 sm:mb-0 sm:w-44",
                            d.active ? "text-green-500" : "opacity-40"
                          )}>
                            {d.label}
                          </p>
                          <p className="text-xs text-secondary leading-relaxed">{d.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
