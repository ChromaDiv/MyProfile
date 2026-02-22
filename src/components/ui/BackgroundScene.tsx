"use client";

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

function KineticOrb({ color, position, size, speed, distort }: { color: string, position: [number, number, number], size: number, speed: number, distort: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
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
    // Professional Blue and Cyan accents
    cyan: "#06b6d4",
    blue: isDark ? "#3b82f6" : "#2563eb",
    slate: isDark ? "#0f172a" : "#f8fafc"
  }), [isDark]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-background transition-colors duration-1000 overflow-hidden">
      {/* Texture: High-end Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10 pointer-events-none" />

      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 45 }}>
        {/* Swapped point light focus to match color interchange */}
        <ambientLight intensity={isDark ? 0.6 : 1.2} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color={colors.blue} />
        <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={1} />

        <group>
          {/* Now the Blue Orb is the Main Strategic Focus (Right Side) */}
          <KineticOrb
            color={colors.blue}
            position={[-5, 3, -4]}
            size={2.4}
            speed={1.1}
            distort={0.35}
          />

          {/* Now the Cyan Orb is the Secondary Accent (Top Left) */}
          <KineticOrb
            color={colors.cyan}
            position={[4.5, -1, -1]}
            size={1.6}
            speed={0.9}
            distort={0.4}
          />
        </group>
      </Canvas>

      {/* Modern Glass Layer - Balanced for visibility */}
      <div className="absolute inset-0 backdrop-blur-[55px] pointer-events-none z-[1]" />

      {/* Subtle Vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,var(--background)_100%)] opacity-90 pointer-events-none" />
    </div>
  );
}