import React from "react";
import { motion } from "framer-motion";

interface BlurDivProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

export const BlurDiv = ({
  children,
  className = "",
  duration = 0.5,
}: BlurDivProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, filter: "blur(0px)" }}
    transition={{ duration, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);
