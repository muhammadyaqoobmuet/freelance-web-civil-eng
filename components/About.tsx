"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Target, Zap, User } from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function About() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".about-content", {
      opacity: 0,
      x: -30,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-content",
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      }
    })
    
    gsap.from(".about-image", {
      opacity: 0,
      x: 30,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-image",
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      }
    })
  }, { scope: container })

  return (
    <section id="about" ref={container} className="py-32 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="about-content space-y-12">
          <div className="space-y-4">
             <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-secondary">
                <User className="w-3 h-3" />
                Who I Am
             </div>
             <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">ENGINEERING BEYOND THE BLUEPRINT</h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl text-secondary leading-relaxed font-light">
              As a structural engineer, my work exists at the intersection of <span className="text-foreground font-medium">mathematical precision</span> and <span className="font-serif italic text-foreground/80">architectural vision</span>. 
            </p>
            <p className="text-secondary leading-relaxed">
              Based in Hyderabad, I specialize in the analysis and design of complex structures—ranging from seismic-resistant high-rises to sustainable infrastructure. My mission is to build foundations that are not only structurally sound but inherently resilient for the generations to come.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
             <div className="space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-tighter">
                   <Target className="w-4 h-4" /> Goal
                </div>
                <p className="text-xs text-secondary leading-relaxed">Zero-deviation structural integrity in every calculation.</p>
             </div>
             <div className="space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-tighter">
                   <Zap className="w-4 h-4" /> Focus
                </div>
                <p className="text-xs text-secondary leading-relaxed">Optimization of materials and safety protocols.</p>
             </div>
          </div>
        </div>

        <div className="about-image relative aspect-[4/5] bg-muted rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
           {/* Placeholder for high quality image */}
           <div className="absolute inset-8 border border-border border-dashed rounded-2xl flex items-center justify-center font-mono text-[10px] text-secondary/30">
              HIGH_QUALITY_PORTRAIT [1200x1500]
           </div>
           <div className="absolute bottom-12 left-12 right-12 p-8 glass border border-white/10 rounded-2xl space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-secondary">Currently Operating At</p>
              <h4 className="font-bold text-lg">STRUCTURAL DESIGN HUB</h4>
           </div>
        </div>
      </div>
    </section>
  )
}
