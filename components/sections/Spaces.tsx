'use client';

// ═══════════════════════════════════════════
// Spaces — Venue spaces showcase
// Premium cards with image, specs & capacity
// ═══════════════════════════════════════════

import { Car } from 'lucide-react';
import { SPACES } from '@/lib/constants';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Spaces() {
  return (
    <section id="spaces" className="py-20 md:py-32 bg-ivory section-pattern">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── Section header ─── */}
        <ScrollReveal className="mb-12 md:mb-16">
          <p className="font-script text-saffron text-2xl mb-2">Our Spaces</p>
          <h2 className="font-serif text-maroon text-4xl md:text-5xl font-semibold leading-tight">
            Room to Celebrate.
          </h2>
        </ScrollReveal>

        {/* ─── Space cards ─── */}
        <div className="grid md:grid-cols-2 gap-8">
          {SPACES.map((space, idx) => (
            <ScrollReveal key={space.name} delay={idx * 0.1}>
              <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Card image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="image-placeholder absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                    [IMAGE: {space.image.split('/').pop()} — {space.alt}]
                  </div>
                  {/* Bottom gradient overlay for readability */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Card body */}
                <div className="p-6">
                  {/* Space name */}
                  <h3 className="font-serif text-2xl text-maroon font-semibold mb-3">
                    {space.name}
                  </h3>

                  {/* Capacity badge */}
                  <span className="inline-flex items-center bg-saffron/10 text-saffron px-3 py-1 text-sm font-medium rounded-full mb-4">
                    {space.capacity}
                  </span>

                  {/* Spec tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {space.specs.map((spec) => (
                      <span
                        key={spec}
                        className="bg-ivory-dark px-2 py-1 text-xs text-charcoal/70 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {space.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ─── Parking highlight band ─── */}
        <ScrollReveal delay={0.2} className="mt-10">
          <div className="bg-maroon rounded-lg px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-4 text-ivory">
            <Car className="w-6 h-6 text-gold shrink-0" strokeWidth={1.5} />
            <p className="text-center sm:text-left font-sans text-sm sm:text-base tracking-wide">
              <span className="font-semibold">100 Cars + 500 Two-Wheelers</span>
              <span className="mx-2 text-gold">·</span>
              Valet Guidance Available
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
