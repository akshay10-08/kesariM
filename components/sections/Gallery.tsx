'use client';

// ═══════════════════════════════════════════
// Gallery — Two-row marquee + category lightbox
// Infinite image scroll, filterable grid,
// full-screen lightbox with keyboard navigation
// ═══════════════════════════════════════════

import { GALLERY_IMAGES } from '@/lib/constants';
import ImageMarquee from '@/components/ui/ImageMarquee';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Gallery() {

  return (
    <section id="gallery" className="bg-ivory py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Section header ── */}
        <ScrollReveal>
          <div className="mb-10 text-center">
            <span className="font-script text-saffron text-xl md:text-2xl">
              Captured Moments
            </span>
            <h2 className="mt-2 font-serif text-maroon text-3xl md:text-4xl font-semibold">
              Moments at Kesari Mangalam.
            </h2>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Two-row infinite marquee (full-bleed) ── */}
      <div className="mb-16">
        <ImageMarquee
          images={GALLERY_IMAGES.map((img) => ({
            src: img.src,
            alt: img.alt,
          }))}
          speed={60}
        />
      </div>

    </section>
  );
}
