"use client";

import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { GlassCard } from "@/components/ui/GlassCard";
import { useTheme } from "next-themes";

function GlobalImpactGlobe() {
  const { theme } = useTheme();
  const ref = useRef<THREE.Points>(null);
  // Generate 5000 points (x, y, z) inside a sphere shape
  const [sphere] = useState(() => random.inSphere(new Float32Array(15000), { radius: 2 }) as Float32Array);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent={theme === "dark"}
          opacity={1}
          color={theme === "light" ? "#064e3b" : "#10b981"} // Extremely dark green for max contrast in light mode
          size={theme === "light" ? 0.025 : 0.015} // Slightly larger in light mode to stand out
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const dimensions = [
  {
    category: "Profit (SCM & Efficiency)",
    angle: "Resource management is the heart of profitability.",
    text: "I apply Lean Manufacturing and Six Sigma frameworks to the operational lifecycle. My focus is on reducing operational waste and streamlining procurement workflows to maximize scalable business ROI.",
  },
  {
    category: "People (Ethics & Inclusivity)",
    angle: "Global supply chains require ethical governance.",
    text: "My MPhil research in International Development informs a commitment to Universal Design and local community impact, ensuring global trade networks are inclusive and socially responsible.",
  },
  {
    category: "Planet (LEED & Sustainability)",
    angle: "Sustainability is a quality and compliance metric.",
    text: "I specialize in architecting LEED-aligned frameworks that balance high performance with minimal environmental impact, transforming 'green' goals into measurable industrial intelligence.",
  }
];

export function Impact() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax for the visual container
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-emerald-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-emerald-400 dark:to-emerald-200">
          ESG & Sustainable Impact
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Modern supply chains are no longer just about moving goods; they are about moving them ethically and sustainably. I bridge the intersection of Engineering, Business, and Humanity.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
        {/* Left Column: The Triple Bottom Line Visual */}
        <motion.div
          style={{ y: yParallax }}
          className="relative rounded-3xl overflow-hidden glass border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.05)] min-h-fit md:min-h-[600px] lg:min-h-[750px] flex flex-col"
        >
          <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-background via-emerald-50/50 to-emerald-100/50 dark:via-[#050a05] dark:to-emerald-900/10" />

          <div className="flex-1 p-6 md:p-10 lg:p-12 flex flex-col justify-center space-y-10 bg-white/40 dark:bg-[#050a05]/50 backdrop-blur-xl">
            <div className="space-y-8">
              <h4 className="text-3xl md:text-5xl font-bold font-outfit text-emerald-700 dark:text-emerald-400 leading-tight">The Triple Bottom Line<br />Framework</h4>

              <p className="text-base md:text-xl text-foreground/80 leading-relaxed italic border-l-4 border-emerald-500 pl-6 py-1 font-inter max-w-2xl">
                "By combining my NUST Mechanical Engineering foundation, MBA leadership, and MPhil in International Development, I optimize for the Triple Bottom Line: Profit, People, and Planet."
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-6 pt-2">
              {/* PROFIT Block */}
              <div className="p-4 sm:p-5 md:p-8 rounded-2xl border border-emerald-500/20 dark:border-white/5 bg-white/50 dark:bg-background/20 hover:bg-white/60 dark:hover:bg-white/5 transition-colors duration-300">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold block mb-4 md:mb-6 text-sm sm:text-lg md:text-xl tracking-wide">PROFIT</span>
                <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-foreground/60 block mb-4 md:mb-6 font-mono font-medium">MBA</span>
                <p className="text-xs sm:text-sm md:text-lg text-foreground/90 leading-relaxed md:leading-relaxed w-full">Business<br />Strategy<br />and<br />Supply<br />Chain<br />Optimization.</p>
              </div>

              {/* PLANET Block */}
              <div className="p-4 sm:p-5 md:p-8 rounded-2xl border border-emerald-500/20 dark:border-white/5 bg-white/50 dark:bg-background/20 hover:bg-white/60 dark:hover:bg-white/5 transition-colors duration-300">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold block mb-4 md:mb-6 text-sm sm:text-lg md:text-xl tracking-wide">PLANET</span>
                <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-foreground/60 block mb-4 md:mb-6 font-mono font-medium">LEED & ESG</span>
                <p className="text-xs sm:text-sm md:text-lg text-foreground/90 leading-relaxed md:leading-relaxed w-full">Sustainable<br />Infrastructure<br />and Material<br />Traceability.</p>
              </div>

              {/* PEOPLE Block */}
              <div className="p-4 sm:p-5 md:p-8 rounded-2xl border border-emerald-500/20 dark:border-white/5 bg-white/50 dark:bg-background/20 hover:bg-white/60 dark:hover:bg-white/5 transition-colors duration-300">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold block mb-4 md:mb-6 text-sm sm:text-lg md:text-xl tracking-wide">PEOPLE</span>
                <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-foreground/60 block mb-4 md:mb-6 font-mono font-medium">QE / QA</span>
                <p className="text-xs sm:text-sm md:text-lg text-foreground/90 leading-relaxed md:leading-relaxed w-full">Global<br />Ethics,<br />Precision,<br />and<br />Operational<br />Safety.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Strategic Dimensions */}
        <div className="space-y-6">
          <div className="mb-8 p-6 glass rounded-2xl border-emerald-500/20">
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.2em] font-bold">Global Perspective: ESG & Sustainable Impact</span>
            <p className="text-foreground/80 mt-2 text-sm leading-relaxed">
              Modern supply chains are no longer just about moving goods; they are about moving them ethically and sustainably. My academic background in International Development allows me to navigate the complex regulatory landscapes of global trade, ensuring that procurement strategies are not only cost-effective but also socially responsible and LEED-compliant.
            </p>
          </div>

          {dimensions.map((dim, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
            >
              <GlassCard className="p-6 md:p-8 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] group transition-all duration-500">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-500 uppercase tracking-[0.15em] mb-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    {dim.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-50 transition-colors">
                    &quot;{dim.angle}&quot;
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{dim.text}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
