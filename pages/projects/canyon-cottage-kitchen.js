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

export default function CanyonCottageKitchen() {
  return (
    <div className="min-h-screen text-black font-sans bg-[#fafafa]">
      <Head>
        <title>Canyon Cottage Kitchen Renovation | Castle Pines Village | Halcyon Haus Design Studio</title>
        <meta
          name="description"
          content="Explore the Canyon Cottage Kitchen by Halcyon Haus — featuring Benjamin Moore Pashmina cabinets, Venetian plaster range hood, reeded glass doors, mixed metal hardware, and vein-matched countertops in Castle Pines, Colorado."
        />
        <meta
          name="keywords"
          content="Benjamin Moore Pashmina kitchen, Venetian plaster hood, reeded glass cabinets, mixed metals kitchen, Castle Pines interior design, Halcyon Haus, Colorado kitchen remodel"
        />
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
              "headline": "Canyon Cottage Kitchen – Halcyon Haus",
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
              "datePublished": "2025-09-01",
              "description":
                "Explore the Canyon Cottage Kitchen by Halcyon Haus — featuring Benjamin Moore Pashmina cabinets, Venetian plaster range hood, reeded glass doors, mixed metal hardware, and vein-matched countertops in Castle Pines, Colorado."
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
          CANYON COTTAGE KITCHEN
        </h1>
        <h2 className="text-center text-sm uppercase tracking-widest text-gray-500 mt-2 mb-16">
          Castle Pines, Colorado
        </h2>

        {/* Hero Image */}
        <motion.div {...subtleFade} className="mb-16">
          <img src="/images/HEROKITCHEN00.jpg" alt="Castle Pines kitchen with Benjamin Moore Pashmina cabinets and Venetian plaster range hood by Halcyon Haus" className="w-full rounded-md object-cover" />
        </motion.div>

        {/* Intro Text */}
        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 mb-16 px-4 md:px-0 max-w-5xl mx-auto">
          <p>
            I probably spent more time choosing the cabinet color than anything else in this kitchen.
          </p>
          <p>
I knew from the beginning that the cabinetry was going to carry the room, so finding the right color mattered. I wanted something with depth, but I didn’t want it drifting too far into gray or beige or feeling too dark. Benjamin Moore Pashmina ended up being exactly what I was looking for. The kitchen gets beautiful western light, which brings out the warmer side of the color and gives the cabinetry a completely different feel throughout the day.          </p>
          <p>
Once that decision was made, every other material followed.          </p>
          <p>
          The goal wasn’t to fill the room with statement pieces. It was to create a kitchen where everything worked together and nothing felt like it was competing for attention. The Mont Blanc quartzite has soft movement that complements the cabinetry rather than distracting from it, so we continued the stone up the backsplash instead of introducing another material. It creates a quieter backdrop while letting the natural veining become part of the architecture of the space.            </p>
          
        </section>

        {/* Two-up images */}
        <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/DSC03252.jpg" alt="Custom cabinet detail with unlacquered brass knobs and pulls in warm taupe kitchen" className="w-full h-full object-cover" />
          </div>
          <div className="md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/PashminaKitchen1.jpg" alt="Kitchen angle featuring reeded glass uppers and polished nickel faucet in Colorado interior" className="w-full h-full object-cover" />
          </div>
        </motion.div>

{/* Full Width Image */}
<motion.div {...subtleFade} className="mb-16">
  <img
    src="/images/HERO1.JPG"
    alt="Full kitchen view showing layered metal finishes and natural stone backsplash"
    className="w-full rounded-md object-cover"
  />

  <section className="mt-16 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 px-4 md:px-0 max-w-5xl mx-auto">
    <p>
      The custom Venetian plaster range hood became another defining feature of the kitchen. We designed integrated spice cubbies into the hood surround so that something practical could also feel considered. Small details like that are often the ones that make a space feel custom because they’re designed around how people actually cook and live.
    </p>
  </section>
</motion.div>

       {/* Side image + text */}
<motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16 px-4 md:px-0 max-w-6xl mx-auto">
  <div className="md:col-span-6">
    <img
      src="/images/KITCHENBLOG3.JPG"
      alt="Close-up of matched veining from counter to backsplash in Colorado kitchen remodel"
      className="w-full rounded-md object-cover"
    />
  </div>

  <div className="md:col-span-6 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-4">
    <p>
      Along one wall, reeded glass cabinets break up the run of solid doors and allow light to move through the space. They add texture without making the kitchen feel busy, which was especially important in a room where the cabinetry was intended to be the focal point.
    </p>
  </div>
</motion.div>

{/* Hardware text */}
<section className="mt-16 mb-16 max-w-5xl mx-auto px-4 md:px-0">
  <p className="font-inter text-sm leading-7 tracking-wide text-gray-700">
    The hardware is a mix of unlacquered brass knobs, latches, and pulls paired with polished nickel plumbing fixtures. I almost always gravitate toward unlacquered brass because it develops a natural patina over time. It doesn't stay perfectly polished, and that's exactly the point. The polished nickel keeps the overall palette feeling balanced, while the combination gives the kitchen more character than using a single finish throughout.
  </p>
</section>

{/* Final two-up images */}
<motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
  <div className="md:h-[58rem] overflow-hidden rounded-md">
    <img
      src="/images/KITCHENBLOG2.JPG"
      alt="Side detail of Venetian plaster hood and spice cubbies in Canyon Cottage Kitchen"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="md:h-[58rem] overflow-hidden rounded-md">
    <img
      src="/images/KITCHENBLOG4.JPG"
      alt="Mixed metal hardware with latches and pulls in warm taupe cabinetry by Halcyon Haus"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>

 {/* Closing Text */}
<section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-10 px-4 md:px-0 max-w-5xl mx-auto">

  <p>
    This kitchen is part of our larger Canyon Cottage renovation in Castle Pines Village. Throughout the home, we focused on natural materials, thoughtful details, and a restrained palette that lets the materials do most of the talking. I wanted the kitchen to feel settled, comfortable, and easy to live in from the very beginning.
  </p>

  <div className="border-t border-neutral-200 pt-10">
    <h3
      className="uppercase tracking-[0.2em] text-xs mb-6 text-neutral-500"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      Project Details
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12 text-sm">
      <div><strong>Location:</strong> Castle Pines Village, Colorado</div>
      <div><strong>Project Type:</strong> Kitchen Renovation</div>

      <div><strong>Cabinet Paint:</strong> Benjamin Moore Pashmina</div>
      <div><strong>Range Hood:</strong> Venetian plaster color matched to Benjamin Moore Simply White</div>

      <div><strong>Countertops:</strong> Mont Blanc Quartzite</div>
      <div><strong>Hardware:</strong> Unlacquered brass </div>

      <div><strong>Plumbing Fixtures:</strong> Polished nickel</div>
      <div><strong>Design & Styling:</strong> Nikka Winchell, Halcyon Haus</div>

      <div><strong>Photography:</strong> Nikka Winchell, Halcyon Haus</div>
    </div>
  </div>

</section>
   </main>

    </div>

  );

}
