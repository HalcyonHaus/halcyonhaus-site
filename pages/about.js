import Head from "next/head";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen text-black font-sans" style={{ backgroundColor: "#fafafa" }}>
      <Head>
        <title>About – Halcyon Haus</title>
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
          <Link href="/contact" legacyBehavior><a className="transition-colors duration-300 text-black hover:text-neutral-400">Get in Touch</a></Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 pt-24 pb-24 max-w-5xl mx-auto">
        <h1
          className="text-2xl md:text-2xl font-light tracking-[0.1em] text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          ABOUT ME
        </h1>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 flex justify-center">
            <img
              src="/images/DSC02864.JPG"
              alt="Nikka Winchell"
              className="w-[20rem] md:w-[24rem] h-auto rounded-md object-cover"
            />
          </div>
          <div className="md:col-span-7 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6">
            <p>
              Welcome to Halcyon Haus — an interior design studio founded by Nikka Winchell, rooted in thoughtful, transitional design.
            </p>
            <p>
              At Halcyon Haus, I guide you through a warm, hands-on design journey rooted in transitional style—where tradition meets modern simplicity. With an eye for curated strategy and balanced composition, every project is tailored to your lifestyle and vision.
            </p>
            <p>
              Located in Denver, CO — servicing design projects coast to coast.
            </p>

            {/* Inline Featured In Section */}
            <div className="pt-6">
              <h2
                className="text-center text-xs tracking-widest uppercase font-inter text-gray-500 mb-8"
                style={{ letterSpacing: '0.2em' }}
              >
                Featured In
              </h2>

              {/* First Row */}
              <div className="flex justify-center space-x-16 mb-1.5 px-4">
                <img src="/logos/potterybarn.png" alt="Pottery Barn" className="h-14 w-auto max-w-[120px] object-contain grayscale" />
                <img src="/logos/westelm.png" alt="West Elm" className="h-14 w-auto max-w-[120px] object-contain grayscale" />
                <img src="/logos/cratebarrel.png" alt="Crate & Barrel" className="h-14 w-auto max-w-[120px] object-contain grayscale" />
              </div>

              {/* Second Row */}
              <div className="flex justify-center space-x-16 px-4">
                <img src="/logos/amberinteriors.png" alt="Amber Interiors" className="h-14 w-auto max-w-[120px] object-contain grayscale" />
                <img src="/logos/serenaandlily.png" alt="Serena & Lily" className="h-14 w-auto max-w-[120px] object-contain grayscale" />
              </div>
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
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@halcyonhaus_" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg className="h-4 w-4 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 3v12a3 3 0 103 3V9c.6.3 1.3.5 2 .5h1V7h-1c-.6 0-1-.4-1-1V3h-4z"/>
            </svg>
          </a>
          <a href="https://www.shopltk.com/explore/halcyonhaus" target="_blank" rel="noopener noreferrer" aria-label="LTK">
            <svg className="h-4 w-4 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm9-6a6 6 0 100 12 6 6 0 000-12z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
