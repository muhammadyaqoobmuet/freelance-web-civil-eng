"use client"

import React, { useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/data"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

gsap.registerPlugin(useGSAP)

export default function ProjectsPage() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } })

    tl.from(".archive-header", { y: 50, opacity: 0 })
      .from(".archive-item", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        clearProps: "all"
      }, "-=0.8")
  }, { scope: container })

  return (
    <div ref={container} className="bg-background min-h-screen text-foreground">
      <Navbar />

      <main className="pt-48 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="archive-header space-y-12 mb-24">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold hover:underline transition-all group">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Dashboard
            </Link>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-foreground/10">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] uppercase">
                  Project <br /> <span className="font-serif italic font-light opacity-40">Archive.</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between px-8 py-5 bg-foreground text-background rounded-t-3xl font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
              <span className="flex-1">Title // Technical Context</span>
              <span className="hidden md:block w-40">Category</span>
              <span className="hidden md:block w-24 text-right">Year</span>
              <span className="w-12 text-right">Open</span>
            </div>

            <div className="divide-y divide-foreground/5 border-x border-b border-foreground/10 rounded-b-3xl overflow-hidden bg-background">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="archive-item flex items-center justify-between px-8 py-12 hover:bg-muted group transition-all duration-300"
                >
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold group-hover:translate-x-2 transition-transform duration-500 uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm opacity-60 mt-2 font-medium">{project.description}</p>
                  </div>
                  <div className="hidden md:block w-40 text-xs font-mono uppercase tracking-[0.2em] opacity-40">
                    {project.category}
                  </div>
                  <div className="hidden md:block w-24 text-right text-xs font-mono opacity-40 font-bold">
                    {project.year}
                  </div>
                  <div className="w-12 text-right">
                    <ArrowUpRight className="w-6 h-6 opacity-20 group-hover:opacity-100 group-hover:scale-125 transition-all text-foreground" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
