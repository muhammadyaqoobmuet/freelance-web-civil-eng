"use client"

import React, { useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ArrowLeft, Award } from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Certificates } from "@/components/Certificates"

gsap.registerPlugin(useGSAP)

export default function CertificatesPage() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".archive-header", { y: 30, opacity: 0, duration: 1, ease: "power3.out" })
  }, { scope: container })

  return (
    <div ref={container} className="bg-background min-h-screen text-foreground">
      <Navbar />

      <main className="pt-36 pb-32">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Header */}
          <div className="archive-header space-y-8 mb-14">
            <Link href="/" className="inline-flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.4em] text-secondary hover:text-foreground transition-all group">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Home
            </Link>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.4em] text-secondary">
                <Award className="w-3.5 h-3.5" />
                Technical Validation
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                Academic<br />
                <span className="font-serif italic font-light normal-case opacity-30 text-3xl md:text-5xl">Certifications.</span>
              </h1>
            </div>
          </div>

          <div className="border-t border-foreground/5">
            <Certificates />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
