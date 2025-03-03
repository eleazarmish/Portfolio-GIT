"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
}

export function GrowOnScroll({ children }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}