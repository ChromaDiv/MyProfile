"use client";

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

function KineticOrb({ color, position, size, speed, distort }: { color: string, position: [number, number, number], size: number, speed: number, distort: number }) {
  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={distort}
          radius={1}
          metalness={0.5}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
}

export function BackgroundScene() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => setMounted(true), []);

  const colors = useMemo(() => ({
    cyan: "#06b6d4",
    blue: isDark ? "#3b82f6" : "#2563eb",
  }), [isDark]);

  if (!mounted) return null;

  return (

    <div className="fixed inset-0 z-[-1] pointer-events-none bg-background/20 dark:bg-background/20 transition-colors duration-1000 overflow-hidden">

      {/* 1. 3D ORBS LAYER */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={isDark ? 0.6 : 1.2} />
          <pointLight position={[10, 10, 10]} intensity={2.5} color={colors.blue} />
          <group>
            <KineticOrb color={colors.blue} position={[-5, 3, -4]} size={2.4} speed={1.1} distort={0.35} />
            <KineticOrb color={colors.cyan} position={[4.5, -1, -1]} size={1.6} speed={0.9} distort={0.4} />
          </group>
        </Canvas>
      </div>

      {/* 2. THE BLUR (Reduced intensity to prevent "washing out" the default lines) */}
      <div className="absolute inset-0 backdrop-blur-[40px] pointer-events-none z-10" />

      {/* 3. THE ANALYTICS HUD (REMOVED) */}


      {/* 4. VIGNETTE (Adjusted to be transparent in the center) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,var(--background)_110%)] opacity-60 z-30" />

      {/* 5. GRAIN TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-40 pointer-events-none" />
    </div>
  );
}