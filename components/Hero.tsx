"use client"

import React, { useRef, useState } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import { Copy, Check, ChevronRight, Mail, BadgeCheck, Phone } from "lucide-react"

export function Hero() {
  const container = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("arslanjamali112@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } })

    tl.from(".hero-avatar", {
      scale: 0.9,
      opacity: 0,
      duration: 1.2
    })
    .from(".hero-text-content > *", {
      y: 20,
      opacity: 0,
      stagger: 0.1,
    }, "-=0.8")
  }, { scope: container })

  return (
    <section ref={container} className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-24 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-5xl w-full relative z-10 flex flex-col md:flex-row items-center md:items-center justify-center gap-12 md:gap-20">
        
        {/* Avatar Section - Square Rounded */}
        <div className="hero-avatar relative">
          <div className="absolute -inset-1 bg-foreground/10 rounded-[2.5rem] blur opacity-25" />
          <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-[2.5rem] overflow-hidden border border-foreground/10 bg-muted/20 backdrop-blur-sm shadow-xl">
            <Image 
              src="/landing/pngegg.png" 
              alt="Arslan Javed Portrait" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="hero-text-content flex flex-col items-center md:items-start text-center md:text-left space-y-8 max-w-xl">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                Arslan Javed
              </h1>
              <BadgeCheck className="w-6 h-6 md:w-8 md:h-8 text-blue-500 fill-blue-500/10 shrink-0" />
            </div>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-secondary/60 font-mono text-[10px] uppercase tracking-[0.25em]">
              <span className="flex items-center gap-2">
                Civil Engineer
              </span>
              <div className="w-1 h-1 rounded-full bg-foreground/20" />
              <span>Structural Designer</span>
              <div className="w-1 h-1 rounded-full bg-foreground/20" />
              <div className="px-3 py-1 bg-green-500/5 text-green-500 border border-green-500/20 rounded-full lowercase tracking-normal font-bold">
                online
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-secondary font-light leading-relaxed">
             Specializing in <span className="text-foreground font-medium underline underline-offset-8 decoration-foreground/20">Structural Analysis</span>, infrastructure projects, and technical BOQ preparation. Passionate about sustainable engineering excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/services" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto group relative px-8 py-4 bg-foreground text-background rounded-2xl font-bold text-[10px] tracking-[0.3em] uppercase transition-all hover:scale-[1.02] shadow-lg">
                Explore Services
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 border border-foreground/10 rounded-2xl font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-foreground/5 transition-all">
                Contact Now
              </button>
            </Link>
          </div>

          {/* Quick Contact Bar */}
          <div className="flex items-center gap-6 pt-4 border-t border-foreground/5 w-full justify-center md:justify-start">
            <button 
              onClick={copyEmail}
              className="flex items-center gap-2 group transition-opacity"
            >
              <Mail className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
              <span className="text-[10px] font-mono uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">Email</span>
              {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3 opacity-20" />}
            </button>
            <a href="tel:+923052906776" className="flex items-center gap-2 group transition-opacity">
              <Phone className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
              <span className="text-[10px] font-mono uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">Reach out</span>
            </a>
          </div>
        </div>
      </div>

      {/* Numerical markers for technical feel */}
      <div className="absolute bottom-10 left-10 hidden xl:block opacity-10">
        <div className="flex flex-col gap-2 font-mono text-[9px] tracking-[0.4em] uppercase">
          <span>Project Ref: C-4.2</span>
          <span>Status: Verified_v1</span>
        </div>
      </div>
    </section>
  )
}
