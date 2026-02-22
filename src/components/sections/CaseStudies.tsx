"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Zap, FileText, Globe, BarChart3, Target } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full overflow-hidden print:py-0 print:px-0 relative bg-background/20 backdrop-blur-md border-y border-foreground/5">

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16 print:mb-8"
      >
        <div className="flex items-center gap-3 mb-4 print:hidden">
          <Globe className="text-accent animate-spin-slow" size={20} />
          <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-accent">Strategic Portfolio</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold font-outfit mb-4 text-foreground tracking-tight">
          Operational <span className="text-accent italic">Excellence.</span>
        </h2>
        <p className="text-lg md:text-xl text-foreground/60 max-w-3xl font-inter leading-relaxed print:text-sm">
          Industrial Efficiency & Sustainability alignment for high-stakes UAE infrastructure and global supply chains.
        </p>
      </motion.div>

      <div className="space-y-10 print:space-y-6">

        {/* Executive Profile Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-10 rounded-[2rem] bg-accent/5 border border-accent/10 overflow-hidden print:bg-white print:border-slate-300 print:rounded-none"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 print:hidden">
            <ShieldCheck size={120} />
          </div>
          <div className="relative z-10 max-w-4xl">
            <h3 className="text-xl font-bold font-outfit mb-4 flex items-center gap-2 text-accent print:text-black">
              <ShieldCheck size={24} /> Executive Summary
            </h3>
            <p className="text-lg md:text-2xl font-inter leading-relaxed text-foreground/80 print:text-base print:text-black">
              Mechanical Engineer (NUST) & MBA lead with 10+ years experience. Specialized in bridging
              <span className="text-foreground font-bold"> Industrial Engineering </span> with
              <span className="text-foreground font-bold"> SCM Optimization </span> to deliver fiscally lean,
              LEED-compliant infrastructure.
            </p>
          </div>
        </motion.div>

        {/* Project 1: GreenBuild Ledger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group overflow-hidden rounded-[2rem] border border-foreground/5 bg-foreground/[0.02] hover:border-accent/30 transition-all duration-500 print:border-slate-300 print:rounded-none"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Sidebar Metadata */}
            <div className="lg:col-span-4 p-8 lg:p-10 bg-foreground/[0.02] border-b lg:border-b-0 lg:border-r border-foreground/5 print:border-r">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="p-4 bg-green-500/10 text-green-500 rounded-2xl w-fit mb-6">
                    <Zap size={32} />
                  </div>
                  <h3 className="text-3xl font-bold font-outfit mb-2">GreenBuild Ledger</h3>
                  <p className="text-xs font-mono text-foreground/40 uppercase tracking-widest">UAE Smart Cities / LEED</p>
                </div>
                <div className="mt-12 space-y-4">
                  <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                    <span className="text-[10px] font-bold text-accent uppercase block mb-1">Operational ROI</span>
                    <span className="text-2xl font-bold font-outfit text-foreground">7% Cost Savings</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 p-8 lg:p-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-mono font-bold text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Target size={14} /> Objective
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Eliminate material waste and ensure 100% compliance with international green building standards (Estidama/LEED) in large-scale UAE developments.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
                    <BarChart3 size={14} /> Methodology
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Optimized inventory buffers and reduced on-site disposal via standardized QA framework for material procurement.
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-foreground/5 space-y-6">
                <div className="flex gap-4 group/item">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0 group-hover/item:scale-150 transition-transform" />
                  <p className="text-sm text-foreground/70 leading-relaxed italic">
                    Developed a digital ledger to track &quot;Cradle-to-Gate&quot; carbon footprints, aligning with <strong>UAE Net Zero 2050</strong> goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* UAE Value Add Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 md:p-16 rounded-[2rem] border-2 border-dashed border-accent/20 text-center bg-accent/[0.02] print:bg-white print:border-slate-300"
        >
          <p className="text-2xl md:text-4xl font-outfit font-medium text-foreground/90 leading-tight max-w-5xl mx-auto mb-10">
            &quot;I offer the technical precision of an <span className="text-accent">Engineer</span> combined with the strategic foresight of an <span className="text-accent">MBA</span> to ensure projects are audit-ready and commercially viable.&quot;
          </p>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-bold hover:bg-accent hover:text-white transition-all duration-300 print:hidden"
          >
            <FileText size={20} /> Export Executive Summary (PDF)
          </button>
        </motion.div>

      </div>
    </section>
  );
}