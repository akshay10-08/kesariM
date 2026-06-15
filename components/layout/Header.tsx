'use client';

// ═══════════════════════════════════════════
// Header — Premium fixed navigation
// Transparent over hero → solid maroon on scroll
// Hamburger drawer on mobile with AnimatePresence
// ═══════════════════════════════════════════

import { useState, useCallback } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE, CONTACT } from '@/lib/constants';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ── Detect scroll position ── */
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80);
  });

  /* ── Smooth-scroll to section, then close mobile menu ── */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);

      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    []
  );

  return (
    <>
      {/* ═══ Desktop / Main Header ═══ */}
      <motion.header
        className={`
          fixed top-4 md:top-5 inset-x-4 max-w-[1240px] mx-auto z-50 rounded-full
          grid grid-cols-2 lg:grid-cols-3 items-center
          px-6 py-3
          transition-all duration-500 ease-out
          backdrop-blur-xl backdrop-saturate-150
          shadow-[0_8px_32px_rgba(40,20,10,0.18)]
          border overflow-hidden
          ${
            scrolled
              ? 'bg-ivory/90 border-gold/30 shadow-[0_8px_32px_rgba(40,20,10,0.25)]'
              : 'bg-white/10 border-white/20'
          }
        `}
        /* Fade in on mount */
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', type: 'spring', bounce: 0.2 }}
      >
        {/* Subtle inner highlight for glass effect */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/25 to-transparent" aria-hidden="true" />

        {/* ── Left: Logo ── */}
        <div className="relative z-10 flex items-center justify-start">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex flex-col leading-none group relative w-32 h-12 md:w-44 md:h-16 lg:w-48 lg:h-16"
          >
            <Image 
              src="/images/loggo.png" 
              alt="Kesari Mangalam Lawn Logo" 
              fill 
              className="object-contain object-left"
              priority
            />
          </a>
        </div>

        {/* ── Center: Desktop Nav ── */}
        <nav className="relative z-10 hidden lg:flex items-center justify-center gap-6 xl:gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`
                relative
                font-sans text-[11px] xl:text-xs font-semibold uppercase tracking-[0.12em]
                transition-colors duration-300
                group
                ${scrolled ? 'text-charcoal hover:text-saffron' : 'text-ivory hover:text-saffron'}
              `}
            >
              {link.label}
              {/* Thin gold underline wipe on hover */}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* ── Right: CTA + Hamburger ── */}
        <div className="relative z-10 flex items-center justify-end gap-3">
          {/* Enquire — desktop only */}
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex rounded-full bg-saffron hover:bg-[#d67a10] text-ivory px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors shadow-sm"
          >
            Enquire Now
          </a>

          {/* Hamburger — mobile / tablet */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden flex items-center justify-center w-10 h-10 cursor-pointer transition-colors ${scrolled ? 'text-charcoal' : 'text-ivory'}`}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* ═══ Mobile Drawer ═══ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-drawer"
            className="fixed inset-0 z-[60] flex flex-col bg-maroon"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Close button */}
            <div className="flex justify-end p-6">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-10 h-10 text-ivory cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Nav links — centered */}
            <nav
              className="flex flex-1 flex-col items-center justify-center gap-8"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="
                    font-serif text-3xl font-medium text-ivory
                    tracking-wide
                    hover:text-gold transition-colors duration-300
                  "
                  /* Staggered entrance */
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                >
                  {link.label}
                </motion.a>
              ))}

              {/* CTA */}
              <motion.a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                Enquire Now
              </motion.a>
            </nav>

            {/* Hindi flourish at bottom */}
            <div className="pb-10 text-center">
              <span className="font-script text-2xl text-gold/60">
                केसरी मंगलम्
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
