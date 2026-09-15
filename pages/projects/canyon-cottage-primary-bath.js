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

const PAGE_URL = "https://www.halcyonhaus.com/projects/canyon-cottage-primary-bath";
const PAGE_TITLE = "Canyon Cottage Primary Bath | Halcyon Haus, Castle Pines, CO";
const PAGE_DESCRIPTION =
  "Canyon Cottage Primary Bath by Halcyon Haus: stone tile, fluted vanities, a his-and-hers steam shower, and shiplap detailing in Castle Pines Village, Colorado.";

export default function CanyonCottagePrimaryBath() {
  return (
    <div className="min-h-screen text-black font-sans bg-[#fafafa]">
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta
          name="keywords"
          content="primary bathroom design, fluted vanity, steam shower design, shiplap bathroom, Castle Pines interior design, Halcyon Haus, Colorado bathroom remodel"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content="https://www.halcyonhaus.com/images/PRIMARYVANITY2.jpg" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
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
              "headline": "Canyon Cottage Primary Bath: Halcyon Haus",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": PAGE_URL
              },
              "image": ["https://www.halcyonhaus.com/images/PRIMARYVANITY2.jpg"],
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
      <main className="pt-24 pb-24 max-w-[76rem] mx-auto px-4 md:px-10">
        <h1 className="text-2xl md:text-2xl font-light tracking-[0.1em] text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          CANYON COTTAGE PRIMARY BATH
        </h1>
        <h2 className="text-center text-sm uppercase tracking-widest text-gray-500 mt-2 mb-6">
          Castle Pines Village, Colorado
        </h2>

        <div className="mb-16">
          <ShareButton title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        </div>

        {/* Intro Text */}
        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 mb-16 px-4 md:px-0 max-w-5xl mx-auto">
          <p>
            This bathroom renovation really gave me a run for my money. The space was narrow and long, and the original shower placement was doing the room no favors.
          </p>
          <p>
            A single long vanity was the wrong choice for this space, so I decided on splitting it into two smaller pieces instead. The fluted design created texture and warmth, and it solved more than just a space problem. It gave the room somewhere to breathe instead of one wall of cabinetry doing all the work.
          </p>
          <p>
            Once that was settled, everything else followed the same logic: keep the room feeling continuous rather than chopped up, and let small details carry the character instead of one big statement piece.
          </p>
        </section>

        {/* Side image + text - vanity, wide shot */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16 px-4 md:px-0 max-w-6xl mx-auto">
          <div className="md:col-span-7">
            <div className="group relative">
              <img
                src="/images/PRIMARYVANITY2.jpg"
                alt="Double fluted wood vanities with marble counters and brass fixtures in Castle Pines primary bathroom"
                className="w-full rounded-md object-cover"
              />
              <PinButton
                imageUrl="https://www.halcyonhaus.com/images/PRIMARYVANITY2.jpg"
                pageUrl={PAGE_URL}
                description="Double fluted wood vanities with marble counters and brass fixtures in Castle Pines primary bathroom"
              />
            </div>
          </div>

          <div className="md:col-span-5 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-4">
            <p>
              I carried the same stone tile from the floor straight into the shower instead of switching materials at the threshold, so the whole room reads as one continuous space rather than pieced together.
            </p>
            <p>
              Even the lampshades got a second look. Swapping in these pleated shades over the sconces was a small move, but it's exactly the kind of detail that pulls the room toward that cottage charm.
            </p>
          </div>
        </motion.div>

        {/* Two-up images: single vanity + portrait corner */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="group relative md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/PRIMARYVANITY1.jpg" alt="Single vanity detail with brass mirror, pleated sconces, and marble counter in Castle Pines primary bathroom" className="w-full h-full object-cover" />
            <PinButton
              imageUrl="https://www.halcyonhaus.com/images/PRIMARYVANITY1.jpg"
              pageUrl={PAGE_URL}
              description="Single vanity detail with brass mirror, pleated sconces, and marble counter in Castle Pines primary bathroom"
            />
          </div>
          <div className="group relative md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/PRIMARYVANITY4.jpg" alt="Vanity corner with silhouette portrait art and pleated sconce in Castle Pines primary bathroom" className="w-full h-full object-cover" />
            <PinButton
              imageUrl="https://www.halcyonhaus.com/images/PRIMARYVANITY4.jpg"
              pageUrl={PAGE_URL}
              description="Vanity corner with silhouette portrait art and pleated sconce in Castle Pines primary bathroom"
            />
          </div>
        </motion.div>

        {/* Side image + text - vanity detail (reversed) */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16 px-4 md:px-0 max-w-6xl mx-auto">
          <div className="md:col-span-5 md:order-2">
            <div className="group relative">
              <img
                src="/images/PRIMARYVANITY3.jpg"
                alt="Close-up detail of marble counter, brass fixtures, and dried florals in Castle Pines primary bathroom"
                className="w-full rounded-md object-cover"
              />
              <PinButton
                imageUrl="https://www.halcyonhaus.com/images/PRIMARYVANITY3.jpg"
                pageUrl={PAGE_URL}
                description="Close-up detail of marble counter, brass fixtures, and dried florals in Castle Pines primary bathroom"
              />
            </div>
          </div>

          <div className="md:col-span-7 md:order-1 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-4">
            <p>
              The smaller details do a lot of the work in a room like this: the brushed brass, the honed marble, the two-toned paneling, all of it tying together seamlessly. I love letting the smaller details carry the space.
            </p>
          </div>
        </motion.div>

        {/* Two-up images: shower + tub */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="group relative md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/PRIMARYBATH1.jpg" alt="His-and-hers steam shower with off-white zellige tile to the ceiling and brass Kohler shower heads in Castle Pines primary bathroom" className="w-full h-full object-cover" />
            <PinButton
              imageUrl="https://www.halcyonhaus.com/images/PRIMARYBATH1.jpg"
              pageUrl={PAGE_URL}
              description="His-and-hers steam shower with off-white zellige tile to the ceiling and brass Kohler shower heads in Castle Pines primary bathroom"
            />
          </div>
          <div className="group relative md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/PRIMARYBATH2.jpg" alt="Freestanding tub with painted shiplap paneling and brass tub filler in Castle Pines primary bathroom" className="w-full h-full object-cover" />
            <PinButton
              imageUrl="https://www.halcyonhaus.com/images/PRIMARYBATH2.jpg"
              pageUrl={PAGE_URL}
              description="Freestanding tub with painted shiplap paneling and brass tub filler in Castle Pines primary bathroom"
            />
          </div>
        </motion.div>

        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 mb-16 px-4 md:px-0 max-w-5xl mx-auto">
          <p>
            The shower ended up being the anchor of this room. Since it doubles as a steam shower, I took the off-white zellige tile all the way to the ceiling instead of stopping partway, and set it up his-and-hers with two Kohler waterfall heads. The glass itself was custom built by a shop here in Colorado.
          </p>
          <p>
            Replacing the windows in here made a bigger difference than I ever expected. The originals were glass blocks, and so much of the natural light was muted because of it. The shower looks straight out at the trees now, and that view ended up becoming one of my favorite parts of the whole room.
          </p>
          <p>
            Throughout the space, I brought in shiplap for a bit of that same cottage look, painted in Benjamin Moore Dove Wing and Dove White, so the contrast stayed subtle rather than stark.
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

            <div className="mt-10 pt-10 border-t border-neutral-200">
              <ShareButton title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
