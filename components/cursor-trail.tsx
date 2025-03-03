"use client";

import React, { useEffect, useState } from "react";

export const CursorTrail = () => {
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrails((prevTrails) => {
        // Add new trail point
        const newTrails = [
          { x: mousePosition.x, y: mousePosition.y, id: Date.now() },
          ...prevTrails,
        ];
        
        // Keep only the last 5 trail points
        return newTrails.slice(0, 5);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [mousePosition]);

  return (
    <>
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: 1 - index * 0.2,
            width: `${10 - index * 1.5}px`,
            height: `${10 - index * 1.5}px`,
          }}
        />
      ))}
    </>
  );
};