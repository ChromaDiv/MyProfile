"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 dark:bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-500/10 dark:bg-slate-900/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <motion.div
        className="max-w-4xl mx-auto text-center space-y-8 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={childVariants} className="inline-flex flex-col items-center gap-6">
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full p-1 border border-accent/30 bg-accent/5 backdrop-blur-md shadow-[0_0_40px_rgba(16,185,129,0.15)] group">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image
                src="/profile.JPG"
                alt="Sohaib Latif"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 160px, 208px"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay pointer-events-none" />
          </div>

          <span className="px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium tracking-wide">
            Portfolio 2026
          </span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold font-outfit tracking-tight leading-tight flex flex-col items-center justify-center gap-y-2 md:gap-y-4"
        >
          <div className="flex flex-wrap justify-center gap-x-[0.25em]">
            {"Sohaib Latif".split(" ").map((word, i) => (
              <motion.span key={i} variants={childVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
          </div>
          <motion.span
            variants={childVariants}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#00f2ff] dark:from-sky-400 dark:to-[#00f2ff] text-2xl sm:text-3xl md:text-4xl px-4"
          >
            Strategic Supply Chain Lead
          </motion.span>
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Engineering MBA | LEED Green Associate (Candidate)
          <br />
          <span className="text-base md:text-lg font-medium text-accent/90 block mt-2">
            Bridging the gap between Industrial Engineering, Global Logistics, and Sustainable Infrastructure.
          </span>
        </motion.p>

        <motion.div variants={childVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Solutions
          </Button>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline">
              Download Resume
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
