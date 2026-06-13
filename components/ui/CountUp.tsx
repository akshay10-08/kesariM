'use client';

// ═══════════════════════════════════════════
// CountUp — Animated number counter
// Triggers once on scroll into view using
// IntersectionObserver + requestAnimationFrame
// ═══════════════════════════════════════════

import { useEffect, useRef, useState, useCallback } from 'react';

interface CountUpProps {
  /** Target number to count up to */
  end: number;
  /** Animation duration in milliseconds */
  duration?: number;
  /** Suffix displayed after the number (e.g. '+', '★') */
  suffix?: string;
  /** If true, display as integer year (e.g. 2011) — no count from 0 */
  isYear?: boolean;
}

/** Easing function: easeOutCubic — fast start, gentle deceleration */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function CountUp({
  end,
  duration = 2000,
  suffix = '',
  isYear = false,
}: CountUpProps) {
  const [display, setDisplay] = useState<string>(isYear ? String(end) : '0');
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  /** Animate from start → end using rAF + easing */
  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    /* ─── For year display, just reveal the year (no counting from 0 → 2011) ─── */
    if (isYear) {
      setDisplay(String(end));
      return;
    }

    const startTime = performance.now();
    const startValue = 0;

    function tick(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentValue = startValue + (end - startValue) * easedProgress;

      /* ─── Format: integers for whole numbers, one decimal for floats ─── */
      if (Number.isInteger(end)) {
        setDisplay(String(Math.round(currentValue)));
      } else {
        setDisplay(currentValue.toFixed(1));
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [end, duration, isYear]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* ─── Respect prefers-reduced-motion: skip animation ─── */
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      if (Number.isInteger(end)) {
        setDisplay(String(end));
      } else {
        setDisplay(end.toFixed(1));
      }
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [animate, end]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
