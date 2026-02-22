"use client";

import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { GlassCard } from "@/components/ui/GlassCard";
import { useTheme } from "next-themes";
import { Globe, Users, Leaf, TrendingUp } from "lucide-react";

function GlobalImpactGlobe() {
  const { theme } = useTheme();
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(9000), { radius: 1.5 }) as Float32Array);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 20;
      ref.current.rotation.x += delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          opacity={theme === "dark" ? 0.4 : 0.2}
          color={theme === "light" ? "#064e3b" : "#10b981"}
          size={0.015}
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
    icon: <TrendingUp className="w-5 h-5" />,
    angle: "Resource management is the heart of profitability.",
    text: "Applying Lean Manufacturing and Six Sigma to the operational lifecycle, focusing on reducing waste and streamlining procurement for scalable ROI.",
    color: "blue-400"
  },
  {
    category: "People (Ethics & Inclusivity)",
    icon: <Users className="w-5 h-5" />,
    angle: "Global supply chains require ethical governance.",
    text: "Commitment to Universal Design and local community impact, ensuring global trade networks are inclusive and socially responsible.",
    color: "blue"
  },
  {
    category: "Planet (LEED & Sustainability)",
    icon: <Leaf className="w-5 h-5" />,
    angle: "Sustainability is a quality and compliance metric.",
    text: "Architecting LEED-aligned frameworks that balance performance with minimal environmental impact, transforming 'green' goals into intelligence.",
    color: "teal"
  }
];

export function Impact() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const globeOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative w-full overflow-hidden bg-background/20 backdrop-blur-md border-y border-foreground/5">

      {/* Background Subtle Globe Decoration */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-50 z-0">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <GlobalImpactGlobe />
        </Canvas>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Side: The "Mission" Statement */}
          <div className="lg:w-5/12 sticky top-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                <Globe className="w-3 h-3 text-blue-500" />
                <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest">Global ESG Strategy</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold font-outfit tracking-tight leading-[1.1]">
                Bridging Engineering & <span className="text-blue-500">Humanity.</span>
              </h2>

              <p className="text-lg text-foreground/70 leading-relaxed font-inter">
                Modern supply chains are no longer just about moving goods; they are about moving them ethically and sustainably.
              </p>

              <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10 italic text-foreground/80 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                "By combining my NUST Mechanical Engineering foundation, MBA leadership, and MPhil in International Development, I optimize for the Triple Bottom Line."
              </div>
            </motion.div>
          </div>

          {/* Right Side: Interactive Dimensions */}
          <div className="lg:w-7/12 space-y-4 w-full">
            <div className="grid grid-cols-1 gap-4">
              {dimensions.map((dim, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-1 px-1 overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
                    <div className="flex flex-col md:flex-row items-stretch gap-0 md:gap-6">
                      {/* Icon/Category Sidebar */}
                      <div className="md:w-1/4 p-6 flex flex-col justify-between items-start border-b md:border-b-0 md:border-r border-foreground/5 bg-foreground/[0.02]">
                        <div className="p-3 rounded-2xl bg-background border border-foreground/10 text-blue-500 group-hover:scale-110 transition-transform">
                          {dim.icon}
                        </div>
                        <span className="text-[10px] font-mono font-bold text-foreground/40 mt-4 uppercase tracking-tighter">
                          {dim.category.split(' ')[0]}
                        </span>
                      </div>

                      {/* Content Area */}
                      <div className="md:w-3/4 p-6 md:p-8">
                        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-blue-500 transition-colors">
                          &quot;{dim.angle}&quot;
                        </h3>
                        <p className="text-sm text-foreground/60 leading-relaxed">
                          {dim.text}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Bottom Matrix Highlight */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {['PROFIT', 'PLANET', 'PEOPLE'].map((item) => (
                <div key={item} className="text-center p-4 rounded-2xl border border-foreground/5 bg-foreground/[0.02]">
                  <span className="text-[10px] font-mono text-foreground/40 tracking-[0.2em]">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}