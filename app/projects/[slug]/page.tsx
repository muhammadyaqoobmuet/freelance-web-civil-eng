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
         
         <main className="pt-32 pb-24 px-6">
            <div className="max-w-6xl mx-auto">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                  
                  {/* Left: Project Details */}
                  <div className="space-y-14">
                     {/* Back link */}
                     <Link href="/projects" className="proj-header inline-flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.4em] text-secondary hover:text-foreground transition-all group">
                        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> All Projects
                     </Link>

                     {/* Title block */}
                     <div className="proj-header space-y-4 border-b border-foreground/5 pb-10 font-bold">
                        <div className="flex items-center gap-3 text-[9px] font-mono uppercase tracking-[0.4em] text-secondary opacity-50">
                           <span>{project.category}</span>
                           <span>·</span>
                           <span>{project.year}</span>
                           <span>·</span>
                           <span>Case Study {String(idx + 1).padStart(2, "0")}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                           {project.title}
                        </h1>
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
                           <p className="text-[9px] font-mono uppercase tracking-[0.4em] opacity-40">Keywords</p>
                           <div className="flex flex-wrap gap-2">
                              {project.tags.map(tag => (
                                 <span key={tag} className="text-[9px] font-mono px-3 py-1 border border-foreground/10 rounded-full text-secondary">
                                    {tag}
                                 </span>
                              ))}
                           </div>
                        </div>

                        {/* Sub Projects (if any) */}
                        {project.subProjects && (
                           <div className="space-y-6 pt-10">
                              <p className="text-[9px] font-mono uppercase tracking-[0.4em] opacity-40">Project Modules</p>
                              <div className="grid grid-cols-1 gap-4">
                                 {project.subProjects.map((sub: any) => (
                                    <div key={sub.id} className="p-6 rounded-2xl border border-foreground/5 bg-foreground/5 space-y-2 hover:border-foreground/10 transition-all">
                                       <h4 className="text-sm font-bold uppercase tracking-tight">{sub.title}</h4>
                                       <p className="text-xs text-secondary leading-relaxed opacity-70">{sub.desc}</p>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        )}

                        {/* Meta row */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-foreground/5">
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
                  </div>

                  <div className="lg:sticky lg:top-32 h-fit space-y-6">
                     <div className="rounded-3xl overflow-hidden border border-foreground/10 bg-zinc-950/50 backdrop-blur-sm relative aspect-4/5 shadow-2xl">
                        {/* Blueprint Grid Overlay */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[32px_32px]" />
                        
                        <Image
                           src={project.images[0]}
                           alt={project.title}
                           fill
                           className="object-contain p-6 md:p-12 hover:scale-[1.02] transition-transform duration-700 relative z-10"
                           priority
                        />
                     </div>
                     <div className="bg-muted/30 rounded-2xl p-4 flex items-center justify-center border border-foreground/5">
                        <p className="text-[9px] font-mono uppercase tracking-widest opacity-40">High Resolution Layout Preview</p>
                     </div>
                  </div>

               </div>

               {/* Next project footer */}
               <div className="mt-32 pt-16 border-t border-foreground/5">
                  <p className="text-[9px] font-mono uppercase tracking-[0.4em] opacity-40 mb-6">Next project in queue</p>
                  <Link
                     href={`/projects/${next.slug}`}
                     className="group flex flex-col md:flex-row md:items-center justify-between gap-6 p-10 rounded-[2.5rem] border border-foreground/10 hover:border-foreground/20 bg-muted/20 dark:bg-zinc-900/10 transition-all duration-500 overflow-hidden relative"
                  >
                     <div className="relative z-10">
                        <p className="text-[9px] font-mono opacity-40 mb-2 uppercase tracking-widest">{next.category} // {next.year}</p>
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight line-clamp-1">{next.title}</h3>
                     </div>
                     <div className="relative z-10 flex items-center gap-3 text-[10px] font-mono font-black uppercase tracking-[0.3em] group-hover:gap-5 transition-all duration-500">
                        View Case <ArrowRight className="w-4 h-4" />
                     </div>
                     
                     <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[120px] -translate-y-1/2 translate-x-1/2 rounded-full" />
                  </Link>
               </div>

            </div>
         </main>

         <Footer />
      </div>
   )
}
