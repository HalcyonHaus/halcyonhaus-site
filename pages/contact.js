import Head from "next/head";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen text-black font-sans" style={{ backgroundColor: "#fafafa" }}>
      <Head>
        <title>Get In Touch – Halcyon Haus</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navigation */}
      <header className="absolute top-0 right-0 z-20 p-6 text-xs tracking-widest">
        <nav className="space-x-6 uppercase font-inter text-xs">
          <Link href="/" passHref legacyBehavior>
            <a className="transition-colors duration-300 text-black hover:text-neutral-400">Home</a>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <a className="transition-colors duration-300 text-black hover:text-neutral-400">About Me</a>
          </Link>
          <Link href="/projects" passHref legacyBehavior>
            <a className="transition-colors duration-300 text-black hover:text-neutral-400">Projects</a>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <a className="transition-colors duration-300 text-black hover:text-neutral-400">Get In Touch</a>
          </Link>
        </nav>
      </header>

      {/* Main Section */}
      <main className="px-6 pt-24 pb-24">
        <h1
          className="text-2xl md:text-2xl font-light tracking-[0.1em] text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          GET IN TOUCH
        </h1>

        <p className="text-center text-sm mt-8 max-w-xl mx-auto">
          Whether you're looking to collaborate, inquire about a project, or simply want to say hello,
          I’d love to hear from you. Feel free to reach out through the form below—or explore my latest finds
          and styling picks via LTK and Instagram.
        </p>

        {/* Contact Form */}
        <div className="mt-12 max-w-xl mx-auto">
          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="border p-3 text-sm w-full"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-3 text-sm w-full"
              required
            />
            <textarea
              placeholder="Your Message"
              className="border p-3 text-sm w-full"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white text-xs uppercase tracking-widest px-6 py-2 hover:bg-neutral-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Shop My Home */}
        <div className="text-center my-16">
          <a
            href="https://www.shopltk.com/explore/halcyonhaus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 text-sm uppercase tracking-widest border border-black hover:bg-black hover:text-white transition"
          >
            Shop My LTK
          </a>
        </div>

        {/* Instagram Embed */}
        <div className="flex justify-center">
          <iframe
            src="https://snapwidget.com/embed/1099076"
            className="w-full max-w-screen-lg min-h-[700px]"
            style={{ border: "none", overflow: "hidden" }}
            allowTransparency="true"
            frameBorder="0"
            scrolling="no"
            title="Posts from Instagram"
          ></iframe>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 pb-10 text-center text-xs text-gray-500 uppercase tracking-widest font-inter">
        <p className="mb-2">© {new Date().getFullYear()} Halcyon Haus</p>
        <div className="flex justify-center space-x-6 text-gray-500">
          <a href="https://www.instagram.com/halcyonhaus_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="h-4 w-4 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
            </svg>
          </a>
          <a href="https://www.tiktok.com/@halcyonhaus_" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg className="h-4 w-4 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 3v12a3 3 0 103 3V9c.6.3 1.3.5 2 .5h1V7h-1c-.6 0-1-.4-1-1V3h-4z" />
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
