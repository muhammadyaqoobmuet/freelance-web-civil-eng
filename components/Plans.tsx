"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Compass, Maximize2, Download, Ruler, FileText, Move } from "lucide-react"
import { cn } from "@/lib/utils"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const plans = [
  { 
    title: "Foundation Layout", 
    type: "Structural / Concrete", 
    ref: "ST-001",
    desc: "Primary load-bearing foundation map with reinforcement specifications."
  },
  { 
    title: "Column Matrix", 
    type: "Structural / Vertical", 
    ref: "ST-012",
    desc: "Axial load distribution and reinforcement detailing for multi-story support."
  },
  { 
    title: "Roof Truss System", 
    type: "Steel / Specialized", 
    ref: "ST-045",
    desc: "Long-span steel truss geometry and connection detailing."
  },
  { 
    title: "Staircase Geometry", 
    type: "Architectural / Structural", 
    ref: "AR-102",
    desc: "Precise riser-tread calculations with integrated structural support."
  },
  { 
    title: "Drainage Network", 
    type: "Civil / Infrastructure", 
    ref: "CV-301",
    desc: "Hydraulic flow analysis and pipe network mapping."
  },
  { 
    title: "Retaining Wall Section", 
    type: "Geotechnical / Structural", 
    ref: "GT-005",
    desc: "Soil pressure equilibrium and wall stability detailing."
  }
]

export function Plans() {
  return (
    <section className="py-24 px-6 relative bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] font-mono uppercase tracking-[0.4em] text-secondary">
            <Ruler className="w-3 h-3" />
            Technical Blueprint Archive
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
            Structural <br /> <span className="font-serif italic font-light lowercase opacity-30 text-3xl md:text-5xl">Drafting.</span>
          </h2>
        </div>

        <div className="plan-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <div
              key={plan.ref}
              className="plan-card group relative bg-muted/20 dark:bg-zinc-900/40 border border-foreground/5 rounded-4xl p-8 hover:border-foreground/20 transition-all duration-700 overflow-hidden opacity-100 transform-none"
            >
              {/* Internal Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                    <Compass className="w-6 h-6 opacity-30 group-hover:opacity-100 transition-all group-hover:rotate-45" />
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] font-bold opacity-30">{plan.ref}</span>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-secondary opacity-50">{plan.type}</p>
                  <h3 className="text-xl font-bold tracking-tight uppercase leading-tight group-hover:text-primary transition-colors">
                    {plan.title}
                  </h3>
                </div>

                <p className="text-xs leading-relaxed opacity-60 font-light line-clamp-2">
                  {plan.desc}
                </p>

                <div className="pt-6 border-t border-foreground/5 flex items-center justify-between">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-[9px] font-mono uppercase font-bold hover:text-secondary transition-colors">
                      <Maximize2 className="w-3 h-3" /> View Detail
                    </button>
                    <button className="flex items-center gap-2 text-[9px] font-mono uppercase font-bold hover:text-secondary transition-colors">
                      <FileText className="w-3 h-3" /> PDF Info
                    </button>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background hover:scale-110 transition-transform">
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Decorative Blue-Print Marker */}
              <div className="absolute top-1/2 -right-4 w-12 h-px bg-foreground/10 rotate-90" />
            </div>
          ))}
        </div>

        {/* Technical Footer marker */}
        <div className="mt-16 flex items-center gap-4 opacity-10">
           <div className="h-px flex-1 bg-foreground" />
           <p className="text-[8px] font-mono uppercase tracking-[0.5em]">Scale 1:100 @ A3 // ISO 9001 Certified Drafting</p>
           <div className="h-px flex-1 bg-foreground" />
        </div>
      </div>
    </section>
  )
}
