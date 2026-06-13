'use client';

// ═══════════════════════════════════════════
// ScrollReveal — Framer Motion scroll reveal
// Fades and slides content into view on scroll
// ═══════════════════════════════════════════

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

type Direction = 'up' | 'left' | 'right';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Delay before the animation starts (seconds) */
  delay?: number;
  /** Slide direction — defaults to 'up' */
  direction?: Direction;
}

/** Returns the initial translate values based on direction */
function getInitialTranslate(direction: Direction): { x: number; y: number } {
  switch (direction) {
    case 'left':
      return { x: -40, y: 0 };
    case 'right':
      return { x: 40, y: 0 };
    case 'up':
    default:
      return { x: 0, y: 40 };
  }
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const { x, y } = getInitialTranslate(direction);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x,
      y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for premium feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
