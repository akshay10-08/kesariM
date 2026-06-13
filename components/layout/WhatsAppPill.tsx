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
        items-center gap-2
        rounded-full
        bg-[#25D366] hover:bg-[#1ebe5a]
        px-5 py-3
        text-white font-sans text-sm font-medium
        shadow-lg shadow-[#25D366]/30
        transition-colors duration-300
        cursor-pointer
      "
      /* Subtle float-in on mount */
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: 'easeOut' }}
    >
      {/* Pulse ring behind the icon */}
      <span className="relative flex h-5 w-5 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/30" />
        <MessageCircle className="relative h-5 w-5" />
      </span>
      <span>WhatsApp Us</span>
      <span className="sr-only">Chat on WhatsApp</span>
    </motion.a>
  );
}
