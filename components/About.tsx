"use client"

import React, { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Target, Zap, User } from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function About() {
  const container = useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useGSAP(() => {
    gsap.from(".about-content", {
      opacity: 0,
      x: -30,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-content",
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(".about-image", {
      opacity: 0,
      x: 30,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-image",
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      }
    })
  }, { scope: container })

  return (
    <section id="about" ref={container} className="py-32 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="about-content space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-secondary">
              <User className="w-3 h-3" />
              Who I Am
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">ENGINEERING BEYOND THE BLUEPRINT</h2>
          </div>

          <div className="space-y-6">
            <p className="text-xl text-secondary leading-relaxed font-light">
              I am a passionate Civil Engineer with a strong academic background and a commitment to excellence in engineering and infrastructure development.
            </p>
            <p className="text-secondary leading-relaxed">
              Currently associated with Mehran University of Engineering and Technology (MUET), Jamshoro, I am dedicated to enhancing my technical knowledge and practical skills in the field of civil engineering. 🎓
            </p>
            <p className="text-secondary leading-relaxed">
              With a multidisciplinary educational background spanning civil and electrical engineering, I approach engineering challenges with innovative and practical solutions. My core interests include <span className="text-foreground font-medium">infrastructure development, highway engineering, construction management</span>, and <span className="text-foreground font-medium">sustainable engineering practices</span>.
            </p>
          </div>

          <div className="pt-8 border-t border-border">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-tighter">
                <Target className="w-4 h-4" /> Career Objective
              </div>
              <p className="text-sm text-secondary leading-relaxed">
                To grow as a professional civil engineer by contributing to modern infrastructure projects, applying technical expertise, and delivering efficient, reliable, and sustainable engineering solutions. I aim to continuously learn, innovate, and make a positive impact in the engineering field.
              </p>
            </div>
          </div>
        </div>

        <div className="about-image relative aspect-4/5 bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden  transition-all duration-700 border border-foreground/10">
          <Image
            src="https://p24ni3hvmk.ufs.sh/f/m659gJRPXyqfKjrGEhVPCIlWtqi7XvRbuJApDKeHd1nm6GzU"
            alt="Arslan Javed Jamali - Civil Engineer"
            fill
            className="object-cover mix-blend-multiply dark:mix-blend-normal"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  )
}
