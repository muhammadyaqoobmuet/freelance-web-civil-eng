"use client"

import React, { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { 
  ArrowUpRight, 
  Layers, 
  Map, 
  Layout, 
  Grid3X3, 
  Building2, 
  Zap, 
  Droplets, 
  Calculator,
  DraftingCompass
} from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const serviceCategories = [
  {
    title: "Structural Engineering",
    image: "/services/structural.png",
    services: [
      { name: "Structural Design and Analysis", icon: Layers },
      { name: "Structural Plan", icon: Building2 }
    ],
    description: "Advanced structural modeling and technical reporting for tall buildings and complex infrastructures."
  },
  {
    title: "Architectural Planning",
    image: "/services/architectural.png",
    services: [
      { name: "Site Plan", icon: Map },
      { name: "Layout Plan", icon: Layout },
      { name: "Floor Plan", icon: Grid3X3 }
    ],
    description: "Precise spatial planning and organizational layouts for residential and commercial projects."
  },
  {
    title: "MEP Engineering",
    image: "/services/mep.png",
    services: [
      { name: "Electrical Plan", icon: Zap },
      { name: "Plumbing Plan", icon: Droplets }
    ],
    description: "Designing efficient and safe electro-mechanical and plumbing systems for modern builds."
  },
  {
    title: "Quantity Surveying",
    image: "/services/qs.png",
    services: [
      { name: "Quantity Surveying & Estimation", icon: Calculator },
      { name: "BOQ Preparation", icon: DraftingCompass }
    ],
    description: "Accurate cost estimation and detailed Bill of Quantities (BOQ) for robust financial planning."
  }
]

export default function ServicesPage() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".service-card", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 85%"
      }
    })
  }, { scope: container })

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden" ref={container}>
      <Navbar />

      <main className="pt-40 pb-32 px-6">
        <div className="max-w-6xl mx-auto space-y-32">
          
          {/* Minimal Header */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              Service <br />
              <span className="font-serif italic font-light text-foreground/40 lowercase">Offerings.</span>
            </h1>
            <div className="w-20 h-px bg-foreground/20" />
          </div>

          {/* Simple Clean Grid */}
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {serviceCategories.map((category, idx) => (
              <div key={idx} className="service-card group space-y-8">
                <div className="aspect-video relative rounded-2xl overflow-hidden card group-hover:shadow-card transition-all duration-700">
                  <Image 
                    src={category.image} 
                    alt={category.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">{category.title}</h2>
                  <p className="text-base text-foreground/60 font-light max-w-md leading-relaxed">{category.description}</p>

                  <ul className="grid grid-cols-1 gap-3 pt-4 border-t border-border">
                    {category.services.map((service, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-foreground/55">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
                        {service.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Minimal Footer CTA */}
          <div className="pt-20 text-center">
            <Link href="/contact" className="group inline-flex flex-col items-center gap-6">
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase opacity-40">Ready to consult?</span>
              <div className="text-2xl font-serif italic hover:scale-110 transition-transform cursor-pointer">
                Let&apos;s Build the Future
              </div>
              <ArrowUpRight className="w-6 h-6 animate-bounce" strokeWidth={1} />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
