"use client"

import React, { useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Briefcase, GraduationCap, Award, Mail, Layout, Compass, User, Sparkles } from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const navCards = [
  { name: "About", href: "/about", description: "Who I Am", icon: User },
  { name: "Services", href: "/services", description: "Service Offerings", icon: Sparkles },
  { name: "Projects", href: "/projects", description: "Work & Structural Designs", icon: Layout },
  { name: "Education", href: "/education", description: "Academic Background", icon: GraduationCap },
  { name: "Experience", href: "/experience", description: "Internships & Field Work", icon: Briefcase },
  { name: "Plans", href: "/plans", description: "Technical Drafts & Blueprints", icon: Compass },
  { name: "Certificates", href: "/certificates", description: "Recognition & Training", icon: Award },
  { name: "Contact", href: "/contact", description: "Get in touch & Connect", icon: Mail },
]

export function NavHub() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 space-y-4">
          <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-secondary">Navigation Hub</p>
          <h2 className="text-3xl font-black tracking-tighter uppercase leading-[0.9]">
            Explore <br /> <span className="font-serif italic font-light lowercase opacity-30 text-2xl">Portfolios.</span>
          </h2>
        </div>

        <div className="nav-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {navCards.map((card) => (
            <Link
              key={card.name}
              href={card.href}
              className="nav-card group relative p-8 rounded-3xl border border-foreground/5 bg-muted/10 dark:bg-zinc-900/20 hover:border-foreground/20 hover:bg-muted/20 dark:hover:bg-zinc-900/40 transition-all duration-500 overflow-hidden opacity-100 transform-none"
            >
              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <card.icon className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight uppercase">{card.name}</h3>
                    <p className="text-[10px] text-secondary uppercase tracking-widest opacity-60">{card.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                  Explore <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-foreground/5 rounded-full blur-3xl transform translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
