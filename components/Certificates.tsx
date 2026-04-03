"use client"

import { motion } from "framer-motion"
import { Scroll, ExternalLink, GraduationCap } from "lucide-react"

const certs = [
  { title: "Professional Engineer (PE) License", issuer: "Engineering Council", date: "2025" },
  { title: "Advanced Structural Analysis", issuer: "Coursera / Stanford", date: "2024" },
  { title: "AutoCAD Expert Certification", issuer: "Autodesk", date: "2023" }
]

const courses = [
  { title: "Seismic Design of Buildings", provider: "EDX / MIT", year: "2024" },
  { title: "Concrete Technology & Mix Design", provider: "NPTEL", year: "2023" },
  { title: "Project Management for Civil Engineers", provider: "Udemy", year: "2023" }
]

export function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Certificates */}
          <div>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
              <Scroll className="text-primary w-8 h-8" />
              CERTIFICATIONS
            </h2>
            <div className="space-y-4">
              {certs.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-background border border-border flex items-center justify-between group hover:border-primary transition-colors"
                >
                  <div>
                    <h3 className="font-bold">{cert.title}</h3>
                    <p className="text-xs text-secondary font-mono">{cert.issuer} • {cert.date}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-secondary/40 group-hover:text-primary transition-colors cursor-pointer" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
              <GraduationCap className="text-accent w-8 h-8" />
              COURSES
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {courses.map((course, i) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-background border border-border flex items-center gap-4 hover:border-accent transition-colors"
                >
                   <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-accent" />
                   </div>
                   <div>
                      <h3 className="font-bold text-sm">{course.title}</h3>
                      <p className="text-[10px] text-secondary font-mono uppercase tracking-wider">{course.provider} | {course.year}</p>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
