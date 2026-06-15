'use client';

// ═══════════════════════════════════════════
// ImageMarquee — Two-row infinite image scroller
// Row 1 drifts left, Row 2 drifts right
// Duplicated content for seamless looping
// ═══════════════════════════════════════════

import Image from 'next/image';

interface MarqueeImage {
  src: string;
  alt: string;
}

interface ImageMarqueeProps {
  /** Full array of images — split in half automatically */
  images: MarqueeImage[];
  /** Animation duration in seconds (default 60) */
  speed?: number;
}

/**
 * Renders a single marquee row.
 * Content is duplicated 2× so the loop is seamless.
 */
function MarqueeRow({
  items,
  reverse = false,
  speed,
}: {
  items: MarqueeImage[];
  reverse?: boolean;
  speed: number;
}) {
  /* Duplicate images for seamless loop */
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-2">
      <div
        className={`marquee-track flex gap-4 ${
          reverse ? 'animate-marquee-images-reverse' : 'animate-marquee-images'
        }`}
        style={{
          /* Allow CSS animation duration override via custom speed */
          animationDuration: `${speed}s`,
        }}
      >
        {doubled.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative w-72 md:w-80 aspect-[3/2] flex-shrink-0 rounded-lg overflow-hidden"
          >
            <Image 
              src={img.src} 
              alt={img.alt} 
              fill 
              className="object-cover" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ImageMarquee({ images, speed = 60 }: ImageMarqueeProps) {
  /* Split images into two roughly equal halves */
  const mid = Math.ceil(images.length / 2);
  const row1 = images.slice(0, mid);
  const row2 = images.slice(mid);

  return (
    <div className="space-y-0">
      {/* Row 1 — left-to-right drift */}
      <MarqueeRow items={row1} speed={speed} />
      {/* Row 2 — right-to-left drift */}
      <MarqueeRow items={row2} reverse speed={speed} />
    </div>
  );
}
