import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      projectType: form.projectType.value,
      budget: form.budget.value,
      timeline: form.timeline.value,
      message: form.message.value,
    };

    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/mkgbrrnw", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        form.reset();
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-black font-sans bg-[#fafafa]">
      <Head>
        <title>Work Together | Denver Interior Designer, Halcyon Haus</title>
        <meta
          name="description"
          content="Start your interior design project with Halcyon Haus. Share your space, budget, and timeline, and Nikka Winchell will follow up."
        />
        <link rel="canonical" href="https://www.halcyonhaus.com/contact" />
        <meta property="og:title" content="Work Together | Halcyon Haus" />
        <meta property="og:description" content="Start your interior design project with Halcyon Haus, Denver, CO and coast to coast." />
        <meta property="og:image" content="https://www.halcyonhaus.com/images/HEROKITCHEN1.JPG" />
        <meta property="og:url" content="https://www.halcyonhaus.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Work Together | Halcyon Haus" />
        <meta name="twitter:description" content="Start your interior design project with Halcyon Haus." />
        <meta name="twitter:image" content="https://www.halcyonhaus.com/images/HEROKITCHEN1.JPG" />
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

      {/* Main Section */}
      <main className="px-6 pt-24 pb-24 max-w-2xl mx-auto">
        <h1
          className="text-2xl md:text-2xl font-light tracking-[0.1em] text-center uppercase mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          WORK TOGETHER
        </h1>

        <p
          className="mt-10 text-sm leading-7 text-center tracking-wide text-gray-700"
          style={{ fontFamily: "'inter', serif" }}
        >
          Thoughtfully curated interiors begin with a conversation. Let's connect.
        </p>

        <div className="mt-10 flex justify-center space-x-4 text-xs uppercase tracking-widest font-inter text-black">
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

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 text-sm max-w-2xl mx-auto mt-10">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectType" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
                  Project Type <span className="normal-case tracking-normal text-gray-400">(optional)</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  defaultValue=""
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white"
                >
                  <option value="">Select one</option>
                  <option value="Full-Service Design">Full-Service Design</option>
                  <option value="Room Refresh">Room Refresh</option>
                  <option value="Virtual Design">Virtual Design</option>
                  <option value="Consultation Only">Consultation Only</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
                  Timeline <span className="normal-case tracking-normal text-gray-400">(optional)</span>
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  defaultValue=""
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white"
                >
                  <option value="">Select one</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="Just exploring">Just exploring</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="budget" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
                Estimated Budget <span className="normal-case tracking-normal text-gray-400">(optional)</span>
              </label>
              <select
                id="budget"
                name="budget"
                defaultValue=""
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white"
              >
                <option value="">Select one</option>
                <option value="Under $10k">Under $10k</option>
                <option value="$10k-$50k">$10k-$50k</option>
                <option value="$50k-$150k">$50k-$150k</option>
                <option value="$150k+">$150k+</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
                Tell me about your space
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
                disabled={submitting}
                className="px-5 py-1.5 text-xs uppercase tracking-widest border border-gray-400 rounded-md hover:bg-gray-100 hover:text-black transition-colors duration-300 font-inter disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        ) : (
          <p className="text-center mt-10 text-sm text-gray-700 font-inter">Thank you, I'll be in touch soon!</p>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-8 pb-10 text-center text-xs text-gray-500 uppercase tracking-widest font-inter">
        <p className="mb-2">© {new Date().getFullYear()} Halcyon Haus</p>
      </footer>
    </div>
  );
}
