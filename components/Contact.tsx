"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight, Globe, MapPin, Mail, Phone, ExternalLink, Briefcase, Share2 } from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function Contact() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".reveal", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 90%",
      }
    })
  }, { scope: container })

  return (
    <section id="contact" ref={container} className="py-24 md:py-40 px-6 rounded-4xl bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-16 lg:space-y-24">

        {/* Simple Clean Header */}
        <div className="reveal space-y-4 text-center">
          <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-foreground/40">Available for new opportunities</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
            Let&apos;s Connect <br /> <span className="font-serif italic font-light lowercase opacity-30">Reach Out.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

          {/* Direct Contact Methods */}
          <div className="reveal space-y-10">
            <div className="space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-[0.4em] opacity-40">Direct Inquiry</h3>
              <div className="space-y-4">
                <a href="mailto:arslanjamali112@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                    <Mail className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-base md:text-lg font-bold tracking-tight border-b border-transparent group-hover:border-foreground transition-all">arslanjamali112@gmail.com</span>
                </a>
                <a href="mailto:arsaljaved112@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                    <Mail className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-base md:text-lg font-bold tracking-tight border-b border-transparent group-hover:border-foreground transition-all">arsaljaved112@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-[0.4em] opacity-40">Call & Text</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 opacity-40" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-bold font-mono">+92 305 2906776</span>
                    <span className="text-base font-bold font-mono">+92 341 3411027</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-[0.4em] opacity-40">Location</h3>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 opacity-40" strokeWidth={1.5} />
                </div>
                <span className="text-lg font-bold">Hyderabad, PK</span>
              </div>
            </div>
          </div>

          {/* Social & Professional Networks */}
          <div className="reveal space-y-10">
            <h3 className="text-xs font-mono uppercase tracking-[0.4em] opacity-40">Digital Presence</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://www.linkedin.com/in/arslan-javed-jamali-448744280/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 rounded-2xl bg-card border border-border hover:border-foreground/20 hover:shadow-soft transition-all group">
                <div className="flex items-center gap-3">
                  <Share2 className="w-4 h-4 opacity-40" />
                  <span className="text-sm font-bold uppercase tracking-widest">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity" />
              </a>
              <a href="https://www.upwork.com/freelancers/arslan_civil_56" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 rounded-2xl bg-card border border-border hover:border-foreground/20 hover:shadow-soft transition-all group">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-4 h-4 opacity-40" />
                  <span className="text-sm font-bold uppercase tracking-widest">Upwork</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity" />
              </a>
              <a href="https://www.fiverr.com/pe/BR94KRW" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 rounded-2xl bg-card border border-border hover:border-foreground/20 hover:shadow-soft transition-all group">
                <div className="flex items-center gap-3">
                  <ExternalLink className="w-4 h-4 opacity-40" />
                  <span className="text-sm font-bold uppercase tracking-widest">Fiverr</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity" />
              </a>
              <a href="#" className="flex items-center justify-between p-6 rounded-2xl bg-card border border-border hover:border-foreground/20 hover:shadow-soft transition-all group">
                <div className="flex items-center gap-3">
                  <Share2 className="w-4 h-4 opacity-40" />
                  <span className="text-sm font-bold uppercase tracking-widest">Facebook</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity" />
              </a>
              <a href="#" className="flex items-center justify-between p-6 rounded-2xl bg-card border border-border hover:border-foreground/20 hover:shadow-soft transition-all group">
                <div className="flex items-center gap-3">
                  <Share2 className="w-4 h-4 opacity-40" />
                  <span className="text-sm font-bold uppercase tracking-widest">Instagram</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity" />
              </a>
            </div>

            <div className="pt-8 border-t border-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
              <div className="space-y-1">
                <p className="text-[10px] font-mono font-bold tracking-widest opacity-30 uppercase">Local Time PKT</p>
                <p className="text-xs font-mono font-bold tracking-widest opacity-60 uppercase">GMT +5 [Karachi / PK]</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 border border-foreground/10 rounded-full">
                <Globe className="w-3 h-3 animate-spin-slow opacity-20" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-40">25.39° N, 68.35° E</span>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center pt-10">
           <p className="text-[9px] font-mono opacity-20 uppercase tracking-[0.4em]">Precision Engineering // AR_v4.2</p>
        </div>

      </div>
    </section>
  )
}
