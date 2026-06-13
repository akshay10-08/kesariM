'use client';

// ═══════════════════════════════════════════
// WhyKesari — Numbered feature cards
// 2×2 grid with gold accents & staggered reveal
// ═══════════════════════════════════════════

import { Trees, Crown, Handshake, Car, type LucideIcon } from 'lucide-react';
import { WHY_FEATURES } from '@/lib/constants';
import ScrollReveal from '@/components/ui/ScrollReveal';

/** Map icon name strings from constants → Lucide components */
const ICON_MAP: Record<string, LucideIcon> = {
  trees: Trees,
  crown: Crown,
  handshake: Handshake,
  car: Car,
};

export default function WhyKesari() {
  return (
    <section id="why-kesari" className="py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── Section header ─── */}
        <ScrollReveal className="mb-12 md:mb-16">
          <p className="font-script text-saffron text-2xl mb-2">Discover</p>
          <h2 className="font-serif text-maroon text-4xl md:text-5xl font-semibold leading-tight">
            Why Kesari Mangalam
          </h2>
        </ScrollReveal>

        {/* ─── Feature cards 2×2 ─── */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {WHY_FEATURES.map((feature, idx) => {
            const Icon = ICON_MAP[feature.icon] ?? Trees;

            return (
              <ScrollReveal
                key={feature.number}
                delay={idx * 0.12}
              >
                <div className="group relative border-l-2 border-gold pl-6 bg-white/50 backdrop-blur-sm rounded-r-lg p-6 transition-shadow duration-300 hover:shadow-lg">
                  {/* Large watermark number */}
                  <span
                    className="absolute top-4 right-6 font-serif text-6xl text-gold/30 leading-none select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {feature.number}
                  </span>

                  {/* Gold line icon */}
                  <Icon className="w-8 h-8 text-gold mb-4" strokeWidth={1.5} />

                  {/* Title */}
                  <h3 className="font-serif text-xl text-maroon font-semibold mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-charcoal/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
