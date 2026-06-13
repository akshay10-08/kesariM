// ═══════════════════════════════════════════
// Marquee — Decorative brand ribbon
// Maroon bg, gold/saffron text, continuous loop
// ═══════════════════════════════════════════

import { MARQUEE_TEXT } from '@/lib/constants';

export default function Marquee() {
  /* Duplicate content 4× for seamless loop */
  const repeats = Array.from({ length: 4 }, (_, i) => i);

  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden bg-maroon py-4 select-none"
    >
      <div className="marquee-track flex animate-marquee whitespace-nowrap">
        {repeats.map((i) => (
          <span
            key={i}
            className="
              inline-block
              font-sans text-sm
              uppercase tracking-[0.3em]
              text-saffron-light
              px-2
            "
          >
            {/* Split on ✦ to colour the separators gold */}
            {MARQUEE_TEXT.split('✦').map((segment, j, arr) => (
              <span key={j}>
                {segment}
                {j < arr.length - 1 && (
                  <span className="text-gold">✦</span>
                )}
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>
  );
}
