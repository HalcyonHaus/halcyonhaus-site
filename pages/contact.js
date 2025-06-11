import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const response = await fetch("https://formspree.io/f/mkgbrrnw", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new FormData(form),
    });

    if (response.ok) {
      form.reset();
      setSubmitted(true);
    }
  };

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
      <main className="px-6 pt-24 pb-24">
        <h1
          className="text-2xl md:text-2xl font-light tracking-[0.1em] text-center mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          GET IN TOUCH
        </h1>

        <p className="max-w-xl mx-auto text-center text-xs uppercase tracking-widest font-inter mb-12 text-neutral-600">
          Whether you're starting a new project or just want to say hello, I'd love to hear from you.
        </p>

        <form
  onSubmit={handleSubmit}
  className="max-w-xl mx-auto space-y-6 text-xs tracking-widest uppercase font-inter"
>
  <div>
    <label htmlFor="name" className="block mb-2">Name</label>
    <input
      type="text"
      name="name"
      required
      className="w-full border border-neutral-300 rounded-md px-4 py-2 text-black text-xs uppercase tracking-wider focus:outline-none focus:border-black transition"
    />
  </div>
  <div>
    <label htmlFor="email" className="block mb-2">Email</label>
    <input
      type="email"
      name="email"
      required
      className="w-full border border-neutral-300 rounded-md px-4 py-2 text-black text-xs uppercase tracking-wider focus:outline-none focus:border-black transition"
    />
  </div>
  <div>
    <label htmlFor="message" className="block mb-2">Message</label>
    <textarea
      name="message"
      rows="5"
      required
      className="w-full border border-neutral-300 rounded-md px-4 py-2 text-black text-xs uppercase tracking-wider focus:outline-none focus:border-black transition"
    ></textarea>
  </div>
  <button
    type="submit"
    className="border border-black px-6 py-2 text-xs uppercase hover:bg-black hover:text-white transition"
  >
    Send
  </button>

  {submitted && (
    <p className="mt-4 text-center text-sm text-black">We'll be in touch!</p>
  )}
</form>
      </main>

      {/* Footer */}
      <footer className="mt-8 pb-10 text-center text-xs text-gray-500 uppercase tracking-widest font-inter">
        <p className="mb-2">© {new Date().getFullYear()} Halcyon Haus</p>
        <div className="flex justify-center space-x-6 text-gray-500">
          <a
            href="https://www.instagram.com/halcyonhaus_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg className="h-4 w-4 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@halcyonhaus_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <svg className="h-4 w-4 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 3v12a3 3 0 103 3V9c.6.3 1.3.5 2 .5h1V7h-1c-.6 0-1-.4-1-1V3h-4z"/>
            </svg>
          </a>
          <a
            href="https://www.shopltk.com/explore/halcyonhaus"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LTK"
          >
            <svg className="h-4 w-4 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm9-6a6 6 0 100 12 6 6 0 000-12z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
