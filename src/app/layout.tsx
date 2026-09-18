import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://nirvanaskinco.com"),
  title: "Nirvana Skin Co. | Facials & Advanced Skincare in Rancho Cucamonga, CA",
  description:
    "Personalized facials, chemical peels, microneedling, and advanced clinical skincare in Rancho Cucamonga, CA. Founded by Stephanie, Licensed Medical Aesthetician.",
  keywords: [
    "Facials Rancho Cucamonga",
    "Nirvana Skin Co",
    "Medical Aesthetician Rancho Cucamonga",
    "Chemical Peel Rancho Cucamonga",
    "Microneedling Rancho Cucamonga",
    "Hydrating Facial Inland Empire",
    "Teeth Whitening Rancho Cucamonga",
    "Skin Health Studio"
  ],
  openGraph: {
    title: "Nirvana Skin Co. | Skincare, Customized to Where You Are Now",
    description:
      "Personalized facials and advanced skincare in Rancho Cucamonga, with thoughtful guidance from consultation through aftercare.",
    url: "https://nirvanaskinco.com",
    siteName: "Nirvana Skin Co.",
    images: [
      {
        url: "/images/facial-treatment-1.png",
        width: 1200,
        height: 630,
        alt: "Nirvana Skin Co. Rancho Cucamonga Facial Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirvana Skin Co. | Facials & Advanced Skincare",
    description:
      "Personalized facials and advanced skincare in Rancho Cucamonga, CA.",
    images: ["/images/facial-treatment-1.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": BUSINESS_INFO.name,
  "description": BUSINESS_INFO.supportingCopy,
  "url": "https://nirvanaskinco.com",
  "telephone": BUSINESS_INFO.phone,
  "priceRange": "$$",
  "image": "https://nirvanaskinco.com/images/facial-treatment-1.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": BUSINESS_INFO.address,
    "addressLocality": BUSINESS_INFO.city,
    "addressRegion": BUSINESS_INFO.state,
    "postalCode": BUSINESS_INFO.zip,
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.1048078,
    "longitude": -117.5709326
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday"],
      "opens": "10:30",
      "closes": "12:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "15:00"
    }
  ],
  "sameAs": [
    BUSINESS_INFO.instagramUrl,
    BUSINESS_INFO.yelpUrl,
    BUSINESS_INFO.tiktokUrl,
    BUSINESS_INFO.combBookingUrl
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-sand-50 text-noir-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
