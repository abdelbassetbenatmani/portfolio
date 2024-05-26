"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface EffectProps {
  className: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const Effect: React.FC<EffectProps> = ({ className, src, width, height, alt }) => {
  return (
    <div className={className}>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity }}>
        <Image src={src} width={width} height={height} alt={alt} />
      </motion.div>
    </div>
  );
};
