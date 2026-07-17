"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const ArchitecturalBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Slow drift for the background image
    gsap.to(".bg-image-container", {
      x: "-=20",
      y: "-=10",
      duration: 40,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="bg-image-container absolute inset-0 opacity-15 dark:opacity-25 transition-opacity duration-700">
        <Image
          src="/bavkgroundimage.png"
          alt="Architectural Structure"
          fill
          className="object-cover object-right grayscale dark:invert-0 invert-0 dark:brightness-100 brightness-50 contrast-125"
          priority
        />
        {/* Masking to ensure content remains readable */}
        <div className="absolute inset-0 bg-linear-to-r from-background via-transparent to-background/30" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Decorative technical line in corner */}
      <div className="absolute top-10 right-10 w-32 h-32 border-t border-r border-border pointer-events-none" />
    </div>
  );
};

export default ArchitecturalBackground;
