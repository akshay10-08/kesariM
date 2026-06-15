'use client';

// ═══════════════════════════════════════════
// About — Venue story, trust signals & stats
// Asymmetric two-column editorial layout
// ═══════════════════════════════════════════

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { ABOUT_TEXT, STATS, CONTACT } from '@/lib/constants';
import CountUp from '@/components/ui/CountUp';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-ivory section-pattern py-20 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── Two-column layout ─── */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-0">
          {/* ─── LEFT: Image with gold offset frame ─── */}
          <ScrollReveal direction="left" className="w-full lg:w-5/12">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="offset-frame">
                <div className="relative w-full h-full aspect-[4/5] overflow-hidden">
                  <Image 
                    src="/images/about-lawn.png" 
                    alt="Wide view of the Kesari Mangalam Lawn with lush greenery, fairy lights, and wedding decorations at golden hour" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
              {/* Decorative gold corner accent */}
              <div
                className="absolute -top-4 -left-4 w-12 h-12 pointer-events-none"
                aria-hidden="true"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gold" />
                <div className="absolute top-0 left-0 h-full w-[1px] bg-gold" />
              </div>
            </div>
          </ScrollReveal>

          {/* ─── RIGHT: Story content ─── */}
          <ScrollReveal direction="right" delay={0.15} className="w-full lg:w-7/12 lg:pl-16">
            {/* Script eyebrow */}
            <p className="font-script text-saffron text-2xl mb-2">Since 2011</p>

            {/* Main heading */}
            <h2 className="font-serif text-maroon text-4xl md:text-5xl font-semibold leading-tight">
              An Epitome of Splendour
              <br />
              &amp; Regality
            </h2>

            {/* Gold hairline divider */}
            <div className="gold-hairline w-24 my-6" />

            {/* About paragraph */}
            <p className="text-charcoal text-lg leading-relaxed max-w-xl">
              {ABOUT_TEXT}
            </p>

            {/* Landmark trust signal */}
            <div className="mt-6 flex items-start gap-2 text-charcoal/60 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-saffron" />
              <span>
                {CONTACT.highway} · {CONTACT.landmark}
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* ─── STAT COUNTERS ─── */}
        <ScrollReveal delay={0.3} className="mt-16 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="border-t-2 border-gold pt-4 text-center md:text-left"
              >
                <p className="font-serif text-4xl md:text-5xl text-maroon font-semibold leading-none">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    isYear={stat.isYear}
                  />
                </p>
                <p className="mt-2 text-sm text-charcoal/60 uppercase tracking-wider font-sans">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
