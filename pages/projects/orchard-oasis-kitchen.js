import Head from "next/head";
import Image from "next/image";
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

const SITE_URL = "https://www.halcyonhaus.com";
const PAGE_URL = SITE_URL + "/projects/orchard-oasis-kitchen";
const PAGE_TITLE = "Orchard Oasis Kitchen Renovation | Greenwood Village | Halcyon Haus Design Studio";
const PAGE_DESCRIPTION =
  "A two-toned kitchen renovation near the Denver Tech Center in Greenwood Village, Colorado by Halcyon Haus: honey maple lowers, soft white uppers, a custom range hood, quartz counters, and a zellige-look tile backsplash.";

const IMG = {
  hero: "/images/TwoTonedAngleHero.jpg",
  range: "/images/TwoTonedAngle1.jpg",
  rangeIsland: "/images/TwoTonedAngle2.jpg",
  island: "/images/TwoTonedAngleLong.jpg",
  long: "/images/TwoTonedLong.jpg",
  close: "/images/TwoTonedClose.jpg",
  pantry: "/images/TwoTonedSquarePanrty.jpg",
};

const ALT = {
  hero: "Two-toned kitchen in Greenwood Village with honey maple lower cabinets, soft white uppers, a custom arched range hood, and white pendants, designed by Halcyon Haus",
  range: "Custom arched range hood with a spice niche and pot filler above a double-oven range in a Greenwood Village kitchen",
  rangeIsland: "Range wall with zellige-look tile, soft white uppers, and a maple island with brass pulls in a Greenwood Village kitchen",
  island: "Large honey maple island with quartz countertop, white pendants, and woven counter stools in a Greenwood Village kitchen",
  long: "Two-toned kitchen with maple lower cabinets, quartz counters, and zellige-look tile backsplash near the Denver Tech Center",
  close: "Honey maple drawers with lacquered brass pulls beneath soft white uppers and open wood shelving",
  pantry: "Floor-to-ceiling soft white pantry cabinets with long lacquered brass pulls beside the refrigerator in a Greenwood Village kitchen",
};

// JSON-LD lives in a constant outside the JSX so the build stays clean
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Orchard Oasis Kitchen: Halcyon Haus",
  "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
  "image": [SITE_URL + IMG.hero, SITE_URL + IMG.range, SITE_URL + IMG.island],
  "author": { "@type": "Person", "name": "Nikka Winchell" },
  "publisher": {
    "@type": "Organization",
    "name": "Halcyon Haus",
    "logo": { "@type": "ImageObject", "url": SITE_URL + "/logos/HHLOGO2.png" }
  },
  "datePublished": "2026-10-12",
  "description": PAGE_DESCRIPTION
};

// Tall image for the two-up rows, same proportions as the other project pages
function TallImage({ src, alt }) {
  return (
    <div className="group relative aspect-[2/3] md:aspect-auto md:h-[58rem] overflow-hidden rounded-md">
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      <PinButton imageUrl={SITE_URL + src} pageUrl={PAGE_URL} description={alt} />
    </div>
  );
}

export default function OrchardOasisKitchen() {
  return (
    <div className="min-h-screen text-black font-sans bg-[#fafafa]">
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta
          name="keywords"
          content="Greenwood Village kitchen remodel, DTC kitchen renovation, two-toned kitchen, maple kitchen cabinets, custom range hood, zellige-look tile backsplash, quartz countertops, Greenwood Village interior designer, Halcyon Haus"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content={SITE_URL + IMG.hero} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={SITE_URL + IMG.hero} />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
          ORCHARD OASIS KITCHEN
        </h1>
        <h2 className="text-center text-sm uppercase tracking-widest text-gray-500 mt-2 mb-6">
          Greenwood Village, Colorado
        </h2>

        <div className="mb-16">
          <ShareButton title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        </div>

        {/* Hero Image */}
        <motion.div {...subtleFade} className="group relative mb-16">
          <Image
            src={IMG.hero}
            alt={ALT.hero}
            width={2048}
            height={1463}
            priority
            sizes="(max-width: 1440px) 100vw, 1360px"
            className="w-full h-auto rounded-md object-cover"
          />
          <PinButton imageUrl={SITE_URL + IMG.hero} pageUrl={PAGE_URL} description={ALT.hero} />
        </motion.div>

        {/* Intro Text */}
        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 mb-16 px-4 md:px-0 max-w-5xl mx-auto">
          <p>
            Orchard Oasis is an original home near the Denver Tech Center in Greenwood Village. The original kitchen had
            cabinetry that wasn&apos;t conducive to storage, and a small angled island with the range in the middle of
            it, so there was no real island space. It needed to be completely reimagined.
          </p>
          <p>
            The room itself was large, which gave us a lot of space to work with. The range moved to its own wall
            beneath a custom hood, and the island became one large work surface with room to gather.
          </p>
        </section>

        {/* Two-up images */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <TallImage src={IMG.range} alt={ALT.range} />
          <TallImage src={IMG.long} alt={ALT.long} />
        </motion.div>

        {/* Two-toned text */}
        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 mb-16 px-4 md:px-0 max-w-5xl mx-auto">
          <p>
            The large space called for two-toned cabinetry, especially because we opted for so much of it. It broke up
            the room and created so much more visual interest. We chose a honey-toned, custom-stained maple for the
            lower cabinets and island and paired it with soft white uppers. The range hood was custom built to match
            the uppers, and we finished the kitchen in polished nickel paired with lacquered brass.
          </p>
          <p>
            The goal was an updated, contemporary kitchen that still holds true to the home&apos;s roots, so we brought
            in finishes that ground the space and keep it from leaning too modern.
          </p>
        </section>

        {/* Large image left + text right */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center mb-16">
          <div className="md:col-span-7">
            <div className="group relative aspect-[2/3] md:aspect-auto md:h-[58rem] overflow-hidden rounded-md">
              <Image src={IMG.island} alt={ALT.island} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" />
              <PinButton imageUrl={SITE_URL + IMG.island} pageUrl={PAGE_URL} description={ALT.island} />
            </div>
          </div>
          <div className="md:col-span-5 md:pr-10 px-4 md:px-0 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-4">
            <p>
              We chose a zellige-look tile for the handmade texture and movement of true zellige, in a material that
              could stand up to everyday cooking. The variation in the tile was the perfect way to highlight the
              two-toned cabinetry without overpowering it.
            </p>
            <p>
              We brought the backsplash all the way to the ceiling and around the room to emphasize the longer lines
              of the space.
            </p>
          </div>
        </motion.div>

        {/* Function text */}
        <section className="mt-16 mb-16 max-w-5xl mx-auto px-4 md:px-0">
          <p className="font-inter text-sm leading-7 tracking-wide text-gray-700">
            Functionality was a big piece of this kitchen, which is why we chose quartz over natural stone, and a
            ceramic tile over true zellige or anything porous. As beautiful as living finishes are, this kitchen shows
            you can still achieve that warmth and character with materials made for real life.
          </p>
        </section>

        {/* Text left + large pantry image right */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center mb-16">
          <div className="order-2 md:order-1 md:col-span-5 md:pl-10 px-4 md:px-0 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-4">
            <p>
              With the room opened up, we were able to plan storage into every wall. A full run of floor-to-ceiling
              pantry cabinets sits beside the refrigerator, finished in the same soft white as the uppers so it reads as
              part of the architecture instead of a separate piece.
            </p>
            <p>
              Inside, custom pull-outs and roll-outs make it a true working pantry, designed and built around the
              family&apos;s needs. Long lacquered brass pulls tie it back to the rest of the hardware, and a small niche
              built into the hood keeps everyday spices right at the range.
            </p>
          </div>
          <div className="order-1 md:order-2 md:col-span-7">
            <div className="group relative aspect-[9/10] overflow-hidden rounded-md">
              <Image src={IMG.pantry} alt={ALT.pantry} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" />
              <PinButton imageUrl={SITE_URL + IMG.pantry} pageUrl={PAGE_URL} description={ALT.pantry} />
            </div>
          </div>
        </motion.div>

        {/* Final two-up images */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <TallImage src={IMG.rangeIsland} alt={ALT.rangeIsland} />
          <TallImage src={IMG.close} alt={ALT.close} />
        </motion.div>

        {/* Closing Text */}
        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-10 px-4 md:px-0 max-w-5xl mx-auto">
          <p>
            Orchard Oasis is a full kitchen renovation in Greenwood Village, designed around how the family cooks and
            gathers.{" "}
            <Link href="/interior-designer/greenwood-village" legacyBehavior>
              <a className="text-gray-500 underline underline-offset-4 decoration-gray-300 transition-colors duration-300 hover:text-black hover:decoration-black">
                See our Greenwood Village design services.
              </a>
            </Link>
          </p>

          <div className="border-t border-neutral-200 pt-10">
            <h3 className="uppercase tracking-[0.2em] text-xs mb-6 text-neutral-500" style={{ fontFamily: "'Inter', sans-serif" }}>
              Project Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12 text-sm">
              <div><strong>Location:</strong> Greenwood Village, Colorado</div>
              <div><strong>Project Type:</strong> Kitchen Renovation</div>

              <div><strong>Lower Cabinets &amp; Island:</strong> Honey-toned maple</div>
              <div><strong>Upper Cabinets:</strong> Soft white</div>

              <div><strong>Range Hood:</strong> Custom, matched to the upper cabinets</div>
              <div><strong>Countertops:</strong> Quartz</div>

              <div><strong>Backsplash:</strong> Zellige-look ceramic tile, run to the ceiling</div>
              <div><strong>Finishes:</strong> Polished nickel and lacquered brass</div>

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
}    </div>
  );
}

export default function OrchardOasisKitchen() {
  return (
    <div className="min-h-screen text-black font-sans bg-[#fafafa]">
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta
          name="keywords"
          content="Greenwood Village kitchen remodel, DTC kitchen renovation, two-toned kitchen, maple kitchen cabinets, custom range hood, zellige-look tile backsplash, quartz countertops, Greenwood Village interior designer, Halcyon Haus"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content={SITE_URL + IMG.hero} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={SITE_URL + IMG.hero} />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
          ORCHARD OASIS KITCHEN
        </h1>
        <h2 className="text-center text-sm uppercase tracking-widest text-gray-500 mt-2 mb-6">
          Greenwood Village, Colorado
        </h2>

        <div className="mb-16">
          <ShareButton title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        </div>

        {/* Hero Image */}
        <motion.div {...subtleFade} className="group relative mb-16">
          <Image
            src={IMG.hero}
            alt={ALT.hero}
            width={2048}
            height={1463}
            priority
            sizes="(max-width: 1440px) 100vw, 1360px"
            className="w-full h-auto rounded-md object-cover"
          />
          <PinButton imageUrl={SITE_URL + IMG.hero} pageUrl={PAGE_URL} description={ALT.hero} />
        </motion.div>

        {/* Intro Text */}
        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 mb-16 px-4 md:px-0 max-w-5xl mx-auto">
          <p>
            Orchard Oasis is an original home near the Denver Tech Center in Greenwood Village. The kitchen was built
            around a small, angled island with the range set in the middle of it. It needed to be completely reimagined.
          </p>
          <p>
            The room itself was generous, which gave us space to rethink the layout from the ground up. The range moved
            to its own wall beneath a custom hood, and the island became one large, simple work surface with room to
            gather.
          </p>
        </section>

        {/* Two-up images */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <TallImage src={IMG.range} alt={ALT.range} />
          <TallImage src={IMG.rangeIsland} alt={ALT.rangeIsland} />
        </motion.div>

        {/* Two-toned text */}
        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 mb-16 px-4 md:px-0 max-w-5xl mx-auto">
          <p>
            We opted for a two-toned kitchen. The lower cabinets and island are a honey-toned maple, paired with soft
            white uppers and a range hood custom built to match them. Polished nickel and lacquered brass carry through
            the plumbing and hardware.
          </p>
          <p>
            The goal was an updated, contemporary kitchen that still holds true to the home&apos;s roots. We brought in
            finishes that ground the space and keep it from leaning too modern.
          </p>
        </section>

        {/* Side image + text */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16 px-4 md:px-0 max-w-6xl mx-auto">
          <div className="md:col-span-6">
            <div className="group relative aspect-[2/3] overflow-hidden rounded-md">
              <Image src={IMG.island} alt={ALT.island} fill sizes="(max-width: 768px) 100vw, 560px" className="object-cover" />
              <PinButton imageUrl={SITE_URL + IMG.island} pageUrl={PAGE_URL} description={ALT.island} />
            </div>
          </div>
          <div className="md:col-span-6 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-4">
            <p>
              The zellige-look backsplash runs to the ceiling and wraps around the room to emphasize longer lines. The
              natural variation in the tile highlights the two-toned cabinetry without overpowering it.
            </p>
          </div>
        </motion.div>

        {/* Function text */}
        <section className="mt-16 mb-16 max-w-5xl mx-auto px-4 md:px-0">
          <p className="font-inter text-sm leading-7 tracking-wide text-gray-700">
            Function guided the materials as much as the look. We chose quartz countertops over natural stone, and a
            ceramic tile over true zellige or anything porous, so the kitchen holds up to everyday cooking with very
            little upkeep. Living finishes are beautiful, and this kitchen shows you can still get that warmth and
            character from materials made for real life.
          </p>
        </section>

        {/* Pantry: text + square image */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16 px-4 md:px-0 max-w-6xl mx-auto">
          <div className="order-2 md:order-1 md:col-span-6 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-4">
            <p>
              With the room opened up, we were able to plan storage into every wall. A full run of floor-to-ceiling
              pantry cabinets sits beside the refrigerator, finished in the same soft white as the uppers so it reads as
              part of the architecture instead of a separate piece.
            </p>
            <p>
              Long lacquered brass pulls tie the pantry back to the rest of the hardware, and a small niche built into
              the hood keeps everyday spices right at the range.
            </p>
          </div>
          <div className="order-1 md:order-2 md:col-span-6">
            <div className="group relative aspect-[9/10] overflow-hidden rounded-md">
              <Image src={IMG.pantry} alt={ALT.pantry} fill sizes="(max-width: 768px) 100vw, 560px" className="object-cover" />
              <PinButton imageUrl={SITE_URL + IMG.pantry} pageUrl={PAGE_URL} description={ALT.pantry} />
            </div>
          </div>
        </motion.div>

        {/* Final two-up images */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <TallImage src={IMG.long} alt={ALT.long} />
          <TallImage src={IMG.close} alt={ALT.close} />
        </motion.div>

        {/* Closing Text */}
        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-10 px-4 md:px-0 max-w-5xl mx-auto">
          <p>
            Orchard Oasis is a full kitchen renovation in Greenwood Village, designed around how the family cooks and
            gathers.{" "}
            <Link href="/interior-designer/greenwood-village" legacyBehavior>
              <a className="text-gray-500 underline underline-offset-4 decoration-gray-300 transition-colors duration-300 hover:text-black hover:decoration-black">
                See our Greenwood Village design services.
              </a>
            </Link>
          </p>

          <div className="border-t border-neutral-200 pt-10">
            <h3 className="uppercase tracking-[0.2em] text-xs mb-6 text-neutral-500" style={{ fontFamily: "'Inter', sans-serif" }}>
              Project Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12 text-sm">
              <div><strong>Location:</strong> Greenwood Village, Colorado</div>
              <div><strong>Project Type:</strong> Kitchen Renovation</div>

              <div><strong>Lower Cabinets &amp; Island:</strong> Honey-toned maple</div>
              <div><strong>Upper Cabinets:</strong> Soft white</div>

              <div><strong>Range Hood:</strong> Custom, matched to the upper cabinets</div>
              <div><strong>Countertops:</strong> Quartz</div>

              <div><strong>Backsplash:</strong> Zellige-look ceramic tile, run to the ceiling</div>
              <div><strong>Finishes:</strong> Polished nickel and lacquered brass</div>

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
