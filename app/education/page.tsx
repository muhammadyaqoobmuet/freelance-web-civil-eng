"use client"

import React, { useRef, useState, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ArrowLeft, ChevronDown, GraduationCap } from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

gsap.registerPlugin(useGSAP)

const detailedEducation = [
  {
    year: "Fourth Year",
    status: "Specialization",
    semesters: [
      { num: "Semester 7", courses: ["Design of Steel Structures", "Sustainable Infrastructure", "Hydraulic Engineering", "Civil Engineering Project I"] },
      { num: "Semester 8", courses: ["Foundation Engineering", "Earthquake Engineering", "Bridge Engineering", "Civil Engineering Project II"] }
    ]
  },
  {
    year: "Third Year",
    status: "Advanced Engineering",
    semesters: [
      { num: "Semester 5", courses: ["Structural Analysis II", "Geotechnical Engineering I", "Transportation Engineering I", "Quantity Surveying"] },
      { num: "Semester 6", courses: ["Design of Concrete Structures", "Geotechnical Engineering II", "Hydrology & Water Resources", "Project Management"] }
    ]
  },
  {
    year: "Second Year",
    status: "Core Principles",
    semesters: [
      { num: "Semester 3", courses: ["Strength of Materials", "Structural Analysis I", "Fluid Mechanics", "Surveying & Levelling"] },
      { num: "Semester 4", courses: ["Applied Mechanics", "Concrete Technology", "Transportation Engineering II", "Building Construction"] }
    ]
  },
  {
    year: "First Year",
    status: "Foundational Sciences",
    semesters: [
      { num: "Semester 1", courses: ["Engineering Mathematics I", "Engineering Physics", "Basics of Civil Engineering", "Computing Tools"] },
      { num: "Semester 2", courses: ["Engineering Mathematics II", "Engineering Chemistry", "Engineering Mechanics", "Technical Communication"] }
    ]
  }
]

export default function EducationPage() {
  const container = useRef<HTMLDivElement>(null)
  const [openYear, setOpenYear] = useState<string | null>("Fourth Year")
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.5 } })
    tl.from(".header-content", { y: 60, opacity: 0 })
      .from(".year-card", { opacity: 0, y: 30, stagger: 0.1 }, "-=1")
  }, { scope: container })

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  return (
    <div ref={container} className="bg-background min-h-screen transition-colors duration-500">
      <Navbar />

      <main className="pt-40 pb-40 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="header-content space-y-10 mb-24 md:mb-32 text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-3 text-[9px] font-mono uppercase tracking-[0.4em] text-foreground/40 hover:text-foreground transition-all group">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-2 transition-transform" /> Dashboard
            </Link>

            <div className="space-y-6">
              <div className="flex items-center gap-4 opacity-15">
                <GraduationCap className="w-6 h-6" />
                <div className="flex-1 h-px bg-foreground" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase flex flex-col">
                <span>Structural</span>
                <span className="font-serif italic font-light lowercase opacity-30 mt-1">Curriculum.</span>
              </h1>
            </div>
          </div>

          <div className="space-y-8">
            {detailedEducation.map((item) => (
              <div
                key={item.year}
                className={cn(
                  "year-card transition-all duration-1000 overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border",
                  openYear === item.year ? (isDark ? "border-white/20" : "border-black/20") : (isDark ? "border-white/5" : "border-black/5")
                )}
                style={{
                  backgroundColor: openYear === item.year ? (isDark ? "#FFFFFF" : "#000000") : (isDark ? "#0A0A0A" : "#F8F8F8"),
                  color: openYear === item.year ? (isDark ? "#000000" : "#FFFFFF") : (isDark ? "#FFFFFF" : "#000000"),
                  opacity: 1
                }}
              >
                <button
                  onClick={() => setOpenYear(openYear === item.year ? null : item.year)}
                  className="w-full flex items-center justify-between p-8 md:p-14 text-left group"
                >
                  <div className="space-y-2">
                    <p className={cn("text-[9px] font-mono uppercase tracking-[0.3em] font-bold", openYear === item.year ? "opacity-30" : "opacity-15")}>{item.status}</p>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">{item.year}</h2>
                  </div>
                  <div className={cn(
                    "w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-1000",
                    openYear === item.year
                      ? (isDark ? "border-black/10 bg-black text-white" : "border-white/10 bg-white text-black")
                      : "border-foreground/10 group-hover:bg-foreground group-hover:text-background"
                  )}>
                    <ChevronDown className="w-8 h-8" />
                  </div>
                </button>

                <div className={cn(
                  "grid transition-all duration-500 ease-in-out",
                  openYear === item.year ? "grid-rows-[1fr] opacity-100 mb-14 mx-8 md:mx-14" : "grid-rows-[0fr] opacity-0"
                )}>
                  <div className="overflow-hidden">
                    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 pt-14 border-t", openYear === item.year ? "border-foreground/5" : "border-foreground/5")}>
                      {item.semesters.map((sem) => (
                        <div key={sem.num} className="space-y-10">
                          <div className="flex items-center gap-4">
                            <div className={cn("w-2 h-2 rounded-full", openYear === item.year ? "opacity-15" : "bg-foreground/15")} />
                            <h4 className="font-black text-2xl uppercase tracking-tighter leading-none">{sem.num}</h4>
                          </div>
                          <ul className="space-y-4">
                            {sem.courses.map((course) => (
                              <li key={course} className="flex items-start group/item">
                                <span className={cn("text-lg transition-all tracking-tight font-bold leading-tight opacity-80 group-hover/item:opacity-100 group-hover/item:translate-x-2")}>
                                  {course}
                                </span>
                              </li>
                            ))}
                          </ul>
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
