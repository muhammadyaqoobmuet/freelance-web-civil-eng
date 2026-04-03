"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight, Globe, MapPin } from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function Contact() {
  const container = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".contact-header", {
      y: 40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".contact-header",
        start: "top 90%"
      }
    })

    gsap.from(cardRef.current, {
      scale: 0.95,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%"
      }
    })

    // Animation for gradient movement
    gsap.to(".mesh-gradient", {
      backgroundPosition: "200% 50%",
      duration: 15,
      repeat: -1,
      ease: "linear"
    })
  }, { scope: container })

  return (
    <section id="contact" ref={container} className="py-40 px-6 relative overflow-hidden bg-background">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-10 dark:opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 0% 0%, var(--foreground) 0%, transparent 50%), radial-gradient(circle at 100% 100%, var(--foreground) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
          filter: "blur(80px)"
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="contact-header space-y-4 mb-20 text-center md:text-left">
          <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-secondary">Ready for the next challenge</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
            Let&apos;s Build <br /> <span className="font-serif italic font-light lowercase opacity-40">The Future.</span>
          </h2>
        </div>

        <div
          ref={cardRef}
          className="group relative bg-white/5 dark:bg-black/20 backdrop-blur-3xl border border-foreground/10 rounded-[2.5rem] p-10 md:p-16 shadow-2xl overflow-hidden hover:border-foreground/20 transition-all duration-700"
        >
          {/* Internal Glow Effect */}
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-foreground/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-foreground/10 transition-colors duration-1000" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <div className="space-y-12">
              <p className="text-xl md:text-2xl font-light leading-relaxed tracking-tight text-secondary">
                Open for structural consultations, project collaborations, and professional engineering inquiries.
              </p>

              <div className="space-y-6">
                <p className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40">Direct Inquiry</p>
                <a
                  href="mailto:hi@arslan.com"
                  className="group/link inline-flex items-center gap-4 text-3xl md:text-4xl font-bold tracking-tighter hover:opacity-70 transition-all duration-500"
                >
                  hi@arslan.com
                  <ArrowUpRight className="w-8 h-8 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-[9px] font-mono uppercase tracking-[0.4em] opacity-40 flex items-center gap-2">
                    <Globe className="w-3 h-3" /> Connect
                  </p>
                  <div className="flex flex-col gap-2 font-bold text-sm tracking-tight">
                    <a href="#" className="hover:opacity-40 transition-opacity">LinkedIn</a>
                    <a href="#" className="hover:opacity-40 transition-opacity">Twitter / X</a>
                    <a href="#" className="hover:opacity-40 transition-opacity">Behance</a>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[9px] font-mono uppercase tracking-[0.4em] opacity-40 flex items-center gap-2">
                    <MapPin className="w-3 h-3" /> Location
                  </p>
                  <div className="space-y-1">
                    <p className="text-lg font-bold">Hyderabad, PK</p>
                    <p className="text-[9px] font-mono opacity-20 uppercase tracking-widest leading-none">Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-foreground/10 space-y-4">
                <p className="text-[9px] font-mono uppercase tracking-[0.4em] opacity-20">Geographical Position</p>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <p className="text-xs font-mono font-bold tracking-widest opacity-60 uppercase">
                    25.3960° N, 068.3578° E
                  </p>
                  <span className="hidden md:block opacity-10">{"//"}</span>
                  <p className="text-xs font-mono font-bold tracking-widest opacity-60 uppercase">
                    GMT +5 [PKT]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between items-center px-4 opacity-20">
          <p className="text-[9px] font-mono uppercase tracking-[0.3em]">Precision Engineering Archival 2024</p>
          <p className="text-[9px] font-mono uppercase tracking-[0.3em]">Ref: AR_SYS_4.2</p>
        </div>
      </div>
    </section>
  )
}
