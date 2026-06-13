'use client';

// ═══════════════════════════════════════════
// Header — Premium fixed navigation
// Transparent over hero → solid maroon on scroll
// Hamburger drawer on mobile with AnimatePresence
// ═══════════════════════════════════════════

import { useState, useCallback } from 'react';
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
          fixed top-0 left-0 right-0 z-50
          flex items-center justify-between
          px-6 lg:px-12
          transition-all duration-500 ease-out
          ${
            scrolled
              ? 'bg-maroon/95 backdrop-blur-md border-b py-3'
              : 'bg-transparent py-5'
          }
        `}
        style={{
          borderColor: scrolled ? 'var(--gold)' : 'transparent',
        }}
        /* Fade in on mount */
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* ── Logo ── */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex flex-col leading-none group"
        >
          <span
            className={`
              font-serif font-semibold tracking-wide
              transition-all duration-500
              ${scrolled ? 'text-xl lg:text-2xl text-ivory' : 'text-2xl lg:text-3xl text-white'}
            `}
          >
            Kesari Mangalam
          </span>
          <span
            className={`
              font-script text-xs
              transition-all duration-500
              ${scrolled ? 'text-gold-light' : 'text-gold'}
            `}
          >
            {SITE.nameHindi}
          </span>
        </a>

        {/* ── Desktop nav links ── */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`
                link-underline-grow
                font-sans text-sm font-medium uppercase tracking-widest
                transition-colors duration-300
                ${scrolled ? 'text-ivory/90 hover:text-white' : 'text-white/85 hover:text-white'}
              `}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Right side: CTA + hamburger ── */}
        <div className="flex items-center gap-4">
          {/* Enquire — desktop only */}
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex btn-primary text-xs"
          >
            Enquire Now
          </a>

          {/* Hamburger — mobile / tablet */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-white cursor-pointer"
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
