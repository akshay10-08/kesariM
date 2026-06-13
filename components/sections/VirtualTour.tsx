'use client';

// ═══════════════════════════════════════════
// VirtualTour — 360° panorama embed section
// Play-to-load pattern with poster + play btn
// ═══════════════════════════════════════════

import { useState } from 'react';
import { Play } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function VirtualTour() {
  const [isActive, setIsActive] = useState(false);

  return (
    <section id="virtual-tour" className="py-20 md:py-32 bg-maroon-dark overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── Section header ─── */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <p className="font-script text-gold text-2xl mb-2">Step Inside</p>
          <h2 className="font-serif text-white text-4xl md:text-5xl font-semibold leading-tight">
            Take a 360° Tour.
          </h2>
        </ScrollReveal>

        {/* ─── Tour container ─── */}
        <ScrollReveal delay={0.15}>
          <div className="relative mx-auto max-w-5xl aspect-[16/9] rounded-lg overflow-hidden shadow-2xl">
            {!isActive ? (
              /* ─── Poster state: image + play button ─── */
              <div className="relative w-full h-full">
                <div className="image-placeholder absolute inset-0">
                  [IMAGE: 360-tour-poster.png — Wide aerial/elevated view of
                  the entire Kesari Mangalam Lawn ready for a wedding event,
                  used as a poster for the 360° virtual tour]
                </div>

                {/* Dark overlay for contrast */}
                <div
                  className="absolute inset-0 bg-black/30"
                  aria-hidden="true"
                />

                {/* Centred play button */}
                <button
                  onClick={() => setIsActive(true)}
                  className="absolute inset-0 flex items-center justify-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-dark"
                  aria-label="Play 360° virtual tour"
                >
                  <span className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-8 h-8 md:w-10 md:h-10 ml-1" fill="white" />
                  </span>
                </button>
              </div>
            ) : (
              /* ─── Active state: tour embed placeholder ─── */
              <div className="w-full h-full bg-charcoal flex flex-col items-center justify-center text-center p-8">
                <div className="max-w-lg space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 text-gold mb-4">
                    <Play className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-white font-semibold">
                    Pannellum 360° Tour
                  </h3>
                  <p className="text-ivory/70 text-sm leading-relaxed">
                    Embed your panorama here. Replace this placeholder with a
                    Pannellum viewer initialised on your equirectangular image.
                    <br />
                    <code className="mt-2 inline-block text-xs text-gold/80 bg-charcoal-light px-2 py-1 rounded">
                      {'<'}iframe src=&quot;/tour/index.html&quot; ...{'>'}
                    </code>
                  </p>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* ─── Subtitle text ─── */}
        <ScrollReveal delay={0.25} className="text-center mt-8">
          <p className="text-ivory/60 text-sm max-w-md mx-auto leading-relaxed">
            Explore every corner of our lawn before your visit. Click and drag to
            look around.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
