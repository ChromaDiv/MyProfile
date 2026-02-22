"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const timeline = [
  {
    role: "Supply Chain Analyst",
    company: "Government of Pakistan",
    period: "May 2020 - Jan 2026",
    desc: (
      <ul className="list-disc list-inside space-y-2 mt-2 text-sm md:text-base">
        <li><strong>Strategic Sourcing & Cost Leadership:</strong> Spearheaded multimillion-dollar contract negotiations, delivering a 15% reduction in costs for the 2024 fiscal year.</li>
        <li><strong>Operational Digitization:</strong> Developed custom data visualization and demand forecasting dashboards using React/Next.js.</li>
        <li><strong>Supply Chain Resilience:</strong> Managed high-stakes procurement-to-delivery workflows, ensuring zero downtime.</li>
        <li><strong>Process Optimization:</strong> Led cross-functional approvals for technical and commercial offers.</li>
        <li><strong>Integrated Management System (IMS) Development:</strong> Conceptualized and deployed a custom software solution based on ISO 9001:2015 standards to unify departmental workflows and quality protocols.</li>
        <li><strong>Quality Assurance Leadership:</strong> Reduced process variance by 40% through the implementation of digital SOPs and automated CAPA (Corrective and Preventive Action) tracking.</li>
        <li><strong>Audit Optimization:</strong> Achieved a "Zero Major Non-Conformance" rating during annual audits by digitizing document control and lifecycle traceability.</li>
      </ul>
    ),
  },
  {
    role: "Operations Manager",
    company: "Government of Pakistan",
    period: "May 2017 - May 2020",
    desc: (
      <ul className="list-disc list-inside space-y-2 mt-2 text-sm md:text-base">
        <li><strong>Quality Assurance & Industrial Throughput:</strong> Directed daily production planning in high-pressure environments, meeting output targets consistently.</li>
        <li><strong>Quality & Compliance:</strong> Oversaw end-to-end QC and QA protocols, ensuring 100% adherence to international standards.</li>
        <li><strong>Asset & Resource Strategy:</strong> Optimized inventory control and preventive maintenance schedules.</li>
      </ul>
    ),
  },
  {
    role: "Assistant Manager (Planning)",
    company: "Packages Limited",
    period: "Jan 2014 - Jul 2014",
    desc: (
      <ul className="list-disc list-inside space-y-2 mt-2 text-sm md:text-base">
        <li><strong>Service Level Optimization:</strong> Maintained a 99% service level by synchronizing complex manufacturing constraints.</li>
        <li><strong>ERP & Inventory Management:</strong> Utilized SAP for strategic material requirement analysis and real-time operational reporting.</li>
      </ul>
    ),
  },
];

const education = [
  {
    degree: "MPhil in International Development",
    year: "2025",
    school: "Iqra University (IU), Pakistan",
    focus: "Sustainable Infrastructure & Global Trade Ethics",
    details: [
      "Global Supply Chain Governance: Researched the impact of international trade policies on regional logistics, focusing on how developing markets can align with global sustainability standards (ISO/LEED).",
      "Inclusive Infrastructure: Analyzed the socio-economic ROI of 'Green Building' initiatives in emerging economies, providing a macro-level perspective on long-term urban resilience.",
      "Tech for Social Good (Universal Access): Explored how digital supply chain tools can bridge the 'Digital Divide,' ensuring small-scale vendor participation in global procurement networks."
    ]
  },
  { degree: "MBA", year: "2021", school: "Iqra University (IU), Pakistan" },
  { degree: "BE in Mechanical Engineering", year: "2013", school: "NUST" },
  { degree: "FSc (Pre Engineering)", year: "2009", school: "Punjab College of Information Technology" },
];

export function Experience() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 w-full"
      >
        <div className="space-y-6 text-foreground/80 leading-relaxed text-left md:text-justify w-full">
          <p className="text-xl md:text-2xl font-outfit font-bold text-accent mb-4">
            Strategic Supply Chain Lead | Engineering MBA | LEED Green Associate (Candidate)
          </p>
          <p className="text-sm md:text-base">
            I deliver high-performance industrial systems that guarantee operational excellence. With 10+ years of cross-functional leadership in the Government of Pakistan and industrial firms like Packages Limited, I specialize in transforming complex supply chains through Lean Six Sigma methodologies, ISO-standard Quality Assurance, and Data-Driven Digitization.
          </p>
          <p className="text-sm md:text-base">
            By combining my NUST Mechanical Engineering foundation, MBA leadership, and MPhil in International Development, I offer a unique <strong>&quot;Triple Bottom Line&quot;</strong> perspective: optimizing for <strong>Profit</strong> (Supply Chain), <strong>People</strong> (Global Ethics), and <strong>Planet</strong> (Sustainability).
          </p>
          <p className="text-sm md:text-base">
            Currently, I am leveraging my deep technical background and LEED candidate status to integrate sustainable frameworks into modern industrial operations. My goal is bridging the gap between operational efficiency, environmental stewardship, and scalable business ROI.
          </p>
        </div>

        {/* KPI Impact Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-12 w-full">
          {[
            { label: "Contract Value Managed", value: "$10M+" },
            { label: "Cost Reduction Achieved", value: "15%" },
            { label: "Service Level Maintained", value: "99%" },
            { label: "Compliance Standards", value: "ISO & LEED" },
          ].map((kpi, idx) => (
            <div key={idx} className="glass p-4 md:p-6 rounded-2xl border-accent/20 text-center flex flex-col justify-center">
              <span className="text-2xl md:text-4xl font-bold text-accent block mb-2">
                {kpi.value}
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-wider text-foreground/60 font-mono font-medium leading-tight">
                {kpi.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Industrial Strategy & Operations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-20 max-w-7xl"
      >
        <h3 className="text-2xl font-semibold font-outfit mb-8 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-accent" /> Industrial Strategy & Operations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Strategic Sourcing", desc: "Negotiating high-value contracts and cost leadership." },
            { step: "02", title: "Process Excellence", desc: "Implementing Lean and Six Sigma frameworks." },
            { step: "03", title: "Quality Assurance", desc: "Ensuring ISO compliance and industrial throughput." },
            { step: "04", title: "Sustainability", desc: "LEED-aligned infrastructure and carbon tracking." }
          ].map((item, i) => (
            <div key={i} className="glass p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 font-mono text-4xl font-black text-foreground/5 transition-colors group-hover:text-accent/10">{item.step}</div>
              <h4 className="text-lg font-bold text-accent mb-2">{item.title}</h4>
              <p className="text-sm text-foreground/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Timeline */}
        <div id="experience" className="lg:col-span-2 space-y-6 scroll-mt-32">
          <h3 className="text-2xl font-semibold font-outfit mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-accent" /> Work History
          </h3>
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
            >
              <GlassCard className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-accent">{item.role}</h4>
                    <span className="text-foreground/90 font-medium">{item.company}</span>
                  </div>
                  <span className="text-sm font-mono px-3 py-1 bg-foreground/5 dark:bg-white/10 rounded-full w-fit">
                    {item.period}
                  </span>
                </div>
                <div className="text-foreground/80">{item.desc}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold font-outfit mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-accent" /> Education
          </h3>
          <div className="space-y-6 relative before:absolute before:-left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-accent/40 before:to-transparent ml-4">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="relative glass p-6 md:p-8 rounded-2xl"
              >
                <h5 className="font-bold text-lg leading-tight">{edu.degree}</h5>
                <span className="text-foreground/70 text-sm mt-2 block">{edu.school}</span>
                <span className="text-accent text-sm font-mono mt-1 block">Class of {edu.year}</span>
                {edu.focus && <p className="text-accent font-medium text-xs uppercase mt-3">{edu.focus}</p>}
                {edu.details && (
                  <ul className="mt-3 space-y-1 text-xs text-foreground/60 list-disc list-inside">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
