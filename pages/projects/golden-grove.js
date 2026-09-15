import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import ShareButton from "../../components/ShareButton";
import PinButton from "../../components/PinButton";

// Subtle fade (opacity only)
const subtleFade = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true }
};

const PAGE_URL = "https://www.halcyonhaus.com/projects/golden-grove";
const PAGE_TITLE = "Golden Grove | Palm Springs | Halcyon Haus Design Studio";
const PAGE_DESCRIPTION =
  "Golden Grove: a Palm Springs interior design project by Halcyon Haus, featuring bold zellige tile, aged brass and copper hardware, and warm natural textures.";

export default function GoldenGrove() {
  return (
    <div className="min-h-screen text-black font-sans bg-[#fafafa]">
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta
          name="keywords"
          content="Palm Springs interior design, zellige tile kitchen, brass hardware interior design, Halcyon Haus, desert home design"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content="https://www.halcyonhaus.com/images/GOLDENGROVE-MAINKITCHEN.jpg" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content="https://www.halcyonhaus.com/images/GOLDENGROVE-MAINKITCHEN.jpg" />
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
              "headline": "Golden Grove: Halcyon Haus",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": PAGE_URL
              },
              "image": ["https://www.halcyonhaus.com/images/GOLDENGROVE-MAINKITCHEN.jpg"],
              "author": {
                "@type": "Person",
                "name": "Nikka Winchell"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Halcyon Haus",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.halcyonhaus.com/logos/HHLOGO2.png"
                }
              },
              "datePublished": "2026-07-22",
              "description": PAGE_DESCRIPTION
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
        <h2 className="text-center text-sm uppercase tracking-widest text-gray-500 mt-2 mb-6">
          Palm Springs, California
        </h2>

        <div className="mb-16">
          <ShareButton title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        </div>

        {/* Hero Image - main kitchen */}
        <motion.div {...subtleFade} className="group relative mb-16">
          <img src="/images/GOLDENGROVE-MAINKITCHEN.jpg" alt="Palm Springs kitchen with burgundy cabinetry, copper hood, and fluted wood island, designed by Halcyon Haus" className="w-full rounded-md object-cover" />
          <PinButton
            imageUrl="https://www.halcyonhaus.com/images/GOLDENGROVE-MAINKITCHEN.jpg"
            pageUrl={PAGE_URL}
            description="Palm Springs kitchen with burgundy cabinetry, copper hood, and fluted wood island, designed by Halcyon Haus"
          />
        </motion.div>

        {/* Intro Text */}
        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 mb-16 px-4 md:px-0 max-w-5xl mx-auto">
          <p>
            Golden Grove is a whole-home project inside a 1950s ranch home in Palm Springs. The goal was never to erase what made the house feel original, it was to keep that character intact while still bringing in something new.
          </p>
          <p>
            I kept the original cabinetry in this kitchen and had it painted rather than replaced. There was nothing wrong with the layout, so it made more sense to work with what was already there.
          </p>
          <p>
            To bring in some texture, we added fluted walnut wood paneling, which plays off the quartz and the warmer metals throughout the space. The heritage brass hardware was chosen for some added warmth without the typical brass shine, creating a beautiful symmetry with the darker-toned burgundy cabinetry.
          </p>
        </section>

        {/* Two-up images: bedroom + door detail */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="group relative md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/GOLDENGROVE-BEDROOM.jpg" alt="Primary bedroom with plaster walls, woven pendant light, and burgundy velvet bolster pillows in Palm Springs home" className="w-full h-full object-cover" />
            <PinButton
              imageUrl="https://www.halcyonhaus.com/images/GOLDENGROVE-BEDROOM.jpg"
              pageUrl={PAGE_URL}
              description="Primary bedroom with plaster walls, woven pendant light, and burgundy velvet bolster pillows in Palm Springs home"
            />
          </div>
          <div className="group relative md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/GOLDENGROVE-DOOR.jpg" alt="Detail of a tasseled door pull against painted wood paneling in Palm Springs interior" className="w-full h-full object-cover" />
            <PinButton
              imageUrl="https://www.halcyonhaus.com/images/GOLDENGROVE-DOOR.jpg"
              pageUrl={PAGE_URL}
              description="Detail of a tasseled door pull against painted wood paneling in Palm Springs interior"
            />
          </div>
        </motion.div>

        {/* Two-up images: casita kitchenette + primary bath shower */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="group relative md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/GOLDENGROVE-KITCHEN.jpg" alt="Casita kitchenette with bold red zellige tile backsplash, oak shelving, and veined marble counters in Palm Springs home" className="w-full h-full object-cover" />
            <PinButton
              imageUrl="https://www.halcyonhaus.com/images/GOLDENGROVE-KITCHEN.jpg"
              pageUrl={PAGE_URL}
              description="Casita kitchenette with bold red zellige tile backsplash, oak shelving, and veined marble counters in Palm Springs home"
            />
          </div>
          <div className="group relative md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/GOLDENGROVE-BATH.jpg" alt="Arched walk-in shower with mixed floral zellige tile and travertine floors in Palm Springs primary bathroom" className="w-full h-full object-cover" />
            <PinButton
              imageUrl="https://www.halcyonhaus.com/images/GOLDENGROVE-BATH.jpg"
              pageUrl={PAGE_URL}
              description="Arched walk-in shower with mixed floral zellige tile and travertine floors in Palm Springs primary bathroom"
            />
          </div>
        </motion.div>

        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 mb-16 px-4 md:px-0 max-w-5xl mx-auto">
          <p>
            The red backsplash was a fun addition to the kitchenette in the casita, a little pop of color that felt right for Palm Springs.
          </p>
          <p>
            In the primary bath, I mixed two different tile types for a more random, collected look with the floral pattern, rather than laying everything out in a strict grid. Travertine floors ground the space and keep it from feeling too busy.
          </p>
        </section>

        {/* Two-up images: powder room + pool */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="group relative md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/GOLDENGROVE-POWDER.jpg" alt="Powder room with blush zellige tile, woven pendant lights, and ribbed wood vanity in Palm Springs home" className="w-full h-full object-cover" />
            <PinButton
              imageUrl="https://www.halcyonhaus.com/images/GOLDENGROVE-POWDER.jpg"
              pageUrl={PAGE_URL}
              description="Powder room with blush zellige tile, woven pendant lights, and ribbed wood vanity in Palm Springs home"
            />
          </div>
          <div className="group relative md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/GOLDENGROVE-POOL.jpg" alt="Palm Springs backyard lap pool and spa with palm trees and desert landscaping, designed by Halcyon Haus" className="w-full h-full object-cover" />
            <PinButton
              imageUrl="https://www.halcyonhaus.com/images/GOLDENGROVE-POOL.jpg"
              pageUrl={PAGE_URL}
              description="Palm Springs backyard lap pool and spa with palm trees and desert landscaping, designed by Halcyon Haus"
            />
          </div>
        </motion.div>

        {/* Closing Text */}
        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-10 px-4 md:px-0 max-w-5xl mx-auto">
          <p>
            Golden Grove was a full home renovation, right down to reworking how the new layout should feel through an updated lens. This is a 1950s ranch home, and I wanted its original beauty to come back into focus rather than disappear under something new. So much of it came down to restoring what the house already had going for it, updating what no longer worked, and layering in enough new pieces to make it feel completely livable today.
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

            <div className="mt-10 pt-10 border-t border-neutral-200">
              <ShareButton title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
