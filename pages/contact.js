import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const PAGE_URL = "https://www.halcyonhaus.com/contact";
const PAGE_TITLE = "Work Together | Denver Interior Designer, Halcyon Haus";
const PAGE_DESCRIPTION =
  "Start your interior design project with Halcyon Haus. Share your space, budget, and timeline, and Nikka Winchell will follow up.";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": PAGE_TITLE,
  "url": PAGE_URL,
  "about": {
    "@type": "Organization",
    "name": "Halcyon Haus",
    "url": "https://www.halcyonhaus.com",
    "email": "hello@halcyonhaus.com",
    "areaServed": ["Denver, CO", "Castle Rock, CO", "Palm Springs, CA"]
  }
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      projectType: form.projectType.value,
      budget: form.budget.value,
      timeline: form.timeline.value,
      startDate: form.startDate.value,
      rooms: form.rooms.value,
      currentLikes: form.currentLikes.value,
      currentDislikes: form.currentDislikes.value,
      desiredFeel: form.desiredFeel.value,
      workedWithDesigner: form.workedWithDesigner.value,
      inspirationLink: form.inspirationLink.value,
      referralSource: form.referralSource.value,
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
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content="https://www.halcyonhaus.com/images/HEROKITCHEN1.JPG" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content="https://www.halcyonhaus.com/images/HEROKITCHEN1.JPG" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
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
      <main className="px-6 pt-24 pb-24 max-w-4xl mx-auto">
        <h1
          className="text-2xl md:text-2xl font-light tracking-[0.1em] text-center uppercase mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          WORK TOGETHER
        </h1>

        <p className="mt-10 text-sm leading-7 text-center tracking-wide font-inter text-gray-700">
          Thoughtfully curated interiors begin with a conversation. Let&apos;s connect.
        </p>

        <p className="mt-3 text-sm leading-7 text-center tracking-wide font-inter text-gray-700">
          Based in Castle Rock, Colorado and Palm Springs, California, working with clients across the country, in person and virtually.
        </p>

        <p className="mt-6 text-xs text-center text-gray-500 font-inter">
          For general questions or press inquiries, contact{" "}
          <a href="mailto:hello@halcyonhaus.com" className="underline hover:text-black">
            hello@halcyonhaus.com
          </a>
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
                Name <span className="text-gray-400">*</span>
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
                Email <span className="text-gray-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white"
              />
            </div>

            {/* More Details, optional, collapsed by default so the form feels quick */}
            <div className="border-t border-b border-gray-200">
              <button
                type="button"
                onClick={() => setDetailsOpen(!detailsOpen)}
                className="w-full flex items-center justify-between py-4 text-left font-inter uppercase tracking-widest text-xs text-gray-700"
                aria-expanded={detailsOpen}
              >
                <span>More Details (Optional)</span>
                <ChevronDown
                  size={16}
                  strokeWidth={1.2}
                  className={`flex-shrink-0 ml-4 transition-transform duration-300 ${detailsOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                style={{ gridTemplateRows: detailsOpen ? "1fr" : "0fr" }}
                className="grid transition-[grid-template-rows] duration-300 ease-in-out"
              >
                <div className="overflow-hidden">
                  <div className="pb-6 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectType" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
                          Project Type
                        </label>
                        <div className="relative">
                          <select
                            id="projectType"
                            name="projectType"
                            defaultValue=""
                            className="w-full appearance-none border border-gray-300 rounded-md px-3 py-1.5 pr-8 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white text-gray-700"
                          >
                            <option value="">Select one</option>
                            <option value="Full-Service Design">Full-Service Design</option>
                            <option value="Room Refresh">Room Refresh</option>
                            <option value="Virtual Design">Virtual Design</option>
                            <option value="Hourly Design Support">Hourly Design Support</option>
                            <option value="Not sure yet">Not sure yet</option>
                          </select>
                          <svg
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400"
                            fill="none"
                            viewBox="0 0 12 8"
                          >
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="timeline" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
                          Timeline
                        </label>
                        <div className="relative">
                          <select
                            id="timeline"
                            name="timeline"
                            defaultValue=""
                            className="w-full appearance-none border border-gray-300 rounded-md px-3 py-1.5 pr-8 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white text-gray-700"
                          >
                            <option value="">Select one</option>
                            <option value="ASAP">ASAP</option>
                            <option value="1-3 months">1-3 months</option>
                            <option value="3-6 months">3-6 months</option>
                            <option value="Just exploring">Just exploring</option>
                          </select>
                          <svg
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400"
                            fill="none"
                            viewBox="0 0 12 8"
                          >
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
                        Estimated Budget
                      </label>
                      <div className="relative">
                        <select
                          id="budget"
                          name="budget"
                          defaultValue=""
                          className="w-full appearance-none border border-gray-300 rounded-md px-3 py-1.5 pr-8 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white text-gray-700"
                        >
                          <option value="">Select one</option>
                          <option value="Under $10k">Under $10k</option>
                          <option value="$10k-$50k">$10k-$50k</option>
                          <option value="$50k-$150k">$50k-$150k</option>
                          <option value="$150k+">$150k+</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                        <svg
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400"
                          fill="none"
                          viewBox="0 0 12 8"
                        >
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="startDate" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
                        Desired Start Date
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white text-gray-700"
                      />
                    </div>

                    <div>
                      <label htmlFor="rooms" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
                        Which Room(s)
                      </label>
                      <input
                        type="text"
                        id="rooms"
                        name="rooms"
                        placeholder="e.g. Kitchen, primary bath"
                        className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="currentLikes" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
                        What Do You Love About the Space Now
                      </label>
                      <input
                        type="text"
                        id="currentLikes"
                        name="currentLikes"
                        placeholder="Anything worth keeping or building on"
                        className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="currentDislikes" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
                        What&apos;s Not Working Right Now
                      </label>
                      <input
                        type="text"
                        id="currentDislikes"
                        name="currentDislikes"
                        placeholder="The stuff that's bugging you"
                        className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="desiredFeel" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
                        How Should the Space Feel
                      </label>
                      <input
                        type="text"
                        id="desiredFeel"
                        name="desiredFeel"
                        placeholder="e.g. calm, warm, elevated"
                        className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white placeholder:text-gray-400"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="workedWithDesigner" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
                          Worked With a Designer Before
                        </label>
                        <div className="relative">
                          <select
                            id="workedWithDesigner"
                            name="workedWithDesigner"
                            defaultValue=""
                            className="w-full appearance-none border border-gray-300 rounded-md px-3 py-1.5 pr-8 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white text-gray-700"
                          >
                            <option value="">Select one</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                          <svg
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400"
                            fill="none"
                            viewBox="0 0 12 8"
                          >
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="inspirationLink" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
                          Inspiration Link
                        </label>
                        <input
                          type="text"
                          id="inspirationLink"
                          name="inspirationLink"
                          placeholder="Pinterest board, etc."
                          className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="referralSource" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
                        How Did You Hear About Halcyon Haus
                      </label>
                      <div className="relative">
                        <select
                          id="referralSource"
                          name="referralSource"
                          defaultValue=""
                          className="w-full appearance-none border border-gray-300 rounded-md px-3 py-1.5 pr-8 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white text-gray-700"
                        >
                          <option value="">Select one</option>
                          <option value="Instagram">Instagram</option>
                          <option value="TikTok">TikTok</option>
                          <option value="Google Search">Google Search</option>
                          <option value="Referral">Referral</option>
                          <option value="Press/Publication">Press/Publication</option>
                          <option value="Other">Other</option>
                        </select>
                        <svg
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400"
                          fill="none"
                          viewBox="0 0 12 8"
                        >
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
                Tell me about your space <span className="text-gray-400">*</span>
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
          <p className="text-center mt-10 text-sm text-gray-700 font-inter">Thank you, I&apos;ll be in touch soon!</p>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-8 pb-10 text-center text-xs text-gray-500 uppercase tracking-widest font-inter">
        <p className="mb-2">© {new Date().getFullYear()} Halcyon Haus</p>
      </footer>
    </div>
  );
}
