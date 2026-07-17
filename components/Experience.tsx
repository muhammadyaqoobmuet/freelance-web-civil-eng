"use client"

import React, { useRef, useState, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Briefcase, MapPin, Calendar, ChevronDown, CheckCircle2, FlaskConical, ExternalLink, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const experiences = [
  {
    role: "Summer Internship Emaar",
    company: "Emaar Properties PJSC",
    department: "Construction Management & Structural Oversight",
    duration: "60 Days // Summer",
    period: "Jun 2024 - Aug 2024",
    location: "Dubai, UAE",
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQFc_J018ba6xw/profile-treasury-image-shrink_800_800/B4DZ1OrXSNIcAY-/0/1775141484486?e=1775840400&v=beta&t=lNr3gpl76qU9HjKFGoQUliTJs2NPT03yejgovY8gd8s",
    shortDesc: "Experience in high-rise building construction and structural inspection protocols at Emaar projects.",
    fullDesc: "Contributed to structural oversight and quality control processes for a high-rise residential development. Observed large-scale concrete pouring, reinforcement inspection, and safety compliance according to international Emaar standards.",
    skills: ["High-rise Construction", "Quality Control", "Structural Inspection", "Safety Compliance"],
    tests: ["Concrete Slump Test", "Cube Compression Test", "Steel Grade Verification", "Rebar Spacing Analysis"]
  },
  {
    role: "Internship at FWO project",
    company: "Frontier Works Organization (FWO)",
    department: "Bridge Engineering & Infrastructure",
    duration: "45 Days // Professional",
    period: "Jan 2024 - Mar 2024",
    location: "Karachi, Sindh, PK",
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQGWzMOwGM7Gqg/profile-treasury-image-shrink_800_800/B4DZ1OQsaaIYAY-/0/1775134493540?e=1775844000&v=beta&t=TzCaK8Wv9Kv9UKRh-R1Q8gqXMUR6xEUnTk8w8pvLvag",
    shortDesc: "Focus on military-grade infrastructure speed and structural durability in major highway projects.",
    fullDesc: "Worked alongside FWO engineers on a strategic highway bridge project. Focused on rapid infrastructure deployment, structural durability assessment, and logistical coordination for large-scale engineering equipment.",
    skills: ["Infrastructure Logistics", "Bridge Site Supervision", "Durability Assessment", "Rapid Deployment Strategies"],
    tests: ["Soil Compaction", "Pile Load Test", "Non-Destructive Testing (NDT)", "Alignment Verification"]
  },
  {
    role: "Summer Internship",
    company: "Executive Engineer Highway Division Jamshoro",
    department: "Work and Service Department, Government of Sindh",
    duration: "56 Days // Summer",
    period: "May 2025 - Jul 2025",
    location: "Kotri, Sindh, PK",
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQFc_J018ba6xw/profile-treasury-image-shrink_800_800/B4DZ1OrXSNIcAY-/0/1775141484486?e=1775840400&v=beta&t=lNr3gpl76qU9HjKFGoQUliTJs2NPT03yejgovY8gd8s",
    shortDesc: "Hands-on exposure to highway engineering, road construction procedures, and field supervision.",
    fullDesc: "Successfully completed a 56-day summer internship under the supervision of the Assistant Engineer Highway Sub-Division Taluka Kotri. The program provided deep practical exposure to infrastructure development, site inspection protocols, and quality control measures in real-world environments.",
    skills: ["Site Supervision", "Quality Control Awareness", "Road Drawing Interpretation", "Material Inspection", "Pavement Layers"],
    tests: [
      "California Bearing Ratio (CBR)", "Modified Proctor Compaction", "Grain Size Analysis", "Atterberg Limits",
      "Specific Gravity", "Aggregate Crushing Value (ACV)", "Aggregate Impact Value (AIV)", "Los Angeles Abrasion",
      "Flakiness & Elongation Index", "Water Absorption", "Bitumen Penetration", "Ductility", "Marshall Stability",
      "Bitumen Extraction", "Sand Cone (Field Density)", "Core Cutter", "Plate Load", "Benkelman Beam Deflection",
      "Pavement Thickness", "Asphalt Core Cutting"
    ]
  },
  {
    role: "Winter Internship",
    company: "Executive Engineer Highway Division Jamshoro",
    department: "Work and Service Department, Government of Sindh",
    duration: "14 Days // Winter",
    period: "Dec 2024",
    location: "Kotri, Sindh, PK",
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQGWzMOwGM7Gqg/profile-treasury-image-shrink_800_800/B4DZ1OQsaaIYAY-/0/1775134493540?e=1775844000&v=beta&t=TzCaK8Wv9Kv9UKRh-R1Q8gqXMUR6xEUnTk8w8pvLvag",
    shortDesc: "Observation of field operations, material usage, and engineering responsibilities in safety/quality maintenance.",
    fullDesc: "Completed a 14-day winter internship focused on site inspection procedures and basic project management. This experience bridged the gap between structural theory and real-world application, fostering professional confidence and teamwork in a government engineering division.",
    skills: ["Field Operations", "Material Utilization", "Site Inspection", "Structural Connectivity", "Safety Standards"],
    tests: ["Site Supervision", "Basic Project Management", "Material Quality Checks"]
  }
]

export function Experience() {
  const container = useRef<HTMLDivElement>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 500)
  }, [])

  useGSAP(() => {
    if (!mounted) return

    gsap.from(".exp-item", {
      y: 20,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".exp-list",
        start: "top 95%",
        toggleActions: "play none none reverse"
      }
    })
  }, { scope: container, dependencies: [mounted] })

  if (!mounted) return null

  return (
    <section id="experience" ref={container} className="py-24 px-6 relative overflow-hidden bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 text-[10px] font-mono uppercase tracking-[0.4em] text-foreground/40">
            <Briefcase className="w-3 h-3" />
            Industrial Exposure
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
            Field <br /> <span className="font-serif italic font-light lowercase opacity-30">Experience.</span>
          </h2>
        </div>

        <div className="exp-list space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={cn(
                "exp-item group relative p-1 transition-all duration-500 rounded-[2rem] border overflow-hidden card",
                expandedIndex === i
                  ? "border-foreground/15 shadow-card"
                  : "border-border hover:border-foreground/10 hover:shadow-soft"
              )}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                className="w-full text-left p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-[9px] font-mono uppercase tracking-widest text-foreground/40 opacity-60">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                      <span className="w-1 h-1 rounded-full bg-current" />
                      <span className="text-foreground font-bold">{exp.duration}</span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-tight">
                      {exp.role.split(' ').map((word, idx) => (
                        idx === 1 ? <span key={idx} className="font-serif italic font-light lowercase opacity-40"> {word} </span> : word
                      ))}
                    </h3>
                  </div>
                  <div className={cn(
                    "w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-500",
                    expandedIndex === i ? "bg-foreground text-background rotate-180" : "bg-muted"
                  )}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 text-xs font-medium">
                  <div className="flex items-center gap-2 text-foreground/40">
                    <Building2 className="w-3.5 h-3.5 opacity-40" />
                    {exp.company}
                  </div>
                  <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-foreground/10" />
                  <div className="flex items-center gap-2 text-foreground/40">
                    <MapPin className="w-3.5 h-3.5 opacity-40" />
                    {exp.location}
                  </div>
                </div>
              </button>

              <div className={cn(
                "grid transition-all duration-500 ease-in-out px-8 md:px-10",
                expandedIndex === i ? "grid-rows-[1fr] opacity-100 pb-10" : "grid-rows-[0fr] opacity-0"
              )}>
                <div className="overflow-hidden">
                  <div className="pt-10 border-t border-border grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-7 space-y-10">
                      <div className="space-y-4">
                        <p className="text-[9px] font-mono uppercase tracking-[0.4em] opacity-40 italic">Industrial Observation</p>
                        <p className="text-lg md:text-xl leading-relaxed font-light text-foreground/60 text-balance">
                          {exp.fullDesc}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h4 className="flex items-center gap-3 font-bold text-[10px] uppercase tracking-widest opacity-80">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Core Competencies
                          </h4>
                          <ul className="space-y-2">
                            {exp.skills.map((skill) => (
                              <li key={skill} className="text-[11px] font-medium opacity-60 flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-foreground opacity-20" />
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {exp.tests && (
                          <div className="space-y-4">
                            <h4 className="flex items-center gap-3 font-bold text-[10px] uppercase tracking-widest opacity-80">
                              <FlaskConical className="w-3.5 h-3.5" /> QC Tests
                            </h4>
                            <ul className="space-y-2 h-40 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-foreground/10 text-foreground/60">
                              {exp.tests.map((test) => (
                                <li key={test} className="text-[9px] font-mono opacity-80">
                                  {"//"} {test}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="lg:col-span-5 space-y-6">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-lg border border-foreground/5">
                        <Image
                          src={exp.image}
                          alt="Internship Certificate Preview"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-[8px] font-mono uppercase tracking-[0.3em] opacity-40">Ref: Treasury_{i + 1}_Jamshoro</p>
                        <a
                          href={exp.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.2em] text-foreground font-bold hover:underline"
                        >
                          Open Doc <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
