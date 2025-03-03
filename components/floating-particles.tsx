"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export const FloatingParticles = () => {
  const [particles, setParticles] = React.useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const { width, height } = containerRef.current.getBoundingClientRect();
    const colors = [
      "rgba(255, 182, 193, 0.6)", // Soft Rose
      "rgba(230, 230, 250, 0.6)", // Lavender Mist
      "rgba(152, 255, 178, 0.6)", // Mint Green
      "rgba(224, 176, 255, 0.6)", // Mauve
    ];
    
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 10 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            x: [
              particle.x,
              particle.x + (Math.random() * 100 - 50),
              particle.x,
            ],
            y: [
              particle.y,
              particle.y + (Math.random() * 100 - 50),
              particle.y,
            ],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};