"use client"

import React, { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import { projects } from "@/lib/data"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function Projects() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".project-card", {
      y: 30,
      stagger: 0.12,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 88%"
      }
    })
  }, { scope: container })

  return (
    <section id="projects" ref={container} className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-14">
          <div className="space-y-2">
            <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-secondary">Portfolio</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">Selected Work</h2>
          </div>
          <Link
            href="/projects"
            className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-foreground/10 bg-muted/30 text-xs font-mono uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Show All Projects
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.slice(0, 4).map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="project-card group block rounded-2xl border border-foreground/10 bg-muted/20 dark:bg-zinc-900/30 overflow-hidden hover:border-foreground/20 transition-all duration-300"
            >
              {/* Full-width Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i < 2}
                />
                {/* subtle overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
              </div>

              {/* Info */}
              <div className="p-6 space-y-4">
                {/* Title Row */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-mono uppercase tracking-widest text-secondary opacity-50 mb-1">
                      {project.category} · {project.year}
                    </p>
                    <h3 className="text-lg md:text-xl font-black tracking-tight uppercase leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-secondary leading-relaxed line-clamp-2 opacity-70">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[8px] font-mono px-2 py-0.5 border border-foreground/10 rounded-full text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-foreground/5">
                  <span className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest opacity-40">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-80" />
                    All Systems Operational
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-widest group-hover:gap-2 transition-all duration-200">
                    View Project <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
