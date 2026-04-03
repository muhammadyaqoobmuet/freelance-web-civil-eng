"use client"

import React, { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { HardHat } from "lucide-react"

gsap.registerPlugin(useGSAP)

export function Loader({ onCompleteAction }: { onCompleteAction: () => void }) {
  const container = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [percent, setPercent] = useState(0)

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: onCompleteAction
    })

    tl.to(progressRef.current, {
      scaleX: 1,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: function () {
        setPercent(Math.round(this.progress() * 100))
      }
    })

    tl.to(container.current, {
      y: "-100%",
      duration: 1,
      ease: "expo.inOut"
    })

    gsap.from(".loader-hat", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })

    gsap.to(".loader-hat", {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: "none"
    })
  }, { scope: container })

  return (
    <div
      ref={container}
      className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center pointer-events-auto"
    >
      <div className="relative flex flex-col items-center space-y-8">
        <div className="loader-hat relative">
          <HardHat className="w-16 h-16 text-foreground" strokeWidth={1} />
          <div className="absolute inset-0 border border-foreground/10 rounded-full scale-150 animate-pulse" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <h2 className="font-mono text-[10px] tracking-[0.5em] uppercase text-secondary">
            Civil Engineer Loading..
          </h2>
          <div className="w-48 h-px bg-border relative overflow-hidden">
            <div ref={progressRef} className="absolute inset-0 bg-foreground origin-left scale-x-0" />
          </div>
          <span className="font-mono text-[10px] text-foreground/50">{percent}%</span>
        </div>

        {/* Decorative numerical markers */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="font-mono text-[8px]">0.{i * 25}v</span>
          ))}
        </div>
      </div>
    </div>
  )
}
