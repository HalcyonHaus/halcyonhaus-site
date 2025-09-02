// /pages/projects/canyon-cottage-kitchen.js
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: "easeOut" },
  viewport: { once: true }
};

const staggerGroup = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: "easeOut", staggerChildren: 0.3 },
  viewport: { once: true }
};

export default function CanyonCottageKitchen() {
  return (
    <div className="min-h-screen text-black font-sans bg-[#fafafa]">
      <Head>
<title>Canyon Cottage Kitchen – Halcyon Haus</title>
<meta name="description" content="Explore the Canyon Cottage Kitchen by Halcyon Haus — featuring Benjamin Moore Pashmina cabinets, Venetian plaster range hood, reeded glass doors, mixed metal hardware, and vein-matched natural stone countertops. A grounded, transitional kitchen design in Castle Pines Village." />
<meta name="keywords" content="Benjamin Moore Pashmina kitchen, Venetian plaster hood, reeded glass cabinets, mixed metals kitchen, Castle Pines kitchen design, transitional kitchen, Halcyon Haus, luxury kitchen renovation" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
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
        <motion.h1 {...fadeUp} className="text-2xl md:text-2xl font-light tracking-[0.1em] text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
          CANYON COTTAGE KITCHEN
        </motion.h1>

        {/* Hero Image */}
        <motion.div {...fadeUp} className="mb-16">
          <img src="/images/KITCHENBLOG1.JPG" alt="Kitchen Hero Image" className="w-full rounded-md object-cover" />
        </motion.div>

        {/* Intro Text */}
        <motion.section {...fadeUp} className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 mb-16 px-4 md:px-0 max-w-5xl mx-auto">
          <p>
            A grounded, quietly luxurious kitchen rooted in warmth, function, and intention. Every detail was designed to feel both handcrafted and elevated — from the custom Venetian plaster range hood with integrated cubbies for spices, to the reeded glass cabinetry that draws in light while softening visual weight.
          </p>
          <p>
            The cabinets are painted Benjamin Moore Pashmina — a warm taupe that shifts beautifully throughout the day — paired with a mix of unlacquered brass knobs, latches, and pulls to bring tonal variation and patina over time. To balance the warmth, we layered in polished nickel plumbing fixtures, proving that mixed metals can add depth and texture without distraction.
          </p>
          <p>
            The natural stone countertop was carried up as backsplash to enhance cohesion and highlight the stunning veining, which becomes a focal point throughout the space. This is a kitchen meant to evolve with time — quietly timeless, and made to be lived in.
          </p>
        </motion.section>

        {/* Side-by-side images with adjusted height */}
        <motion.div {...staggerGroup} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.div className="md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/CCKITCHEN1.JPG" alt="Kitchen Detail 1" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div className="md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/CCKITCHEN2.JPG" alt="Kitchen Detail 2" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>

        {/* Second full-width image */}
        <motion.div {...fadeUp} className="mb-16">
          <img src="/images/HERO1.JPG" alt="Full Width Editorial Shot" className="w-full rounded-md object-cover" />
        </motion.div>

        {/* Image with text beside */}
        <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16 px-4 md:px-0 max-w-6xl mx-auto">
          <div className="md:col-span-6">
            <img src="/images/KITCHENBLOG3.JPG" alt="Close-up Vein Match" className="w-full rounded-md object-cover" />
          </div>
          <div className="md:col-span-6 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-4">
            <p>
              A close-up of the veining, perfectly aligned from counter to splash. Subtle, but deliberate — a soft, tonal moment. 
            </p>
          </div>
        </motion.div>

        {/* Final two-up layout */}
        <motion.div {...staggerGroup} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.div className="md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/KITCHENBLOG2.JPG" alt="Detail 3" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div className="md:h-[58rem] overflow-hidden rounded-md">
            <img src="/images/KITCHENBLOG4.JPG" alt="Detail 4" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>

        {/* Closing Text */}
        <motion.section {...fadeUp} className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 px-4 md:px-0 max-w-5xl mx-auto">
          <p>
            Designed for a family who values both beauty and everyday ease, this kitchen is part of our larger Canyon Cottage renovation in Castle Pines Village — a softly modern, transitional home where materials are layered, not loud.
          </p>
        </motion.section>
      </main>
    </div>
  );
}
