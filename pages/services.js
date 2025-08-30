import Head from "next/head";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen text-black font-sans" style={{ backgroundColor: "#fafafa" }}>
      <Head>
        <title>Services – Halcyon Haus</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navigation */}
      <header className="absolute top-0 w-full z-20 px-6 pt-6 text-xs tracking-widest">
        <nav className="flex justify-center sm:justify-end space-x-6 uppercase font-inter text-xs">
          <Link href="/" legacyBehavior><a className="transition-colors duration-300 text-black hover:text-neutral-400">Home</a></Link>
          <Link href="/about" legacyBehavior><a className="transition-colors duration-300 text-black hover:text-neutral-400">About Me</a></Link>
          <Link href="/projects" legacyBehavior><a className="transition-colors duration-300 text-black hover:text-neutral-400">Projects</a></Link>
          <Link href="/services" legacyBehavior><a className="transition-colors duration-300 text-black hover:text-neutral-400">Services</a></Link>
          <Link href="/contact" legacyBehavior><a className="transition-colors duration-300 text-black hover:text-neutral-400">Get in Touch</a></Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 pt-24 pb-24 max-w-5xl mx-auto">
        <h1
          className="text-2xl md:text-2xl font-light tracking-[0.1em] text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          SERVICES
        </h1>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-12 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-10">
            <p className="text-center max-w-2xl mx-auto">
              Whether you're renovating a full home or just refreshing a single space, Halcyon Haus offers flexible design services tailored to your lifestyle and vision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="uppercase text-xs tracking-widest text-gray-500 mb-2">FULL-SERVICE DESIGN</h2>
                <p>
                  A comprehensive approach — from layout, materials, and custom millwork to sourcing, styling, and install. Ideal for remodels, new builds, or full home transformations.
                </p>
              </div>
              <div>
                <h2 className="uppercase text-xs tracking-widest text-gray-500 mb-2">ROOM REFRESH</h2>
                <p>
                  For lived-in spaces needing a thoughtful update — furnishings, layout, styling, and accessories using the existing architecture.
                </p>
              </div>
              <div>
                <h2 className="uppercase text-xs tracking-widest text-gray-500 mb-2">VIRTUAL DESIGN</h2>
                <p>
                  A remote experience tailored to your space. Includes custom mood boards, layout guides, shoppable links, and styling instructions — all delivered online.
                </p>
              </div>
              <div>
                <h2 className="uppercase text-xs tracking-widest text-gray-500 mb-2">CONSULTATION ONLY</h2>
                <p>
                  Need a second opinion? Book hourly design support for layout advice, sourcing questions, or design direction. Perfect for DIY-minded clients.
                </p>
              </div>
            </div>

            <div className="pt-12 text-center">
              <p>
                Based in Colorado. Designing from coast to coast.
              </p>
              <p className="mt-6">
                <Link href="/contact" legacyBehavior>
                  <a className="inline-block px-6 py-3 border border-black text-black text-xs tracking-widest uppercase font-inter hover:bg-black hover:text-white transition">
                    Work With Me
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-10 pb-10 text-center text-xs text-gray-500 uppercase tracking-widest font-inter">
        <p className="mb-2">© {new Date().getFullYear()} Halcyon Haus</p>
        <div className="flex justify-center space-x-6 text-gray-500">
          <a href="https://www.instagram.com/halcyonhaus_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="h-4 w-4 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
            </svg>
          </a>
          <a href="https://www.shopltk.com/explore/halcyonhaus" target="_blank" rel="noopener noreferrer" aria-label="LTK">
            <svg className="h-4 w-4 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm9-6a6 6 0 100 12 6 6 0 000-12z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
