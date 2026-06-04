"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  DraftingCompass, 
  Ruler, 
  Layers, 
  Map, 
  Layout, 
  Grid3X3, 
  Building2, 
  Zap, 
  Droplets, 
  Calculator,
  ArrowUpRight
} from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const services = [
  {
    title: "Structural Design & Analysis",
    description: "Comprehensive structural modeling and performance evaluation using ETABS and advanced computational tools.",
    icon: Layers,
    id: "01"
  },
  {
    title: "Site Plan",
    description: "Detailed plot layout including boundaries, access points, and landscape integration for optimal site usage.",
    icon: Map,
    id: "02"
  },
  {
    title: "Layout Plan",
    description: "Strategic spatial planning and functional organization of residential and commercial spaces.",
    icon: Layout,
    id: "03"
  },
  {
    title: "Floor Plan",
    description: "Precise architectural floor designs focusing on workflow, ergonomics, and efficient space utilization.",
    icon: Grid3X3,
    id: "04"
  },
  {
    title: "Structural Plan",
    description: "Technical drafting of foundations, beams, columns, and slabs with strict adherence to safety codes.",
    icon: Building2,
    id: "05"
  },
  {
    title: "Electrical Plan",
    description: "Integration of electrical circuits, power distribution, and lighting layout for safe and efficient operation.",
    icon: Zap,
    id: "06"
  },
  {
    title: "Plumbing Plan",
    description: "Designing water supply and drainage systems with optimal routing and pressure management.",
    icon: Droplets,
    id: "07"
  },
  {
    title: "Quantity Surveying",
    description: "Accurate estimation, BOQ preparation, and cost analysis for infrastructure and building projects.",
    icon: Calculator,
    id: "08"
  }
]

export function Services() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".service-card", {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%",
      }
    })
  }, { scope: container })

  return (
    <section id="services" ref={container} className="py-32 px-6 border-t border-foreground/5 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.4em] text-secondary">
            <DraftingCompass className="w-3 h-3" />
            Core Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.95] max-w-2xl">
            Technical <br />
            <span className="font-serif italic font-light text-secondary opacity-40">
              Services Offered.
            </span>
          </h2>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="service-card group bg-background p-8 min-h-[320px] flex flex-col justify-between hover:bg-secondary/5 transition-colors duration-500"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <service.icon className="w-8 h-8 text-foreground/40 group-hover:text-foreground transition-colors duration-500" strokeWidth={1} />
                  <span className="font-mono text-[9px] text-secondary opacity-30">{service.id}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold tracking-tighter uppercase leading-none">
                    {service.title}
                  </h3>
                  <p className="text-sm text-secondary font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <div className="flex items-end justify-between pt-8 border-t border-foreground/5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span className="text-[10px] font-mono tracking-widest uppercase">Expertise // Professional</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
