"use client"

import * as React from "react"
import { Inter, Playfair_Display, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Loader } from "@/components/Loader";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = React.useState(true);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} ${playfair.variable} ${jetbrains.variable} antialiased h-full bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {loading && <Loader onCompleteAction={() => setLoading(false)} />}
          <main className={cn("transition-opacity duration-700 bg-background text-foreground engineering-grid", loading ? "opacity-0" : "opacity-100")}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
