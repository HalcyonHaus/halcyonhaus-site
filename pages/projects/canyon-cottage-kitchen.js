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
            A grounded, quietly luxurious kitchen rooted in simplicity and warmth. We layered this space with soft textures, running the natural stone countertop as the backsplash, bringing calm & cohesiveness to everyday function.
          </p>
          <p>
            Cabinetry was custom-built in a warm taupe tone — Benjamin Moore Pashmina, paired with unlacquered brass hardware. A large window frames the canyon beyond while filtering warm, Colorado light into the space.
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
            <img src="/images/KITCHENBLOG3.JPG" alt="Process or Detail Shot" className="w-full rounded-md object-cover" />
          </div>
          <div className="md:col-span-6 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-4">
            <p>
              This moment captures the heart of the kitchen — soft taupe with perfectly matching veining from the counter to the splash. Nothing loud. Just intention.
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
            Designed for a family who values both beauty and everyday ease, this kitchen is part of our larger Canyon Cottage renovation in Castle Pines Village — an ode to timeless interiors with a quietly modern soul.
          </p>
        </motion.section>
      </main>
    </div>
  );
}
