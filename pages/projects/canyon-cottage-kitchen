import Head from "next/head";
import Link from "next/link";

export default function CottageCanyonKitchen() {
  return (
    <div className="min-h-screen text-black font-sans" style={{ backgroundColor: "#fafafa" }}>
      <Head>
        <title>Cottage Canyon Kitchen – Halcyon Haus</title>
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
      <main className="px-6 pt-24 pb-24 max-w-5xl mx-auto">
        <h1
          className="text-2xl md:text-2xl font-light tracking-[0.1em] text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          COTTAGE CANYON KITCHEN
        </h1>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-6 space-y-6">
            <img
              src="/images/CCKITCHEN2.JPG"
              alt="Cottage Canyon Kitchen Overview"
              className="w-full rounded-md object-cover"
            />
            <img
              src="/images/CCKITCHEN1.JPG"
              alt="Cottage Canyon Kitchen Details"
              className="w-full rounded-md object-cover"
            />
            <img
              src="/images/KITCHENBLOG1.JPG"
              alt="Kitchen Blog Detail 1"
              className="w-full rounded-md object-cover"
            />
            <img
              src="/images/KITCHENBLOG2.JPG"
              alt="Kitchen Blog Detail 2"
              className="w-full rounded-md object-cover"
            />
            <img
              src="/images/KITCHENBLOG3.JPG"
              alt="Kitchen Blog Detail 3"
              className="w-full rounded-md object-cover"
            />
            <img
              src="/images/KITCHENBLOG4.JPG"
              alt="Kitchen Blog Detail 4"
              className="w-full rounded-md object-cover"
            />
          </div>
          <div className="md:col-span-6 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6">
            <p>
              A grounded, quietly luxurious kitchen rooted in simplicity and warmth. We layered this space with soft textures, handmade tiles, and matte surfaces to bring calm to everyday function.
            </p>
            <p>
              Cabinetry was custom-built in a warm taupe tone — paired with honed natural stone, unlacquered brass, and a handmade fireclay backsplash. A large window frames the canyon beyond while filtering warm, Colorado light into the space.
            </p>
            <p>
              This kitchen is part of our larger Cottage Canyon renovation in Castle Pines Village.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
