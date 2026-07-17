"use client"

import * as React from "react"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ThemeToggle } from "./ThemeToggle"
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Education", href: "/education" },
  { name: "Experience", href: "/experience" },
  { name: "Plans", href: "/plans" },
  { name: "Certificates", href: "/certificates" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false)
        if (isOpen) setIsOpen(false)
      } else {
        setShow(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, isOpen])

  useGSAP(() => {
    if (show) {
      gsap.to(".nav-container", { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" })
    } else {
      gsap.to(".nav-container", { y: -100, opacity: 0, duration: 0.4, ease: "power2.in" })
    }
  }, [show])

  useGSAP(() => {
    if (isOpen) {
      // Prevent scroll when menu is open
      document.body.style.overflow = "hidden"
      gsap.to(menuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "expo.out"
      })
      gsap.from(".mobile-link", {
        x: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.1
      })
    } else {
      document.body.style.overflow = "auto"
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power2.in"
      })
    }
  }, { scope: menuRef, dependencies: [isOpen] })

  return (
    <>
      <nav className="nav-container fixed top-0 left-0 right-0 z-[100] p-3 md:p-6 flex justify-center items-start pointer-events-none">
        <div className="w-full max-w-7xl bg-card/95 border border-border px-5 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5 rounded-[2rem] md:rounded-[3rem] backdrop-blur-2xl shadow-card flex items-center justify-between pointer-events-auto transition-all duration-500 hover:border-foreground/20">

          {/* Brand Area */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="flex flex-col">
              <span className="font-serif italic text-lg md:text-2xl lg:text-3xl font-light tracking-tighter leading-none group-hover:tracking-normal transition-all duration-700">Arslan Javed</span>
              <div className="flex items-center gap-1.5 mt-1 opacity-40">
                <div className="w-1 h-1 rounded-full bg-foreground" />
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] font-bold">Engineer</span>
              </div>
            </div>

            <div className="hidden lg:block w-px h-9 bg-border/60 mx-2" />
            <div className="hidden lg:flex items-center gap-1 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
              <span className="text-[9px] font-mono tracking-widest uppercase">Structural Integrity</span>
            </div>
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop inline links + hover-reveal panel for the rest */}
            <div className="hidden lg:flex items-center gap-1 border-r border-border/60 pr-6 mr-2">
              {navItems.slice(0, 4).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  data-cuelume-hover="tick"
                  data-cuelume-press="press"
                  className="px-4 lg:px-5 py-2.5 text-[10px] lg:text-[11px] uppercase font-black tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              {/* "More" reveals remaining pages on hover */}
              <div className="group/more relative">
                <button
                  data-cuelume-hover="tick"
                  className="px-4 lg:px-5 py-2.5 text-[10px] lg:text-[11px] uppercase font-black tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1"
                >
                  More
                  <ChevronDown className="w-3 h-3 transition-transform group-hover/more:rotate-180" />
                </button>
                <div className="invisible opacity-0 translate-y-2 group-hover/more:visible group-hover/more:opacity-100 group-hover/more:translate-y-0 transition-all duration-300 absolute right-0 top-full pt-4 z-50">
                  <div className="card rounded-2xl p-2 min-w-[200px] flex flex-col">
                    {navItems.slice(4).map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        data-cuelume-hover="tick"
                        data-cuelume-press="press"
                        className="px-4 py-2.5 text-[11px] uppercase font-black tracking-[0.2em] text-foreground/70 hover:text-foreground hover:bg-muted rounded-xl transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              {/* Hamburger only for small screens */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                data-cuelume-press="press"
                className="lg:hidden w-10 h-10 bg-foreground text-background flex items-center justify-center rounded-full shadow-lg transition-all active:scale-90"
                aria-label="Open menu"
              >
                {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer - Using a Portal-like approach by making it fixed and high z-index */}
      <div
        ref={menuRef}
        className="fixed inset-0 w-full h-full bg-background z-[200] pointer-events-auto transform translate-x-full opacity-0 lg:hidden flex flex-col pt-32 p-10 overflow-y-auto"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 w-14 h-14 bg-foreground text-background flex items-center justify-center rounded-full active:scale-90 transition-transform shadow-float z-[201]"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col h-full relative z-10">
          <div className="space-y-6" ref={linksRef}>
            <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-foreground/40 mb-12 opacity-50">Navigation Hub</p>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                data-cuelume-press="press"
                className="mobile-link group flex items-end justify-between text-5xl font-black tracking-tighter py-2 text-foreground"
              >
                <span className="group-hover:translate-x-6 transition-transform duration-500 uppercase">{item.name}</span>
                <ArrowUpRight className="w-10 h-10 opacity-30 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500" />
              </Link>
            ))}
          </div>

          <div className="mt-auto pb-12 space-y-10">
            <div className="h-[2px] bg-foreground/10 w-full" />
            <div className="flex justify-between items-center text-[10px] font-mono text-foreground/40 uppercase tracking-[0.3em] font-bold">
              <span>HYDERABAD, IN</span>
              <span>© 2024</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
