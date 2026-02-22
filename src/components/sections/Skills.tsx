"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Settings, Leaf, BarChart3, ChevronRight, Activity } from "lucide-react";

const skillTiers = [
  {
    category: "Core Engineering & SCM",
    icon: <Settings className="w-6 h-6" />,
    skills: [
      { name: "SAP / ERP Systems", level: 95 },
      { name: "Strategic Sourcing", level: 90 },
      { name: "Lean Six Sigma (DMAIC)", level: 85 },
      { name: "Contract Negotiation", level: 92 }
    ]
  },
  {
    category: "Sustainability & Compliance",
    icon: <Leaf className="w-6 h-6" />,
    skills: [
      { name: "LEED BD+C Framework", level: 88 },
      { name: "ISO 9001 / 14001", level: 95 },
      { name: "Carbon Footprint Modeling", level: 80 },
      { name: "Life Cycle Assessment (LCA)", level: 75 }
    ]
  },
  {
    category: "Data & Automation",
    icon: <BarChart3 className="w-6 h-6" />,
    skills: [
      { name: "Python (SCM Analytics)", level: 82 },
      { name: "PowerBI / Tableau", level: 90 },
      { name: "SQL (Database Management)", level: 85 },
      { name: "Next.js (Custom Dashboards)", level: 78 }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative overflow-hidden w-full bg-background/20 backdrop-blur-md border-y border-foreground/5">
      {/* Background Grid Decorative Element */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-accent font-bold">Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6 text-foreground tracking-tight">
            Professional Expertise & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Core Competencies</span>
          </h2>
          <p className="text-foreground/60 max-w-xl text-lg leading-relaxed">
            High-performance industrial systems and engineering frameworks optimized for operational excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillTiers.map((tier, idx) => (
            <motion.div
              key={tier.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-foreground/[0.02] border border-foreground/5 hover:border-accent/40 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-500">
                {tier.icon}
              </div>
              <h3 className="text-xl font-bold mb-8 text-foreground tracking-tight">{tier.category}</h3>
              <div className="space-y-6">
                {tier.skills.map(skill => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground/80 font-medium group-hover:text-foreground transition-colors">{skill.name}</span>
                      <span className="text-[10px] font-mono text-accent/50">{skill.level}%</span>
                    </div>
                    <div className="h-[2px] w-full bg-foreground/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Improved Industrial Systems Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-2xl md:text-3xl font-bold font-outfit flex items-center gap-4">
              <span className="w-12 h-[2px] bg-accent" /> Industrial Systems Matrix
            </h3>
            <p className="text-xs font-mono text-foreground/40 uppercase tracking-widest">Efficiency / Sustainability / ROI</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-foreground/5 bg-foreground/[0.01] backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead className="hidden md:table-header-group">
                <tr className="border-b border-foreground/5 text-foreground/40 text-[10px] uppercase tracking-[0.3em] font-mono">
                  <th className="py-8 px-10">Target Objective</th>
                  <th className="py-8 px-10">Strategic Approach</th>
                  <th className="py-8 px-10">Operational ROI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foreground/5">
                {[
                  { obj: "Cut Costs", app: "Strategic Sourcing & Negotiation", res: "15% Savings", detail: "on multi-million spend" },
                  { obj: "Zero Downtime", app: "Predictive Maintenance & JIT", res: "99% Service", detail: "maintained consistently" },
                  { obj: "Sustainability", app: "LEED & Estidama Frameworks", res: "12% Waste Red.", detail: "in material lifecycle" },
                  { obj: "Process Speed", app: "Custom Logic Workflows & AI", res: "40% Faster", detail: "procurement lifecycle" }
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-accent/[0.02] transition-colors">
                    <td className="py-8 px-10">
                      <div className="flex flex-col">
                        <span className="font-bold text-foreground group-hover:text-accent transition-colors">{row.obj}</span>
                      </div>
                    </td>
                    <td className="py-8 px-10 text-foreground/60 font-mono text-xs italic">
                      {row.app}
                    </td>
                    <td className="py-8 px-10">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider border border-accent/20">
                          {row.res}
                        </span>
                        <span className="text-xs text-foreground/40">{row.detail}</span>
                      </div>
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