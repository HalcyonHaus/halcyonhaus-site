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

export default function CanyonCottagePrimaryBath() {
  return (
    <div className="min-h-screen text-black font-sans bg-[#fafafa]">
      <Head>
        <title>Canyon Cottage Primary Bath | Castle Pines Village | Halcyon Haus Design Studio</title>
        <meta
          name="description"
          content="Canyon Cottage Primary Bath by Halcyon Haus: stone tile, fluted vanities, a his-and-hers steam shower, and shiplap detailing in Castle Pines Village, Colorado."
        />
        <meta
          name="keywords"
          content="primary bathroom design, fluted vanity, steam shower design, shiplap bathroom, Castle Pines interior design, Halcyon Haus, Colorado bathroom remodel"
        />
        <link rel="canonical" href="https://www.halcyonhaus.com/projects/canyon-cottage-primary-bath" />
        <meta property="og:title" content="Canyon Cottage Primary Bath | Halcyon Haus" />
        <meta property="og:description" content="Stone tile, fluted vanities, and a his-and-hers steam shower in this Castle Pines Village primary bath by Halcyon Haus." />
        <meta property="og:image" content="https://www.halcyonhaus.com/images/PRIMARYVANITY2.jpg" />
        <meta property="og:url" content="https://www.halcyonhaus.com/projects/canyon-cottage-primary-bath" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Canyon Cottage Primary Bath | Halcyon Haus" />
        <meta name="twitter:description" content="Stone tile, fluted vanities, and a his-and-hers steam shower by Halcyon Haus." />
        <meta name="twitter:image" content="https://www.halcyonhaus.com/images/PRIMARYVANITY2.jpg" />
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
              "headline": "Canyon Cottage Primary Bath – Halcyon Haus",
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
                "Canyon Cottage Primary Bath by Halcyon Haus: stone tile, fluted vanities, a his-and-hers steam shower, and shiplap detailing in Castle Pines Village, Colorado."
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
      <main className="pt-24 pb-24 max-w-[76rem] mx-auto px-4 md:px-10">
        <h1 className="text-2xl md:text-2xl font-light tracking-[0.1em] text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          CANYON COTTAGE PRIMARY BATH
        </h1>
        <h2 className="text-center text-sm uppercase tracking-widest text-gray-500 mt-2 mb-16">
          Castle Pines Village, Colorado
        </h2>

        {/* Intro Text */}
        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 mb-16 px-4 md:px-0 max-w-5xl mx-auto">
          <p>
            I used stone tile throughout this bathroom and carried it straight into the shower, so the whole space reads as one continuous room rather than separate zones.
          </p>
        </section>

        {/* Side image + text - vanity, wide shot */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16 px-4 md:px-0 max-w-6xl mx-auto">
          <div className="md:col-span-7">
            <img
              src="/images/PRIMARYVANITY2.jpg"
              alt="Double fluted wood vanities with marble counters and brass fixtures in Castle Pines primary bathroom"
              className="w-full rounded-md object-cover"
            />
          </div>

          <div className="md:col-span-5 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-4">
            <p>
              The vanities are fluted for a bit of warmth against all the stone, and I split them into two smaller pieces instead of one long custom vanity. It helped break up what's actually a fairly narrow space.
            </p>
            <p>
              I also swapped in these pleated lampshades, which added to the cottage warmth I was going for throughout the room.
            </p>
          </div>
        </motion.div>

        {/* Two-up images: single vanity + portrait corner */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/PRIMARYVANITY1.jpg" alt="Single vanity detail with brass mirror, pleated sconces, and marble counter in Castle Pines primary bathroom" className="w-full h-full object-cover" />
          </div>
          <div className="md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/PRIMARYVANITY4.jpg" alt="Vanity corner with silhouette portrait art and pleated sconce in Castle Pines primary bathroom" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Side image + text - vanity detail (reversed) */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16 px-4 md:px-0 max-w-6xl mx-auto">
          <div className="md:col-span-5 md:order-2">
            <img
              src="/images/PRIMARYVANITY3.jpg"
              alt="Close-up detail of marble counter, brass fixtures, and dried florals in Castle Pines primary bathroom"
              className="w-full rounded-md object-cover"
            />
          </div>

          <div className="md:col-span-7 md:order-1 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-4">
            <p>
              [Add a bit more here if there's anything specific about this detail worth calling out.]
            </p>
          </div>
        </motion.div>

        {/* Two-up images: shower + tub */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/PRIMARYBATH1.jpg" alt="His-and-hers steam shower with off-white zellige tile to the ceiling and brass Kohler shower heads in Castle Pines primary bathroom" className="w-full h-full object-cover" />
          </div>
          <div className="md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/PRIMARYBATH2.jpg" alt="Freestanding tub with painted shiplap paneling and brass tub filler in Castle Pines primary bathroom" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 mb-16 px-4 md:px-0 max-w-5xl mx-auto">
          <p>
            Since this is a steam shower, I ran the off-white zellige tile all the way to the ceiling. It's a his-and-hers layout with two Kohler waterfall heads, and the glass enclosure was custom built by a local Colorado shop.
          </p>
          <p>
            The shiplap behind the tub was another way to bring in some cottage warmth, painted in Benjamin Moore Dove Wing and Dove White for a little subtle contrast. Replacing the windows in here made a bigger difference than I expected, especially with the shower looking right out at the trees.
          </p>
        </section>

        {/* Closing Text */}
        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-10 px-4 md:px-0 max-w-5xl mx-auto">
          <div className="border-t border-neutral-200 pt-10">
            <h3
              className="uppercase tracking-[0.2em] text-xs mb-6 text-neutral-500"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Project Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12 text-sm">
              <div><strong>Location:</strong> Castle Pines Village, Colorado</div>
              <div><strong>Project Type:</strong> Primary Bathroom Renovation</div>

              <div><strong>Vanities:</strong> Custom fluted, painted wood, in two pieces</div>
              <div><strong>Shower Tile:</strong> Off-white zellige, floor to ceiling</div>

              <div><strong>Wall Treatment:</strong> Shiplap, Benjamin Moore Dove Wing &amp; Dove White</div>
              <div><strong>Shower Fixtures:</strong> Kohler, his-and-hers waterfall heads</div>

              <div><strong>Shower Glass:</strong> Custom, local Colorado shop</div>
              <div><strong>Design &amp; Styling:</strong> Nikka Winchell, Halcyon Haus</div>

              <div><strong>Photography:</strong> Nikka Winchell, Halcyon Haus</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
