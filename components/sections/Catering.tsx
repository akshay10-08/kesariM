// ═══════════════════════════════════════════
// Catering — Short band/strip CTA section
// Maroon bg with gold accent, WhatsApp CTA
// ═══════════════════════════════════════════

import { buildWhatsAppLink } from '@/lib/whatsapp';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Catering() {
  const whatsappUrl = buildWhatsAppLink({
    message: "I'd like to discuss catering options and a custom quote.",
  });

  return (
    <section id="catering" className="relative py-16 md:py-24 bg-maroon overflow-hidden">
      {/* ─── Diagonal gold accent line ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent origin-top-right rotate-[-4deg] translate-y-12" />
        <div className="absolute bottom-0 left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent origin-bottom-left rotate-[-4deg] -translate-y-12" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          {/* Script eyebrow */}
          <p className="font-script text-gold text-2xl mb-3">
            Your Feast, Your Way
          </p>

          {/* Heading */}
          <h2 className="font-serif text-white text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Curated Feasts, Crafted for You.
          </h2>

          {/* Description */}
          <p className="text-ivory/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Veg &amp; non-veg, in-house or your own caterer, outdoor décor
            allowed, packages customised to budget.
          </p>

          {/* CTA button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Request a Custom Quote
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
