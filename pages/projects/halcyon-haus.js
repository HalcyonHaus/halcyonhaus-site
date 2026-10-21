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
const PAGE_URL = SITE_URL + "/projects/halcyon-haus";
const PAGE_TITLE = "The Original Halcyon Haus | Highlands Ranch Home Renovation | Halcyon Haus Design Studio";
const PAGE_DESCRIPTION =
  "The Highlands Ranch home where Halcyon Haus began: hand-scraped floors, a new staircase, and a bathroom oasis, later redesigned again for its new owners with a nursery, boys' room, and primary suite.";

const IMG = {
  bedroomWide: "/images/IMG_4599.jpeg",
  nook: "/images/53757896-768E-436A-A242-E1EB1C839F05.jpeg",
  dining: "/images/DC7801C0-7521-4A4A-86F3-228C9F155D6E.jpeg",
  art: "/images/DSC01662.jpeg",
  bath: "/images/IMG_0640.jpeg",
  vanity: "/images/DSC01503.jpeg",
  vanityDetail: "/images/7F3F1DD5-20A0-4377-A60E-CB6CBED5947A.jpeg",
  bedroomClose: "/images/DSC01677.jpeg",
  bedroomQuilt: "/images/DSC01631.jpeg",
  nurseryCrib: "/images/NURSERY4.JPG",
  nurseryChair: "/images/NURSERY1.JPG",
  boysRoom: "/images/DFF440A7-0193-47CF-9773-5436061404B9.jpeg",
  boysRoomDetail: "/images/DSC02113.jpeg",
};

const ALT = {
  bedroomWide: "Highlands Ranch bedroom with a wood platform bed, white bedding, a vintage seascape painting, and a rattan wall sconce",
  nook: "Reading nook by tall windows with a cream armchair, plaid ottoman, and a knit throw in a Highlands Ranch home",
  dining: "Highlands Ranch dining room with a light wood farmhouse table, black spindle chairs, and a jute rug",
  art: "Collected gallery wall of vintage art above a wood dresser with a leafy branch in a Highlands Ranch home",
  bath: "Highlands Ranch bathroom with a glass walk-in shower, white tile, a freestanding tub, and an arched window",
  vanity: "Floating wood double vanity with black faucets, black framed mirrors, and brass sconces in a Highlands Ranch bathroom",
  vanityDetail: "Bathroom vanity detail with a black faucet, brass sconce, and eucalyptus in a Highlands Ranch home",
  bedroomClose: "Bedroom detail with a vintage seascape painting, rattan sconce, eucalyptus, and layered white bedding",
  bedroomQuilt: "Bedroom with a gray quilt, white pillows, a striped lumbar, and vintage art in a Highlands Ranch home",
  nurseryCrib: "Neutral nursery with a white crib, a patchwork mountain quilt, and framed pine tree prints in Highlands Ranch",
  nurseryChair: "Nursery with board and batten walls, a cream swivel chair, a white dresser, and an arched rattan mirror",
  boysRoom: "Boys' bedroom with navy board and batten walls, plaid bedding, and vintage mountain prints in Highlands Ranch",
  boysRoomDetail: "Boys' bedroom detail with navy paneling, a spindle bed, plaid and rust pillows, and a wood nightstand",
};

// JSON-LD lives in a constant outside the JSX so the build stays clean
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Original Halcyon Haus: Highlands Ranch, Colorado",
  "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
  "image": [SITE_URL + IMG.bedroomWide, SITE_URL + IMG.bath, SITE_URL + IMG.nurseryCrib],
  "author": { "@type": "Person", "name": "Nikka Winchell" },
  "publisher": {
    "@type": "Organization",
    "name": "Halcyon Haus",
    "logo": { "@type": "ImageObject", "url": SITE_URL + "/logos/HHLOGO2.png" }
  },
  "datePublished": "2026-10-21",
  "description": PAGE_DESCRIPTION
};

// Tall image for the two-up rows, same proportions as the other project pages
function TallImage({ src, alt, priority = false }) {
  return (
    <div className="group relative aspect-[2/3] md:aspect-auto md:h-[58rem] overflow-hidden rounded-md">
      <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      <PinButton imageUrl={SITE_URL + src} pageUrl={PAGE_URL} description={alt} />
    </div>
  );
}

const textClass = "text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 mb-16 px-4 md:px-0 max-w-5xl mx-auto";

export default function HalcyonHausHighlandsRanch() {
  return (
    <div className="min-h-screen text-black font-sans bg-[#fafafa]">
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta
          name="keywords"
          content="Highlands Ranch interior designer, Highlands Ranch home renovation, Highlands Ranch bathroom remodel, nursery design Highlands Ranch, boys bedroom design, Colorado interior design, Halcyon Haus, Nikka Winchell"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content={SITE_URL + IMG.bedroomWide} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={SITE_URL + IMG.bedroomWide} />
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
          THE ORIGINAL HALCYON HAUS
        </h1>
        <h2 className="text-center text-sm uppercase tracking-widest text-gray-500 mt-2 mb-6">
          Highlands Ranch, Colorado
        </h2>

        <div className="mb-16">
          <ShareButton title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        </div>

        {/* Opening two-up */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <TallImage src={IMG.bedroomWide} alt={ALT.bedroomWide} priority />
          <TallImage src={IMG.nook} alt={ALT.nook} priority />
        </motion.div>

        {/* Intro */}
        <section className={textClass}>
          <p>
            In 2020 we moved across the country to Colorado, and this was our very first home. It was a beautiful
            starting place. We did basically everything to that house. We restained the floors with a hand-scraped
            custom finish, did the upstairs flooring, repainted everything, and built a brand new staircase.
          </p>
        </section>

        {/* Two-up */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <TallImage src={IMG.dining} alt={ALT.dining} />
          <TallImage src={IMG.art} alt={ALT.art} />
        </motion.div>

        {/* Bathroom: large image left + text right */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center mb-16">
          <div className="md:col-span-7">
            <div className="group relative aspect-[3/4] md:aspect-auto md:h-[58rem] overflow-hidden rounded-md">
              <Image src={IMG.bath} alt={ALT.bath} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" />
              <PinButton imageUrl={SITE_URL + IMG.bath} pageUrl={PAGE_URL} description={ALT.bath} />
            </div>
          </div>
          <div className="md:col-span-5 md:pr-10 px-4 md:px-0 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-4">
            <p>
              The very first big project was the bathroom, and it turned into an oasis. It&apos;s what started our
              love for creating bathrooms that are a space to reflect and escape to.
            </p>
          </div>
        </motion.div>

        {/* Two-up */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <TallImage src={IMG.vanity} alt={ALT.vanity} />
          <TallImage src={IMG.vanityDetail} alt={ALT.vanityDetail} />
        </motion.div>

        {/* Story */}
        <section className={textClass}>
          <p>
            Design had always been a love, but this home is where it became a passion. It started as a journey we were
            documenting, and it grew from there. People began asking us to decorate and design their homes, one
            referral led to the next, and that grew into Halcyon Haus.
          </p>
        </section>

        {/* Two-up */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <TallImage src={IMG.bedroomClose} alt={ALT.bedroomClose} />
          <TallImage src={IMG.bedroomQuilt} alt={ALT.bedroomQuilt} />
        </motion.div>

        {/* Chapter two */}
        <section className="text-center mb-10 mt-24 px-4 md:px-0">
          <h3 className="text-xl md:text-2xl font-light tracking-[0.1em] uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
            Chapter Two
          </h3>
        </section>
        <section className={textClass}>
          <p>
            When the home sold, the new owners hired us to reimagine it for them, so we got to work on this house twice.
            For them we designed the boys&apos; bedroom and the nursery, and redid their bedroom and living room,
            keeping the essence of the home while making it their own.
          </p>
        </section>

        {/* Nursery two-up */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <TallImage src={IMG.nurseryCrib} alt={ALT.nurseryCrib} />
          <TallImage src={IMG.nurseryChair} alt={ALT.nurseryChair} />
        </motion.div>

        <section className={textClass}>
          <p>The nursery is neutral tones with a playful nod to mountain adventure.</p>
        </section>

        {/* Boys' room two-up */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <TallImage src={IMG.boysRoom} alt={ALT.boysRoom} />
          <TallImage src={IMG.boysRoomDetail} alt={ALT.boysRoomDetail} />
        </motion.div>

        {/* Closing */}
        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-10 px-4 md:px-0 max-w-5xl mx-auto">
          <p>
            Halcyon means serene, remembering a time that was idyllic and peaceful. That&apos;s what we want every home
            we design to feel like.{" "}
            <Link href="/interior-designer/highlands-ranch" legacyBehavior>
              <a className="text-gray-500 underline underline-offset-4 decoration-gray-300 transition-colors duration-300 hover:text-black hover:decoration-black">
                See our Highlands Ranch design services.
              </a>
            </Link>
          </p>

          <div className="border-t border-neutral-200 pt-10">
            <h3 className="uppercase tracking-[0.2em] text-xs mb-6 text-neutral-500" style={{ fontFamily: "'Inter', sans-serif" }}>
              Project Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12 text-sm">
              <div><strong>Location:</strong> Highlands Ranch, Colorado</div>
              <div><strong>Project Type:</strong> Whole-Home Renovation &amp; Design</div>

              <div><strong>Floors:</strong> Restained, hand-scraped custom finish</div>
              <div><strong>Staircase:</strong> Brand new</div>

              <div><strong>First Project:</strong> Bathroom renovation</div>
              <div><strong>Chapter Two:</strong> Nursery, boys&apos; bedroom, primary bedroom, living room</div>

              <div><strong>Design &amp; Styling:</strong> Nikka Winchell, Halcyon Haus</div>
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
