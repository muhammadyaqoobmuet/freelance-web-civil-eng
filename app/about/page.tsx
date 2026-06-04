"use client"

import React, { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  Navbar 
} from "@/components/Navbar"
import { 
  Footer 
} from "@/components/Footer"
import { 
  Download, 
  ArrowUpRight, 
  GraduationCap, 
  Target, 
  Cpu, 
  Briefcase, 
  Trophy, 
  ExternalLink,
  CheckCircle2,
  Construction,
  Ruler,
  Layers,
  ChevronRight
} from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function AboutPage() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const reveals = gsap.utils.toArray(".reveal")
    reveals.forEach((el: any) => {
      gsap.from(el, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        }
      })
    })
  }, { scope: container })

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden" ref={container}>
      <Navbar />

      <main className="pt-40 pb-32 px-6">
        <div className="max-w-6xl mx-auto space-y-40">
          
          {/* Header & Intro */}
          <section className="reveal grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-10">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">
                The <br />
                <span className="font-serif italic font-light text-secondary opacity-40 lowercase">Architectural</span> <br />
                Engineer.
              </h1>
              <div className="w-24 h-px bg-foreground" />
              <p className="text-xl text-secondary font-light leading-relaxed max-w-xl">
                I am a Civil Engineering student specializing in structural integrity, construction management, and infrastructure development. My focus lies at the intersection of technical precision and sustainable design.
              </p>
            </div>
            <div className="lg:col-span-5 pt-10 lg:pt-0">
              <div className="aspect-4/5 relative rounded-2xl overflow-hidden shadow-2xl border border-foreground/5">
                <Image 
                  src="/about-sec-pics/image copy 2.png" 
                  alt="Arslan Javed Professional Work" 
                  fill 
                  className="object-cover"
                  priority 
                />
              </div>
            </div>
          </section>

          {/* Education & Objective */}
          <section className="reveal grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="aspect-square relative rounded-2xl overflow-hidden border border-foreground/5 shadow-xl">
                <Image 
                  src="/about-sec-pics/image.png" 
                  alt="Site Work" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-secondary">Academic Foundation</h2>
                <p className="text-lg font-light leading-relaxed">
                  With a background in Arts and Electrical Engineering, I am currently pursuing a Bachelor&apos;s in Civil Engineering. This multidisciplinary path allows me to approach structural challenges with a unique, holistic perspective.
                </p>
              </div>
              <div className="space-y-6">
                <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-secondary text-right lg:text-left">Career Objective</h2>
                <p className="text-lg font-light leading-relaxed text-right lg:text-left">
                  My goal is to become an innovative civil engineer driving the design of resilient high-rise structural systems and sustainable urban infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Grid - Simplified */}
          <section className="reveal space-y-16">
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-center">Core Proficiency</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="space-y-4">
                <h3 className="font-bold text-sm uppercase tracking-widest border-b border-foreground/10 pb-2">Analysis</h3>
                <p className="text-xs text-secondary font-mono leading-relaxed">Structural Analysis // ETABS // Modeling // Design Evaluation</p>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-sm uppercase tracking-widest border-b border-foreground/10 pb-2">Technical</h3>
                <p className="text-xs text-secondary font-mono leading-relaxed">AutoCAD // Quantity Surveying // BOQ // Cost Estimation</p>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-sm uppercase tracking-widest border-b border-foreground/10 pb-2">Management</h3>
                <p className="text-xs text-secondary font-mono leading-relaxed">Construction Planning // Feasibility // Project Reporting</p>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-sm uppercase tracking-widest border-b border-foreground/10 pb-2">Human</h3>
                <p className="text-xs text-secondary font-mono leading-relaxed">Communication // Leadership // Analytical Thinking // Teamwork</p>
              </div>
            </div>
          </section>

          {/* Experience - Clean List with Secondary Image */}
          <section className="reveal grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-8">
              <h2 className="text-4xl font-bold uppercase tracking-tighter">Experience</h2>
              <p className="text-sm text-secondary font-light">Valuable exposure across NHA, Emaar, and FWO.</p>
              <div className="aspect-ratio relative rounded-2xl overflow-hidden border border-foreground/5 hidden lg:block">
                <Image 
                  src="/about-sec-pics/image copy.png" 
                  alt="Internship Site" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-10">
              {[
                { company: "National Highway Authority", role: "Highway Engineering Internship" },
                { company: "Emaar", role: "Site Operations Internship" },
                { company: "Frontier Works Organization", role: "Construction Management Internship" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-end border-b border-foreground/5 pb-4 group">
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold uppercase group-hover:tracking-wider transition-all">{item.company}</h4>
                    <p className="text-[10px] font-mono uppercase text-secondary">{item.role}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-10 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </section>

          {/* Projects - Visual Grid with Fourth Image */}
          <section className="reveal space-y-16">
            <div className="flex justify-between items-end">
              <h2 className="text-4xl font-bold uppercase tracking-tighter">Selected Works</h2>
              <span className="text-[10px] font-mono uppercase opacity-30">P-11 / Technical</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-8">
                <div className="p-8 bg-foreground/5 rounded-2xl border border-foreground/5 space-y-4">
                  <h4 className="text-sm font-mono uppercase tracking-[0.3em] opacity-40 italic">Key Structural Study</h4>
                  <p className="text-xl font-bold leading-tight">
                    Performance Evaluation of Shear Wall, Core, Outrigger, and Diagrid Systems in Tall Buildings using ETABS.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div className="p-6 border border-foreground/10 rounded-2xl space-y-3">
                     <h5 className="text-[10px] font-mono uppercase mb-2">Quantity Surveying</h5>
                     <p className="text-sm font-light leading-snug">Comprehensive estimation for residential projects ranging from 2,000 to 10,000 sq.ft lux villas.</p>
                   </div>
                   <div className="p-6 border border-foreground/10 rounded-2xl space-y-3">
                     <h5 className="text-[10px] font-mono uppercase mb-2">Feasibility</h5>
                     <p className="text-sm font-light leading-snug">BRI Infrastructure studies and PC-1/PC-2 development for 1320 MW power plants in Karachi.</p>
                   </div>
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="aspect-3/4 relative rounded-2xl overflow-hidden shadow-xl border border-foreground/5 grayscale hover:grayscale-0 transition-all duration-700">
                  <Image 
                    src="/about-sec-pics/image copy 3.png" 
                    alt="Technical Analysis" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Footer Link */}
          <section className="reveal py-20 border-t border-foreground/5 text-center space-y-8">
            <a 
              href="/Arslan_Javed_CV.pdf" 
              download
              className="px-10 py-5 border border-foreground rounded-full text-[10px] font-mono uppercase tracking-[0.4em] hover:bg-foreground hover:text-background transition-all"
            >
              Download Full Curriculum Vitae
            </a>
            <div className="flex justify-center gap-6 pt-10">
               <Link href="/services" className="text-[10px] font-mono uppercase hover:opacity-40 transition-opacity italic underline">Service Offerings</Link>
               <Link href="/contact" className="text-[10px] font-mono uppercase hover:opacity-40 transition-opacity italic underline">Get in Touch</Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}
