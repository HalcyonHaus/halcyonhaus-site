// /pages/projects/canyon-cottage-kitchen.js
import Head from "next/head";
import Link from "next/link";

export default function CanyonCottageKitchen() {
  return (
    <div className="min-h-screen text-black font-sans" style={{ backgroundColor: "#fafafa" }}>
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
      <main className="pt-24 pb-24 max-w-5xl mx-auto px-6">
        <h1
          className="text-2xl md:text-2xl font-light tracking-[0.1em] text-center mb-16"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          CANYON COTTAGE KITCHEN
        </h1>

        {/* Hero Image */}
        <div className="mb-16">
          <img
            src="/images/KITCHENBLOG1.JPG"
            alt="Kitchen Hero Image"
            className="w-full rounded-md object-cover"
          />
        </div>

        {/* Intro Text */}
        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 mb-16 px-2 md:px-0">
          <p>
            A grounded, quietly luxurious kitchen rooted in simplicity and warmth. We layered this space with soft textures, handmade tiles, and matte surfaces to bring calm to everyday function.
          </p>
          <p>
            Cabinetry was custom-built in a warm taupe tone — paired with honed natural stone, unlacquered brass, and a handmade fireclay backsplash. A large window frames the canyon beyond while filtering warm, Colorado light into the space.
          </p>
        </section>

        {/* Side-by-side images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <img src="/images/CCKITCHEN1.JPG" alt="Kitchen Detail 1" className="w-full rounded-md object-cover" />
          <img src="/images/CCKITCHEN2.JPG" alt="Kitchen Detail 2" className="w-full rounded-md object-cover" />
        </div>

        {/* Second full-width image */}
        <div className="mb-16">
          <img
            src="/images/HERO1.JPG"
            alt="Full Width Editorial Shot"
            className="w-full rounded-md object-cover"
          />
        </div>

        {/* Image with text beside */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16">
          <div className="md:col-span-6">
            <img
              src="/images/KITCHENBLOG3.JPG"
              alt="Process or Detail Shot"
              className="w-full rounded-md object-cover"
            />
          </div>
          <div className="md:col-span-6 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-4">
            <p>
              This moment captures the heart of the kitchen — soft, moody light pouring across a palette of warm neutrals and natural materials. Nothing loud. Just intention.
            </p>
          </div>
        </div>

        {/* Final two-up layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <img src="/images/KITCHENBLOG4.JPG" alt="Detail 3" className="w-full rounded-md object-cover" />
          <img src="/images/KITCHENBLOG2.JPG" alt="Detail 4" className="w-full rounded-md object-cover" />
        </div>

        {/* Closing Text */}
        <section className="text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 px-2 md:px-0">
          <p>
            Designed for a family who values both beauty and everyday ease, this kitchen is part of our larger Canyon Cottage renovation in Castle Pines Village — an ode to timeless interiors with a quietly modern soul.
          </p>
        </section>
      </main>
    </div>
  );
}
