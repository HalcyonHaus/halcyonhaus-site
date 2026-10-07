// pages/interior-designer/highlands-ranch.js
// Halcyon Haus — local SEO landing page for Highlands Ranch, CO.
// Matches the site: Pages Router, Tailwind, next/head SEO + JSON-LD, bordered
// CTA, collapsible FAQ, and the SAME contact form as /contact (Formspree).
// The form sends source: "Highlands Ranch landing page" so you can tell leads apart.
// URL: https://www.halcyonhaus.com/interior-designer/highlands-ranch

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const PAGE_URL = "https://www.halcyonhaus.com/interior-designer/highlands-ranch";
const PAGE_TITLE = "Interior Designer in Highlands Ranch, CO | Halcyon Haus";
const PAGE_DESCRIPTION = "Boutique interior designer serving Highlands Ranch, Colorado. Full-service kitchen, bath, and whole-home renovation by Nikka Winchell of Halcyon Haus. Featured in Homes & Gardens.";

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "InteriorDesignService", "HomeAndConstructionBusiness"],
      "@id": PAGE_URL + "#business",
      name: "Halcyon Haus",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      image: "https://www.halcyonhaus.com" + "/images/DSC01677.jpeg",
      founder: { "@type": "Person", name: "Nikka Winchell" },
      priceRange: "$$$",
      areaServed: [
        { "@type": "City", name: "Highlands Ranch" },
        { "@type": "City", name: "Littleton" },
        { "@type": "City", name: "Lone Tree" },
        { "@type": "City", name: "Castle Pines" },
        { "@type": "City", name: "Centennial" }
      ],
      address: { "@type": "PostalAddress", addressLocality: "Highlands Ranch", addressRegion: "CO", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 39.5539, longitude: -104.9689 },
      sameAs: [
        "https://www.instagram.com/halcyonhaus_",
        "https://www.tiktok.com/@halcyonhaus_",
        "https://www.shopltk.com/explore/halcyonhaus"
      ]
    },
    {
      "@type": "Service",
      "@id": PAGE_URL + "#service",
      serviceType: "Interior Design and Renovation",
      provider: { "@id": PAGE_URL + "#business" },
      areaServed: { "@type": "City", name: "Highlands Ranch" },
      description: "Full-service interior design and renovation in Highlands Ranch, Colorado: kitchens, bathrooms, and whole-home remodels."
    },
    {
      "@type": "FAQPage",
      "@id": PAGE_URL + "#faq",
      mainEntity: [
        { "@type": "Question", name: "Do you work on older Highlands Ranch homes?", acceptedAnswer: { "@type": "Answer", text: "Yes, that's much of what we do here. Many Highlands Ranch homes were built from the 1980s through the 2000s and are now ready for their first real update. We refresh dated kitchens, baths, and finishes while keeping what makes the home comfortable." } },
        { "@type": "Question", name: "What does full-service design include?", acceptedAnswer: { "@type": "Answer", text: "Full-service covers the whole project: layout and space planning, cabinetry and custom millwork, tile and stone, lighting, plumbing fixtures, paint, sourcing, styling, and managing the install." } },
        { "@type": "Question", name: "Do you work with my contractor, or bring your own?", acceptedAnswer: { "@type": "Answer", text: "Both work. We can collaborate with a contractor you already trust, or bring in builders from our network, and we stay involved through construction so the design is carried out the way it was drawn." } },
        { "@type": "Question", name: "Is there a fee for the first call?", acceptedAnswer: { "@type": "Answer", text: "No. The discovery call is complimentary. It's a chance to get to know your space and talk through what working together would look like." } },
        { "@type": "Question", name: "How much does a project cost?", acceptedAnswer: { "@type": "Answer", text: "Investment varies widely with the scope of the work, so pricing is tailored to each project rather than listed as a flat number. Share your space, timeline, and budget below and we'll talk it through." } },
        { "@type": "Question", name: "How do we get started?", acceptedAnswer: { "@type": "Answer", text: "Fill out the form below with a little about your space and goals, and Nikka will follow up personally." } }
      ]
    }
  ]
};

const PHILOSOPHY = [
  { name: "Provenance", body: "Every object carries a history, and that history is worth understanding before it's touched. Knowing where something came from is what separates real preservation from guesswork." },
  { name: "Preservation", body: "Some homes have lived past their prime but still have a story to tell. A home's character was never in the studs and drywall. The work is knowing which parts of that story to keep, and building something new around them." },
  { name: "Permanence", body: "Underneath every choice is a material or finish built to age alongside the people living with it. Homes made to outlast the moment they were designed in, not just fit inside it." }
];

const PROCESS = [
  { title: "Discovery Call", description: "A complimentary conversation where we get to know your space and talk through what working together would look like." },
  { title: "Design Consultation", description: "On site for Denver area clients, or virtual elsewhere. We walk through your space together and talk scope, vision, and timeline." },
  { title: "Site Analysis & Scope", description: "We measure the space, assess natural light and structural conditions, and define the full scope of the project." },
  { title: "Space Planning", description: "Floor plans are developed and layouts tested until the flow and function feel right, before any style decisions are made." },
  { title: "Concept & Mood Boards", description: "Direction, palette, and early material choices take shape, reviewed with you at every step." },
  { title: "Material & Furnishings Selection", description: "Every finish, fixture, and piece of furniture is refined until the space is fully specified." },
  { title: "Drawings & Specifications", description: "2D layouts or 3D modeling as needed, with permitting coordinated for larger projects." },
  { title: "Execution & Installation", description: "Contractor coordination, ordering, tracking, and final installation. We manage the details so the design comes to life exactly as planned." }
];

const GALLERY = [
  { src: "/images/DSC01677.jpeg", alt: "Highlands Ranch living space with warm neutral transitional design by Halcyon Haus" },
  { src: "/images/NURSERY1.JPG", alt: "Highlands Ranch nursery in neutral tones with a mountain adventure theme by Halcyon Haus" },
  { src: "/images/DSC02113.jpeg", alt: "Highlands Ranch primary suite redesign with layered neutral textures by Halcyon Haus" },
  { src: "/images/DSC01631.jpeg", alt: "Highlands Ranch interior detail with collected, warm furnishings by Halcyon Haus" },
  { src: "/images/NURSERY4.JPG", alt: "Neutral nursery detail with natural materials in Highlands Ranch" },
  { src: "/images/DSC01503.jpeg", alt: "Warm transitional living space in Highlands Ranch by Halcyon Haus" }
];

const FAQS = [
  { q: "Do you work on older Highlands Ranch homes?", a: "Yes, that's much of what we do here. Many Highlands Ranch homes were built from the 1980s through the 2000s and are now ready for their first real update. We refresh dated kitchens, baths, and finishes while keeping what makes the home comfortable." },
  { q: "What does full-service design include?", a: "Full-service covers the whole project: layout and space planning, cabinetry and custom millwork, tile and stone, lighting, plumbing fixtures, paint, sourcing, styling, and managing the install." },
  { q: "Do you work with my contractor, or bring your own?", a: "Both work. We can collaborate with a contractor you already trust, or bring in builders from our network, and we stay involved through construction so the design is carried out the way it was drawn." },
  { q: "Is there a fee for the first call?", a: "No. The discovery call is complimentary. It's a chance to get to know your space and talk through what working together would look like." },
  { q: "How much does a project cost?", a: "Investment varies widely with the scope of the work, so pricing is tailored to each project rather than listed as a flat number. Share your space, timeline, and budget below and we'll talk it through." },
  { q: "How do we get started?", a: "Fill out the form below with a little about your space and goals, and Nikka will follow up personally." }
];

const PRESS = [
  { n: "Pottery Barn", s: "/logos/potterybarn.png" },
  { n: "West Elm", s: "/logos/westelm.png" },
  { n: "Crate & Barrel", s: "/logos/cratebarrel.png" },
  { n: "Amber Interiors", s: "/logos/amberinteriors.png" },
  { n: "Serena & Lily", s: "/logos/serenaandlily.png" }
];

export default function HighlandsRanch() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      source: "Highlands Ranch landing page",
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
      if (res.ok) { form.reset(); setSubmitted(true); }
      else { alert("Something went wrong. Please try again."); }
    } finally { setSubmitting(false); }
  };

  return (
    <div className="min-h-screen text-black font-sans bg-[#fafafa]">
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="keywords" content="interior designer Highlands Ranch, Highlands Ranch kitchen remodel designer, Highlands Ranch renovation, Highlands Ranch interior design, Colorado interior designer, Halcyon Haus, Nikka Winchell" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content={"https://www.halcyonhaus.com" + "/images/DSC01677.jpeg"} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={"https://www.halcyonhaus.com" + "/images/DSC01677.jpeg"} />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
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
        <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Highlands Ranch, CO</p>
        <h1 className="text-3xl md:text-5xl font-light tracking-[0.06em] text-center mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Interior Designer in Highlands Ranch
        </h1>
        <p className="font-inter text-sm md:text-base leading-7 tracking-wide text-gray-700 max-w-3xl mx-auto text-center mb-10">
          Halcyon Haus is a full-service design studio working with homeowners across Highlands Ranch. In fact, this is where it began. Our founder's own first home, and the one that gave Halcyon Haus its name, is here. We take on renovations rooted in warm, transitional design that is built around how you actually live.
        </p>
        <div className="text-center mb-20">
          <a href="#inquire" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-inter text-black border-b border-black pb-1 transition-all duration-300 hover:gap-3 hover:text-neutral-500 hover:border-neutral-500">
            Work With Me
            <span aria-hidden="true">&#8594;</span>
          </a>
        </div>

        <div className="mb-20">
          <img src="/images/DSC01677.jpeg" alt="Highlands Ranch home interior with warm transitional design by Halcyon Haus" className="w-full rounded-md object-cover" />
        </div>

        {/* LOCAL CONTEXT */}
        <section className="max-w-3xl mx-auto mb-24 px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.04em] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Renovation design for Highlands Ranch homes
          </h2>
          <div className="font-inter text-sm leading-7 tracking-wide text-gray-700 space-y-5">
            <p>Highlands Ranch grew up through the 1980s, 1990s, and 2000s, which means many of its homes are now reaching the age where the original kitchens, baths, and finishes are ready for their first real update. The bones are good. What they need is a refresh that brings them into the present without erasing what makes them comfortable.</p>
            <p>That work takes different forms. Sometimes it is reimagining a builder-grade kitchen with new cabinetry, stone, and lighting. Sometimes it is giving a large, open floor plan more definition so each space has a sense of purpose. And sometimes it is as focused as a nursery or a primary suite. Having designed multiple rooms in this community, including our own first home here, we know these houses well.</p>
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
            A recent Highlands Ranch project
          </h2>
          <Link href="/projects" legacyBehavior>
            <a className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10 group">
              <div className="overflow-hidden rounded-md">
                <img src="/images/DSC01677.jpeg" alt="Highlands Ranch home interior with warm transitional design by Halcyon Haus" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
              </div>
              <div>
                <h3 className="text-xl mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>The Halcyon Haus Home</h3>
                <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-4">Highlands Ranch</p>
                <p className="font-inter text-sm leading-7 tracking-wide text-gray-700 mb-5">The home that gave the studio its name. We have designed multiple chapters of this Highlands Ranch house, from the original rooms to a nursery with a playful nod to mountain adventure, to a primary suite redesigned for its new owners. Neutral tones, natural textures, and spaces that feel calm and lived-in.</p>
                <span className="text-xs uppercase tracking-[0.14em] border-b border-neutral-400 pb-0.5">View the project</span>
              </div>
            </a>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {GALLERY.map((g) => (
              <div key={g.src} className="overflow-hidden rounded-md md:h-[28rem]">
                <img src={g.src} alt={g.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="max-w-3xl mx-auto mb-24 px-4 md:px-0 text-center">
          <blockquote>
            <p className="text-lg md:text-2xl leading-relaxed mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              &ldquo;Working with Halcyon Haus was one of the best decisions we made for our home. She has such an incredible eye for design and somehow pulled together spaces that are both beautiful and functional. If you're considering working with Halcyon Haus, I can't recommend her enough.&rdquo;
            </p>
            <cite className="not-italic text-xs uppercase tracking-[0.18em] text-gray-500">Highlands Ranch, CO</cite>
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
            {PRESS.map((l) => (
              <img key={l.n} src={l.s} alt={l.n + " logo"} className="h-6 md:h-7 w-auto object-contain" />
            ))}
          </div>
        </section>

        {/* FAQ — collapsible, like the services page */}
        <section className="max-w-2xl mx-auto mb-24 px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.04em] mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Highlands Ranch design questions, answered
          </h2>
          <div>
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className="border-b border-gray-200">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-5 text-left font-inter text-sm tracking-wide text-black"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={16} strokeWidth={1.2} className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }} className="grid transition-[grid-template-rows] duration-300 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="pb-5 text-sm leading-7 font-inter italic text-gray-600">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CONTACT FORM — same as /contact, posts to Formspree, tagged as this page */}
        <section id="inquire" className="max-w-2xl mx-auto px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.04em] mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Start your Highlands Ranch project
          </h2>
          <p className="font-inter text-sm leading-7 tracking-wide text-gray-700 text-center mb-10">
            Share your space, timeline, and budget and Nikka will follow up personally. Based in Castle Rock and Palm Springs, working across the Denver metro, the Coachella Valley, and virtually nationwide.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 text-sm">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">Name <span className="text-gray-400">*</span></label>
                <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">Email <span className="text-gray-400">*</span></label>
                <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white" />
              </div>

              <div className="border-t border-b border-gray-200">
                <button type="button" onClick={() => setDetailsOpen(!detailsOpen)} aria-expanded={detailsOpen} className="w-full flex items-center justify-between py-4 text-left font-inter uppercase tracking-widest text-xs text-gray-700">
                  <span>More Details (Optional)</span>
                  <ChevronDown size={16} strokeWidth={1.2} className={`flex-shrink-0 ml-4 transition-transform duration-300 ${detailsOpen ? "rotate-180" : ""}`} />
                </button>
                <div style={{ gridTemplateRows: detailsOpen ? "1fr" : "0fr" }} className="grid transition-[grid-template-rows] duration-300 ease-in-out">
                  <div className="overflow-hidden">
                    <div className="pb-6 space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="projectType" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">Project Type</label>
                          <select id="projectType" name="projectType" defaultValue="" className="w-full appearance-none border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white text-gray-700">
                            <option value="">Select one</option>
                            <option value="Full-Service Design">Full-Service Design</option>
                            <option value="Room Refresh">Room Refresh</option>
                            <option value="Virtual Design">Virtual Design</option>
                            <option value="The Walk & Plan">The Walk & Plan</option>
                            <option value="Not sure yet">Not sure yet</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="timeline" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">Timeline</label>
                          <select id="timeline" name="timeline" defaultValue="" className="w-full appearance-none border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white text-gray-700">
                            <option value="">Select one</option>
                            <option value="ASAP">ASAP</option>
                            <option value="1-3 months">1-3 months</option>
                            <option value="3-6 months">3-6 months</option>
                            <option value="Just exploring">Just exploring</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">Estimated Budget</label>
                        <select id="budget" name="budget" defaultValue="" className="w-full appearance-none border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white text-gray-700">
                          <option value="">Select one</option>
                          <option value="Under $10k">Under $10k</option>
                          <option value="$10k-$50k">$10k-$50k</option>
                          <option value="$50k-$150k">$50k-$150k</option>
                          <option value="$150k+">$150k+</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="startDate" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">Desired Start Date</label>
                        <input type="date" id="startDate" name="startDate" className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white text-gray-700" />
                      </div>
                      <div>
                        <label htmlFor="rooms" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">Which Room(s)</label>
                        <input type="text" id="rooms" name="rooms" placeholder="e.g. Kitchen, primary bath" className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white placeholder:text-gray-400" />
                      </div>
                      <div>
                        <label htmlFor="currentLikes" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">What Do You Love About the Space Now</label>
                        <input type="text" id="currentLikes" name="currentLikes" placeholder="Anything worth keeping or building on" className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white placeholder:text-gray-400" />
                      </div>
                      <div>
                        <label htmlFor="currentDislikes" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">What&apos;s Not Working Right Now</label>
                        <input type="text" id="currentDislikes" name="currentDislikes" placeholder="The stuff that's bugging you" className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white placeholder:text-gray-400" />
                      </div>
                      <div>
                        <label htmlFor="desiredFeel" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">How Should the Space Feel</label>
                        <input type="text" id="desiredFeel" name="desiredFeel" placeholder="e.g. calm, warm, elevated" className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white placeholder:text-gray-400" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="workedWithDesigner" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">Worked With a Designer Before</label>
                          <select id="workedWithDesigner" name="workedWithDesigner" defaultValue="" className="w-full appearance-none border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white text-gray-700">
                            <option value="">Select one</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="inspirationLink" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">Inspiration Link</label>
                          <input type="text" id="inspirationLink" name="inspirationLink" placeholder="Pinterest board, etc." className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white placeholder:text-gray-400" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="referralSource" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">How Did You Hear About Halcyon Haus</label>
                        <select id="referralSource" name="referralSource" defaultValue="" className="w-full appearance-none border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white text-gray-700">
                          <option value="">Select one</option>
                          <option value="Instagram">Instagram</option>
                          <option value="TikTok">TikTok</option>
                          <option value="Google Search">Google Search</option>
                          <option value="Referral">Referral</option>
                          <option value="Press/Publication">Press/Publication</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter">Tell me about your space <span className="text-gray-400">*</span></label>
                <textarea id="message" name="message" rows="4" required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white"></textarea>
              </div>

              <div className="flex justify-center mt-6">
                <button type="submit" disabled={submitting} className="px-5 py-1.5 text-xs uppercase tracking-widest border border-gray-400 rounded-md hover:bg-gray-100 hover:text-black transition-colors duration-300 font-inter disabled:opacity-50">
                  {submitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          ) : (
            <p className="text-center mt-10 text-sm text-gray-700 font-inter">Thank you, I&apos;ll be in touch soon!</p>
          )}
        </section>
      </main>

      <footer className="mt-8 pb-10 text-center text-xs text-gray-500 uppercase tracking-widest font-inter">
        <p className="mb-2">© {new Date().getFullYear()} Halcyon Haus</p>
      </footer>
    </div>
  );
}
