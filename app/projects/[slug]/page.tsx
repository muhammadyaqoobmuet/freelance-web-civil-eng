"use client"

import React, { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ArrowLeft, ChevronRight, DraftingCompass, Ruler, Layers } from "lucide-react"
import { projects } from "@/lib/data"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

gsap.registerPlugin(useGSAP)

export default function ProjectPage() {
   const { slug } = useParams()
   const project = projects.find(p => p.slug === slug)
   const container = useRef<HTMLDivElement>(null)

   useGSAP(() => {
      if (!project) return

      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } })

      tl.from(".back-link", { x: -20, opacity: 0 })
         .from(".project-title", { y: 100, opacity: 0, skewY: 5 }, "-=1")
         .from(".project-meta", { opacity: 0, y: 20, stagger: 0.1 }, "-=0.8")
         .from(".project-img-wrapper", { scale: 1.1, opacity: 0, duration: 2 }, "-=1.2")
         .from(".project-content", { y: 50, opacity: 0 }, "-=1.5")
   }, { scope: container, dependencies: [slug] })

   if (!project) return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
         <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
         <p className="text-secondary mb-8">The structural context you are looking for does not exist in our archive.</p>
         <Link href="/projects" className="px-8 py-4 bg-foreground text-background rounded-full font-bold text-xs uppercase tracking-widest">
            Back to Archive
         </Link>
      </div>
   )

   return (
      <div ref={container} className="bg-background min-h-screen font-sans selection:bg-foreground selection:text-background">
         <Navbar />

         <main className="pt-48 pb-32 px-6">
            <div className="max-w-6xl mx-auto">
               <Link href="/projects" className="back-link inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-secondary hover:text-foreground mb-16 transition-colors group">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back to projects
               </Link>

               <header className="mb-24">
                  <div className="flex items-center gap-4 mb-8 opacity-40">
                     <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-balance">Structural Case Study // 0{projects.indexOf(project) + 1}</span>
                     <div className="flex-1 h-px bg-foreground" />
                  </div>

                  <h1 className="project-title text-6xl md:text-9xl font-bold tracking-tighter mb-12 overflow-hidden leading-[0.85] text-balance uppercase">
                     {project.title.split(' ').map((word, i) => (
                        i === 1 ? <span key={i} className="font-serif italic font-light lowercase opacity-60"> {word} </span> : word
                     ))}
                  </h1>

                  <div className="flex flex-wrap gap-12 md:gap-24 pt-12 border-t border-border/40">
                     <div className="project-meta space-y-2">
                        <p className="text-[10px] font-mono uppercase text-secondary tracking-[0.3em]">Timeline</p>
                        <p className="text-xl font-medium">{project.year}</p>
                     </div>
                     <div className="project-meta space-y-2">
                        <p className="text-[10px] font-mono uppercase text-secondary tracking-[0.3em]">Industry</p>
                        <p className="text-xl font-medium">{project.category}</p>
                     </div>
                     <div className="project-meta space-y-2">
                        <p className="text-[10px] font-mono uppercase text-secondary tracking-[0.3em]">Deliverable</p>
                        <p className="text-xl font-medium italic">Full Analysis Report</p>
                     </div>
                  </div>
               </header>

               <div className="project-img-wrapper aspect-[21/9] bg-muted rounded-[2.5rem] overflow-hidden mb-32 relative group shadow-2xl">
                  <Image
                     src={project.images[0]}
                     alt={project.title}
                     fill
                     className="object-cover group-hover:scale-105 transition-transform duration-1000"
                     priority
                     sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />

                  <div className="absolute inset-8 border border-white/20 border-dashed rounded-3xl pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
                     <div className="absolute top-4 left-4 font-mono text-[8px] text-white">RE_MODEL_STABLE_01</div>
                     <div className="absolute bottom-4 right-4 font-mono text-[8px] text-white">RESOLUTION // 3840x1600</div>
                  </div>
               </div>

               <div className="project-content grid grid-cols-1 lg:grid-cols-12 gap-20">
                  <div className="lg:col-span-8 space-y-12">
                     <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight">THE CHALLENGE</h2>
                        <p className="text-2xl text-secondary leading-relaxed font-light text-balance">
                           {project.longDescription}
                        </p>
                     </div>

                     <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <div className="p-10 bg-muted/50 rounded-3xl space-y-6 group hover:bg-foreground hover:text-background transition-all duration-500">
                           <Ruler className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
                           <div className="space-y-2">
                              <h4 className="text-lg font-bold">Structural Efficiency</h4>
                              <p className="text-sm opacity-60">Advanced topology optimization reduced material usage by 15% without structural compromise.</p>
                           </div>
                        </div>
                        <div className="p-10 bg-muted/50 rounded-3xl space-y-6 group hover:bg-foreground hover:text-background transition-all duration-500">
                           <DraftingCompass className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
                           <div className="space-y-2">
                              <h4 className="text-lg font-bold">Technical Precision</h4>
                              <p className="text-sm opacity-60">Full BIM coordination resulted in zero on-site interference during the assembly phase.</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="lg:col-span-4 space-y-16">
                     <div className="space-y-6">
                        <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-secondary">Technology Stack</h3>
                        <div className="flex flex-wrap gap-3">
                           {project.tags.map(tag => (
                              <span key={tag} className="px-5 py-2 border border-border rounded-full text-[10px] font-mono uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors cursor-default">
                                 {tag}
                              </span>
                           ))}
                           <span className="px-5 py-2 bg-foreground text-background rounded-full text-[10px] font-mono uppercase tracking-widest">GSAP_ANIM</span>
                        </div>
                     </div>

                     <div className="p-10 border border-border rounded-3xl space-y-8 bg-muted/20 relative overflow-hidden group">
                        <div className="relative z-10 space-y-4">
                           <h3 className="font-bold text-xl uppercase tracking-tighter">Next Milestone</h3>
                           <div className="flex items-center gap-4 cursor-pointer">
                              <div className="w-14 h-14 bg-background border border-border rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                                 <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                              </div>
                              <div>
                                 <p className="text-[10px] font-mono text-secondary uppercase tracking-widest">Ongoing Project</p>
                                 <p className="font-serif italic text-xl leading-tight">Metropolitan Transit Hub</p>
                              </div>
                           </div>
                        </div>
                        <Layers className="absolute -right-8 -bottom-8 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity" />
                     </div>
                  </div>
               </div>
            </div>
         </main>

         <Footer />
      </div>
   )
}
