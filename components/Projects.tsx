"use client"

import React, { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight, Layers, Ruler, DraftingCompass } from "lucide-react"
import { projects } from "@/lib/data"
import { cn } from "@/lib/utils"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function Projects() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const cards = gsap.utils.toArray(".project-card") as HTMLElement[]

    cards.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 80,
        rotationX: -15,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=50",
          toggleActions: "play none none reverse"
        }
      })
    })

    // Animation for measurement scales
    gsap.from(".measure-scale", {
      scaleX: 0,
      opacity: 0,
      stagger: 0.1,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 80%"
      }
    })
  }, { scope: container })

  return (
    <section id="projects" ref={container} className="py-32 px-6 relative bg-background">
      {/* Decorative Measurement Rulers */}
      <div className="absolute left-0 right-0 top-0 h-px bg-border/20 overflow-hidden">
        <div className="measure-scale w-full h-full bg-foreground/10 origin-left" />
      </div>

      <div className="max-w-5xl mx-auto projects-grid">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 relative">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-secondary">
              <DraftingCompass className="w-3 h-3" />
              Structural Case Studies
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">ENGINEERING <br /> EXCELLENCE</h2>
          </div>

          <div className="flex flex-col items-start gap-4">
            <p className="text-secondary max-w-sm text-sm leading-relaxed text-balance">
              Synthesizing rigorous analysis with aesthetic intent to deliver world-class infrastructure solutions.
            </p>
            <div className="flex items-center gap-4 py-2 border-y border-border/40 w-full">
              <span className="font-mono text-[9px] uppercase tracking-widest text-secondary">Coord: 12.55X / 0.88Y</span>
              <Ruler className="w-4 h-4 text-border" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 relative">
          {/* Vertical Grid Line for aesthetic */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border/20 -translate-x-1/2" />

          {projects.slice(0, 4).map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={cn(
                "project-card block group relative",
                i % 2 !== 0 ? "md:mt-32" : ""
              )}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted rounded-3xl group-hover:shadow-2xl transition-all duration-700">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={i < 2}
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors duration-700" />

                {/* Scale ticks on image hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-700">
                  {Array.from({ length: 12 }).map((_, j) => (
                    <div
                      key={j}
                      className="absolute h-px bg-background"
                      style={{
                        top: `${(j + 1) * 8}%`,
                        left: '0',
                        right: j % 3 === 0 ? '80%' : '90%'
                      }}
                    />
                  ))}
                </div>

                <div className="absolute top-8 right-8 z-20 w-14 h-14 bg-background border border-border rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out shadow-xl">
                  <ArrowUpRight className="w-6 h-6" />
                </div>

                {/* Numerical Index with square bracket */}
                <div className="absolute bottom-10 left-10 z-20 font-mono text-[12px] text-background mix-blend-difference">
                  <span className="opacity-40">[</span> 0{i + 1} <span className="opacity-40">]</span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity">
                  <Layers className="w-48 h-48" />
                </div>
              </div>

              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-secondary uppercase tracking-[0.4em] font-bold">{project.year}</span>
                  <div className="flex-1 h-px bg-border/40" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight group-hover:skew-x-3 transition-transform duration-500">
                  {project.title.split(' ').map((word, index) => (
                    index === 1 ? <span key={index} className="font-serif italic font-medium opacity-70"> {word} </span> : word
                  ))}
                </h3>
                <p className="text-secondary text-sm leading-relaxed max-w-sm line-clamp-2">
                  {project.description}
                </p>

                <div className="pt-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono px-3 py-1 bg-muted/50 border border-border/50 rounded-full text-secondary group-hover:text-foreground transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-48 pt-24 border-t border-border flex flex-col items-center gap-12">
          <div className="text-center space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-secondary">Expand Your Perspective</p>
            <h3 className="text-2xl font-serif italic">Archive of structural innovations</h3>
          </div>

          <Link href="/projects" className="group relative px-12 py-6 bg-foreground text-background rounded-full font-bold text-xs tracking-[0.4em] uppercase transition-transform hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              Full Project Archive <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
