"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center">
      <motion.div
        className="w-1 h-20 bg-gray-200 rounded-full overflow-hidden mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-full bg-primary rounded-full"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </motion.div>
      
      <motion.button
        onClick={scrollToNextSection}
        className="rounded-full p-2 bg-primary text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollProgress > 0.1 ? 0 : 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronDown size={20} />
      </motion.button>
    </div>
  );
};