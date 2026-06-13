'use client';

// ═══════════════════════════════════════════
// MobileActionBar — Fixed bottom CTA bar
// Only visible on mobile (md:hidden)
// Three equal buttons: Call, WhatsApp, Enquire
// ═══════════════════════════════════════════

import { Phone, MessageCircle, Mail } from 'lucide-react';
import { CONTACT } from '@/lib/constants';
import { buildWhatsAppLink, buildPhoneLink } from '@/lib/whatsapp';

/** Smooth-scroll to a section by ID */
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

interface ActionButtonProps {
  href?: string;
  onClick?: () => void;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}

function ActionButton({ href, onClick, icon, label, external }: ActionButtonProps) {
  const classes =
    'flex flex-1 flex-col items-center justify-center gap-1 py-3 text-ivory transition-colors hover:bg-maroon-light active:bg-maroon-dark';

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {icon}
        <span className="text-[10px] font-sans uppercase tracking-wider">{label}</span>
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${classes} cursor-pointer`}>
      {icon}
      <span className="text-[10px] font-sans uppercase tracking-wider">{label}</span>
    </button>
  );
}

export default function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="
        fixed bottom-0 left-0 right-0 z-50
        md:hidden
        flex
        bg-maroon
        border-t border-gold
      "
    >
      {/* Call */}
      <ActionButton
        href={buildPhoneLink()}
        icon={<Phone className="h-5 w-5" />}
        label="Call"
      />

      {/* WhatsApp */}
      <ActionButton
        href={buildWhatsAppLink()}
        external
        icon={<MessageCircle className="h-5 w-5" />}
        label="WhatsApp"
      />

      {/* Enquire — scrolls to #contact */}
      <ActionButton
        onClick={() => scrollToSection('contact')}
        icon={<Mail className="h-5 w-5" />}
        label="Enquire"
      />
    </nav>
  );
}
