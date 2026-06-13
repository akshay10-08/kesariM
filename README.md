# Kesari Mangalam Lawn — Premium Wedding Venue Website

A hand-crafted, premium marketing website for **Kesari Mangalam Lawn**, an upscale outdoor wedding venue on the Kanpur–Jhansi Highway, Kanpur.

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS v3** with custom CSS variables for the brand palette
- **Framer Motion** for animations (hero transitions, scroll reveals)
- **Lenis** for premium smooth scrolling
- **Lucide React** for icons

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

Deploy-ready for **Vercel** or **Netlify**:

```bash
# Vercel (recommended)
npx vercel

# Or build and deploy static
npm run build
```

---

## 📸 Image Placeholder Checklist

Replace each `[IMAGE: ...]` placeholder with the real photograph. Place all images in `/public/images/`.

### Hero Slideshow
| Filename | Description | Size |
|---|---|---|
| `hero-1.png` | Wide twilight shot of the lit lawn set for a wedding, fairy lights | 1920×1080+ |
| `hero-2.png` | Grand decorated mandap at the lawn's centre | 1920×1080+ |
| `hero-3.png` | Sangeet / reception night with stage & crowd | 1920×1080+ |
| `hero-4.png` | Daytime view of the full green lawn & entrance gate | 1920×1080+ |

### About Section
| Filename | Description |
|---|---|
| `about-lawn.png` | Scenic daytime lawn with décor |

### Spaces Section
| Filename | Description |
|---|---|
| `space-grand-lawn.png` | The sprawling grand lawn |
| `space-mandap.png` | The ceremonial mandap |
| `space-dining-area.png` | Covered dining/banquet area |
| `space-guest-rooms.png` | Guest rooms & bridal suite |

### Events Section
| Filename | Description |
|---|---|
| `event-wedding.png` | Grand wedding celebration |
| `event-reception.png` | Wedding reception with stage & lighting |
| `event-tilak.png` | Traditional tilak ceremony |
| `event-engagement.png` | Ring / engagement ceremony |
| `event-sangeet.png` | Sangeet night with DJ |
| `event-prenup.png` | Pre-nup photoshoot on the lawn |

### Gallery (12 photos)
| Filename | Description |
|---|---|
| `gallery-01.png` through `gallery-12.png` | Décor, lawn, mandap, food, and celebration photos. Categorise as: weddings, mandap, lawn, décor, food |

### Miscellaneous
| Filename | Description |
|---|---|
| `360-tour-poster.png` | Still frame cover for the 360° virtual tour embed |
| `og-image.png` | 1200×630 social share card |
| `texture-pattern.png` | Faint marigold/paisley/leaf pattern for section backgrounds (optional) |

### Logo Files
| Filename | Description |
|---|---|
| `kesari-logo-color.png` | Main logo on transparent (for ivory/light headers & footer) |
| `kesari-logo-white.png` | All-ivory/white version (for dark photographic hero/header) |
| `kesari-logo-sticky.png` | Compact version for sticky header |

---

## ✍️ Reviewer Name Slots

Replace each `[REVIEWER NAME — Google]` with a real reviewer name from your Google / JustDial listing.

### Testimonials Section
| Slot | Review Excerpt |
|---|---|
| Reviewer 1 | "Excellent place to arrange wedding parties — spacious and beautifully done..." |
| Reviewer 2 | "Lovely decoration and arrangements, and great value for the price..." |
| Reviewer 3 | "Spacious lawn, good ambience and professional service..." |
| Reviewer 4 | "Warm hospitality and well-managed — made our day memorable..." |
| Reviewer 5 | *(Empty — paste your own review)* |
| Reviewer 6 | *(Empty — paste your own review)* |

To update reviews, edit `lib/constants.ts` → `TESTIMONIALS` array.

---

## Design System

### Brand Palette
| Token | Hex | Usage |
|---|---|---|
| `--saffron` | `#E08A1E` | Primary accent (buttons, highlights) |
| `--marigold-deep` | `#C46A12` | Hover states, depth |
| `--maroon` | `#6E1A2B` | Primary dark (headers, footer, rich backgrounds) |
| `--ivory` | `#FBF5EA` | Primary light background |
| `--gold` | `#C7A24B` | Hairlines, dividers, luxe accents |
| `--charcoal` | `#241A1C` | Body text |

### Typography
| Role | Font |
|---|---|
| Headings | Cormorant Garamond (serif) |
| Script accents | Great Vibes (script) |
| Body / UI | Jost (sans-serif) |

---

## Project Structure

```
kesari/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, JSON-LD
│   ├── page.tsx            # Homepage: all 15 sections assembled
│   └── globals.css         # Design system: palette, keyframes, utilities
├── components/
│   ├── layout/             # Header, Footer, WhatsAppPill, MobileActionBar
│   ├── sections/           # All 13 page sections
│   └── ui/                 # CountUp, ScrollReveal, SmoothScroll, ImageMarquee, Lightbox
├── lib/
│   ├── constants.ts        # All real venue content
│   └── whatsapp.ts         # WhatsApp/mailto deep-link builders
└── public/images/          # Image placeholders (owner replaces)
```

---

© 2026 Kesari Mangalam Lawn, Kanpur. Crafted with care.
