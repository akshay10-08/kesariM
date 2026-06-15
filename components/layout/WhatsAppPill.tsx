'use client';

// ═══════════════════════════════════════════
// WhatsAppPill — Floating WhatsApp CTA
// Fixed bottom-right, hidden on mobile
// ═══════════════════════════════════════════

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

export default function WhatsAppPill() {
  return (
    <motion.a
      href={CONTACT.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        hidden md:flex
        items-center gap-3
        rounded-full
        bg-maroon/70 backdrop-blur-md border border-gold/40
        hover:bg-saffron hover:border-saffron
        px-5 py-3
        text-ivory font-sans text-xs font-semibold tracking-widest uppercase
        shadow-[0_8px_32px_rgba(40,20,10,0.25)]
        transition-all duration-300
        cursor-pointer
        hover:scale-[1.03]
      "
      /* Subtle float-in on mount */
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: 'easeOut' }}
    >
      {/* Pulse ring behind the icon */}
      <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-gold/40 bg-white/5 group-hover:border-white/40">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/30" />
        <MessageCircle className="relative h-4 w-4 text-gold group-hover:text-ivory transition-colors" />
      </span>
      <span>BOOK NOW</span>
      <span className="sr-only">Chat on WhatsApp</span>
    </motion.a>
  );
}
