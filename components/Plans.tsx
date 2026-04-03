"use client"

import { motion } from "framer-motion"
import { Compass, Maximize2, Download } from "lucide-react"

const plans = [
  { title: "Foundation Layout", type: "CAD Drawing", ref: "ST-001" },
  { title: "Column Reinforcement", type: "Structural Detail", ref: "ST-002" },
  { title: "Roof Truss System", type: "Section View", ref: "ST-003" },
  { title: "Staircase Geometry", type: "Isometric Detail", ref: "ST-004" }
]

export function Plans() {
  return (
    <section id="plans" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <Compass className="text-primary w-8 h-8" />
          STRUCTURAL PLANS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.ref}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="structural-border group bg-background p-4 flex flex-col gap-4 hover:bg-muted/50 transition-colors"
            >
              <div className="aspect-[4/3] bg-muted/50 border border-dashed border-border flex items-center justify-center relative overflow-hidden">
                <Compass className="w-12 h-12 text-secondary/20 group-hover:scale-110 transition-transform" />
                <div className="absolute top-2 right-2 flex gap-2">
                   <button className="p-1.5 bg-background/80 rounded border shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                   </button>
                    <button className="p-1.5 bg-background/80 rounded border shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <Download className="w-3.5 h-3.5" />
                   </button>
                </div>
              </div>
              
              <div>
                <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">{plan.ref}</span>
                <h3 className="font-bold mt-2">{plan.title}</h3>
                <p className="text-xs text-secondary mt-1">{plan.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
