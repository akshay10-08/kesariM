'use client';

// ═══════════════════════════════════════════
// Enquiry — Contact form + info card
// WhatsApp & Email submission, two-column layout
// ═══════════════════════════════════════════

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from '@/components/ui/SocialIcons';
import { CONTACT, EVENT_TYPES } from '@/lib/constants';
import { buildWhatsAppLink, buildMailtoLink, buildPhoneLink } from '@/lib/whatsapp';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface FormData {
  name: string;
  phone: string;
  eventType: string;
  guests: string;
  date: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  phone: '',
  eventType: '',
  guests: '',
  date: '',
  message: '',
};

/** Shared input styling */
const inputClasses =
  'w-full border-b border-gold/30 bg-transparent py-3 font-sans text-charcoal placeholder:text-charcoal/40 transition-colors focus:border-saffron focus:outline-none';

export default function Enquiry() {
  const [form, setForm] = useState<FormData>(initialFormData);

  /* ── Field update handler ── */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /* ── Build and open WhatsApp link ── */
  const handleWhatsApp = () => {
    const link = buildWhatsAppLink({
      name: form.name,
      phone: form.phone,
      eventType: form.eventType,
      guests: form.guests,
      date: form.date,
      message: form.message,
    });
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  /* ── Build and open mailto link ── */
  const handleEmail = () => {
    const link = buildMailtoLink({
      name: form.name,
      phone: form.phone,
      eventType: form.eventType,
      guests: form.guests,
      date: form.date,
      message: form.message,
    });
    window.location.href = link;
  };

  return (
    <section id="contact" className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* ═══════════════════════════════════════════
              LEFT COLUMN — Contact Form
              ═══════════════════════════════════════════ */}
          <div className="lg:w-7/12">
            <ScrollReveal>
              {/* Section header */}
              <span className="font-script text-saffron text-xl md:text-2xl">
                Let&rsquo;s Plan Your Day
              </span>
              <h2 className="mt-2 mb-10 font-serif text-maroon text-3xl md:text-4xl font-semibold">
                Check Availability.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={inputClasses}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className={inputClasses}
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label htmlFor="eventType" className="sr-only">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    className={`${inputClasses} ${
                      !form.eventType ? 'text-charcoal/40' : ''
                    }`}
                  >
                    <option value="" disabled>
                      Event Type
                    </option>
                    {EVENT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Two columns: Guests + Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="guests" className="sr-only">
                      Approximate Guests
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      placeholder="Approx. Guests"
                      min={1}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="sr-only">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className={`${inputClasses} ${
                        !form.date ? 'text-charcoal/40' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your celebration…"
                    rows={4}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                {/* Submit buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button onClick={handleWhatsApp} className="btn-primary">
                    Send via WhatsApp
                  </button>
                  <button onClick={handleEmail} className="btn-maroon">
                    Send via Email
                  </button>
                </div>

                {/* Reassurance */}
                <p className="text-sm text-charcoal/50">
                  We&rsquo;ll get back to you within 24 hours.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* ═══════════════════════════════════════════
              RIGHT COLUMN — Contact Info Card
              ═══════════════════════════════════════════ */}
          <div className="lg:w-5/12">
            <ScrollReveal delay={0.15} direction="right">
              <div className="rounded-xl bg-maroon p-8 text-ivory space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-ivory/60 mb-1">
                      Phone
                    </p>
                    <a
                      href={buildPhoneLink()}
                      className="text-ivory font-medium hover:text-saffron-light transition-colors"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-ivory/60 mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-ivory font-medium hover:text-saffron-light transition-colors"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-ivory/60 mb-1">
                      Address
                    </p>
                    <p className="text-ivory/90 text-sm leading-relaxed">
                      {CONTACT.address}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-ivory/60 mb-1">
                      Hours
                    </p>
                    <p className="text-ivory/90 text-sm">
                      {CONTACT.hours}
                    </p>
                  </div>
                </div>

                {/* Landmark */}
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-ivory/60 mb-1">
                      Landmark
                    </p>
                    <p className="text-ivory/90 text-sm">
                      {CONTACT.landmark}
                    </p>
                  </div>
                </div>

                {/* ── Divider ── */}
                <div className="h-px bg-ivory/10" />

                {/* Social icons */}
                <div className="flex gap-4">
                  <a
                    href={CONTACT.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-ivory/20 p-2.5 text-ivory
                               transition-colors hover:border-saffron hover:text-saffron"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-ivory/20 p-2.5 text-ivory
                               transition-colors hover:border-saffron hover:text-saffron"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                </div>

                {/* Trust line */}
                <p className="text-xs text-ivory/60 leading-relaxed">
                  For secure bookings, please confirm only via our official number{' '}
                  <span className="text-ivory/80">{CONTACT.phone}</span> /{' '}
                  <span className="text-ivory/80">{CONTACT.email}</span>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
