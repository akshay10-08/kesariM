'use client';

// ═══════════════════════════════════════════
// Testimonials — Auto-sliding review carousel
// Google rating badge + review cards
// ═══════════════════════════════════════════

import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE, TESTIMONIALS } from '@/lib/constants';
import ScrollReveal from '@/components/ui/ScrollReveal';

/** Render star icons for a given rating (supports half-stars) */
function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i < Math.floor(rating);
        const half = !filled && i < rating;
        return (
          <Star
            key={i}
            className={`${
              filled || half ? 'text-saffron' : 'text-charcoal/20'
            }`}
            fill={filled ? 'currentColor' : half ? 'url(#half-star)' : 'none'}
            size={size}
            strokeWidth={1.5}
          />
        );
      })}
      {/* SVG gradient for half-star fill */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="half-star">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = prev, 1 = next

  /* Only show testimonials that have meaningful text (not placeholder names) */
  const validTestimonials = TESTIMONIALS.filter(
    (t) => !t.text.startsWith('[REVIEWER'),
  );

  const totalSlides = validTestimonials.length;

  /* ── Auto-advance every 5 seconds ── */
  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  /* ── Slide animation variants ── */
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  /* ── Get visible cards for desktop (3) and mobile (1) ── */
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + i) % totalSlides;
      cards.push({ ...validTestimonials[idx], originalIndex: idx });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <section
      id="testimonials"
      className="bg-ivory-dark py-16 md:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── Section header ── */}
        <ScrollReveal>
          <h2 className="text-center font-serif text-maroon text-3xl md:text-4xl font-semibold mb-10">
            Loved by Our Hosts &amp; Guests.
          </h2>
        </ScrollReveal>

        {/* ── Google rating badge ── */}
        <ScrollReveal delay={0.1}>
          <div className="flex justify-center mb-14">
            <div className="inline-flex items-center gap-5 rounded-xl bg-white p-6 shadow-lg">
              {/* Large rating number */}
              <span className="font-serif text-5xl font-bold text-maroon leading-none">
                {SITE.rating}
              </span>

              <div className="flex flex-col gap-1.5">
                {/* Star row */}
                <StarRating rating={SITE.rating} size={22} />
                {/* Review count */}
                <p className="text-sm text-charcoal/60 font-sans">
                  {SITE.reviewCount} reviews · {SITE.photoCount} photos
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Review cards carousel ── */}
        <div className="relative">
          {/* Desktop: 3 cards visible */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout" custom={direction}>
              {visibleCards.map((review, i) => (
                <motion.div
                  key={`${review.originalIndex}-${currentIndex}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="rounded-lg border-l-4 border-gold bg-white p-6 shadow-md"
                >
                  <StarRating rating={review.rating} />
                  <p className="mt-4 font-sans italic text-charcoal/80 leading-relaxed text-sm">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="mt-4 font-semibold text-charcoal text-sm">
                    {review.reviewer}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile: 1 card visible */}
          <div className="md:hidden relative min-h-[200px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="rounded-lg border-l-4 border-gold bg-white p-6 shadow-md"
              >
                <StarRating rating={validTestimonials[currentIndex].rating} />
                <p className="mt-4 font-sans italic text-charcoal/80 leading-relaxed text-sm">
                  &ldquo;{validTestimonials[currentIndex].text}&rdquo;
                </p>
                <p className="mt-4 font-semibold text-charcoal text-sm">
                  {validTestimonials[currentIndex].reviewer}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Navigation arrows ── */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={goPrev}
              className="rounded-full border border-gold/30 p-2.5 text-maroon
                         transition-colors hover:bg-gold/10 focus-visible:outline-2
                         focus-visible:outline-gold"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {validTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'w-6 bg-saffron'
                      : 'w-2 bg-charcoal/20 hover:bg-charcoal/40'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="rounded-full border border-gold/30 p-2.5 text-maroon
                         transition-colors hover:bg-gold/10 focus-visible:outline-2
                         focus-visible:outline-gold"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
