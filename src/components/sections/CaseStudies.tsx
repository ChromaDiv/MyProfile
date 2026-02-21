"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Zap, FileText } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-4 md:px-12 max-w-7xl mx-auto print:p-0 print:my-0 w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 print:border-none print:pl-0"
      >
        <div className="w-12 h-1.5 bg-accent mb-6 rounded-full print:hidden" />
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-outfit mb-4 text-foreground print:text-3xl break-words">
          Strategic Project Portfolio
        </h2>
        <p className="text-lg md:text-xl text-accent font-medium font-outfit print:text-lg">
          Industrial Efficiency & Sustainability | NEOM, DP World & Masdar City Alignment
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 print:gap-4 w-full">
        {/* Executive Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-6 md:p-8 rounded-3xl border-accent/10 print:border-slate-200 print:shadow-none bg-accent/5"
        >
          <h3 className="text-xl font-bold font-outfit mb-4 flex items-center gap-2">
            <ShieldCheck className="text-accent" size={24} /> Executive Summary
          </h3>
          <p className="text-foreground/80 leading-relaxed text-lg">
            A multi-disciplinary lead with 10+ years of experience managing high-stakes industrial operations. Specialized in bridging the gap between Mechanical Engineering principles and Supply Chain optimization to deliver projects that are fiscally lean and environmentally sustainable.
          </p>
        </motion.div>

        {/* Project 1: GreenBuild */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 glass p-8 rounded-3xl border-accent/10 print:block print:border-slate-200"
        >
          <div className="lg:col-span-1 space-y-4">
            <div className="p-3 bg-green-500/10 rounded-2xl w-fit">
              <Zap className="text-green-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold font-outfit">GreenBuild Ledger</h3>
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Target Sector</span>
              <p className="text-sm font-medium">UAE Construction & Smart Cities (Estidama/LEED)</p>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-foreground mb-2">Objective</h4>
                <p className="text-sm text-foreground/70">To eliminate material waste and ensure 100% compliance with international green building standards in large-scale infrastructure developments.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Operational ROI</h4>
                <p className="text-sm text-foreground/70">Saved an estimated <strong>7% in total project costs</strong> by optimizing inventory buffers and reducing on-site material disposal.</p>
              </div>
            </div>
            <div className="space-y-4 border-t border-accent/10 pt-6">
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <span className="font-bold text-sm block">Supply Chain Integration</span>
                  <p className="text-xs text-foreground/60">Developed a digital ledger to track &quot;Cradle-to-Gate&quot; carbon footprints of raw materials, ensuring alignment with UAE Net Zero 2050 goals.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <span className="font-bold text-sm block">Quality Engineering</span>
                  <p className="text-xs text-foreground/60">Implemented a standardized QA framework for material procurement that reduced rejection rates by 12% through pre-certified vendor mapping.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 2: Global Procurement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 glass p-8 rounded-3xl border-accent/10 print:block print:border-slate-200"
        >
          <div className="lg:col-span-1 space-y-4">
            <div className="p-3 bg-blue-500/10 rounded-2xl w-fit">
              <TrendingUp className="text-blue-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold font-outfit">Global Procurement & Cost Leadership</h3>
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Target Sector</span>
              <p className="text-sm font-medium">Logistics, Manufacturing & Gov Operations</p>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-foreground mb-2">Objective</h4>
                <p className="text-sm text-foreground/70">To stabilize multimillion-dollar supply chains during volatile market conditions while driving significant cost savings.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Business ROI</h4>
                <p className="text-sm text-foreground/70">Delivered a <strong>15% reduction in annual spend</strong> on multimillion-dollar contracts via TCO modeling.</p>
              </div>
            </div>
            <div className="space-y-4 border-t border-accent/10 pt-6">
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <span className="font-bold text-sm block">Risk Mitigation</span>
                  <p className="text-xs text-foreground/60">Architected a demand-forecasting system that synchronized procurement with manufacturing constraints, maintaining a 99% service level.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <span className="font-bold text-sm block">Process Digitization</span>
                  <p className="text-xs text-foreground/60">Built custom analytical dashboards providing real-time visibility into lead-time variability, reducing stock-outs by 20%.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* UAE Value Add & Signature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass p-12 rounded-3xl border-accent/20 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors -z-10" />
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-mono mb-6 text-accent font-bold">UAE-Specific Value Add</h3>
          <p className="text-2xl md:text-3xl font-outfit font-medium italic leading-relaxed text-foreground/90 max-w-4xl mx-auto mb-8">
            &quot;In a region defined by megaprojects, I offer the technical precision of a NUST-trained Mechanical Engineer combined with the strategic foresight of an MBA. I ensure projects are <strong>audit-ready</strong>, <strong>sustainably compliant</strong>, and <strong>commercially viable</strong>.&quot;
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-bold hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all"
            >
              <FileText size={18} /> Export Portfolio Summary (PDF)
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
