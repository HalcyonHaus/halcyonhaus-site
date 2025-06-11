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
      <header className="absolute top-0 right-0 z-20 p-6 text-xs tracking-widest">
        <nav className="space-x-6 uppercase font-inter text-xs">
          <Link href="/" legacyBehavior><a className="transition-colors duration-300 text-black hover:text-neutral-400">Home</a></Link>
          <Link href="/about" legacyBehavior><a className="transition-colors duration-300 text-black hover:text-neutral-400">About Me</a></Link>
          <Link href="/projects" legacyBehavior><a className="transition-colors duration-300 text-black hover:text-neutral-400">Projects</a></Link>
          <Link href="/shop" legacyBehavior><a className="transition-colors duration-300 text-black hover:text-neutral-400">Shop My Home</a></Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 pt-32 pb-24 max-w-2xl mx-auto text-center">
        <h1
          className="text-2xl md:text-3xl font-light tracking-wider"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          ABOUT ME
        </h1>

        <p className="mt-10 text-sm leading-7 tracking-wide font-inter text-gray-700">
          Welcome to Halcyon Haus — a design studio focused on thoughtful, elevated interiors. Based in Colorado, I bring a curated, transitional approach to every space I create.
        </p>
      </main>

      {/* Footer */}
      <footer className="mt-8 pb-10 text-center text-xs text-gray-500 uppercase tracking-widest font-inter">
        <p className="mb-2">© {new Date().getFullYear()} Halcyon Haus</p>
      </footer>
    </div>
  );
}
