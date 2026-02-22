"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Zap,
  BarChart3,
  ShieldAlert,
  Boxes,
  FileSearch
} from "lucide-react";

const timeline = [
  {
    role: "Supply Chain Analyst",
    company: "Government of Pakistan",
    period: "May 2020 - Jan 2026",
    skills: ["Strategic Sourcing", "ISO 9001:2015", "Next.js", "TCO Modeling"],
    desc: [
      { label: "Strategic Sourcing", text: "Spearheaded multimillion-dollar contract negotiations, delivering a 15% reduction in costs for the 2024 fiscal year." },
      { label: "Operational Digitization", text: "Developed custom data visualization and demand forecasting dashboards using React/Next.js to replace legacy tracking." },
      { label: "Supply Chain Resilience", text: "Managed high-stakes procurement-to-delivery workflows, ensuring zero operational downtime across critical infrastructure." },
      { label: "Integrated Management System (IMS)", text: "Conceptualized and deployed a custom software solution based on ISO 9001:2015 to unify departmental workflows." },
      { label: "Quality Assurance", text: "Reduced process variance by 40% through digital SOPs and automated CAPA (Corrective and Preventive Action) tracking." },
      { label: "Audit Excellence", text: "Achieved a 'Zero Major Non-Conformance' rating during annual audits by digitizing document control and lifecycle traceability." }
    ],
  },
  {
    role: "Operations Manager",
    company: "Government of Pakistan",
    period: "May 2017 - May 2020",
    skills: ["Industrial QA", "Lean Manufacturing", "Resource Strategy"],
    desc: [
      { label: "Industrial Throughput", text: "Directed daily production planning in high-pressure environments, meeting output targets consistently while maintaining safety protocols." },
      { label: "Compliance Leadership", text: "Oversaw end-to-end QC and QA protocols, ensuring 100% adherence to international manufacturing standards." },
      { label: "Asset Strategy", text: "Optimized inventory control and preventive maintenance schedules, reducing equipment-related delays by significant margins." }
    ],
  },
  {
    role: "Assistant Manager (Planning)",
    company: "Packages Limited",
    period: "Jan 2014 - Jul 2014",
    skills: ["SAP ERP", "Material Requirement Planning", "JIT"],
    desc: [
      { label: "Service Level Optimization", text: "Maintained a 99% service level by synchronizing complex manufacturing constraints with market demand." },
      { label: "ERP & Data Integrity", text: "Utilized SAP for strategic material requirement analysis and real-time operational reporting for senior leadership." }
    ],
  },
];

const education = [
  {
    degree: "MPhil in International Development",
    year: "2025",
    school: "Iqra University (IU), Pakistan",
    focus: "Sustainable Infrastructure & Global Trade Ethics",
    details: [
      "Global Supply Chain Governance: Researched impact of international trade policies on regional logistics and ISO/LEED alignment.",
      "Inclusive Infrastructure: Analyzed socio-economic ROI of 'Green Building' initiatives for urban resilience.",
      "Tech for Social Good: Explored digital supply chain tools to bridge the 'Digital Divide' for small-scale vendors."
    ]
  },
  { degree: "MBA (Strategic Management)", year: "2021", school: "Iqra University (IU)" },
  { degree: "BE in Mechanical Engineering", year: "2013", school: "NUST" },
  { degree: "FSc (Pre Engineering)", year: "2009", school: "Punjab College of Information Technology" },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full relative bg-background/20 backdrop-blur-md border-y border-foreground/5">

      {/* Executive Pitch */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="max-w-4xl space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold font-outfit tracking-tight text-foreground">
            Operational <span className="text-accent italic">Leadership.</span>
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full" />
          <p className="text-lg md:text-2xl font-inter font-medium text-foreground/80 leading-relaxed">
            Strategic Supply Chain Lead & NUST-trained Mechanical Engineer. I specialize in transforming
            industrial complexity into <span className="text-accent">scalable business ROI</span> through
            Lean methodologies and Digital Innovation.
          </p>
          <p className="text-base text-foreground/60 max-w-3xl">
            With 10+ years of leadership at the Government of Pakistan and Packages Limited, I bridge
            the gap between rigid industrial engineering and agile digital supply chains, ensuring
            compliance with **ISO 9001** and **LEED** standards.
          </p>
        </div>

        {/* Impact Dashboard */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { icon: <BarChart3 />, label: "Contract Spend", val: "$10M+" },
            { icon: <Zap />, label: "Cost Reduction", val: "15%" },
            { icon: <CheckCircle2 />, label: "Service Level", val: "99%" },
            { icon: <ShieldAlert />, label: "Audit Rating", val: "Zero NC" }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border border-foreground/5 bg-foreground/[0.02] flex flex-col">
              <div className="text-accent mb-4">{item.icon}</div>
              <span className="text-3xl font-bold font-outfit">{item.val}</span>
              <span className="text-xs font-mono uppercase tracking-widest text-foreground/40 mt-1">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* Detailed Career Path */}
        <div className="lg:col-span-8 space-y-16">
          <div className="flex items-center gap-4">
            <Briefcase className="text-accent" />
            <h3 className="text-2xl font-bold font-outfit uppercase tracking-wider">Career Trajectory</h3>
          </div>

          <div className="space-y-20">
            {timeline.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold font-outfit">{job.role}</h4>
                    <p className="text-accent font-semibold flex items-center gap-2 mt-1">
                      <Boxes size={16} /> {job.company}
                    </p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-foreground/5 text-[10px] font-mono font-bold uppercase tracking-tighter">
                    {job.period}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-8">
                  {job.desc.map((bullet, i) => (
                    <div key={i} className="flex gap-4 group/item">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent group-hover/item:scale-150 transition-transform" />
                      <div>
                        <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                          <strong className="text-foreground">{bullet.label}:</strong> {bullet.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.skills.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-accent/5 text-accent border border-accent/10 rounded text-[10px] font-mono uppercase font-bold">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Research Focus */}
        <div className="lg:col-span-4 space-y-12">
          <div className="flex items-center gap-4">
            <GraduationCap className="text-accent" />
            <h3 className="text-2xl font-bold font-outfit uppercase tracking-wider">Education</h3>
          </div>

          <div className="space-y-8 relative before:absolute before:left-[-20px] before:top-4 before:bottom-4 before:w-[1px] before:bg-foreground/10">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-[-24px] top-2 w-2 h-2 rounded-full bg-accent border-4 border-background" />
                <h4 className="text-lg font-bold font-outfit leading-tight">{edu.degree}</h4>
                <p className="text-sm text-foreground/60 mt-1">{edu.school} • <span className="text-accent font-mono">{edu.year}</span></p>

                {edu.focus && (
                  <div className="mt-3 inline-flex items-center gap-2 px-2 py-0.5 bg-foreground/5 rounded text-[10px] font-bold text-foreground/40 uppercase">
                    Focus: {edu.focus}
                  </div>
                )}

                {edu.details && (
                  <div className="mt-4 space-y-3">
                    {edu.details.map((detail, i) => (
                      <div key={i} className="flex gap-3">
                        <FileSearch size={14} className="shrink-0 text-accent/40 mt-0.5" />
                        <p className="text-[11px] leading-relaxed text-foreground/50 italic">{detail}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}