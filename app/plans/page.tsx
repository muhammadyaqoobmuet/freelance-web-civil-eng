"use client"

import React, { useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ArrowLeft, Compass } from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Plans } from "@/components/Plans"

gsap.registerPlugin(useGSAP)

export default function PlansPage() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".archive-header", { y: 30, opacity: 0, duration: 1, ease: "power3.out" })
  }, { scope: container })

  return (
    <div ref={container} className="bg-transparent min-h-screen text-foreground">
      <Navbar />

      <main className="pt-36 pb-32">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Header */}
          <div className="archive-header space-y-8 mb-14">
            <Link href="/" className="inline-flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.4em] text-foreground/40 hover:text-foreground transition-all group">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Home
            </Link>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.4em] text-foreground/40">
                <Compass className="w-3.5 h-3.5" />
                Technical Blueprints
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                Civil &amp; Structural<br />
                <span className="font-serif italic font-light normal-case opacity-30 text-3xl md:text-5xl">Plans & Specifications.</span>
              </h1>
            </div>
          </div>

          <div className="border-t border-border mt-10">
            <Plans />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
