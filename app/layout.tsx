import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Jost } from "next/font/google";
import "./globals.css";

/* ─── Font setup ─── */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

/* ─── SEO Metadata ─── */
export const metadata: Metadata = {
  title:
    "Kesari Mangalam Lawn — Premium Wedding Venue in Kanpur | Grand Lawn, Mandap & Banquet",
  description:
    "Since 2011, Kesari Mangalam Lawn has hosted 500+ weddings on the Kanpur–Jhansi Highway, Damodar Nagar. Sprawling open-air lawn for 1,000 guests, grand mandap, in-house catering, massive parking. Book your visit today.",
  keywords: [
    "wedding lawn Kanpur",
    "banquet hall Kanpur",
    "marriage venue Kanpur",
    "wedding venue Damodar Nagar",
    "Kanpur Jhansi Highway wedding",
    "Kesari Mangalam Lawn",
    "open air wedding venue Kanpur",
    "reception lawn Kanpur",
    "tilak ceremony venue Kanpur",
    "sangeet venue Kanpur",
  ],
  openGraph: {
    title: "Kesari Mangalam Lawn — Premium Wedding Venue in Kanpur",
    description:
      "The epitome of splendour and regality. Sprawling open-air lawn for 1,000+ guests, grand mandap, 14+ years of excellence. Kanpur–Jhansi Highway, Damodar Nagar.",
    url: "https://kesarimangalam.com",
    siteName: "Kesari Mangalam Lawn",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kesari Mangalam Lawn — Premium Wedding Venue in Kanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kesari Mangalam Lawn — Premium Wedding Venue in Kanpur",
    description:
      "500+ weddings since 2011. Grand open-air lawn, majestic mandap, massive parking. Book your celebration today.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── JSON-LD Schema ─── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["EventVenue", "LocalBusiness"],
  name: "Kesari Mangalam Lawn",
  description:
    "Premium open-air wedding venue in Kanpur since 2011. Sprawling lawn for 1,000+ guests, grand mandap, in-house catering, and massive parking.",
  url: "https://kesarimangalam.com",
  telephone: "+917307869807",
  email: "kesarimangalam@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Kanpur–Jhansi Highway, near Vaishno Mata Mandir, Bajrang Chauraha, Damodar Nagar",
    addressLocality: "Kanpur",
    addressRegion: "Uttar Pradesh",
    postalCode: "208027",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.45,
    longitude: 80.25,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "780",
    bestRating: "5",
  },
  priceRange: "₹₹",
  image: "/images/og-image.png",
  sameAs: [
    "https://www.facebook.com/kesarimangalamlawn",
    "https://www.instagram.com/kesarimangalam2/",
  ],
  maximumAttendeeCapacity: 1000,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${greatVibes.variable} ${jost.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ivory text-charcoal font-sans">
        {children}
      </body>
    </html>
  );
}
