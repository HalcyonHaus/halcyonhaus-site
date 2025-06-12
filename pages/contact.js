import Head from "next/head";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen text-black font-sans bg-[#fafafa]">
      <Head>
        <title>Get in Touch – Halcyon Haus</title>
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
            <a className="transition-colors duration-300 text-black hover:text-neutral-400">Get in Touch</a>
          </Link>
        </nav>
      </header>

      {/* Main Section */}
      <main className="px-6 pt-24 pb-24 max-w-2xl mx-auto">
        <h1
          className="text-2xl md:text-2xl font-light tracking-[0.1em] text-center uppercase mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          GET IN TOUCH
        </h1>

        <p
  className="mt-6 text-sm leading-7 text-center tracking-wide text-gray-700"
  style={{ fontFamily: "'inter', serif" }}
>
  Thoughtfully curated interiors begin with a conversation. Let’s connect.
</p>

    <div className="mt-6 flex justify-center space-x-4 text-xs uppercase tracking-widest font-inter text-black">
  <a
    href="https://www.instagram.com/halcyonhaus_"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-colors duration-300 hover:text-neutral-400"
  >
    Instagram
  </a>
  <span>|</span>
  <a
    href="https://www.tiktok.com/@halcyonhaus_"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-colors duration-300 hover:text-neutral-400"
  >
    TikTok
  </a>
  <span>|</span>
  <a
    href="https://www.shopltk.com/explore/halcyonhaus"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-colors duration-300 hover:text-neutral-400"
  >
    LTK
  </a>
</div>

        <form
  action="https://formspree.io/f/mkgbrrnw"
  method="POST"
  className="space-y-6 text-sm max-w-2xl mx-auto mt-10"
>
  <div>
    <label htmlFor="name" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      required
      className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white"
    />
  </div>

  <div>
    <label htmlFor="email" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      required
      className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white"
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows="4"
      required
      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white"
    ></textarea>
  </div>

  <div className="flex justify-center mt-6">
    <button
      type="submit"
      className="px-5 py-1.5 text-xs uppercase tracking-widest border border-gray-400 rounded-md hover:bg-gray-100 hover:text-black transition-colors duration-300 font-inter"
    >
      Submit
    </button>
  </div>
</form>
      </main>

      {/* Footer */}
      <footer className="mt-8 pb-10 text-center text-xs text-gray-500 uppercase tracking-widest font-inter">
        <p className="mb-2">© {new Date().getFullYear()} Halcyon Haus</p>
      </footer>
    </div>
  );
}
