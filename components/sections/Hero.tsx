'use client';

// ═══════════════════════════════════════════
// Hero — Full-viewport hero slideshow
// Ken-Burns, cross-fade, availability widget,
// auto-advance, and manual dot navigation
// ═══════════════════════════════════════════

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { HERO_SLIDES, SITE, EVENT_TYPES, CONTACT } from '@/lib/constants';
import { buildWhatsAppLink } from '@/lib/whatsapp';

/* ── Slide transition variants ── */
const slideVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

/* ── Auto-advance interval (ms) ── */
const INTERVAL = 4000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ── Availability form state ── */
  const [eventDate, setEventDate] = useState('');
  const [eventType, setEventType] = useState('');
  const [guests, setGuests] = useState('');

  const slide = HERO_SLIDES[current];

  /* ── Auto-advance timer ── */
  const startTimer = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, INTERVAL);
  }, []);

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isPaused) startTimer();
    return () => stopTimer();
  }, [isPaused, startTimer, stopTimer]);

  /* ── Manual slide selection ── */
  const goToSlide = useCallback(
    (index: number) => {
      stopTimer();
      setCurrent(index);
      if (!isPaused) startTimer();
    },
    [isPaused, stopTimer, startTimer]
  );

  /* ── Availability form submit → WhatsApp ── */
  const handleAvailability = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const link = buildWhatsAppLink({
        eventType: eventType || undefined,
        guests: guests || undefined,
        date: eventDate || undefined,
      });
      window.open(link, '_blank', 'noopener,noreferrer');
    },
    [eventDate, eventType, guests]
  );

  /* ── Scroll to section ── */
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ═══ Background Slides ═══ */}
      <AnimatePresence>
        <motion.div
          key={current}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Image placeholder with Ken Burns */}
          <div className="absolute inset-0 animate-ken-burns">
            <Image 
              src={slide.image} 
              alt={slide.alt} 
              fill 
              priority={current === 0}
              className="object-cover blur-[3px] scale-105" 
            />
          </div>

          {/* Cinematic Darken */}
          <div className="absolute inset-0 bg-black/30 z-10" />

          {/* Dark radial vignette + bottom-up scrim for legibility */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background: `
                radial-gradient(ellipse 60% 50% at center, rgba(40,15,25,0.65) 0%, transparent 65%),
                linear-gradient(to top, rgba(110,26,43,0.90) 0%, rgba(110,26,43,0.40) 20%, transparent 35%)
              `
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ═══ Content Overlay ═══ */}
      <div className="relative z-20 flex h-full items-center justify-center pointer-events-none">
        <div className="w-full px-4 sm:px-6 flex flex-col items-center text-center max-w-[720px] mx-auto gap-1">
          
          {/* Logo Crest */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative w-24 h-10 md:w-32 md:h-12 mb-4"
          >
            <Image 
              src="/images/loggo.png" 
              alt="Kesari Mangalam Crest" 
              fill 
              className="object-contain" 
            />
          </motion.div>

          {/* Script Venue Name */}
          <motion.p
            className="font-script font-bold text-ivory mb-2"
            style={{ 
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              textShadow: '0 2px 24px rgba(0,0,0,0.45)' 
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Kesari Mangalam
          </motion.p>

          {/* Hairline Flourish */}
          <motion.div
            className="flex items-center gap-4 mb-4"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="w-12 md:w-24 h-px bg-gold/50" />
            <span 
              className="font-sans uppercase text-ivory whitespace-nowrap"
              style={{ 
                fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)', 
                letterSpacing: '0.22em',
                textShadow: '0 2px 24px rgba(0,0,0,0.45)'
              }}
            >
              The Epitome of Splendour & Regality
            </span>
            <div className="w-12 md:w-24 h-px bg-gold/50" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-serif text-ivory font-normal mb-6 max-w-[680px] mx-auto"
            style={{ 
              fontSize: 'clamp(2rem, 4.8vw, 3.75rem)', 
              lineHeight: 1.12, 
              letterSpacing: '-0.01em',
              textShadow: '0 2px 24px rgba(0,0,0,0.45)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Where <span className="italic text-[#E8B953]" style={{ textShadow: '0 2px 24px rgba(0,0,0,0.45)' }}>Auspicious</span> Beginnings Take Root.
          </motion.h1>

          {/* Sub-line (Eyebrow) */}
          <motion.p
            className="font-sans uppercase text-ivory/85 mb-8"
            style={{ 
              fontSize: 'clamp(0.8rem, 1vw, 0.95rem)', 
              letterSpacing: '0.2em',
              textShadow: '0 2px 24px rgba(0,0,0,0.45)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Kanpur · Open-Air Lawn · Grand Celebrations
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center justify-center pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <button
              type="button"
              onClick={() => {
                const link = buildWhatsAppLink();
                window.open(link, '_blank', 'noopener,noreferrer');
              }}
              className="rounded-full bg-saffron hover:bg-[#d67a10] text-ivory px-8 py-3.5 text-xs md:text-sm font-semibold uppercase tracking-widest transition-colors shadow-lg cursor-pointer"
            >
              Plan Your Event
            </button>
            <button
              type="button"
              onClick={() => scrollTo('spaces')}
              className="rounded-full border border-ivory/40 hover:bg-ivory/10 text-ivory px-8 py-3.5 text-xs md:text-sm font-semibold uppercase tracking-widest transition-colors cursor-pointer"
            >
              Explore the Lawn
            </button>
          </motion.div>

        </div>
      </div>

      {/* ═══ Slide Dots ═══ */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`
              w-2.5 h-2.5 rounded-full
              transition-all duration-400 cursor-pointer
              ${
                i === current
                  ? 'bg-gold w-8'
                  : 'bg-white/40 hover:bg-white/70'
              }
            `}
          />
        ))}
      </div>

      {/* ═══ Scroll Cue ═══ */}
      <div className="absolute bottom-16 md:bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <motion.div
          className="scroll-cue flex flex-col items-center gap-1 text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
}
