"use client"

import React, { useRef, useState, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Award, ExternalLink, Sparkles, Binary, Globe } from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const certifications = [
  {
    title: "4th International Conference on Sustainable Development in Civil Engineering (ICSDC-25)",
    issuer: "Mehran University of Engineering & Technology, Jamshoro",
    date: "Dec 17–19, 2025",
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQFJ7sCOEmqy2w/profile-treasury-image-shrink_800_800/B4DZ1DpoOwJMAY-/0/1774956504761?e=1775844000&v=beta&t=0XRVOQDJlu3sA1AD7gvCHPnC96XaBkUyIEs44293ZJc",
    desc: "Participated in global discussions on sustainable infrastructure, emerging engineering practices, and research developments. This conference significantly enhanced my understanding of future-ready structural solutions.",
    tags: ["Sustainability", "Infrastructure", "Research"],
    icon: Globe
  },
  {
    title: "Digital Skills & Entrepreneurship Seminar",
    issuer: "ASCE-MUET Student Chapter",
    date: "2024",
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQGvtJ6WaQGz0A/profile-treasury-image-shrink_800_800/B4DZ1Dsk2kI0AY-/0/1774957258447?e=1775844000&v=beta&t=yIAlp85aeqCerx6o-oD_hUYl2Bj6POjzdcA5lnf9cOI",
    desc: "Focused on strategic management, SME development, and digital monetization. Enhanced professional outlook, communication, and innovation skills for forward-thinking engineering practice.",
    tags: ["Entrepreneurship", "Digital", "Innovation"],
    icon: Binary
  }
]

export function Certificates() {
  const container = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 500)
  }, [])

  useGSAP(() => {
    if (!mounted) return

    gsap.from(".cert-card", {
      y: 20,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".certs-grid",
        start: "top 95%",
        toggleActions: "play none none reverse"
      }
    })
  }, { scope: container, dependencies: [mounted] })

  if (!mounted) return null

  return (
    <section id="certificates" ref={container} className="py-24 px-6 relative bg-background/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] font-mono uppercase tracking-[0.4em] text-foreground/40">
            <Award className="w-3 h-3" />
            Technical Validation
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">
            Academic <br /> <span className="font-serif italic font-light lowercase opacity-30">Recognition.</span>
          </h2>
        </div>

        <div className="certs-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="cert-card group relative card rounded-[1.5rem] p-8 md:p-10 pt-12 transition-all duration-500 hover:border-foreground/20 hover:shadow-card overflow-hidden"
              data-cuelume-hover="sparkle"
            >
              <div className="card-dots absolute top-4 left-8 right-8 h-2 rounded-full opacity-70 z-10" />
              <div className="relative z-10 space-y-6 pt-2">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center">
                    <cert.icon className="w-5 h-5 opacity-40" />
                  </div>
                  <div className="text-[9px] font-mono uppercase tracking-widest opacity-40">
                    Ref: MUET_CERT_{2025 - i}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tighter leading-tight uppercase">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[9px] font-mono text-foreground/40">
                    <Sparkles className="w-3 h-3" />
                    {cert.issuer} {"//"} {cert.date}
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-foreground/60 line-clamp-3">
                  {cert.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 border border-border rounded-full text-[9px] font-mono uppercase tracking-widest text-foreground/50">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-border flex items-center justify-between">
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.2em] text-foreground font-bold hover:underline"
                  >
                    View Certificate <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Decorative Subtle Grid */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
