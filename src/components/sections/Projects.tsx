"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2, TerminalSquare, ShieldCheck, Activity, ChevronRight, Gauge, Target } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const projects = [
  {
    id: "greenbuild",
    title: "GreenBuild Ledger",
    subtitle: "Industrial Compliance & Resource Management System",
    status: "Operational",
    problem: "Tackling 'greenwashing' and material waste through real-time supply chain transparency and LEED/Estidama alignment.",
    engineeringFocus: [
      { label: "Compliance", detail: "Integrated LEED & Estidama verification modules." },
      { label: "QA Protocols", detail: "Automated 'Material Reject' logic (-12% waste)." },
      { label: "Traceability", detail: "Full LCA (Life Cycle Assessment) material ledger." },
    ],
    metrics: [
      { label: "Waste Reduction", value: "12%", trend: "down" },
      { label: "Compliance", value: "LEED Gold", trend: "stable" },
    ],
    tags: ["LEED", "Traceability", "QA/QC"],
    color: "text-blue-400",
    bg: "group-hover:border-blue-500/50",
    icon: <Code2 className="w-6 h-6" />,
    demoLink: "https://green-build-nu.vercel.app/"
  },
  {
    id: "gov-ims",
    title: "Gov-IMS",
    subtitle: "ISO 9001:2015 Digital Governance Framework",
    status: "Audit-Ready",
    problem: "Consolidating fragmented government workflows into a high-integrity, audit-proof digital ecosystem.",
    engineeringFocus: [
      { label: "Standardization", detail: "Digitized QMS tracking for every organizational SOP." },
      { label: "Efficiency", detail: "60% reduction in manual audit documentation." },
      { label: "Governance", detail: "Real-time KPI dashboard for executive oversight." },
    ],
    metrics: [
      { label: "Compliance", value: "100%", trend: "up" },
      { label: "Lead Time", value: "-35%", trend: "down" },
    ],
    tags: ["ISO 9001", "GovTech", "QMS"],
    color: "text-blue-400",
    bg: "group-hover:border-blue-500/50",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    id: "rmsys",
    title: "RMSys",
    subtitle: "AI-Driven Supply Chain Resilience Hub",
    status: "Active Deployment",
    problem: "Eliminating 'dead capital' and manual inventory errors through predictive resource orchestration.",
    engineeringFocus: [
      { label: "Forecasting", detail: "AI logic reduced over-stocking by 18%." },
      { label: "Logistics", detail: "JIT vendor-management & lead-time tracking." },
      { label: "Logic", detail: "Automated FEFO (First-Expired, First-Out) protocols." },
    ],
    metrics: [
      { label: "Stock Accuracy", value: "99.2%", trend: "up" },
      { label: "Op-Waste", value: "-18%", trend: "down" },
    ],
    tags: ["AI", "Inventory", "Sourcing"],
    color: "text-blue-500",
    bg: "group-hover:border-blue-600/50",
    icon: <TerminalSquare className="w-6 h-6" />,
    demoLink: "https://mintcream-zebra-738412.hostingersite.com/"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full relative bg-background/20 backdrop-blur-md border-y border-foreground/5">
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-30" />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mb-20 space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="h-[2px] w-12 bg-accent" />
          <span className="text-xs font-mono text-accent font-bold uppercase tracking-[0.4em]">Operational Systems</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold font-outfit tracking-tighter text-foreground">
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">Impact.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-12 relative z-10">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.7 }}
          >
            <GlassCard className={`group border-foreground/5 dark:border-white/5 transition-all duration-700 ${project.bg}`}>
              <div className="flex flex-col lg:flex-row">

                {/* Left Panel: The Core Identity */}
                <div className="lg:w-1/3 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-foreground/5 bg-foreground/[0.01]">
                  <div className={`mb-6 p-4 w-fit rounded-2xl bg-foreground/5 border border-foreground/10 ${project.color}`}>
                    {project.icon}
                  </div>
                  <h3 className="text-3xl font-bold font-outfit mb-2">{project.title}</h3>
                  <p className="text-xs font-mono text-foreground/40 uppercase tracking-widest mb-6 leading-relaxed">
                    {project.subtitle}
                  </p>

                  <div className="flex items-center gap-2 mb-8">
                    <div className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${project.color.replace('text', 'bg')}`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${project.color.replace('text', 'bg')}`}></span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">{project.status}</span>
                  </div>

                  <div className="space-y-4">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="flex justify-between items-end border-b border-foreground/5 pb-2">
                        <span className="text-[10px] uppercase text-foreground/40 font-mono">{m.label}</span>
                        <span className={`text-lg font-bold font-outfit ${project.color}`}>{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Panel: The Engineering Detail */}
                <div className="lg:w-2/3 p-8 lg:p-12 space-y-10">
                  <div className="space-y-3">
                    <h4 className="flex items-center gap-2 text-[10px] font-mono font-bold text-accent uppercase tracking-[0.2em]">
                      <Target size={12} /> The Challenge
                    </h4>
                    <p className="text-lg text-foreground/80 font-inter leading-relaxed italic">
                      &quot;{project.problem}&quot;
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="flex items-center gap-2 text-[10px] font-mono font-bold text-accent uppercase tracking-[0.2em]">
                        <Gauge size={12} /> Engineering Focus
                      </h4>
                      <div className="space-y-4">
                        {project.engineeringFocus.map((item, i) => (
                          <div key={i} className="group/item flex gap-4">
                            <span className="text-accent font-mono text-xs mt-1">0{i + 1}</span>
                            <div>
                              <p className="text-sm font-bold text-foreground leading-none mb-1">{item.label}</p>
                              <p className="text-xs text-foreground/50">{item.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col justify-between items-end">
                      <div className="flex flex-wrap gap-2 justify-end">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[9px] font-mono px-3 py-1 rounded-full border border-foreground/10 bg-foreground/5 text-foreground/40">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {project.demoLink && (
                        <motion.a
                          whileHover={{ x: 5 }}
                          href={project.demoLink}
                          target="_blank"
                          className={`mt-8 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] ${project.color}`}
                        >
                          Access Control <ChevronRight size={16} />
                        </motion.a>
                      )}
                    </div>
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