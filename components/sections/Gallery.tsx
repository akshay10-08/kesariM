'use client';

// ═══════════════════════════════════════════
// Gallery — Two-row marquee + category lightbox
// Infinite image scroll, filterable grid,
// full-screen lightbox with keyboard navigation
// ═══════════════════════════════════════════

import { useState, useMemo, useCallback } from 'react';
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from '@/lib/constants';
import ImageMarquee from '@/components/ui/ImageMarquee';
import Lightbox from '@/components/ui/Lightbox';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Gallery() {
  /* ── Category filter state ── */
  const [activeCategory, setActiveCategory] = useState<string>('All');

  /* ── Lightbox state ── */
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  /* ── Filtered images based on active category ── */
  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter(
      (img) => img.category.toLowerCase() === activeCategory.toLowerCase(),
    );
  }, [activeCategory]);

  /* ── Lightbox navigation handlers ── */
  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1,
    );
  }, [filteredImages.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1,
    );
  }, [filteredImages.length]);

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

      {/* ── Category lightbox section ── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Category filter tabs ── */}
        <ScrollReveal>
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-sans font-medium
                  transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-saffron text-white shadow-md'
                      : 'text-maroon hover:bg-ivory-dark'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Filtered image grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredImages.map((img, index) => (
            <button
              key={img.src}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[3/2] overflow-hidden rounded-lg
                         focus-visible:outline-2 focus-visible:outline-gold
                         transition-transform duration-300 hover:scale-[1.02]"
              aria-label={`View ${img.alt}`}
            >
              <div className="relative w-full h-full overflow-hidden">
                <div className="image-placeholder absolute inset-0">
                  [IMAGE: {img.src} — {img.alt}]
                </div>
              </div>

              {/* Hover overlay with category badge */}
              <div className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/30
                              transition-colors duration-300 flex items-end p-3">
                <span className="translate-y-2 opacity-0 group-hover:translate-y-0
                                 group-hover:opacity-100 transition-all duration-300
                                 rounded-full bg-white/20 px-3 py-1 text-xs text-white
                                 backdrop-blur-sm capitalize">
                  {img.category}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Lightbox modal ── */}
      <Lightbox
        images={filteredImages.map((img) => ({ src: img.src, alt: img.alt }))}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </section>
  );
}
