"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { DraftingCompass, Ruler, Construction, HardHat, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function Hero() {
  const container = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    ScrollTrigger.refresh()
  }, [])

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } })

    tl.from(titleRef.current, {
      y: 60,
      opacity: 0,
      skewY: 3,
      duration: 1.2
    })
      .from(subRef.current, {
        y: 30,
        opacity: 0
      }, "-=0.8")
      .from(btnRef.current, {
        y: 20,
        opacity: 0
      }, "-=0.6")
      .from(".hero-line", {
        scaleX: 0,
        stagger: 0.15,
        transformOrigin: "left"
      }, "-=1")
      .from(".hero-icon", {
        scale: 0,
        opacity: 0,
        stagger: 0.08,
        ease: "back.out(1.7)"
      }, "-=0.8")
  }, { scope: container })

  return (
    <section ref={container} className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-24 overflow-hidden">
      {/* Decorative Ruler */}
      <div className="absolute top-20 left-0 right-0 h-6 flex items-end pointer-events-none opacity-10">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className={cn("border-l border-foreground h-1.5", i % 5 === 0 ? "h-3" : i % 10 === 0 ? "h-4" : "")} style={{ width: '2.5%' }} />
        ))}
      </div>

      {/* Structural Background Accents */}
      <div className="absolute top-0 right-0 w-[40%] h-full border-l border-border/30 -skew-x-15 pointer-events-none transform translate-x-1/2 opacity-15" />
      <div className="absolute bottom-0 left-0 w-[40%] h-full border-r border-border/30 skew-x-15 pointer-events-none transform -translate-x-1/2 opacity-15" />

      <div className="max-w-3xl w-full text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="hero-line w-10 h-px bg-foreground/15" />
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-secondary">Expert // Structural // Innovation</span>
          <div className="hero-line w-10 h-px bg-foreground/15" />
        </div>

        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-8 overflow-hidden text-balance">
          ARSLAN <span className="font-serif italic font-medium opacity-70">JAVED</span>
        </h1>

        <p ref={subRef} className="text-lg md:text-xl text-secondary max-w-xl mx-auto mb-10 leading-relaxed font-light">
           Civil Engineer specializing in <span className="text-foreground font-medium underline underline-offset-4 decoration-border/50">resilient infrastructure</span> and innovative computational design.
        </p>

        <div ref={btnRef} className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link href="/projects">
            <button className="group relative px-6 py-3.5 bg-foreground text-background rounded-full font-bold text-xs tracking-tighter transition-transform hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                DISCOVER PROJECTS <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </Link>
          <button className="px-5 py-3 text-[10px] font-mono tracking-widest uppercase hover:underline underline-offset-4 transition-all opacity-40 hover:opacity-100">
            Scroll to explore ↓
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-10 text-secondary/15">
        <Ruler className="hero-icon w-6 h-6" />
        <DraftingCompass className="hero-icon w-6 h-6" />
        <Construction className="hero-icon w-6 h-6" />
        <HardHat className="hero-icon w-6 h-6" />
      </div>

      {/* Numerical markers for technical feel */}
      <div className="absolute top-1/2 left-6 -translate-y-1/2 h-32 flex flex-col justify-between opacity-5">
        <span className="font-mono text-[9px] rotate-90">0.00°</span>
        <span className="font-mono text-[9px] rotate-90">90.00°</span>
        <span className="font-mono text-[9px] rotate-90">180.00°</span>
      </div>
      <div className="absolute top-20 right-10 opacity-5">
        <span className="font-mono text-[8px] tracking-widest uppercase">Structural Code: B-1254</span>
      </div>
    </section>
  )
}
