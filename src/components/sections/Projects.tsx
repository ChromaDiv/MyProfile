"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Smartphone, TerminalSquare, ShieldCheck } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const projects = [
  {
    id: "greenbuild",
    title: "GreenBuild Ledger",
    subtitle: "Industrial Compliance & Resource Management System",
    problem: "Large-scale construction projects often suffer from 'greenwashing' or material waste due to lack of real-time supply chain transparency and non-compliance with LEED and Abu Dhabi Estidama standards.",
    solution: "An engineering-led ERP system designed to track the Life Cycle Assessment (LCA) of building materials from procurement to site installation, aligned with Dubai Green Building Regulations.",
    engineeringFocus: [
      "LEED & Estidama Tracking: Integrated a verification module for MR credits and Estidama Pearl Rating requirements.",
      "QA Protocols: Automated 'Material Reject' workflow for non-compliant inventory, reducing waste by 12%.",
      "Supply Chain Traceability: Real-time ledger tracking vendor lead times and carbon footprints.",
    ],
    impact: "By digitizing the material lifecycle, GreenBuild Ledger transforms sustainability from a 'compliance headache' into a measurable ROI driver for high-stakes UAE infrastructure.",
    tags: ["LEED & Estidama", "Material Traceability", "QA/QC Automation", "Supply Chain Analytics"],
    icon: <Code2 className="w-10 h-10 mb-4 text-green-400" />,
    className: "md:col-span-2 md:row-span-2",
    demoLink: "https://green-build-nu.vercel.app/"
  },
  {
    id: "gov-ims",
    title: "Gov-IMS (Integrated Management System)",
    subtitle: "ISO 9001-Aligned Digital Governance & Quality Assurance Framework",
    problem: "Government operations often face \"siloed\" data and inconsistent procedural execution, leading to audit vulnerabilities and operational delays. The goal was to consolidate fragmented departmental workflows into a single, high-integrity digital ecosystem that guarantees 100% compliance with international quality standards.",
    engineeringFocus: [
      "ISO 9001:2015 Standardization: Digitized the Quality Management System (QMS), ensuring every process—from procurement to final delivery—followed a traceable, standardized SOP.",
      "Audit-Ready Architecture: Developed an automated document control and versioning module, reducing internal audit preparation time by 60%.",
      "Corrective & Preventive Action (CAPA) Tracking: Integrated a real-time module to identify process bottlenecks and trigger automated corrective workflows, minimizing \"non-conformance\" reports.",
      "Cross-Functional Governance: Created a centralized dashboard for executive oversight, providing real-time KPIs on departmental throughput and compliance health."
    ],
    impact: "By anchoring digital transformation in ISO 9001 principles, the IMS turned bureaucratic complexity into a streamlined, audit-proof engine for government operational excellence.",
    roiMatrix: [
      { objective: "Audit Compliance", approach: "ISO 9001 Framework Integration", result: "100% Compliance / Zero Major Non-Conformities." },
      { objective: "Process Speed", approach: "Unified Workflow Automation", result: "35% reduction in administrative lead times." },
      { objective: "Data Integrity", approach: "Centralized Digital Governance", result: "Eliminated 90% of manual paper-trail errors." }
    ],
    tags: ["ISO 9001:2015", "Quality Management (QMS)", "Process Standardization", "GovTech", "Compliance Automation"],
    icon: <ShieldCheck className="w-10 h-10 mb-4 text-blue-400" />,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: "rmsys",
    title: "RMSys (End-to-End Supply Chain Resilience)",
    subtitle: "AI-Powered Resource Management & Supply Chain Automation",
    problem: "Fragmented procurement processes and manual inventory tracking lead to high operational waste and 'dead capital' in high-turnover logistics environments.",
    solution: "A centralized operations hub that automates the procurement-to-pay lifecycle and uses predictive analytics to maintain optimal stock levels across the entire chain.",
    engineeringFocus: [
      "Automated Demand Forecasting: AI-driven logic analyzing consumption patterns, reducing over-stocking by 18%.",
      "Supply Chain Transparency: JIT vendor-management dashboard tracking price fluctuations and lead-times.",
      "QA & Expiry Control: FEFO (First-Expired, First-Out) tracking for perishable inventories.",
    ],
    impact: "RMSys transitions inventory management from reactive tracking to proactive resource orchestration, directly impacting the bottom line through reduced waste.",
    tags: ["Supply Chain Resilience", "Inventory Optimization", "Predictive Analytics", "Operational ROI"],
    icon: <TerminalSquare className="w-10 h-10 mb-4 text-emerald-400" />,
    className: "md:col-span-2 md:row-span-2",
    demoLink: "https://mintcream-zebra-738412.hostingersite.com/"
  },
  {
    id: "chroma-div",
    title: "Chroma Div",
    subtitle: "Consultancy for Industrial Digitization",
    desc: "A strategic consultancy platform focusing on bridging the gap between legacy industrial operations and modern digital efficiency through bespoke automation and algorithmic growth systems.",
    icon: <Code2 className="w-10 h-10 mb-4 text-purple-400" />,
    className: "md:col-span-2 md:row-span-2",
    demoLink: "https://chromadiv.com/",
    tags: ["Industrial Digitization", "Process Automation", "Digital Transformation"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold font-outfit mb-4 text-foreground">Featured Strategic Systems</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Case studies in Industrial Systems, Supply Chain Automation, and Sustainable Infrastructure.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className={project.className}
          >
            <GlassCard className="h-full flex flex-col p-0 overflow-hidden group hover:border-accent/40 transition-all duration-500 border-white/10 dark:border-white/5">

              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    {project.icon}
                    <h3 className="text-3xl font-bold font-outfit mt-4 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-accent font-mono text-xs uppercase tracking-widest mt-1 mb-4">
                        {project.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {project.problem && (
                  <div className="mb-6">
                    <h4 className="text-sm font-bold uppercase text-foreground/90 mb-2 border-l-2 border-accent pl-2">The Challenge</h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                )}

                {project.engineeringFocus && (
                  <div className="mb-6">
                    <h4 className="text-sm font-bold uppercase text-foreground/90 mb-2 border-l-2 border-accent pl-2">Key Engineering & QA Focus</h4>
                    <ul className="space-y-2">
                      {project.engineeringFocus.map((item, i) => (
                        <li key={i} className="text-sm text-foreground/70 flex gap-2">
                          <span className="text-accent">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.desc && <p className="text-foreground/80 mb-6">{project.desc}</p>}

                {project.impact && (
                  <div className="mb-6 p-4 bg-accent/5 rounded-xl border border-accent/10 italic">
                    <p className="text-sm text-foreground/90 leading-relaxed">&quot;{project.impact}&quot;</p>
                  </div>
                )}

                {/* Optional ROI Matrix Rendering */}
                {project.roiMatrix && (
                  <div className="mb-6 overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="border-b border-accent/20">
                          <th className="py-2 px-3 font-bold text-foreground/90 uppercase tracking-wider text-xs">Objective</th>
                          <th className="py-2 px-3 font-bold text-foreground/90 uppercase tracking-wider text-xs">Approach</th>
                          <th className="py-2 px-3 font-bold text-foreground/90 uppercase tracking-wider text-xs">Result (ROI)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.roiMatrix.map((row, rIdx) => (
                          <tr key={rIdx} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                            <td className="py-3 px-3 text-foreground/80 font-medium">{row.objective}</td>
                            <td className="py-3 px-3 text-foreground/70">{row.approach}</td>
                            <td className="py-3 px-3 text-accent font-medium">{row.result}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags?.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-foreground/5 dark:bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-tighter text-foreground/60 border border-white/5 group-hover:border-accent/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 transition-all duration-300">
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-accent hover:underline">
                        <ExternalLink size={16} /> Operational Deployment
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
