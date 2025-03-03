"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Just a Girl in Tech. All rights reserved.
          </p>
          <div className="flex items-center text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-primary animate-pulse-slow" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};