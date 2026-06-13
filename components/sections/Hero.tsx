'use client';

// ═══════════════════════════════════════════
// Hero — Full-viewport hero slideshow
// Ken-Burns, cross-fade, availability widget,
// auto-advance, and manual dot navigation
// ═══════════════════════════════════════════

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
const INTERVAL = 6000;

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
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ═══ Background Slides ═══ */}
      <AnimatePresence mode="wait">
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
            <div className="image-placeholder absolute inset-0">
              [IMAGE: {slide.image} — {slide.alt}]
            </div>
          </div>

          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(36,26,28,0.65) 0%, rgba(110,26,43,0.45) 100%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ═══ Content Overlay ═══ */}
      <div className="relative z-10 flex h-full items-center">
        <div className="w-full px-6 md:px-8 lg:px-24">
          <div className="max-w-2xl text-center md:text-left">
            {/* Script eyebrow */}
            <motion.p
              className="font-script text-xl md:text-2xl text-gold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {SITE.taglineAlt}
            </motion.p>

            {/* Rotating headline */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={current}
                className="
                  font-serif font-semibold
                  text-4xl sm:text-5xl md:text-7xl lg:text-8xl
                  text-white
                  leading-[1.05]
                  mb-6
                "
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {slide.headline}
              </motion.h1>
            </AnimatePresence>

            {/* Subline */}
            <motion.p
              className="font-sans text-lg text-ivory/80 mb-8 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {slide.subline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center md:items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {/* Desktop: opens WhatsApp. Mobile: scroll to #contact */}
              <button
                type="button"
                onClick={() => {
                  /* On mobile, scroll to contact; on desktop, open widget is visible */
                  if (window.innerWidth < 768) {
                    scrollTo('contact');
                  } else {
                    handleAvailability(
                      new Event('submit') as unknown as React.FormEvent
                    );
                  }
                }}
                className="btn-primary md:hidden cursor-pointer"
              >
                Check Availability
              </button>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hidden md:inline-flex"
              >
                Check Date Availability
              </a>
              <button
                type="button"
                onClick={() => scrollTo('spaces')}
                className="btn-ghost cursor-pointer"
              >
                Explore the Lawn
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══ Availability Widget (desktop only) ═══ */}
      <motion.div
        className="
          absolute bottom-8 right-8 z-20
          hidden lg:block
          w-full max-w-sm
          bg-white/95 backdrop-blur-md
          p-6 rounded shadow-2xl
        "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7, ease: 'easeOut' }}
      >
        <h3 className="font-serif text-xl font-semibold text-charcoal mb-4">
          Check Availability
        </h3>
        <form onSubmit={handleAvailability} className="flex flex-col gap-3">
          {/* Event Date */}
          <label className="flex flex-col gap-1">
            <span className="font-sans text-xs uppercase tracking-wider text-charcoal-light">
              Event Date
            </span>
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="
                border border-ivory-dark rounded px-3 py-2
                font-sans text-sm text-charcoal
                focus:outline-none focus:border-gold
                transition-colors
              "
            />
          </label>

          {/* Event Type */}
          <label className="flex flex-col gap-1">
            <span className="font-sans text-xs uppercase tracking-wider text-charcoal-light">
              Event Type
            </span>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="
                border border-ivory-dark rounded px-3 py-2
                font-sans text-sm text-charcoal
                focus:outline-none focus:border-gold
                transition-colors bg-white
              "
            >
              <option value="">Select event type</option>
              {EVENT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          {/* Approx Guests */}
          <label className="flex flex-col gap-1">
            <span className="font-sans text-xs uppercase tracking-wider text-charcoal-light">
              Approx. Guests
            </span>
            <input
              type="number"
              min={1}
              placeholder="e.g. 300"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="
                border border-ivory-dark rounded px-3 py-2
                font-sans text-sm text-charcoal
                focus:outline-none focus:border-gold
                transition-colors
              "
            />
          </label>

          {/* Submit */}
          <button type="submit" className="btn-primary w-full justify-center mt-1 cursor-pointer">
            Check Availability
          </button>
        </form>

        {/* Help line */}
        <p className="mt-3 text-center font-sans text-xs text-charcoal-light">
          Need help?{' '}
          <a
            href={`tel:+${CONTACT.phoneRaw}`}
            className="text-maroon font-medium hover:underline"
          >
            {CONTACT.phone}
          </a>
        </p>
      </motion.div>

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
