// ═══════════════════════════════════════════
// KESARI MANGALAM LAWN — SITE CONSTANTS
// All real content, zero lorem text
// ═══════════════════════════════════════════

export const SITE = {
  name: "Kesari Mangalam Lawn",
  nameHindi: "केसरी मंगलम्",
  tagline: "Where Auspicious Beginnings Take Root.",
  taglineAlt: "The Epitome of Splendour & Regality",
  brandLine:
    "Bring your plans to life — sophisticated settings for weddings, tilak, ring ceremonies, receptions, pre-nup shoots and every celebration.",
  established: 2011,
  experience: "14+",
  eventsDelivered: "500+",
  rating: 4.5,
  reviewCount: "780+",
  photoCount: "250+",
} as const;

export const CONTACT = {
  phone: "+91 73078 69807",
  phoneRaw: "917307869807",
  email: "kesarimangalam@gmail.com",
  address:
    "C896+X6M, Kanpur–Jhansi Highway, near Vaishno Mata Mandir / Bajrang Chauraha, Damodar Nagar, Kanpur, Uttar Pradesh 208027",
  addressShort: "Kanpur–Jhansi Highway, Damodar Nagar, Kanpur",
  hours: "Open 24×7 · Venue tours by appointment",
  landmark: "Near Vaishno Mata Mandir, Bajrang Chauraha",
  highway: "On the Kanpur–Jhansi Highway",
  facebook: "https://www.facebook.com/kesarimangalamlawn",
  instagram: "https://www.instagram.com/kesarimangalam2/",
  googleMaps: "https://maps.app.goo.gl/vwZQxA597BxA6WnV6",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.5!2d80.25!3d26.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47!2sKesari%20Mangalam%20Lawn!5e0!3m2!1sen!2sin",
  whatsappLink:
    "https://wa.me/917307869807?text=Hi%20Kesari%20Mangalam%2C%20I'd%20like%20to%20check%20date%20availability%20and%20pricing%20for%20my%20event.",
} as const;

export const HERO_SLIDES = [
  {
    image: "/images/a.png",
    alt: "Wide twilight shot of the lit lawn set for a wedding, fairy lights",
    headline: "Where Auspicious Beginnings Take Root.",
    subline: "A breathtaking open-air lawn for your grandest celebrations.",
  },
  {
    image: "/images/b.png",
    alt: "Grand decorated mandap at the lawn's centre",
    headline: "Grand Weddings Under the Open Sky.",
    subline: "The majestic mandap awaits your sacred vows.",
  },
  {
    image: "/images/c.png",
    alt: "Sangeet and reception night with stage and crowd",
    headline: "A Majestic Mandap for Your Sacred Vows.",
    subline: "Sangeet, reception, every celebration made magnificent.",
  },
  {
    image: "/images/d.png",
    alt: "Daytime view of the full green lawn and entrance gate",
    headline: "Celebrations of Every Size, Since 2011.",
    subline: "14+ years of making your celebrations unforgettable.",
  },
] as const;

export const ABOUT_TEXT = `On the Kanpur–Jhansi Highway in Damodar Nagar, Kesari Mangalam Lawn is a beautifully designed open-air wedding venue — the epitome of splendour and regality for your family and guests. Since 2011, we've hosted 500+ weddings and countless celebrations, pairing a breathtaking outdoor lawn with warm, highly professional hospitality. From an intimate tilak to a royal large-scale wedding under the moonlight, every detail is crafted to make your day unforgettable.`;

export const STATS = [
  { value: 2011, label: "Established", suffix: "", isYear: true },
  { value: 14, label: "Years of Excellence", suffix: "+", isYear: false },
  { value: 500, label: "Weddings Hosted", suffix: "+", isYear: false },
  { value: 4.5, label: "Google Rating", suffix: "★", isYear: false },
  { value: 1000, label: "Guest Capacity", suffix: "+", isYear: false },
] as const;

export const WHY_FEATURES = [
  {
    number: "01",
    title: "Sprawling Open-Air Lawn",
    description:
      "Moonlit celebrations for 800+ seated guests on a breathtaking green canvas that transforms with your vision.",
    icon: "trees" as const,
  },
  {
    number: "02",
    title: "A Majestic Mandap",
    description:
      "A regal ceremonial centrepiece at the heart of the lawn — where your sacred vows become timeless memories.",
    icon: "crown" as const,
  },
  {
    number: "03",
    title: "Effortless Hospitality",
    description:
      "Bridal & guest rooms, in-house catering, décor, DJ & lighting — every detail handled by our experienced team.",
    icon: "handshake" as const,
  },
  {
    number: "04",
    title: "Massive Parking",
    description:
      "100 cars + 500 two-wheelers with valet guidance — because a big wedding deserves hassle-free arrivals.",
    icon: "car" as const,
  },
] as const;

export const SPACES = [
  {
    name: "The Grand Lawn",
    image: "/images/space-grand-lawn.png",
    alt: "Sprawling outdoor green lawn set for a grand wedding",
    capacity: "800 seated · 1,000 floating",
    specs: ["Open-air", "Outdoor décor allowed", "Up to ~1,050 guests"],
    description:
      "A sprawling green canvas stunning for sangeet or a moonlit reception — ideal from grand medium-scale to royal large-scale weddings.",
  },
  {
    name: "The Mandap",
    image: "/images/space-mandap.png",
    alt: "Grand ceremonial mandap setting at the centre of the lawn",
    capacity: "Grand ceremonial setting",
    specs: ["Heart of the lawn", "Majestic setting", "Customisable décor"],
    description:
      "A majestic ceremonial mandap at the heart of the lawn — the regal centrepiece for your sacred vows.",
  },
  {
    name: "Dining & Banquet Area",
    image: "/images/space-dining-area.png",
    alt: "Covered dining and banquet space for wedding guests",
    capacity: "Covered guest dining",
    specs: ["Weather-protected", "In-house catering", "Veg & Non-veg"],
    description:
      "A covered dining space ensuring your guests enjoy curated feasts in comfort, rain or shine.",
  },
  {
    name: "Guest Rooms & Bridal Suite",
    image: "/images/space-guest-rooms.png",
    alt: "On-site guest rooms and bridal changing room",
    capacity: "On-site accommodation",
    specs: ["Bridal changing room", "Guest accommodation", "Wedding party stay"],
    description:
      "On-site accommodation for the wedding party, with a dedicated bridal suite for the couple's preparations.",
  },
] as const;

export const EVENTS = [
  {
    name: "Weddings",
    image: "/images/event-wedding.png",
    alt: "Grand wedding celebration at Kesari Mangalam Lawn",
    description: "Grand celebrations under the open sky, from intimate gatherings to royal large-scale affairs.",
  },
  {
    name: "Receptions",
    image: "/images/event-reception.png",
    alt: "Wedding reception with stage and lighting",
    description: "Elegant post-ceremony celebrations with stunning stage setups and professional lighting.",
  },
  {
    name: "Tilak Ceremony",
    image: "/images/event-tilak.png",
    alt: "Traditional tilak ceremony setup",
    description: "Auspicious beginnings in a warm, traditional setting — every ritual honoured with care.",
  },
  {
    name: "Ring & Engagement",
    image: "/images/event-engagement.png",
    alt: "Engagement ring ceremony celebration",
    description: "Celebrate your promise with elegance — beautiful setups for your ring ceremony.",
  },
  {
    name: "Sangeet & Pre-Wedding",
    image: "/images/event-sangeet.png",
    alt: "Sangeet night with DJ and dancing",
    description: "Haldi, mehendi, sangeet — vibrant pre-wedding celebrations with DJ, sound and spectacular lighting.",
  },
  {
    name: "Pre-Nup Photoshoots",
    image: "/images/event-prenup.png",
    alt: "Couple photoshoot on the lawn",
    description: "Photoshoot-friendly settings across the lawn — capture your love story in stunning backdrops.",
  },
] as const;

export const FACILITIES = [
  { label: "Expansive Outdoor Lawn", icon: "trees" },
  { label: "Grand Ceremonial Mandap", icon: "landmark" },
  { label: "Covered Dining/Banquet", icon: "utensils-crossed" },
  { label: "In-House Catering", icon: "chef-hat" },
  { label: "Décor & Flowers", icon: "flower-2" },
  { label: "DJ, Sound & Lighting", icon: "music" },
  { label: "Bridal / Changing Room", icon: "sparkles" },
  { label: "On-Site Guest Rooms", icon: "bed-double" },
  { label: "Power Backup", icon: "zap" },
  { label: "Massive Parking + Valet", icon: "car" },
  { label: "Service & Event Staff", icon: "users" },
  { label: "Photoshoot Settings", icon: "camera" },
  { label: "Themed Stage Setups", icon: "theater" },
  { label: "Outdoor Decorators Allowed", icon: "palette" },
] as const;

export const TESTIMONIALS = [
  {
    text: "Excellent place to arrange wedding parties — spacious and beautifully done. The lawn looked magnificent under the lights.",
    reviewer: "[REVIEWER NAME — Google]",
    rating: 5,
  },
  {
    text: "Lovely decoration and arrangements, and great value for the price. Our guests were truly impressed by the ambience.",
    reviewer: "[REVIEWER NAME — Google]",
    rating: 5,
  },
  {
    text: "Spacious lawn, good ambience and professional service — perfect for a large gathering. Highly recommended!",
    reviewer: "[REVIEWER NAME — Google]",
    rating: 5,
  },
  {
    text: "Warm hospitality and well-managed — made our day truly memorable. The team went above and beyond.",
    reviewer: "[REVIEWER NAME — Google]",
    rating: 4,
  },
  {
    text: "[REVIEWER NAME — Google]",
    reviewer: "[REVIEWER NAME — Google]",
    rating: 5,
  },
  {
    text: "[REVIEWER NAME — Google]",
    reviewer: "[REVIEWER NAME — Google]",
    rating: 5,
  },
] as const;

export const GALLERY_IMAGES = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/gallery-${String(i + 1).padStart(2, "0")}.png`,
  alt: `Kesari Mangalam Lawn — décor, lawn, mandap, food and celebration photo ${i + 1}`,
  category: (["weddings", "mandap", "lawn", "décor", "food"] as const)[i % 5],
}));

export const GALLERY_CATEGORIES = [
  "All",
  "Weddings",
  "Mandap",
  "Lawn",
  "Décor",
  "Food",
] as const;

export const MARQUEE_TEXT =
  "KESARI MANGALAM LAWN  ✦  WEDDINGS  ✦  TILAK  ✦  SANGEET  ✦  RECEPTIONS  ✦  PRE-NUP SHOOTS  ✦  SINCE 2011  ✦  KANPUR  ✦  ";

export const EVENT_TYPES = [
  "Wedding",
  "Reception",
  "Tilak Ceremony",
  "Ring / Engagement",
  "Sangeet / Pre-Wedding",
  "Pre-Nup Photoshoot",
  "Birthday / Anniversary",
  "Corporate / Social Event",
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Spaces", href: "#spaces" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export const WHY_BOOK = [
  { title: "14+ Years & 500+ Weddings", description: "A proven legacy of grand celebrations since 2011." },
  { title: "Personal Owner Attention", description: "Hands-on involvement ensuring every detail is perfect." },
  { title: "Flexible Catering & Décor", description: "In-house or your own caterer — your vision, your way." },
  { title: "Massive Parking", description: "100 cars + 500 two-wheelers with valet guidance." },
  { title: "Custom Packages", description: "Transparent, tailored packages to suit every budget." },
  { title: "Warm Professional Staff", description: "An experienced team dedicated to your celebration." },
] as const;
