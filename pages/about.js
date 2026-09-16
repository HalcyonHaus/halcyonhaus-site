import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const philosophy = [
  {
    title: "Provenance",
    body: "Every object carries a history, and that history is worth understanding before it's touched. Knowing where something came from, and what it's meant to the people who kept it, is what separates real preservation from guesswork."
  },
  {
    title: "Preservation",
    body: "Some homes have lived past their prime, but they still have a story to tell. A home's character was never in the studs and drywall, it lives in the space itself. The work is knowing which parts of that story to keep, and building something new around them."
  },
  {
    title: "Permanence",
    body: "Trends are fun, and there's always room for a playful moment. But underneath every choice is a material or finish built to age alongside the people living with it, homes made to outlast the moment they were designed in, not just fit inside it."
  }
];

const PAGE_URL = "https://www.halcyonhaus.com/about";
const PAGE_TITLE = "About Nikka Winchell | Denver Interior Designer, Halcyon Haus";
const PAGE_DESCRIPTION =
  "Meet Nikka Winchell, founder of Halcyon Haus, a Denver interior design studio specializing in warm, transitional design for homes across Colorado and beyond.";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Nikka Winchell",
    "jobTitle": "Founder & Interior Designer",
    "image": "https://www.halcyonhaus.com/images/DSC02864.JPG",
    "url": PAGE_URL,
    "worksFor": {
      "@type": "Organization",
      "name": "Halcyon Haus",
      "url": "https://www.halcyonhaus.com"
    },
    "sameAs": [
      "https://www.instagram.com/halcyonhaus_",
      "https://www.tiktok.com/@halcyonhaus_",
      "https://www.shopltk.com/explore/halcyonhaus"
    ]
  }
};

export default function AboutPage() {
  const [openPhilosophy, setOpenPhilosophy] = useState(null);

  return (
    <div className="min-h-screen text-black font-sans" style={{ backgroundColor: "#fafafa" }}>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content="https://www.halcyonhaus.com/images/DSC02864.JPG" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content="https://www.halcyonhaus.com/images/DSC02864.JPG" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>

      {/* Navigation */}
      <header className="absolute top-0 w-full z-20 px-6 pt-6 text-xs tracking-widest">
        <nav className="flex justify-center sm:justify-end space-x-6 uppercase font-inter text-xs">
          <Link href="/" legacyBehavior><a className="transition-colors duration-300 text-black hover:text-neutral-400">Home</a></Link>
          <Link href="/about" legacyBehavior><a className="transition-colors duration-300 text-black hover:text-neutral-400">About</a></Link>
           <Link href="/services" legacyBehavior><a className="transition-colors duration-300 text-black hover:text-neutral-400">Services</a></Link>
          <Link href="/projects" legacyBehavior><a className="transition-colors duration-300 text-black hover:text-neutral-400">Projects</a></Link>
          <Link href="/contact" legacyBehavior><a className="transition-colors duration-300 text-black hover:text-neutral-400">Contact</a></Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 pt-24 pb-24 max-w-5xl mx-auto">
        <h1
          className="text-2xl md:text-2xl font-light tracking-[0.1em] text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          ABOUT ME
        </h1>

        {/* Intro, full width, no image yet */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-sm leading-7 tracking-wide font-inter text-gray-700">
            Halcyon Haus is a full-service interior design studio founded by me, Nikka Winchell. My work is rooted in transitional design: warm and collected, but most importantly, built around how you actually live.
          </p>
        </div>

        {/* Portrait + personal note + Rooted Design dropdown */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-6 flex flex-col items-center md:sticky md:top-24">
            <img
              src="/images/DSC02864.JPG"
              alt="Nikka Winchell, founder of Halcyon Haus interior design studio in Denver, Colorado"
              className="w-full max-w-[26rem] h-[30rem] md:h-[36rem] rounded-md object-cover"
            />
            <div className="mt-5 text-center">
              <p className="font-inter uppercase tracking-widest text-sm">Nikka Winchell</p>
              <p className="font-inter uppercase tracking-widest text-[10px] text-gray-500 mt-1">
                Founder, Halcyon Haus
              </p>
            </div>
          </div>

          <div className="md:col-span-6 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6">
            <p>
              I started Halcyon Haus in 2020, right after renovating my own home. Somewhere in that process, I realized how much it mattered to have a calm space to come back to. Growing up in California and eventually landing in Colorado gave me an appreciation for both easy, relaxed spaces and calm, grounded ones, and that mix shows up in every project I design.
            </p>
            <p className="text-right italic text-gray-500">- Nikka</p>

            {/* Rooted Design Philosophy, collapsible like the Services FAQ */}
            <div className="pt-8 border-t border-gray-200">
              <h2
                className="text-center text-lg font-light tracking-[0.1em]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ROOTED DESIGN
              </h2>
              <p className="text-center text-sm mt-3 mb-6 text-gray-700">
                Our design philosophy is rooted in the three P&apos;s:
              </p>

              <div>
                {philosophy.map((item, index) => {
                  const isOpen = openPhilosophy === index;
                  return (
                    <div key={item.title} className="border-b border-gray-200">
                      <button
                        onClick={() => setOpenPhilosophy(isOpen ? null : index)}
                        className="w-full flex items-center justify-between py-4 text-left font-inter uppercase tracking-widest text-xs text-black"
                        aria-expanded={isOpen}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          size={16}
                          strokeWidth={1.2}
                          className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <div
                        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                      >
                        <div className="overflow-hidden">
                          <p className="pb-4 text-sm leading-7 font-inter text-gray-700">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Location + CTA, full width below the portrait row */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <p className="text-sm leading-7 tracking-wide font-inter text-gray-700">
            Based in Castle Rock, Colorado and Palm Springs, California, I take on projects across the country, in person and virtually.
          </p>
          <div className="pt-6">
            <Link href="/contact" legacyBehavior>
              <a className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-inter text-black border-b border-black pb-1 transition-all duration-300 hover:gap-3 hover:text-neutral-500 hover:border-neutral-500">
                Work With Me
                <span aria-hidden="true">&#8594;</span>
              </a>
            </Link>
          </div>
        </div>

        {/* Featured In Section, full width, centered below the image/bio grid */}
        <div className="mt-20 text-center">
          <h2
            className="text-center text-xs tracking-widest uppercase font-inter text-gray-500 mb-8"
            style={{ letterSpacing: '0.2em' }}
          >
            Featured In
          </h2>

          {/* Press mention */}
          <p className="text-center text-xs text-gray-500 font-inter mb-8">
            <a href="https://www.homesandgardens.com/decor/paint/benjamin-moore-pashmina" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Homes &amp; Gardens</a>, July 2026
          </p>

          {/* Brand logos, wraps naturally as more are added */}
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-6 px-4">
            <img src="/logos/potterybarn.png" alt="Pottery Barn" className="h-14 w-auto max-w-[120px] object-contain grayscale" />
            <img src="/logos/westelm.png" alt="West Elm" className="h-14 w-auto max-w-[120px] object-contain grayscale" />
            <img src="/logos/cratebarrel.png" alt="Crate & Barrel" className="h-14 w-auto max-w-[120px] object-contain grayscale" />
            <img src="/logos/amberinteriors.png" alt="Amber Interiors" className="h-14 w-auto max-w-[120px] object-contain grayscale" />
            <img src="/logos/serenaandlily.png" alt="Serena & Lily" className="h-14 w-auto max-w-[120px] object-contain grayscale" />
            <img src="/logos/aflorallogo.png" alt="Afloral" className="h-14 w-auto max-w-[120px] object-contain grayscale" />
            <img src="/logos/greenrow_logo.png" alt="GreenRow" className="h-14 w-auto max-w-[120px] object-contain grayscale" />
            <img src="/logos/quince-logo-bigger-file.png" alt="Quince" className="h-14 w-auto max-w-[120px] object-contain grayscale" />
            <img src="/logos/portolopaintslogo.png" alt="Portola Paints" className="h-14 w-auto max-w-[120px] object-contain grayscale" />
            <img src="/logos/benmoorelogo.png" alt="Benjamin Moore" className="h-14 w-auto max-w-[120px] object-contain grayscale" />
            <img src="/logos/cletilelogo.png" alt="CLE Tile" className="h-14 w-auto max-w-[120px] object-contain grayscale" />
            <img src="/logos/ziatilelogo.png" alt="Zia Tile" className="h-14 w-auto max-w-[120px] object-contain grayscale" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-10 pb-10 text-center text-xs text-gray-500 uppercase tracking-widest font-inter">
        <p className="mb-2">© {new Date().getFullYear()} Halcyon Haus</p>
        <div className="flex justify-center space-x-6 text-gray-500">
          <a href="https://www.instagram.com/halcyonhaus_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="h-4 w-4 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@halcyonhaus_" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg className="h-4 w-4 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 3v12a3 3 0 103 3V9c.6.3 1.3.5 2 .5h1V7h-1c-.6 0-1-.4-1-1V3h-4z"/>
            </svg>
          </a>
          <a href="https://www.shopltk.com/explore/halcyonhaus" target="_blank" rel="noopener noreferrer" aria-label="LTK">
            <svg className="h-4 w-4 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm9-6a6 6 0 100 12 6 6 0 000-12z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
