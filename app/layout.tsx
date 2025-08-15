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
    default: "Health Hands Pharmacy - Your Trusted Healthcare Partner",
    template: "%s | Health Hands Pharmacy"
  },
  description: "Health Hands Pharmacy provides comprehensive healthcare services, prescription medications, health consultations, and medical supplies. Your trusted pharmacy for quality healthcare solutions.",
  keywords: [
    // Core Pharmacy Terms
    "Health Hands Pharmacy", "Health Hands", "pharmacy Pakistan", "online pharmacy", "digital pharmacy", 
    "pharmacy app", "mobile pharmacy", "e-pharmacy", "virtual pharmacy", "smart pharmacy",
    
    // Location-Based
    "pharmacy Karachi", "pharmacy Lahore", "pharmacy Islamabad", "pharmacy Rawalpindi", 
    "pharmacy delivery Pakistan", "medicine delivery", "prescription delivery", "nationwide pharmacy",
    
    // App Features
    "Health Hands App", "pharmacy mobile app", "prescription scanner", "medicine tracker", 
    "pill reminder app", "medication management", "digital prescription", "virtual consultation",
    "AI health assistant", "telemedicine Pakistan", "telepharmacy", "online doctor consultation",
    
    // Services & Features
    "prescription refill", "medicine home delivery", "24/7 pharmacy", "emergency medicine",
    "chronic disease management", "diabetes care", "blood pressure monitoring", "health screening",
    "vaccination services", "health checkup", "medical devices", "surgical supplies",
    
    // Technology Features
    "digital health records", "electronic prescription", "QR prescription", "contactless delivery",
    "real-time tracking", "medicine authenticity", "expiry date alerts", "dosage reminders",
    "drug interaction checker", "medicine information", "pharmacist consultation online",
    
    // Healthcare Solutions
    "maternal health", "child healthcare", "elderly care", "preventive healthcare", 
    "wellness products", "vitamins supplements", "medical equipment rental", "home healthcare",
    "chronic medication", "specialty pharmacy", "cold chain medicines", "temperature controlled storage",
    
    // Business Terms
    "licensed pharmacy Pakistan", "authentic medicines", "FDA approved", "quality assurance",
    "insurance accepted", "affordable healthcare", "trusted pharmacy", "reliable medicine delivery",
    "professional pharmacists", "medication counseling", "health education", "patient care"
  ],
  authors: [{ name: "Health Hands Pharmacy" }],
  creator: "Health Hands Pharmacy",
  publisher: "Health Hands Pharmacy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://healthhandspharmacy.com",
    siteName: "Health Hands Pharmacy",
    title: "Health Hands Pharmacy - Your Trusted Healthcare Partner",
    description: "Comprehensive healthcare services, prescription medications, and medical consultations across Pakistan. Download our app for convenient nationwide pharmacy services.",
    images: [
      {
        url: "/Logo.png",
        width: 800,
        height: 600,
        alt: "Health Hands Pharmacy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Hands Pharmacy - Your Trusted Healthcare Partner",
    description: "Comprehensive healthcare services, prescription medications, and medical consultations across Pakistan.",
    images: ["/Logo.png"],
    creator: "@healthhandspharmacy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://healthhandspharmacy.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([{
              "@context": "https://schema.org",
              "@type": "Pharmacy",
              "@id": "https://healthhandspharmacy.com/#pharmacy",
              "name": "Health Hands Pharmacy",
              "alternateName": "Health Hands",
              "url": "https://healthhandspharmacy.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://healthhandspharmacy.com/Logo.png",
                "width": 800,
                "height": 600
              },
              "description": "Health Hands Pharmacy provides comprehensive healthcare services, prescription medications, health consultations, and medical supplies.",
              "telephone": "+92 310 2604501",
              "email": "info@healthhandspharmacy.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Health Hands Pharmacy Location",
                "addressLocality": "Karachi",
                "addressRegion": "Sindh",
                "postalCode": "75000",
                "addressCountry": "PK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "24.9411445",
                "longitude": "67.1242068"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "20:00"
                }
              ],
              "priceRange": "$$",
              "acceptsReservations": false,
              "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
              "currenciesAccepted": "PKR",
              "hasMap": "https://www.google.com/maps/place/Health+Hands+Pharmacy/@24.9411445,67.1234564,18z/data=!3m1!4b1!4m6!3m5!1s0x3eb339c82b062d6f:0x1be0f6023e21528!8m2!3d24.9411445!4d67.1242068!16s%2Fg%2F11vz5g_snw?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "250",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Customer Name"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Excellent service and knowledgeable staff. Highly recommend!"
                }
              ],
              "serviceArea": {
                "@type": "Country",
                "name": "Pakistan"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Pakistan"
                },
                {
                  "@type": "City", 
                  "name": "Karachi"
                },
                {
                  "@type": "City",
                  "name": "Lahore"
                },
                {
                  "@type": "City",
                  "name": "Islamabad"
                },
                {
                  "@type": "City",
                  "name": "Rawalpindi"
                },
                {
                  "@type": "City",
                  "name": "Faisalabad"
                },
                {
                  "@type": "City",
                  "name": "Multan"
                },
                {
                  "@type": "City",
                  "name": "Peshawar"
                },
                {
                  "@type": "City",
                  "name": "Quetta"
                }
              ],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Prescription Medications",
                    "description": "Full range of prescription medications with AI-powered verification and professional consultation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Health Consultations",
                    "description": "AI-assisted health consultations, telemedicine, and virtual pharmacist reviews via mobile app"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Medicine Home Delivery",
                    "description": "Contactless nationwide medicine delivery with real-time tracking and temperature-controlled storage"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Prescription Management",
                    "description": "QR code prescriptions, electronic health records, and automated refill reminders"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Chronic Disease Management",
                    "description": "Specialized care for diabetes, hypertension, and other chronic conditions with medication tracking"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Maternal & Child Healthcare",
                    "description": "Specialized pharmacy services for mother and baby care with expert guidance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Medical Equipment & Devices",
                    "description": "Blood pressure monitors, glucometers, and other medical devices with home delivery"
                  }
                }
              ],
              "sameAs": [
                "https://www.facebook.com/people/Health-Hands-Pharmacy/61558525346467/",
                "https://wa.me/923102604501"
              ]
            }, {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://healthhandspharmacy.com/#website",
              "url": "https://healthhandspharmacy.com",
              "name": "Health Hands Pharmacy",
              "description": "Health Hands Pharmacy provides comprehensive healthcare services, prescription medications, health consultations, and medical supplies.",
              "publisher": {
                "@id": "https://healthhandspharmacy.com/#pharmacy"
              },
              "potentialAction": [
                {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://healthhandspharmacy.com/?s={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              ]
            }, {
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "Health Hands Pharmacy App",
              "description": "Revolutionary pharmacy app with AI health assistant, digital prescriptions, medicine tracking, and nationwide delivery in Pakistan",
              "operatingSystem": "Android",
              "applicationCategory": "HealthApplication",
              "applicationSubCategory": "MedicalApplication",
              "keywords": "pharmacy app, medicine delivery, prescription scanner, AI health assistant, telemedicine, digital health records",
              "featureList": [
                "AI-powered health assistant",
                "Digital prescription scanning",
                "Medicine authenticity verification", 
                "Automated refill reminders",
                "Virtual pharmacist consultation",
                "Real-time delivery tracking",
                "Electronic health records",
                "Drug interaction checker",
                "Pill reminder notifications",
                "Emergency medicine ordering",
                "Chronic disease management",
                "Temperature-controlled delivery",
                "QR code prescriptions",
                "Contactless payment",
                "24/7 customer support"
              ],
              "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "PKR",
                "availability": "https://schema.org/InStock"
              },
              "downloadUrl": "https://play.google.com/store/apps/details?id=com.healthhandspharmacy.healthhands",
              "screenshot": "/Logo.png",
              "softwareVersion": "1.0",
              "fileSize": "20MB",
              "contentRating": "Everyone",
              "country": "PK",
              "inLanguage": "en",
              "publisher": {
                "@type": "Organization",
                "name": "Health Hands Pharmacy"
              }
            }])
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
