"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-lg border border-border bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
      aria-label="Toggle theme"
      data-cuelume-toggle="toggle"
    >
      <div className="relative w-5 h-5">
        <motion.div
           initial={false}
           animate={{ 
             scale: theme === 'dark' ? 0 : 1,
             rotate: theme === 'dark' ? 90 : 0,
             opacity: theme === 'dark' ? 0 : 1
           }}
           transition={{ duration: 0.2 }}
           className="absolute inset-0"
        >
          <Sun className="w-5 h-5 text-amber-500" />
        </motion.div>
        <motion.div
           initial={false}
           animate={{ 
             scale: theme === 'dark' ? 1 : 0,
             rotate: theme === 'dark' ? 0 : -90,
             opacity: theme === 'dark' ? 1 : 0
           }}
           transition={{ duration: 0.2 }}
           className="absolute inset-0"
        >
          <Moon className="w-5 h-5 text-blue-400" />
        </motion.div>
      </div>
    </motion.button>
  )
}
