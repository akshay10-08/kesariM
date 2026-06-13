'use client';

// ═══════════════════════════════════════════
// Events — Event-type storytelling cards
// 3-column grid with hover effects
// ═══════════════════════════════════════════

import { EVENTS } from '@/lib/constants';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Events() {
  return (
    <section id="events" className="py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── Section header ─── */}
        <ScrollReveal className="mb-12 md:mb-16">
          <p className="font-script text-saffron text-2xl mb-2">Occasions</p>
          <h2 className="font-serif text-maroon text-4xl md:text-5xl font-semibold leading-tight">
            Every Celebration, Beautifully Hosted.
          </h2>
        </ScrollReveal>

        {/* ─── Event cards grid ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((event, idx) => (
            <ScrollReveal key={event.name} delay={idx * 0.1}>
              <div className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                {/* Card image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="image-placeholder absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                    [IMAGE: {event.image.split('/').pop()} — {event.alt}]
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Event name */}
                  <h3 className="font-serif text-xl text-maroon font-semibold mb-2">
                    {event.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-charcoal/70 leading-relaxed mb-4 flex-1">
                    {event.description}
                  </p>

                  {/* Learn more link with gold underline grow */}
                  <span className="link-underline-grow inline-block text-sm font-medium text-gold cursor-pointer self-start">
                    Learn more →
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
