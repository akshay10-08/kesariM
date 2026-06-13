// ═══════════════════════════════════════════
// WhyBook — Perks strip: "Why Families Choose Us"
// Gold top border, 6-perk grid, scroll reveal
// ═══════════════════════════════════════════

import { CheckCircle2 } from 'lucide-react';
import { WHY_BOOK } from '@/lib/constants';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function WhyBook() {
  return (
    <section id="why-book" className="relative bg-ivory py-16 md:py-24">
      {/* Gold hairline top border */}
      <div className="gold-hairline w-full absolute top-0 left-0" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          {/* ── Section header ── */}
          <div className="mb-12">
            <span className="font-script text-saffron text-xl md:text-2xl">
              Book Direct
            </span>
            <h2 className="mt-2 font-serif text-maroon text-3xl md:text-4xl font-semibold">
              Why Families Choose Us.
            </h2>
          </div>
        </ScrollReveal>

        {/* ── Perks grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_BOOK.map((perk, i) => (
            <ScrollReveal key={perk.title} delay={i * 0.08}>
              <div className="flex items-start gap-4">
                {/* Gold check icon */}
                <CheckCircle2
                  className="mt-0.5 h-6 w-6 flex-shrink-0 text-gold"
                  strokeWidth={1.8}
                />

                <div>
                  <h3 className="font-semibold text-charcoal leading-snug">
                    {perk.title}
                  </h3>
                  <p className="mt-1 text-sm text-charcoal/60 leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
