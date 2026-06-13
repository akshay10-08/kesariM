// ═══════════════════════════════════════════
// KESARI MANGALAM LAWN — Homepage
// Premium single-page scroll with all sections
// in the specified order from the brief
// ═══════════════════════════════════════════

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppPill from '@/components/layout/WhatsAppPill';
import MobileActionBar from '@/components/layout/MobileActionBar';
import SmoothScroll from '@/components/ui/SmoothScroll';

import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import About from '@/components/sections/About';
import WhyKesari from '@/components/sections/WhyKesari';
import Spaces from '@/components/sections/Spaces';
import VirtualTour from '@/components/sections/VirtualTour';
import Events from '@/components/sections/Events';
import Facilities from '@/components/sections/Facilities';
import Catering from '@/components/sections/Catering';
import WhyBook from '@/components/sections/WhyBook';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import Enquiry from '@/components/sections/Enquiry';

export default function Home() {
  return (
    <SmoothScroll>
      {/* ─── Sticky header with logo swap ─── */}
      <Header />

      <main id="home">
        {/* §5.2 — Hero: Photographic slideshow + rotating headlines + availability widget */}
        <Hero />

        {/* §5.3 — Marquee: Looping brand ribbon */}
        <Marquee />

        {/* §5.4 — About: Two-column story + stat counters */}
        <About />

        {/* §5.5 — Why Kesari Mangalam: 4 numbered feature cards */}
        <WhyKesari />

        {/* §5.6 — Spaces: Named venues with capacity specs */}
        <Spaces />

        {/* §5.7 — 360° Virtual Tour: The standout premium feature */}
        <VirtualTour />

        {/* §5.8 — Events: Event-type storytelling cards */}
        <Events />

        {/* §5.9 — Facilities: Amenities icon grid */}
        <Facilities />

        {/* §5.10 — Catering: Teaser band with CTA */}
        <Catering />

        {/* §5.11 — Why Book: Perks strip */}
        <WhyBook />

        {/* §5.12 — Gallery: Two-row marquee + category lightbox */}
        <Gallery />

        {/* §5.13 — Testimonials: Review slider + Google badge */}
        <Testimonials />

        {/* §5.14 — Enquiry: Form → WhatsApp/mailto */}
        <Enquiry />
      </main>

      {/* §5.15 — Footer: Map, contact, trust line, social */}
      <Footer />

      {/* Persistent UI elements */}
      <WhatsAppPill />
      <MobileActionBar />
    </SmoothScroll>
  );
}
