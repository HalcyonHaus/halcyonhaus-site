// pages/interior-designer/castle-pines.js
// -----------------------------------------------------------------------------
// Halcyon Haus — local SEO landing page for Castle Pines.
// Matches the site: Pages Router, Tailwind, next/head for SEO + JSON-LD, the
// same nav/footer, and the SAME contact form as /contact (posts to Formspree).
// The form sends a hidden field source: "Castle Pines landing page" so you can
// tell in Formspree which inquiries came from this page.
// URL once deployed:  https://www.halcyonhaus.com/interior-designer/castle-pines
// -----------------------------------------------------------------------------

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const PAGE_URL = "https://www.halcyonhaus.com/interior-designer/castle-pines";
const PAGE_TITLE = "Interior Designer in Castle Pines, CO | Halcyon Haus";
const PAGE_DESCRIPTION =
  "Boutique interior designer serving Castle Pines, Colorado. Full-service kitchen, bath, and whole-home renovation by Nikka Winchell of Halcyon Haus. Featured in Homes & Gardens.";

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "InteriorDesignService", "HomeAndConstructionBusiness"],
      "@id": `${PAGE_URL}#business`,
      name: "Halcyon Haus",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      image: "https://www.halcyonhaus.com/images/HEROKITCHEN00.jpg",
      founder: { "@type": "Person", name: "Nikka Winchell" },
      priceRange: "$$$",
      areaServed: [
        { "@type": "City", name: "Castle Pines" },
        { "@type": "City", name: "Castle Rock" },
        { "@type": "City", name: "Lone Tree" },
        { "@type": "City", name: "Highlands Ranch" },
        { "@type": "City", name: "Greenwood Village" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Castle Pines",
        addressRegion: "CO",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 39.4578, longitude: -104.8958 },
      sameAs: [
        "https://www.instagram.com/halcyonhaus_",
        "https://www.tiktok.com/@halcyonhaus_",
        "https://www.shopltk.com/explore/halcyonhaus",
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      serviceType: "Interior Design and Renovation",
      provider: { "@id": `${PAGE_URL}#business` },
      areaServed: { "@type": "City", name: "Castle Pines" },
      description:
        "Full-service interior design and renovation in Castle Pines, Colorado: kitchens, bathrooms, and main-level remodels.",
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you only work in Castle Pines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Halcyon Haus is based in Castle Rock and works throughout the south Denver metro, including Castle Pines, Lone Tree, Highlands Ranch, and Greenwood Village, as well as virtually nationwide.",
          },
        },
        {
          "@type": "Question",
          name: "What does full-service design include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Full-service covers the whole project: layout and space planning, cabinetry and custom millwork, tile and stone, lighting, plumbing fixtures, paint, sourcing, styling, and managing the install.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with my contractor, or bring your own?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both work. We can collaborate with a contractor you already trust, or bring in builders from our network, and we stay involved through construction so the design is carried out the way it was drawn.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a fee for the first call?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The discovery call is complimentary. It is a chance to get to know your space and talk through what working together would look like.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a project cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Investment varies widely with the scope of the work, so pricing is tailored to each project rather than listed as a flat number. The best first step is to share your space, timeline, and budget and we will talk it through.",
          },
        },
      ],
    },
  ],
};

const PHILOSOPHY = [
  { name: "Provenance", body: "Every object carries a history, and that history is worth understanding before it's touched. Knowing where something came from is what separates real preservation from guesswork." },
  { name: "Preservation", body: "Some homes have lived past their prime but still have a story to tell. A home's character was never in the studs and drywall. The work is knowing which parts of that story to keep, and building something new around them." },
  { name: "Permanence", body: "Underneath every choice is a material or finish built to age alongside the people living with it. Homes made to outlast the moment they were designed in, not just fit inside it." },
];

const PROCESS = [
  { title: "Discovery Call", description: "A complimentary conversation where we get to know your space and talk through what working together would look like." },
  { title: "Design Consultation", description: "On site for Denver area clients, or virtual elsewhere. We walk through your space together and talk scope, vision, and timeline." },
  { title: "Site Analysis & Scope", description: "We measure the space, assess natural light and structural conditions, and define the full scope of the project." },
  { title: "Space Planning", description: "Floor plans are developed and layouts tested until the flow and function feel right, before any style decisions are made." },
  { title: "Concept & Mood Boards", description: "Direction, palette, and early material choices take shape, reviewed with you at every step." },
  { title: "Material & Furnishings Selection", description: "Every finish, fixture, and piece of furniture is refined until the space is fully specified." },
  { title: "Drawings & Specifications", description: "2D layouts or 3D modeling as needed, with permitting coordinated for larger projects." },
  { title: "Execution & Installation", description: "Contractor coordination, ordering, tracking, and final installation. We manage the details so the design comes to life exactly as planned." },
];

const GALLERY = [
  { src: "/images/PashminaKitchen1.jpg", alt: "Kitchen with reeded glass uppers and polished nickel faucet in Castle Pines Colorado" },
  { src: "/images/DSC03252.jpg", alt: "Custom cabinet detail with unlacquered brass knobs and pulls in warm taupe kitchen" },
  { src: "/images/KITCHENBLOG3.JPG", alt: "Matched veining from counter to backsplash in a Castle Pines kitchen remodel" },
];

const FAQS = [
  { q: "Do you only work in Castle Pines?", a: "No. Halcyon Haus is based in Castle Rock and works throughout the south Denver metro, including Castle Pines, Lone Tree, Highlands Ranch, and Greenwood Village, as well as virtually nationwide." },
  { q: "What does full-service design include?", a: "Full-service covers the whole project: layout and space planning, cabinetry and custom millwork, tile and stone, lighting, plumbing fixtures, paint, sourcing, styling, and managing the install." },
  { q: "Do you work with my contractor, or bring your own?", a: "Both work. We can collaborate with a contractor you already trust, or bring in builders from our network, and we stay involved through construction so the design is carried out the way it was drawn." },
  { q: "Is there a fee for the first call?", a: "No. The discovery call is complimentary. It's a chance to get to know your space and talk through what working together would look like." },
  { q: "How much does a project cost?", a: "Investment varies widely with the scope of the work, so pricing is tailored to each project rather than listed as a flat number. The best first step is to share your space, timeline, and budget below and we'll talk it through." },
  { q: "How do we get started?", a: "Fill out the form below with a little about your space and goals, and Nikka will follow up personally to talk through the project and the right level of service." },
];

export default function CastlePines() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      source: "Castle Pines landing page",
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
        headers: { Accept: "application/json", "Content-Type": "application/json" },
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
        <meta
          name="keywords"
          content="interior designer Castle Pines, Castle Pines kitchen remodel designer, Castle Pines renovation, Castle Pines Village interior design, Colorado interior designer, Halcyon Haus, Nikka Winchell"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content="https://www.halcyonhaus.com/images/HEROKITCHEN00.jpg" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content="https://www.halcyonhaus.com/images/HEROKITCHEN00.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
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

      <main className="pt-28 pb-24 max-w-[90rem] mx-auto px-4 md:px-10">
        {/* HERO */}
        <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Castle Pines, CO</p>
        <h1 className="text-3xl md:text-5xl font-light tracking-[0.06em] text-center mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Interior Designer in Castle Pines
        </h1>
        <p className="font-inter text-sm md:text-base leading-7 tracking-wide text-gray-700 max-w-3xl mx-auto text-center mb-10">
          Halcyon Haus is a full-service design studio working with homeowners across Castle Pines and Castle Pines Village. We take on turn-key renovations, from full builds to room reconfigurations, rooted in warm, transitional design that is built around how you actually live.
        </p>
        <div className="text-center mb-20">
          <a href="#inquire" className="inline-block bg-black text-[#fafafa] text-xs uppercase tracking-[0.16em] px-8 py-4 hover:bg-neutral-700 transition-colors">
            Start your project
          </a>
        </div>

        <div className="mb-20">
          <img src="/images/HEROKITCHEN00.jpg" alt="Castle Pines kitchen with Benjamin Moore Pashmina cabinets and Venetian plaster range hood by Halcyon Haus" className="w-full rounded-md object-cover" />
        </div>

        {/* LOCAL CONTEXT */}
        <section className="max-w-3xl mx-auto mb-24 px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.04em] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Renovation design for Castle Pines homes
          </h2>
          <div className="font-inter text-sm leading-7 tracking-wide text-gray-700 space-y-5">
            <p>
              Many homes around Castle Pines Village and the surrounding golf communities were built with good bones and kitchens, baths, and main levels that no longer fit how families live today. That is the work Halcyon Haus is built for: opening up a closed floor plan, rethinking a kitchen around how you cook and gather, and choosing materials that feel settled and warm rather than trend-driven.
            </p>
            <p>
              Halcyon Haus is a full-service studio, which means we can take a project from the first layout decision through the final styling. We serve Castle Pines and nearby Castle Rock, Lone Tree, Highlands Ranch and Greenwood Village, in person and virtually.
            </p>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="max-w-5xl mx-auto mb-24 px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.04em] mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            How we approach a home
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PHILOSOPHY.map((p) => (
              <div key={p.name}>
                <h3 className="text-lg tracking-wide mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{p.name}</h3>
                <p className="font-inter text-sm leading-7 tracking-wide text-gray-700">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ANCHOR PROJECT */}
        <section className="max-w-6xl mx-auto mb-24 px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.04em] mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            A recent Castle Pines project
          </h2>
          <Link href="/projects/canyon-cottage-kitchen" legacyBehavior>
            <a className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10 group">
              <div className="overflow-hidden rounded-md">
                <img src="/images/HEROKITCHEN00.jpg" alt="Castle Pines kitchen with Benjamin Moore Pashmina cabinets and Venetian plaster range hood by Halcyon Haus" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
              </div>
              <div>
                <h3 className="text-xl mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Canyon Cottage Kitchen</h3>
                <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-4">Castle Pines Village</p>
                <p className="font-inter text-sm leading-7 tracking-wide text-gray-700 mb-5">
                  A full kitchen renovation in Castle Pines Village built around Benjamin Moore Pashmina cabinetry, a custom Venetian plaster range hood with integrated spice cubbies, vein-matched Mont Blanc quartzite, and a mix of unlacquered brass and polished nickel.
                </p>
                <span className="text-xs uppercase tracking-[0.14em] border-b border-neutral-400 pb-0.5">View the project</span>
              </div>
            </a>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {GALLERY.map((g) => (
              <div key={g.src} className="overflow-hidden rounded-md md:h-[32rem]">
                <img src={g.src} alt={g.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIAL — real Castle Pines client review */}
        <section className="max-w-3xl mx-auto mb-24 px-4 md:px-0 text-center">
          <blockquote>
            <p className="text-lg md:text-2xl leading-relaxed mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              &ldquo;Incredible designer, sweetest human with impeccable taste! Really knows how to visualize spaces and then transform them. She is extremely knowledgeable, knows where to splurge and where to save, and was happy to work within our budget and be very honest with design recommendations.&rdquo;
            </p>
            <cite className="not-italic text-xs uppercase tracking-[0.18em] text-gray-500">Castle Pines, CO</cite>
          </blockquote>
        </section>

        {/* PROCESS */}
        <section className="max-w-5xl mx-auto mb-24 px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.04em] mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            How we work
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="border-t border-neutral-200 pt-4">
                <div className="flex gap-4">
                  <span className="text-xs tracking-[0.2em] text-gray-400 pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-base mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                    <p className="font-inter text-sm leading-7 tracking-wide text-gray-700">{step.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* FEATURED IN */}
        <section className="max-w-5xl mx-auto mb-24 px-4 md:px-0 text-center">
          <h2 className="text-xs uppercase tracking-[0.22em] text-gray-500 mb-8 font-inter">Featured in</h2>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-70">
            <img src="/logos/potterybarn.png" alt="Pottery Barn logo" className="h-6 md:h-7 w-auto object-contain" />
            <img src="/logos/westelm.png" alt="West Elm logo" className="h-6 md:h-7 w-auto object-contain" />
            <img src="/logos/cratebarrel.png" alt="Crate & Barrel logo" className="h-6 md:h-7 w-auto object-contain" />
            <img src="/logos/amberinteriors.png" alt="Amber Interiors logo" className="h-6 md:h-7 w-auto object-contain" />
            <img src="/logos/serenaandlily.png" alt="Serena & Lily logo" className="h-6 md:h-7 w-auto object-contain" />
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto mb-24 px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.04em] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Castle Pines design questions, answered
          </h2>
          <dl>
            {FAQS.map((f) => (
              <div key={f.q} className="border-t border-neutral-200 py-6">
                <dt className="text-base mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{f.q}</dt>
                <dd className="font-inter text-sm leading-7 tracking-wide text-gray-700">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* CONTACT FORM — same as /contact, posts to Formspree, tagged as this page */}
        <section id="inquire" className="max-w-2xl mx-auto px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.04em] mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Start your Castle Pines project
          </h2>
          <p className="font-inter text-sm leading-7 tracking-wide text-gray-700 text-center mb-10">
            Share your space, timeline, and budget and Nikka will follow up personally. Based in Castle Rock and Palm Springs, working across the Denver metro and virtually nationwide.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 text-sm">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
                  Name <span className="text-gray-400">*</span>
                </label>
                <input type="text" id="name" name="name" required
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white" />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">
                  Email <span className="text-gray-400">*</span>
                </label>
                <input type="email" id="email" name="email" required
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white" />
              </div>

              {/* More Details, optional, collapsed by default */}
              <div className="border-t border-b border-gray-200">
                <button type="button" onClick={() => setDetailsOpen(!detailsOpen)} aria-expanded={detailsOpen}
                  className="w-full flex items-center justify-between py-4 text-left font-inter uppercase tracking-widest text-xs text-gray-700">
                  <span>More Details (Optional)</span>
                  <ChevronDown size={16} strokeWidth={1.2}
                    className={`flex-shrink-0 ml-4 transition-transform duration-300 ${detailsOpen ? "rotate-180" : ""}`} />
                </button>
                <div style={{ gridTemplateRows: detailsOpen ? "1fr" : "0fr" }}
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out">
                  <div className="overflow-hidden">
                    <div className="pb-6 space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="projectType" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">Project Type</label>
                          <div className="relative">
                            <select id="projectType" name="projectType" defaultValue=""
                              className="w-full appearance-none border border-gray-300 rounded-md px-3 py-1.5 pr-8 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white text-gray-700">
                              <option value="">Select one</option>
                              <option value="Full-Service Design">Full-Service Design</option>
                              <option value="Room Refresh">Room Refresh</option>
                              <option value="Virtual Design">Virtual Design</option>
                              <option value="The Walk & Plan">The Walk & Plan</option>
                              <option value="Not sure yet">Not sure yet</option>
                            </select>
                            <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400" fill="none" viewBox="0 0 12 8">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="timeline" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">Timeline</label>
                          <div className="relative">
                            <select id="timeline" name="timeline" defaultValue=""
                              className="w-full appearance-none border border-gray-300 rounded-md px-3 py-1.5 pr-8 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white text-gray-700">
                              <option value="">Select one</option>
                              <option value="ASAP">ASAP</option>
                              <option value="1-3 months">1-3 months</option>
                              <option value="3-6 months">3-6 months</option>
                              <option value="Just exploring">Just exploring</option>
                            </select>
                            <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400" fill="none" viewBox="0 0 12 8">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">Estimated Budget</label>
                        <div className="relative">
                          <select id="budget" name="budget" defaultValue=""
                            className="w-full appearance-none border border-gray-300 rounded-md px-3 py-1.5 pr-8 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white text-gray-700">
                            <option value="">Select one</option>
                            <option value="Under $10k">Under $10k</option>
                            <option value="$10k-$50k">$10k-$50k</option>
                            <option value="$50k-$150k">$50k-$150k</option>
                            <option value="$150k+">$150k+</option>
                            <option value="Not sure yet">Not sure yet</option>
                          </select>
                          <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400" fill="none" viewBox="0 0 12 8">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="startDate" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">Desired Start Date</label>
                        <input type="date" id="startDate" name="startDate"
                          className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white text-gray-700" />
                      </div>

                      <div>
                        <label htmlFor="rooms" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">Which Room(s)</label>
                        <input type="text" id="rooms" name="rooms" placeholder="e.g. Kitchen, primary bath"
                          className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white placeholder:text-gray-400" />
                      </div>

                      <div>
                        <label htmlFor="currentLikes" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">What Do You Love About the Space Now</label>
                        <input type="text" id="currentLikes" name="currentLikes" placeholder="Anything worth keeping or building on"
                          className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white placeholder:text-gray-400" />
                      </div>

                      <div>
                        <label htmlFor="currentDislikes" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">What&apos;s Not Working Right Now</label>
                        <input type="text" id="currentDislikes" name="currentDislikes" placeholder="The stuff that's bugging you"
                          className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white placeholder:text-gray-400" />
                      </div>

                      <div>
                        <label htmlFor="desiredFeel" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">How Should the Space Feel</label>
                        <input type="text" id="desiredFeel" name="desiredFeel" placeholder="e.g. calm, warm, elevated"
                          className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white placeholder:text-gray-400" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="workedWithDesigner" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">Worked With a Designer Before</label>
                          <div className="relative">
                            <select id="workedWithDesigner" name="workedWithDesigner" defaultValue=""
                              className="w-full appearance-none border border-gray-300 rounded-md px-3 py-1.5 pr-8 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white text-gray-700">
                              <option value="">Select one</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                            <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400" fill="none" viewBox="0 0 12 8">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="inspirationLink" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">Inspiration Link</label>
                          <input type="text" id="inspirationLink" name="inspirationLink" placeholder="Pinterest board, etc."
                            className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white placeholder:text-gray-400" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="referralSource" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">How Did You Hear About Halcyon Haus</label>
                        <div className="relative">
                          <select id="referralSource" name="referralSource" defaultValue=""
                            className="w-full appearance-none border border-gray-300 rounded-md px-3 py-1.5 pr-8 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white text-gray-700">
                            <option value="">Select one</option>
                            <option value="Instagram">Instagram</option>
                            <option value="TikTok">TikTok</option>
                            <option value="Google Search">Google Search</option>
                            <option value="Referral">Referral</option>
                            <option value="Press/Publication">Press/Publication</option>
                            <option value="Other">Other</option>
                          </select>
                          <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400" fill="none" viewBox="0 0 12 8">
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
                <textarea id="message" name="message" rows="4" required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white"></textarea>
              </div>

              <div className="flex justify-center mt-6">
                <button type="submit" disabled={submitting}
                  className="px-5 py-1.5 text-xs uppercase tracking-widest border border-gray-400 rounded-md hover:bg-gray-100 hover:text-black transition-colors duration-300 font-inter disabled:opacity-50">
                  {submitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          ) : (
            <p className="text-center mt-10 text-sm text-gray-700 font-inter">Thank you, I&apos;ll be in touch soon!</p>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-8 pb-10 text-center text-xs text-gray-500 uppercase tracking-widest font-inter">
        <p className="mb-2">© {new Date().getFullYear()} Halcyon Haus</p>
      </footer>
    </div>
  );
}
