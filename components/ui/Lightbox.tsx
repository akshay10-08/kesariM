'use client';

// ═══════════════════════════════════════════
// Lightbox — Reusable full-screen image modal
// Keyboard-navigable, focus-trapped, animated
// ═══════════════════════════════════════════

import { useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  /* ── Keyboard navigation ── */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    },
    [isOpen, onClose, onPrev, onNext],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  /* ── Lock body scroll & focus trap ── */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus the close button on open for accessibility
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const current = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* ── Close button ── */}
          <button
            ref={closeButtonRef}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white
                       backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-2
                       focus-visible:outline-gold"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* ── Previous arrow ── */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10
                         p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20
                         focus-visible:outline-2 focus-visible:outline-gold"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* ── Image ── */}
          <motion.div
            key={currentIndex}
            className="relative max-h-[85vh] max-w-4xl w-full mx-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[85vh] overflow-hidden rounded-lg">
              <Image 
                src={current.src} 
                alt={current.alt} 
                fill 
                className="object-contain" 
              />
            </div>
          </motion.div>

          {/* ── Next arrow ── */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10
                         p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20
                         focus-visible:outline-2 focus-visible:outline-gold"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* ── Image counter ── */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10
                          px-4 py-2 text-sm font-sans text-white/80 backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
