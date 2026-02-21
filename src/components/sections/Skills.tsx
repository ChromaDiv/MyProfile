"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Globe, BarChart } from "lucide-react";

const skillTiers = [
  {
    category: "Core Engineering & SCM",
    icon: "⚙️",
    skills: ["SAP / ERP Systems", "Strategic Sourcing", "Lean Six Sigma (DMAIC)", "Contract Negotiation"]
  },
  {
    category: "Sustainability & Compliance",
    icon: "🌱",
    skills: ["LEED BD+C Framework", "ISO 9001 / 14001", "Carbon Footprint Modeling", "Life Cycle Assessment (LCA)"]
  },
  {
    category: "Data & Automation",
    icon: "📊",
    skills: ["Python (SCM Analytics)", "PowerBI / Tableau", "SQL (Database Management)", "Next.js (Custom Dashboards)"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent dark:via-accent/10 pointer-events-none -z-10" />
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 w-full"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-outfit mb-4 text-foreground break-words">Professional Expertise & Core Competencies</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">High-performance industrial systems and engineering frameworks optimized for operational excellence and resource efficiency.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillTiers.map((tier, idx) => (
            <motion.div
              key={tier.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-3xl border border-white/10 dark:border-white/5 hover:border-accent/30 transition-all group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{tier.icon}</div>
              <h3 className="text-xl font-bold mb-6 text-foreground">{tier.category}</h3>
              <ul className="space-y-4">
                {tier.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-3 text-foreground/70 group-hover:text-foreground/90 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Industrial Systems Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-semibold font-outfit flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent" /> Industrial Systems Matrix
              </h3>
            </div>
          </div>
          <div className="glass rounded-2xl border border-white/10 overflow-hidden">
            <table className="w-full text-left border-collapse block md:table">
              <thead className="hidden md:table-header-group">
                <tr className="border-b border-foreground/10 dark:border-white/10 text-foreground/50 text-[10px] uppercase tracking-[0.2em] font-mono">
                  <th className="py-4 md:py-6 px-6 md:px-8">Objective</th>
                  <th className="py-4 md:py-6 px-6 md:px-8">Approach</th>
                  <th className="py-4 md:py-6 px-6 md:px-8">Result (ROI)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foreground/5 dark:divide-white/5 block md:table-row-group">
                {[
                  {
                    objective: "Cut Costs",
                    approach: "Strategic Sourcing & Negotiation",
                    result: "15% Savings on Millions in spend."
                  },
                  {
                    objective: "Zero Downtime",
                    approach: "Predictive Maintenance & JIT",
                    result: "99% Service Level consistently."
                  },
                  {
                    objective: "Sustainability",
                    approach: "LEED & Estidama Frameworks",
                    result: "12% Waste Reduction in materials."
                  },
                  {
                    objective: "Process Speed",
                    approach: "Custom Logic Workflows & AI",
                    result: "40% faster procurement lifecycle."
                  }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-foreground/5 dark:hover:bg-white/5 transition-colors group flex flex-col md:table-row pb-4 md:pb-0">
                    <td className="py-2 md:py-6 px-6 md:px-8 font-bold text-foreground group-hover:text-accent transition-colors pt-4 md:pt-6">
                      <span className="md:hidden text-[10px] text-foreground/50 uppercase tracking-[0.2em] font-mono block mb-1">Objective</span>
                      {row.objective}
                    </td>
                    <td className="py-2 md:py-6 px-6 md:px-8 text-foreground/80 font-mono text-sm">
                      <span className="md:hidden text-[10px] text-foreground/50 uppercase tracking-[0.2em] font-mono block mb-1">Approach</span>
                      {row.approach}
                    </td>
                    <td className="py-2 md:py-6 px-6 md:px-8 text-foreground/60 text-sm leading-relaxed pb-4 md:pb-6">
                      <span className="md:hidden text-[10px] text-foreground/50 uppercase tracking-[0.2em] font-mono block mb-1">Result (ROI)</span>
                      {row.result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
