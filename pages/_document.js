import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ── Favicons ── */}
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon-180x180.png" sizes="180x180" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* ── Pinterest domain verification ── */}
        <meta name="p:domain_verify" content="f3bf8da1795ee6a629438c9135fe7845" />

        {/* ── Site-wide (non-page-specific) SEO ──
            IMPORTANT: title, description, canonical, and og / twitter tags
            are intentionally NOT set here. Each page sets its own via next/head
            (see pages/about.js, pages/services.js, etc.) so every route gets a
            unique, correct canonical URL and social preview instead of every
            page on the site inheriting the homepage's tags. ── */}
        <meta name="author" content="Nikka Winchell, Halcyon Haus" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#fafafa" />

        {/* ── Google Fonts (loaded once globally) ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />

        {/* ── Local Business + Person + Website Schema (JSON-LD) ──
            Google uses this for Maps, local search, knowledge panels,
            and "interior designer near me" queries. This is sitewide
            business data (not page content), so it's fine to keep here. ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "InteriorDesigner",
                  "@id": "https://www.halcyonhaus.com/#business",
                  "name": "Halcyon Haus",
                  "alternateName": "Halcyon Haus Interior Design",
                  "description": "Halcyon Haus is a Denver-based interior design studio founded by Nikka Winchell. Specializing in thoughtful, transitional design for residential projects — from full-service renovations and new builds to virtual design and room refreshes. Serving clients in Denver, Colorado and across the United States.",
                  "url": "https://www.halcyonhaus.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.halcyonhaus.com/logos/HHLOGO2.png"
                  },
                  "image": [
                    "https://www.halcyonhaus.com/images/HEROKITCHEN1.JPG",
                    "https://www.halcyonhaus.com/images/NEWHERO2.JPG",
                    "https://www.halcyonhaus.com/images/DINING2.JPG"
                  ],
                  "founder": {
                    "@type": "Person",
                    "@id": "https://www.halcyonhaus.com/#nikka",
                    "name": "Nikka Winchell",
                    "jobTitle": "Interior Designer",
                    "worksFor": {
                      "@id": "https://www.halcyonhaus.com/#business"
                    },
                    "sameAs": [
                      "https://www.instagram.com/halcyonhaus_",
                      "https://www.tiktok.com/@halcyonhaus_"
                    ]
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Denver",
                    "addressRegion": "CO",
                    "addressCountry": "US"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "39.7392",
                    "longitude": "-104.9903"
                  },
                  "areaServed": [
                    {
                      "@type": "City",
                      "name": "Denver",
                      "sameAs": "https://en.wikipedia.org/wiki/Denver"
                    },
                    {
                      "@type": "State",
                      "name": "Colorado"
                    },
                    {
                      "@type": "Country",
                      "name": "United States"
                    }
                  ],
                  "knowsAbout": [
                    "Interior Design",
                    "Transitional Interior Design",
                    "Residential Interior Design",
                    "Full-Service Interior Design",
                    "Virtual Interior Design",
                    "Room Refresh",
                    "Kitchen Design",
                    "Bathroom Design",
                    "Living Room Design",
                    "Bedroom Design",
                    "Nursery Design",
                    "Furniture Sourcing",
                    "Color Consultation",
                    "Space Planning",
                    "Custom Millwork",
                    "Home Styling"
                  ],
                  "sameAs": [
                    "https://www.instagram.com/halcyonhaus_",
                    "https://www.tiktok.com/@halcyonhaus_",
                    "https://www.shopltk.com/explore/halcyonhaus"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Interior Design Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Full-Service Interior Design",
                          "description": "A comprehensive design approach covering layout, materials, custom millwork, furniture sourcing, styling, and install. Ideal for remodels, new builds, and full home transformations. Available in Denver, CO and nationwide."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Room Refresh",
                          "description": "Thoughtful design updates for lived-in spaces — new furnishings, layout optimization, styling, and accessories using existing architecture."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Virtual Interior Design",
                          "description": "Remote interior design experience including custom mood boards, layout guides, shoppable product links, and styling instructions — delivered online for clients anywhere in the US."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Interior Design Consultation",
                          "description": "Hourly design support for layout advice, sourcing guidance, or overall design direction. Perfect for DIY clients who want professional input."
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.halcyonhaus.com/#website",
                  "url": "https://www.halcyonhaus.com",
                  "name": "Halcyon Haus",
                  "description": "Denver interior design studio by Nikka Winchell",
                  "publisher": {
                    "@id": "https://www.halcyonhaus.com/#business"
                  }
                }
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
