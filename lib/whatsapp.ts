// ═══════════════════════════════════════════
// WhatsApp deep-link utility
// Builds pre-filled WhatsApp messages
// ═══════════════════════════════════════════

import { CONTACT } from "./constants";

interface EnquiryData {
  name?: string;
  phone?: string;
  eventType?: string;
  guests?: string;
  date?: string;
  message?: string;
}

/**
 * Build a WhatsApp deep link with pre-filled message
 */
export function buildWhatsAppLink(data?: EnquiryData): string {
  if (!data) return CONTACT.whatsappLink;

  const parts: string[] = [
    `Hi Kesari Mangalam,`,
    ``,
    `I'd like to enquire about hosting an event:`,
  ];

  if (data.name) parts.push(`Name: ${data.name}`);
  if (data.phone) parts.push(`Phone: ${data.phone}`);
  if (data.eventType) parts.push(`Event: ${data.eventType}`);
  if (data.guests) parts.push(`Approx. Guests: ${data.guests}`);
  if (data.date) parts.push(`Preferred Date: ${data.date}`);
  if (data.message) {
    parts.push(``);
    parts.push(data.message);
  }

  const text = encodeURIComponent(parts.join("\n"));
  return `https://wa.me/${CONTACT.phoneRaw}?text=${text}`;
}

/**
 * Build a mailto link with pre-filled subject and body
 */
export function buildMailtoLink(data?: EnquiryData): string {
  const subject = encodeURIComponent("Event Enquiry — Kesari Mangalam Lawn");

  if (!data) {
    return `mailto:${CONTACT.email}?subject=${subject}`;
  }

  const parts: string[] = [
    `Dear Kesari Mangalam Team,`,
    ``,
    `I'd like to enquire about hosting an event at your venue.`,
    ``,
  ];

  if (data.name) parts.push(`Name: ${data.name}`);
  if (data.phone) parts.push(`Phone: ${data.phone}`);
  if (data.eventType) parts.push(`Event Type: ${data.eventType}`);
  if (data.guests) parts.push(`Approx. Guests: ${data.guests}`);
  if (data.date) parts.push(`Preferred Date: ${data.date}`);
  if (data.message) {
    parts.push(``);
    parts.push(data.message);
  }

  parts.push(``, `Looking forward to hearing from you.`);

  const body = encodeURIComponent(parts.join("\n"));
  return `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
}

/**
 * Build a tel: link for click-to-call
 */
export function buildPhoneLink(): string {
  return `tel:+${CONTACT.phoneRaw}`;
}
