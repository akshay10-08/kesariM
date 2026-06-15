// ═══════════════════════════════════════════
// Footer — Full utility footer with 4-column grid
// Contact, hours, links, map, and CTAs
// ═══════════════════════════════════════════

import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '@/components/ui/SocialIcons';
import { SITE, CONTACT, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-maroon-dark text-ivory">
      {/* Gold hairline top */}
      <div className="gold-hairline w-full" />

      {/* ── Main footer content ── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* ═══ Column 1: Brand Identity ═══ */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold text-ivory">
              Kesari Mangalam
            </h3>
            <p className="text-ivory/70 text-sm leading-relaxed">
              {SITE.tagline}
            </p>
            <p className="font-serif text-gold-light text-lg">
              {SITE.nameHindi}
            </p>
            <p className="text-ivory/50 text-xs">
              The Epitome of Splendour &amp; Regality — Since {SITE.established}
            </p>

            {/* Repeated CTA */}
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex mt-4"
            >
              Enquire Now
            </a>
          </div>

          {/* ═══ Column 2: Contact ═══ */}
          <div className="space-y-5">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-medium mb-4">
              Contact
            </h4>

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold/70" />
              <p className="text-sm text-ivory/80 leading-relaxed">
                {CONTACT.address}
              </p>
            </div>

            {/* General phone */}
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold/70" />
              <div>
                <p className="text-xs text-ivory/50 mb-0.5">General</p>
                <a
                  href={`tel:+${CONTACT.phoneRaw}`}
                  className="text-sm text-ivory hover:text-saffron-light transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>

            {/* Event Enquiries (same number for now) */}
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold/70" />
              <div>
                <p className="text-xs text-ivory/50 mb-0.5">Event Enquiries</p>
                <a
                  href={`tel:+${CONTACT.phoneRaw}`}
                  className="text-sm text-ivory hover:text-saffron-light transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold/70" />
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm text-ivory hover:text-saffron-light transition-colors"
              >
                {CONTACT.email}
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ivory/15 p-2 text-ivory/60
                           hover:border-saffron hover:text-saffron transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ivory/15 p-2 text-ivory/60
                           hover:border-saffron hover:text-saffron transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full border border-ivory/15 p-2 text-ivory/60
                           hover:border-saffron hover:text-saffron transition-colors"
                aria-label="YouTube (coming soon)"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* ═══ Column 3: Hours + Quick Links ═══ */}
          <div className="space-y-6">
            {/* Hours */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-medium mb-4">
                Hours
              </h4>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold/70" />
                <div className="text-sm text-ivory/80 space-y-1">
                  <p>Open 24×7</p>
                  <p className="text-ivory/50">Tours by appointment</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-medium mb-4">
                Quick Links
              </h4>
              <nav aria-label="Footer quick links">
                <ul className="space-y-2.5">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-ivory/70 hover:text-saffron-light
                                   transition-colors link-underline-grow"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Distance module */}
            <div className="rounded-lg border border-ivory/10 p-4">
              <p className="text-xs text-ivory/50 leading-relaxed">
                {CONTACT.highway} · {CONTACT.landmark}
              </p>
            </div>
          </div>

          {/* ═══ Column 4: Embedded Map ═══ */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-medium mb-4">
              Find Us
            </h4>

            {/* Google Maps embed */}
            <div className="aspect-[16/9] md:aspect-[2/1] lg:aspect-[5/3] overflow-hidden rounded-lg border-2 border-gold/20 shadow-lg">
              <iframe
                src={CONTACT.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kesari Mangalam Lawn location on Google Maps"
              />
            </div>

            {/* Get Directions link */}
            <a
              href={CONTACT.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-ivory/70
                         hover:text-saffron-light transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Get Directions
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-14">
          <div className="gold-hairline w-full mb-4" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-4">
            <p className="text-xs text-ivory/50">
              © {currentYear} {SITE.name}, Kanpur. All rights reserved.
            </p>
            <p className="text-xs text-ivory/50 font-sans tracking-wide">
              Designed by +919580840813 (WhatsApp/Call)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
