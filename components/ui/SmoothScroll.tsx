'use client';

// ═══════════════════════════════════════════
// SmoothScroll — Lenis smooth scroll wrapper
// Provides buttery-smooth native scrolling
// Respects prefers-reduced-motion
// ═══════════════════════════════════════════

import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    /* ── Bail out if user prefers reduced motion ── */
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) return;

    /* ── Initialise Lenis ── */
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
    });

    /* ── RAF loop to drive Lenis ── */
    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    /* ── Cleanup on unmount ── */
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
