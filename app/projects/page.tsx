"use client"

import React, { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { projects } from "@/lib/data"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function ProjectsPage() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".archive-header", { y: 30, opacity: 0, duration: 1, ease: "power3.out" })
    gsap.from(".proj-card", {
      y: 24,
      stagger: 0.1,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: ".proj-grid", start: "top 90%" }
    })
  }, { scope: container })

  return (
    <div ref={container} className="bg-transparent min-h-screen text-foreground">
      <Navbar />

      <main className="pt-36 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Header */}
          <div className="archive-header space-y-8 mb-14">
            <Link href="/" className="inline-flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.4em] text-secondary hover:text-foreground transition-all group">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Home
            </Link>
            <div className="space-y-3">
              <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-secondary">Portfolio</p>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                Project<br />
                <span className="font-serif italic font-light normal-case opacity-30 text-3xl md:text-5xl">Archive.</span>
              </h1>
            </div>
          </div>

          {/* Grid */}
          <div className="proj-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="proj-card group block rounded-2xl border border-foreground/10 bg-muted/20 dark:bg-zinc-900/30 overflow-hidden hover:border-foreground/20 transition-all duration-300"
              >
                {/* Full-Bleed Thumbnail */}
                <div className="relative w-full aspect-16/11 overflow-hidden bg-muted">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i < 2}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h2 className="text-lg md:text-xl font-black tracking-tight uppercase leading-tight line-clamp-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
