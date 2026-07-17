"use client"

import React from "react"
import { ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-20 px-6 border-t border-border bg-background">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-4 text-center md:text-left">
           <div className="w-10 h-10 bg-foreground flex items-center justify-center rounded-full mx-auto md:mx-0">
              <span className="font-mono text-[10px] font-bold text-background">AJ</span>
           </div>
           <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-foreground/40">
             Arslan Javed // Structural Civil Engineer
           </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
            <button 
              onClick={scrollToTop}
              data-cuelume-press="press"
              className="w-12 h-12 border border-border rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-500 group"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
           </button>
           <p className="text-[10px] font-mono text-foreground/55 uppercase tracking-widest">
              Design & Development © 2024
           </p>
        </div>
      </div>
    </footer>
  )
}
