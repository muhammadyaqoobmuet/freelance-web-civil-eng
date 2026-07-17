"use client"

import * as React from "react"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Loader } from "@/components/Loader"
import ArchitecturalBackground from "@/components/ArchitecturalBackground"
import { SoundProvider } from "@/components/SoundProvider"
import { cn } from "@/lib/utils"

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = React.useState(true)

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <SoundProvider>
      {loading && <Loader onCompleteAction={() => setLoading(false)} />}
      <ArchitecturalBackground />
      <main className={cn(
        "transition-opacity duration-700 bg-transparent text-foreground engineering-grid relative z-10", 
        loading ? "opacity-0" : "opacity-100"
      )}>
        {children}
      </main>
      </SoundProvider>
    </ThemeProvider>
  )
}
