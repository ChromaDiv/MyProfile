"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FileText, ArrowRight, Settings, Cpu, Leaf } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { type: "spring", damping: 25, stiffness: 120 },
  },
};

export function Hero() {
  return (
    <section id="about" className="glass-section flex items-center justify-center pt-32 md:pt-40 pb-16 px-6 min-h-screen">
      {/* Tactical Background Elements */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent/5 dark:bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Animated Floating Markers (HUD Style) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none select-none">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/4 left-1/4 text-[10px] font-mono text-foreground/20 uppercase tracking-widest border-l border-t border-foreground/20 p-2">
          System_Ref: 2026.SL
        </motion.div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-1/4 right-1/4 text-[10px] font-mono text-foreground/20 uppercase tracking-widest border-r border-b border-foreground/20 p-2 text-right">
          Status: Operational_Impact
        </motion.div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto flex flex-col items-center z-10 mt-10 md:mt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image with Dynamic Border */}
        <motion.div variants={childVariants} className="relative mb-10 group">
          <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 overflow-hidden border border-accent/20 bg-background shadow-2xl">
            <Image
              src="/profile.JPG"
              alt="Sohaib Latif"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 144px, 192px"
            />
          </div>
          {/* Decorative Corner Accents */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-accent/40 rounded-tl-lg" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-accent/40 rounded-br-lg" />
        </motion.div>

        {/* Badge Metadata */}
        <motion.div variants={childVariants} className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { icon: <Settings size={12} />, label: "NUST Engineering" },
            { icon: <Cpu size={12} />, label: "MBA Leadership" },
            { icon: <Leaf size={12} />, label: "LEED Green Associate" }
          ].map((tag, i) => (
            <span key={i} className="flex items-center gap-2 px-3 py-1 rounded-md border border-foreground/10 bg-foreground/5 text-[10px] font-mono font-bold uppercase tracking-widest text-foreground/60">
              <span className="text-accent">{tag.icon}</span>
              {tag.label}
            </span>
          ))}
        </motion.div>

        {/* Name & Title */}
        <motion.div variants={childVariants} className="text-center mb-6">
          <h1 className="text-5xl md:text-8xl font-black font-outfit tracking-tighter leading-[0.9] mb-4">
            SOHAIB <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">LATIF</span>
          </h1>
          <p className="text-xl md:text-3xl font-medium font-outfit text-foreground/80 tracking-tight">
            Strategic Supply Chain Lead
          </p>
        </motion.div>

        {/* Impact Subtitle */}
        <motion.p
          variants={childVariants}
          className="text-base md:text-xl text-foreground/50 max-w-2xl text-center font-inter leading-relaxed mb-10"
        >
          Architecting resilient global logistics networks by bridging the gap between <span className="text-foreground font-semibold italic">Industrial Intelligence</span> and <span className="text-foreground font-semibold italic">Sustainable ROI</span>.
        </motion.p>

        {/* CTA Actions */}
        <motion.div variants={childVariants} className="flex flex-col sm:flex-row items-center gap-5">
          <Button
            size="lg"
            className="rounded-full px-8 h-14 bg-accent hover:bg-blue-600 text-white font-bold group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Operational Systems
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 border-foreground/10 bg-transparent hover:bg-foreground/5 font-bold group">
              <FileText size={18} className="mr-2 opacity-60 group-hover:opacity-100" />
              Technical Resume
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}