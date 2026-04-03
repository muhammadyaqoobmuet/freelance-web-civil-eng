"use client"

import React, { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { projects } from "@/lib/data"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

gsap.registerPlugin(useGSAP)

export default function ProjectPage() {
   const { slug } = useParams()
   const project = projects.find(p => p.slug === slug)
   const idx = projects.findIndex(p => p.slug === slug)
   const next = projects[(idx + 1) % projects.length]
   const container = useRef<HTMLDivElement>(null)

   useGSAP(() => {
      if (!project) return
      gsap.from(".proj-header", { y: 24, opacity: 0, duration: 1, ease: "power3.out" })
      gsap.from(".proj-body", { y: 20, opacity: 0, duration: 0.9, delay: 0.2, ease: "power3.out" })
   }, { scope: container, dependencies: [slug] })

   if (!project) return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
         <h1 className="text-3xl font-black uppercase tracking-tighter">Project Not Found</h1>
         <Link href="/projects" className="px-6 py-3 bg-foreground text-background rounded-full text-xs font-mono uppercase tracking-widest">
            Back to Archive
         </Link>
      </div>
   )

   return (
      <div ref={container} className="bg-background min-h-screen text-foreground">
         <Navbar />

         {/* Full-width hero image — no container, no padding */}
         <div className="w-full aspect-[16/7] relative bg-muted mt-16">
            <Image
               src={project.images[0]}
               alt={project.title}
               fill
               className="object-cover"
               priority
               sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/20" />
         </div>

         <main className="py-16 px-6">
            <div className="max-w-3xl mx-auto space-y-14">

               {/* Back link */}
               <Link href="/projects" className="proj-header inline-flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.4em] text-secondary hover:text-foreground transition-all group">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> All Projects
               </Link>

               {/* Title block */}
               <div className="proj-header space-y-4 border-b border-foreground/5 pb-10">
                  <div className="flex items-center gap-3 text-[9px] font-mono uppercase tracking-[0.4em] text-secondary opacity-50">
                     <span>{project.category}</span>
                     <span>·</span>
                     <span>{project.year}</span>
                     <span>·</span>
                     <span>Case Study {String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.95]">
                     {project.title}
                  </h1>
                  <p className="text-sm md:text-base text-secondary leading-relaxed font-light max-w-xl">
                     {project.description}
                  </p>
               </div>

               {/* Body */}
               <div className="proj-body space-y-12">
                  {/* Long description */}
                  <div className="space-y-3">
                     <p className="text-[9px] font-mono uppercase tracking-[0.4em] opacity-40">Project Overview</p>
                     <p className="text-base md:text-lg text-secondary leading-relaxed font-light">
                        {project.longDescription}
                     </p>
                  </div>

                  {/* Tags */}
                  <div className="space-y-3">
                     <p className="text-[9px] font-mono uppercase tracking-[0.4em] opacity-40">Technology Stack</p>
                     <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                           <span key={tag} className="text-[9px] font-mono px-3 py-1 border border-foreground/10 rounded-full text-secondary">
                              {tag}
                           </span>
                        ))}
                     </div>
                  </div>

                  {/* Meta row */}
                  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-foreground/5">
                     {[
                        { label: "Timeline", value: project.year },
                        { label: "Industry", value: project.category },
                        { label: "Deliverable", value: "Full Analysis" },
                     ].map(m => (
                        <div key={m.label} className="space-y-1">
                           <p className="text-[9px] font-mono uppercase tracking-widest opacity-40">{m.label}</p>
                           <p className="text-sm font-semibold">{m.value}</p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Next project */}
               <div className="pt-10 border-t border-foreground/5">
                  <p className="text-[9px] font-mono uppercase tracking-[0.4em] opacity-40 mb-4">Next Project</p>
                  <Link
                     href={`/projects/${next.slug}`}
                     className="group flex items-center justify-between gap-4 p-5 rounded-2xl border border-foreground/10 hover:border-foreground/20 bg-muted/20 dark:bg-zinc-900/20 transition-all duration-300"
                  >
                     <div>
                        <p className="text-[9px] font-mono opacity-40 mb-1">{next.category} · {next.year}</p>
                        <h3 className="text-base font-black uppercase tracking-tight">{next.title}</h3>
                     </div>
                     <ArrowRight className="w-5 h-5 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
                  </Link>
               </div>

            </div>
         </main>

         <Footer />
      </div>
   )
}
