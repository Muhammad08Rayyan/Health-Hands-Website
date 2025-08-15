import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://healthhandspharmacy.com'),
  title: {
    default: "Health Hands Pharmacy - Trusted Healthcare Partner in Pakistan",
    template: "%s | Health Hands Pharmacy"
  },
  description: "Leading digital pharmacy in Pakistan offering prescription medications, AI health consultations, and nationwide medicine delivery. Download our app for 24/7 healthcare services.",
  keywords: "Health Hands Pharmacy, online pharmacy Pakistan, medicine delivery, prescription drugs, AI health assistant, telemedicine Pakistan, digital pharmacy app, healthcare services",
  authors: [{ name: "Health Hands Pharmacy Team" }],
  creator: "Health Hands Pharmacy",
  publisher: "Health Hands Pharmacy",
  applicationName: "Health Hands Pharmacy",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" }
  ],
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Health Hands Pharmacy",
    startupImage: [
      {
        url: "https://healthhandspharmacy.com/apple-touch-icon.png",
        media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
      }
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    alternateLocale: ["en_US", "ur_PK"],
    url: "https://healthhandspharmacy.com",
    siteName: "Health Hands Pharmacy",
    title: "Health Hands Pharmacy - Pakistan's Leading Digital Pharmacy",
    description: "Experience the future of healthcare with Pakistan's most trusted digital pharmacy. Get medicines delivered to your door with our AI-powered health assistant.",
    images: [
      {
        url: "https://healthhandspharmacy.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Health Hands Pharmacy - Pakistan's Leading Digital Pharmacy",
        type: "image/jpeg",
      },
      {
        url: "https://healthhandspharmacy.com/logo.png",
        width: 400,
        height: 400,
        alt: "Health Hands Pharmacy Logo",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@healthhandspharmacy",
    creator: "@healthhandspharmacy",
    title: "Health Hands Pharmacy - Pakistan's Leading Digital Pharmacy",
    description: "Experience the future of healthcare with Pakistan's most trusted digital pharmacy. Get medicines delivered with our AI health assistant.",
    images: ["https://healthhandspharmacy.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#2563eb",
      },
    ],
  },
  category: "health",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://healthhandspharmacy.com/#website",
      "url": "https://healthhandspharmacy.com",
      "name": "Health Hands Pharmacy",
      "description": "Leading digital pharmacy in Pakistan offering prescription medications, AI health consultations, and nationwide medicine delivery.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://healthhandspharmacy.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "publisher": {
        "@id": "https://healthhandspharmacy.com/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://healthhandspharmacy.com/#organization",
      "name": "Health Hands Pharmacy",
      "alternateName": "Health Hands",
      "url": "https://healthhandspharmacy.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://healthhandspharmacy.com/logo.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+92-310-2604501",
        "contactType": "customer service",
        "areaServed": "PK",
        "availableLanguage": ["English", "Urdu"]
      },
      "sameAs": [
        "https://www.facebook.com/people/Health-Hands-Pharmacy/61558525346467/",
        "https://wa.me/923102604501"
      ]
    },
    {
      "@type": "Pharmacy",
      "@id": "https://healthhandspharmacy.com/#pharmacy",
      "name": "Health Hands Pharmacy",
      "description": "Pakistan's leading digital pharmacy offering AI-powered healthcare services, prescription medications, and nationwide delivery.",
      "url": "https://healthhandspharmacy.com",
      "telephone": "+92-310-2604501",
      "email": "info@healthhandspharmacy.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Karachi",
        "addressRegion": "Sindh",
        "addressCountry": "PK"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Healthcare Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Prescription Medications",
              "description": "AI-verified prescription medications with professional consultation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Medicine Delivery",
              "description": "Nationwide contactless delivery with real-time tracking"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Health Consultations",
              "description": "AI-assisted telemedicine and virtual pharmacist consultations"
            }
          }
        ]
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="canonical" href="https://healthhandspharmacy.com" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
