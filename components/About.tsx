"use client"

import React, { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Download, User, ArrowRight } from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function About() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".about-entry", {
      opacity: 0,
      y: 30,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-entry",
        start: "top 85%",
      },
    })
  }, { scope: container })

  return (
    <section id="about" ref={container} className="py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Intro Header */}
        <div className="about-entry space-y-6">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.4em] text-foreground/40">
            <User className="w-3 h-3" />
            About Me
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.95]">
            Engineering a{" "}
            <span className="font-serif italic font-light text-foreground/40 opacity-40">
              Sustainable Future.
            </span>
          </h2>
        </div>

        {/* Content + Image */}
        <div className="about-entry grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          <div className="lg:col-span-7 space-y-10 text-foreground/60 leading-[1.8] font-light text-lg">
            <div className="space-y-8">
              <p>
                I am a Civil Engineering student with a strong interest in structural engineering, construction management, quantity surveying, and infrastructure development.
              </p>

              <p>
                My academic and practical experience includes projects such as comparative structural performance evaluation of shear wall, core, outrigger, diagrid, and hybrid systems using ETABS, multiple quantity surveying and estimation projects for residential buildings of different sizes, Belt and Road Initiative (BRI) feasibility studies, BOQ preparation for Bin Qasim Power Plant, end-user satisfaction assessment of BRI projects, PC-1 and PC-2 feasibility study for a 1320 MW coal-fired power plant, and study of different structural elements.
              </p>

              <p>
                I have also completed internships with <span className="text-foreground font-medium">National Highway Authority (NHA)</span>, <span className="text-foreground font-medium">Emaar</span>, and <span className="text-foreground font-medium">Frontier Works Organization (FWO)</span>. My technical skills include ETABS, AutoCAD, quantity surveying, estimation, BOQ preparation, feasibility studies, and construction management.
              </p>

              <p>
                I aim to grow as a professional civil engineer in the field of infrastructure and structural engineering, committed to continuous improvement and contributing to impactful engineering solutions.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-8">
              <a
                href="/Arslan_Javed_CV.pdf"
                download
                className="group flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold text-xs tracking-widest uppercase hover:scale-105 transition-all w-full sm:w-auto justify-center"
              >
                Download Full Resume{" "}
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <Link
                href="/contact"
                className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] hover:text-foreground transition-colors group"
              >
                Get in Touch{" "}
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 relative aspect-4/5 rounded-3xl overflow-hidden border border-border bg-muted group">
            <Image
              src="/myimage.png"
              alt="Arslan Javed Portrait"
              fill
              className="object-cover transition-all duration-700 scale-105 group-hover:scale-100"
              priority
            />
          </div>

        </div>

        {/* Footer Marker */}
        <div className="about-entry pt-20 flex justify-between items-end opacity-10">
          <div className="flex flex-col gap-2">
            <div className="w-20 h-px bg-foreground" />
            <div className="w-10 h-px bg-foreground" />
          </div>
          <span className="font-mono text-[8px] uppercase tracking-widest leading-none text-right">
            Structural Data // S-1254<br />
            Civil Engineering Profile
          </span>
        </div>

      </div>
    </section>
  )
}