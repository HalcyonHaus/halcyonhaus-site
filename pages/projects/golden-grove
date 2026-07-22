import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

// Subtle fade (opacity only)
const subtleFade = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true }
};

export default function GoldenGrove() {
  return (
    <div className="min-h-screen text-black font-sans bg-[#fafafa]">
      <Head>
        <title>Golden Grove | Palm Springs | Halcyon Haus Design Studio</title>
        <meta
          name="description"
          content="Golden Grove: a Palm Springs interior design project by Halcyon Haus, featuring bold zellige tile, aged brass and copper hardware, and warm natural textures."
        />
        <meta
          name="keywords"
          content="Palm Springs interior design, zellige tile kitchen, brass hardware interior design, Halcyon Haus, desert home design"
        />
        <link rel="canonical" href="https://www.halcyonhaus.com/projects/golden-grove" />
        <meta property="og:title" content="Golden Grove | Halcyon Haus" />
        <meta property="og:description" content="A Palm Springs project by Halcyon Haus featuring bold zellige tile, aged brass and copper hardware, and warm natural textures." />
        <meta property="og:image" content="https://www.halcyonhaus.com/images/GOLDENGROVE-POOL.jpg" />
        <meta property="og:url" content="https://www.halcyonhaus.com/projects/golden-grove" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Golden Grove | Halcyon Haus" />
        <meta name="twitter:description" content="A Palm Springs project by Halcyon Haus featuring bold zellige tile and warm natural textures." />
        <meta name="twitter:image" content="https://www.halcyonhaus.com/images/GOLDENGROVE-POOL.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Golden Grove – Halcyon Haus",
              "author": {
                "@type": "Person",
                "name": "Nikka Winchell"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Halcyon Haus",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://halcyonhaus.com/logos/HHLOGO.JPG"
                }
              },
              "datePublished": "2026-07-22",
              "description":
                "Golden Grove: a Palm Springs interior design project by Halcyon Haus, featuring bold zellige tile, aged brass and copper hardware, and warm natural textures."
            })
          }}
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
      <main className="pt-24 pb-24 max-w-[90rem] mx-auto px-4 md:px-10">
        <h1 className="text-2xl md:text-2xl font-light tracking-[0.1em] text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          GOLDEN GROVE
        </h1>
        <h2 className="text-center text-sm uppercase tracking-widest text-gray-500 mt-2 mb-16">
          Palm Springs, California
        </h2>

        {/* Hero Image - pool/spa */}
        <motion.div {...subtleFade} className="mb-16">
          <img src="/images/GOLDENGROVE-POOL.jpg" alt="Palm Springs backyard lap pool and spa with palm trees and desert landscaping, designed by Halcyon Haus" className="w-full rounded-md object-cover" />
        </motion.div>

        {/* Intro Text */}
        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 mb-16 px-4 md:px-0 max-w-5xl mx-auto">
          <p>
            Golden Grove is a whole-home project in Palm Springs built around bold color, natural texture, and finishes that feel collected rather than curated.
          </p>
          <p>
            Warm wood tones, aged brass and copper hardware, and hand-glazed zellige tile carry through the home, set against quieter plaster walls and neutral textiles so the more saturated moments have room to breathe.
          </p>
          <p>
            [Add a paragraph here about the scope of this project, the clients, and what drove the design direction.]
          </p>
        </section>

        {/* Two-up images: bedroom + door detail */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/GOLDENGROVE-BEDROOM.jpg" alt="Primary bedroom with plaster walls, woven pendant light, and burgundy velvet bolster pillows in Palm Springs home" className="w-full h-full object-cover" />
          </div>
          <div className="md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/GOLDENGROVE-DOOR.jpg" alt="Detail of a tasseled door pull against painted wood paneling in Palm Springs interior" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Full Width Image - kitchen/bar */}
        <motion.div {...subtleFade} className="mb-16">
          <img
            src="/images/GOLDENGROVE-KITCHEN.jpg"
            alt="Kitchen bar nook with bold red zellige tile backsplash, oak shelving, and veined marble counters in Palm Springs home"
            className="w-full rounded-md object-cover"
          />

          <section className="mt-16 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 px-4 md:px-0 max-w-5xl mx-auto">
            <p>
              [Add a paragraph here about the kitchen/bar space: the tile choice, the countertop material, and the hardware finishes.]
            </p>
          </section>
        </motion.div>

        {/* Side image + text - primary bath */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16 px-4 md:px-0 max-w-6xl mx-auto">
          <div className="md:col-span-6">
            <img
              src="/images/GOLDENGROVE-BATH.jpg"
              alt="Arched walk-in shower with blue floral zellige tile and brass rain shower head in Palm Springs primary bathroom"
              className="w-full rounded-md object-cover"
            />
          </div>

          <div className="md:col-span-6 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-4">
            <p>
              [Add a paragraph here about the primary bathroom: the tile pattern, the fixture finish, and any details worth calling out.]
            </p>
          </div>
        </motion.div>

        {/* Powder room */}
        <motion.div {...subtleFade} className="mb-16">
          <img
            src="/images/GOLDENGROVE-POWDER.jpg"
            alt="Powder room with blush zellige tile, woven pendant lights, and ribbed wood vanity in Palm Springs home"
            className="w-full rounded-md object-cover"
          />
        </motion.div>

        {/* Closing Text */}
        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-10 px-4 md:px-0 max-w-5xl mx-auto">
          <p>
            [Add a closing paragraph here about the overall feel you were going for and anything that ties the home together.]
          </p>

          <div className="border-t border-neutral-200 pt-10">
            <h3
              className="uppercase tracking-[0.2em] text-xs mb-6 text-neutral-500"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Project Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12 text-sm">
              <div><strong>Location:</strong> Palm Springs, California</div>
              <div><strong>Project Type:</strong> Whole-Home Design</div>

              <div><strong>Hardware:</strong> Mixed aged brass and copper</div>
              <div><strong>Tile:</strong> Hand-glazed zellige</div>

              <div><strong>Design &amp; Styling:</strong> Nikka Winchell, Halcyon Haus</div>
              <div><strong>Photography:</strong> Nikka Winchell, Halcyon Haus</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
