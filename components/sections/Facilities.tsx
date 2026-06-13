'use client';

// ═══════════════════════════════════════════
// Facilities — Icon grid of venue amenities
// Responsive grid with hover scale effects
// ═══════════════════════════════════════════

import {
  Trees,
  Landmark,
  UtensilsCrossed,
  ChefHat,
  Flower2,
  Music,
  Sparkles,
  BedDouble,
  Zap,
  Car,
  Users,
  Camera,
  Theater,
  Palette,
  type LucideIcon,
} from 'lucide-react';
import { FACILITIES } from '@/lib/constants';
import ScrollReveal from '@/components/ui/ScrollReveal';

/** Map icon name strings from constants → Lucide components */
const ICON_MAP: Record<string, LucideIcon> = {
  trees: Trees,
  landmark: Landmark,
  'utensils-crossed': UtensilsCrossed,
  'chef-hat': ChefHat,
  'flower-2': Flower2,
  music: Music,
  sparkles: Sparkles,
  'bed-double': BedDouble,
  zap: Zap,
  car: Car,
  users: Users,
  camera: Camera,
  theater: Theater,
  palette: Palette,
};

export default function Facilities() {
  return (
    <section id="facilities" className="py-16 md:py-24 bg-ivory-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── Section header ─── */}
        <ScrollReveal className="mb-12 md:mb-16 text-center">
          <p className="font-script text-saffron text-2xl mb-2">
            Everything Taken Care Of
          </p>
          <h2 className="font-serif text-maroon text-4xl md:text-5xl font-semibold leading-tight">
            Facilities &amp; Services.
          </h2>
        </ScrollReveal>

        {/* ─── Facility icon grid ─── */}
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 lg:gap-6">
            {FACILITIES.map((facility) => {
              const Icon = ICON_MAP[facility.icon] ?? Sparkles;

              return (
                <div
                  key={facility.label}
                  className="flex flex-col items-center text-center py-5 px-3 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-ivory group cursor-default"
                >
                  {/* Gold line icon */}
                  <Icon
                    className="w-7 h-7 md:w-8 md:h-8 text-saffron mb-3 transition-colors duration-300 group-hover:text-marigold-deep"
                    strokeWidth={1.5}
                  />
                  {/* Label */}
                  <span className="text-sm text-charcoal leading-snug transition-colors duration-300 group-hover:text-saffron">
                    {facility.label}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
