"use client"

import { useEffect } from "react"
import { bind } from "cuelume"

export function SoundProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    bind()
  }, [])

  return <>{children}</>
}
