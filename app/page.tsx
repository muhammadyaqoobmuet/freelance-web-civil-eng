"use client"

import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Projects } from "@/components/Projects"
import { Education } from "@/components/Education"
import { Experience } from "@/components/Experience"
import { Certificates } from "@/components/Certificates"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || "");
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
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
        <Projects />
        <Education />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
