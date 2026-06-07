import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";

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

export const metadata: Metadata = {
  title: {
    default: "Arslan Javed | Civil Engineer & Structural Designer",
    template: "%s | Arslan Javed"
  },
  description: "Portfolio of Arslan Javed, a dedicated Civil Engineer and Structural Designer specializing in structural analysis, infrastructure projects, and sustainable engineering solutions.",
  keywords: ["civil engineer", "arslan javed", "arslan", "structural engineering", "infrastructure projects", "structural analysis", "engineering excellence", "structural designer"],
  authors: [{ name: "Arslan Javed" }],
  creator: "Arslan Javed",
  metadataBase: new URL("https://arslanjaved.engineer"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arslanjaved.engineer",
    title: "Arslan Javed | Civil Engineer & Structural Designer",
    description: "Professional portfolio of Arslan Javed, specializing in Structural Analysis and Infrastructure Projects.",
    siteName: "Arslan Javed Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arslan Javed - Civil Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arslan Javed | Civil Engineer & Structural Designer",
    description: "Professional portfolio of Arslan Javed, specializing in Structural Analysis and Infrastructure Projects.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} ${playfair.variable} ${jetbrains.variable} antialiased h-full bg-background`}>
        <ClientProviders>
          {children}
        </ClientProviders>
        <Script id="chatbase-widget" strategy="lazyOnload">
          {`(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="iL9gCyhGHWykP1gvues7h";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`}
        </Script>
      </body>
    </html>
  );
}
