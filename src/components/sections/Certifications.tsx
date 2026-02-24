"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, BadgeCheck, BookOpen, Calendar } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const certifications = [
  {
    title: "QMS Auditor Certification Course",
    issuer: "Directorate of Quality Management (DQM)",
    date: "June 30 – July 02, 2021",
    description: "Based on ISO 9001:2015 Standard",
    icon: <Award className="w-6 h-6" />,
    color: "text-blue-500",
    bg: "group-hover:border-blue-500/50"
  },
  {
    title: "QMS Requirements & Implementation (Advanced)",
    issuer: "Directorate of Quality Management (DQM)",
    date: "February 07 – 08, 2022",
    description: "Based on ISO 9001:2015 Standard",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "text-indigo-500",
    bg: "group-hover:border-indigo-500/50"
  },
  {
    title: "QMS Requirements & Implementation (Standard)",
    issuer: "Directorate of Quality Management (DQM)",
    date: "September 14 – 15, 2021",
    description: "Based on ISO 9001:2015 Standard",
    icon: <BadgeCheck className="w-6 h-6" />,
    color: "text-violet-500",
    bg: "group-hover:border-violet-500/50"
  },
  {
    title: "1st Conference of MoD QMS Teams",
    issuer: "Directorate of Quality Management (DQM)",
    date: "November 22 – 24, 2021",
    description: "Certificate of Participation",
    icon: <BookOpen className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "group-hover:border-purple-500/50"
  },
  {
    title: "ICCC Workshop on ISO 19443:2018",
    issuer: "Instrumentation Control & Computer Complex (ICCC)",
    date: "December 16 – 17, 2020",
    description: "Workshop Participation",
    icon: <Award className="w-6 h-6" />,
    color: "text-fuchsia-500",
    bg: "group-hover:border-fuchsia-500/50"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="glass-section py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10 mb-16 space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-12 bg-accent" />
            <span className="text-xs font-mono text-accent font-bold uppercase tracking-[0.4em]">Continuous Learning</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-outfit tracking-tighter text-foreground">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">Training.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="h-full flex"
            >
              <GlassCard className={`w-full group border-foreground/5 dark:border-white/5 transition-all duration-500 flex flex-col p-8 ${cert.bg} hover:shadow-lg dark:hover:shadow-white/5`}>
                <div className={`mb-6 p-4 w-fit rounded-2xl bg-white/60 dark:bg-background/60 border border-foreground/10 ${cert.color}`}>
                  {cert.icon}
                </div>

                <h3 className="text-2xl font-bold font-outfit mb-3 leading-tight">{cert.title}</h3>

                <p className="text-sm font-medium text-foreground/80 mb-6 flex-grow">
                  {cert.description}
                </p>

                <div className="pt-6 border-t border-foreground/10 dark:border-white/10 mt-auto space-y-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-foreground/40 font-mono font-bold mb-1">Issuer</span>
                    <span className="text-sm text-foreground/80 font-semibold">{cert.issuer}</span>
                  </div>

                  <div className="flex items-center gap-2 text-foreground/60">
                    <Calendar size={14} className={cert.color} />
                    <span className="text-xs font-mono">{cert.date}</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
