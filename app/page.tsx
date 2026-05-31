"use client"

import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { NavHub } from "@/components/NavHub"
import { Footer } from "@/components/Footer"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (href?.startsWith('/#')) {
            // Let Next.js handle it or handle manually if on home
            return;
        }
        if (href?.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId || "");
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <About />
        <NavHub />
      </main>
      <Footer />
    </div>
  )
}
