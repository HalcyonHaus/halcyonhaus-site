// pages/process.js
// Halcyon Haus: The Process
// SEO landing page for the design process. Same conventions as services.js and the
// /interior-designer/ landing pages: Pages Router, Tailwind, next/head SEO, JSON-LD in a
// separate constant, collapsible FAQ, and the same Formspree form tagged "Process page".
// Images live in /public/images/ (process-laundry-*.jpg).
// URL: https://www.halcyonhaus.com/process

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const SITE_URL = "https://www.halcyonhaus.com";
const PAGE_URL = SITE_URL + "/process";
const PAGE_TITLE = "The Design Process: Floor Plans to 3D Renderings | Halcyon Haus";
const PAGE_DESCRIPTION =
  "See how a Halcyon Haus renovation comes together: measured plans, 3D models, and renderings you approve before construction. Denver metro and Palm Springs.";
const HERO_IMAGE = "/images/process-laundry-rendering-hero.jpg";

const STAGES = [
  {
    num: "01",
    label: "Measured",
    title: "Dimensioned floor plan",
    body:
      "The space is drawn to dimension. Clearances, openings, structure, and natural light are recorded before anything is proposed.",
    src: "/images/process-laundry-floor-plan.jpg",
    drawing: true,
    alt: "Dimensioned floor plan of a nine by fifteen foot laundry room, drawn by Halcyon Haus",
  },
  {
    num: "02",
    label: "Planned",
    title: "Layout and space planning",
    body:
      "Layouts are tested until the flow is right. Cabinetry, appliances, and fixtures land where they work. No finish is chosen until the plan works.",
    src: "/images/process-laundry-space-plan.jpg",
    drawing: true,
    alt: "Space plan of the laundry room showing cabinetry, stone counters, and wood flooring in place",
  },
  {
    num: "03",
    label: "Modeled",
    title: "The room built in 3D",
    body:
      "Cabinetry, counters, fixtures, and trim are built at size and in place. Proportions and sightlines are resolved here, before anything is ordered.",
    src: "/images/process-laundry-3d-model.jpg",
    drawing: false,
    alt: "3D model of the laundry room with burgundy cabinetry, vertical paneling, and a stacked washer and dryer",
  },
  {
    num: "04",
    label: "Rendered",
    title: "What you approve",
    body:
      "The finished room, before construction starts. You review it, change what you want to change, and sign off while walls can still move.",
    src: "/images/process-laundry-rendering.jpg",
    drawing: false,
    alt: "Photorealistic rendering of the finished laundry room with brass hardware, a patterned Roman shade, and wood floors",
  },
];

const PHASES = [
  ["One", "Discovery Call", "A complimentary conversation about the space and what working together looks like."],
  ["Two", "Design Consultation", "A walkthrough covering scope, vision, and timeline. On site across the Denver metro and the Coachella Valley, virtual everywhere else."],
  ["Three", "Site Analysis and Scope", "Measurements, natural light, structural conditions, and the full scope of work defined."],
  ["Four", "Space Planning", "Floor plans developed and tested for flow and function, before any style decisions."],
  ["Five", "Concept and Mood Boards", "Direction, palette, and early material choices, reviewed with you at each step."],
  ["Six", "Material and Furnishings Selection", "Finishes, fixtures, and furniture refined until the space is fully specified."],
  ["Seven", "Drawings and Specifications", "Dimensioned plans, elevations, 3D models, and renderings, with permitting coordinated on larger projects."],
  ["Eight", "Execution and Installation", "Contractor coordination, ordering, tracking, and final installation."],
];

const DRAWING_SET = [
  "Floor plans",
  "Interior elevations",
  "Reflected ceiling plans",
  "Tile layouts",
  "Finish and fixture schedules",
  "Manufacturer cut sheets",
];

const AREAS = [
  { href: "/interior-designer/castle-pines", label: "Castle Pines & Castle Rock" },
  { href: "/interior-designer/highlands-ranch", label: "Highlands Ranch" },
  { href: "/interior-designer/greenwood-village", label: "Greenwood Village" },
  { href: "/interior-designer/palm-springs", label: "Palm Springs" },
];

const FAQS = [
  {
    q: "What are the steps in your interior design process?",
    a: "Eight phases: discovery call, design consultation, site analysis and scope, space planning, concept and mood boards, material and furnishings selection, drawings and specifications, and execution and installation.",
  },
  {
    q: "Will I see the design before construction starts?",
    a: "Yes. On a renovation, the room is drawn, modeled in 3D, and rendered before demolition. You review the rendering, ask for changes, and approve it while everything is still easy to adjust.",
  },
  {
    q: "What drawings does my contractor receive?",
    a: "A complete set: floor plans, interior elevations, reflected ceiling plans, tile layouts, finish and fixture schedules, and manufacturer cut sheets. Every revision is dated, so every trade works from the same information. Structural, mechanical, and anything behind the walls stays with your contractor and engineer.",
  },
  {
    q: "Do you work with my contractor, or bring your own?",
    a: "Both work. We can collaborate with a contractor you already trust, or bring in builders from our network, and we stay involved through construction so the design is carried out the way it was drawn.",
  },
  {
    q: "Where do you work?",
    a: "Halcyon Haus is based in Castle Rock, Colorado and Palm Springs, California. Projects are on site across the Denver metro and the Coachella Valley, and virtual everywhere else.",
  },
  {
    q: "How do we get started?",
    a: "With a complimentary discovery call. Fill out the form below with a little about your space and goals, and Nikka will follow up personally.",
  },
];

// JSON-LD lives here, outside the JSX, so the build stays clean.
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": PAGE_URL + "#webpage",
      url: PAGE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: { "@id": SITE_URL + "/#website" },
      about: { "@id": PAGE_URL + "#service" },
      primaryImageOfPage: { "@type": "ImageObject", url: SITE_URL + HERO_IMAGE },
      image: [SITE_URL + HERO_IMAGE, ...STAGES.map((s) => SITE_URL + s.src)],
      breadcrumb: { "@id": PAGE_URL + "#breadcrumb" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": PAGE_URL + "#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
        { "@type": "ListItem", position: 2, name: "The Process", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": PAGE_URL + "#service",
      serviceType: "Interior Design and Renovation",
      name: "Full-Service Interior Design and Renovation",
      description:
        "Kitchen, bath, and main-level renovation design: measured floor plans, space planning, 3D modeling, photorealistic renderings, a complete drawing set for your builder, and installation.",
      provider: { "@id": SITE_URL + "/#business" },
      areaServed: [
        { "@type": "City", name: "Castle Rock" },
        { "@type": "City", name: "Castle Pines" },
        { "@type": "City", name: "Highlands Ranch" },
        { "@type": "City", name: "Greenwood Village" },
        { "@type": "City", name: "Denver" },
        { "@type": "City", name: "Palm Springs" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": PAGE_URL + "#faq",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const serif = { fontFamily: "'Playfair Display', serif" };
const navLink = "transition-colors duration-300 text-white hover:text-neutral-300";
const arrowLink =
  "inline-flex items-center gap-2 text-xs tracking-widest uppercase font-inter text-black border-b border-black pb-1 transition-all duration-300 hover:gap-3 hover:text-neutral-500 hover:border-neutral-500";
const labelClass = "block text-gray-700 mb-2 uppercase tracking-widest text-xs font-inter";
const inputClass =
  "w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white placeholder:text-gray-400";
const selectClass =
  "w-full appearance-none border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white text-gray-700";

function SectionHead({ title, eyebrow }) {
  return (
    <>
      <h2 className="text-xl md:text-xl font-light tracking-[0.1em] text-center uppercase text-balance" style={serif}>
        {title}
      </h2>
      <p className="mt-3 text-[11px] tracking-[0.25em] text-center uppercase text-gray-500 font-inter text-balance">
        {eyebrow}
      </p>
    </>
  );
}

export default function Process() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      source: "Process page",
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
        <meta
          name="keywords"
          content="interior design process, renovation design process, kitchen remodel design process, 3D interior design rendering, interior design floor plan, design before construction, interior designer Castle Rock, interior designer Denver, interior designer Palm Springs, Halcyon Haus, Nikka Winchell"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content={SITE_URL + HERO_IMAGE} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={SITE_URL + HERO_IMAGE} />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      </Head>

      {/* Navigation: white over the hero image */}
      <header className="absolute top-0 w-full z-20 px-6 pt-6 text-xs tracking-widest">
        <nav className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2 uppercase font-inter text-xs">
          <Link href="/" legacyBehavior><a className={navLink}>Home</a></Link>
          <Link href="/about" legacyBehavior><a className={navLink}>About</a></Link>
          <Link href="/process" legacyBehavior><a className={navLink} aria-current="page">The Process</a></Link>
          <Link href="/services" legacyBehavior><a className={navLink}>Services</a></Link>
          <Link href="/projects" legacyBehavior><a className={navLink}>Projects</a></Link>
          <Link href="/contact" legacyBehavior><a className={navLink}>Contact</a></Link>
        </nav>
      </header>

      {/* Hero */}
      <div className="relative w-full h-[72vh] md:h-[82vh] min-h-[460px] max-h-[900px] overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Laundry room rendering with burgundy inset cabinetry, red-veined stone counters, walnut shelving, and a stacked washer and dryer, designed by Halcyon Haus"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(62% 46% at 50% 52%, rgba(0,0,0,.36) 0%, rgba(0,0,0,0) 100%), linear-gradient(to bottom, rgba(0,0,0,.42) 0%, rgba(0,0,0,.12) 22%, rgba(0,0,0,.12) 70%, rgba(0,0,0,.34) 100%)",
          }}
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white" style={{ textShadow: "0 1px 26px rgba(0,0,0,.45)" }}>
            <span
              className="block text-[34px] md:text-[64px] font-normal tracking-[0.25em] uppercase leading-[1.3] indent-[0.25em]"
              style={serif}
            >
              The Process
            </span>
            <span className="block mt-5 text-[11px] md:text-xs tracking-[0.25em] uppercase font-inter max-w-[30em] mx-auto leading-6 text-balance">
              Interior design and renovation, from floor plan to final rendering
            </span>
          </h1>
          <a
            href="#inquire"
            className="mt-10 inline-flex items-center gap-2 text-xs tracking-widest uppercase font-inter text-white border-b border-white pb-1 transition-all duration-300 hover:gap-3 hover:text-neutral-200 hover:border-neutral-200"
            style={{ textShadow: "0 1px 14px rgba(0,0,0,.5)" }}
          >
            Work With Me<span aria-hidden="true">&#8594;</span>
          </a>
        </div>
      </div>

      <main className="px-6 pt-24 pb-24 max-w-5xl mx-auto">
        {/* Intro */}
        <section>
          <SectionHead title="Design Before Drywall" eyebrow="Nothing Is Built Until You Have Seen It" />
          <div className="mt-14 max-w-2xl mx-auto text-center text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-7">
            <p>
              A renovation is decided on paper first. The room is measured, planned, modeled in 3D, and
              rendered before a single wall moves, so every decision is made while it is still easy to change.
            </p>
            <p>
              By the time anything is ordered, you have already seen the finished room and signed off on it.
              Halcyon Haus is a full-service interior design studio for kitchen, bath, and main-level
              renovations, based in Castle Rock, Colorado and Palm Springs, California.
            </p>
            <p>
              Below is one room, a laundry at Maison Meadows, shown at each of the four stages it passed through.
            </p>
          </div>
        </section>

        {/* Four stages */}
        <section className="mt-24 pt-16 border-t border-gray-200">
          <SectionHead title="From Floor Plan to Rendering" eyebrow="One Laundry Room, Four Stages" />
          <ol className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-x-12 md:gap-y-16">
            {STAGES.map((s) => (
              <li key={s.num}>
                <div
                  className={
                    "relative w-full aspect-[4/4.9] overflow-hidden rounded-md bg-white " +
                    (s.drawing ? "border border-gray-200" : "")
                  }
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    className={s.drawing ? "object-contain" : "object-cover"}
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                </div>
                <div className="mt-5 text-xs tracking-[0.1em] uppercase text-gray-500 font-inter">
                  {s.num} &nbsp;&middot;&nbsp; {s.label}
                </div>
                <h3 className="mt-2 mb-3 text-lg" style={serif}>
                  {s.title}
                </h3>
                <p className="text-sm leading-7 tracking-wide font-inter text-gray-700">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Eight phases */}
        <section className="mt-24 pt-16 border-t border-gray-200">
          <SectionHead title="The Interior Design Process" eyebrow="Eight Phases, Start To Finish" />
          <ol className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-10">
            {PHASES.map(([n, title, body]) => (
              <li key={n}>
                <div className="text-[11px] tracking-[0.25em] uppercase text-gray-500 font-inter">Phase {n}</div>
                <h3 className="mt-2 mb-3 text-lg" style={serif}>
                  {title}
                </h3>
                <p className="text-sm leading-7 tracking-wide font-inter text-gray-700">{body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-14 text-center">
            <a href="#inquire" className={arrowLink}>
              Start With Phase One<span aria-hidden="true">&#8594;</span>
            </a>
          </p>
        </section>

        {/* Testimonial */}
        <section className="mt-24 pt-16 border-t border-gray-200 max-w-3xl mx-auto text-center">
          <blockquote>
            <p className="text-lg md:text-2xl leading-relaxed mb-5" style={serif}>
              &ldquo;Nikka has been an incredible resource throughout the design process for multiple rooms in my
              house. She is professional, responsive, and has a great eye for design.&rdquo;
            </p>
            <cite className="not-italic text-xs uppercase tracking-[0.18em] text-gray-500 font-inter">
              Las Vegas, NV
            </cite>
          </blockquote>
        </section>

        {/* Builder set */}
        <section className="mt-24 pt-16 border-t border-gray-200">
          <SectionHead title="What Your Builder Receives" eyebrow="A Complete Set, Issued And Dated" />
          <div className="max-w-2xl mx-auto">
            <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
              {DRAWING_SET.map((item) => (
                <li
                  key={item}
                  className="py-4 border-b border-gray-200 text-xs tracking-[0.1em] uppercase text-gray-700 font-inter"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-11 text-center text-sm leading-7 tracking-wide font-inter text-gray-700">
              Every trade works from the same drawings, and every revision is dated. The questions do not land on you.
            </p>
          </div>
        </section>

        {/* Where we work */}
        <section className="mt-24 pt-16 border-t border-gray-200 text-center">
          <SectionHead title="Where We Work" eyebrow="Colorado And The Coachella Valley" />
          <p className="mt-11 max-w-2xl mx-auto text-sm leading-7 tracking-wide font-inter text-gray-700">
            Based in Castle Rock and Palm Springs. On site across the Denver metro and the Coachella Valley,
            and virtual everywhere else.
          </p>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-5">
            {AREAS.map((a) => (
              <li key={a.href}>
                <Link href={a.href} legacyBehavior>
                  <a className={arrowLink}>
                    {a.label}<span aria-hidden="true">&#8594;</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-24 pt-16 border-t border-gray-200">
          <SectionHead title="Process Questions, Answered" eyebrow="Before You Reach Out" />
          <div className="mt-12 max-w-2xl mx-auto">
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
                    <ChevronDown
                      size={16}
                      strokeWidth={1.2}
                      className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 text-sm leading-7 font-inter italic text-gray-600">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Inquiry form: same as /contact, posts to Formspree, tagged "Process page" */}
        <section id="inquire" className="mt-24 pt-16 border-t border-gray-200 scroll-mt-8">
          <SectionHead title="Start With A Discovery Call" eyebrow="Phase One Is Complimentary" />
          <div className="max-w-2xl mx-auto">
            <p className="mt-11 mb-10 text-center text-sm leading-7 tracking-wide font-inter text-gray-700">
              Bring the house, the rooms you are thinking about, and a rough timeline. Nikka will follow up personally.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 text-sm">
                <div>
                  <label htmlFor="name" className={labelClass}>Name <span className="text-gray-400">*</span></label>
                  <input type="text" id="name" name="name" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email <span className="text-gray-400">*</span></label>
                  <input type="email" id="email" name="email" required className={inputClass} />
                </div>

                <div className="border-t border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => setDetailsOpen(!detailsOpen)}
                    aria-expanded={detailsOpen}
                    className="w-full flex items-center justify-between py-4 text-left font-inter uppercase tracking-widest text-xs text-gray-700"
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
                            <label htmlFor="projectType" className={labelClass}>Project Type</label>
                            <select id="projectType" name="projectType" defaultValue="" className={selectClass}>
                              <option value="">Select one</option>
                              <option value="Full-Service Design">Full-Service Design</option>
                              <option value="Room Refresh">Room Refresh</option>
                              <option value="Virtual Design">Virtual Design</option>
                              <option value="The Walk & Plan">The Walk & Plan</option>
                              <option value="Not sure yet">Not sure yet</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="timeline" className={labelClass}>Timeline</label>
                            <select id="timeline" name="timeline" defaultValue="" className={selectClass}>
                              <option value="">Select one</option>
                              <option value="ASAP">ASAP</option>
                              <option value="1-3 months">1-3 months</option>
                              <option value="3-6 months">3-6 months</option>
                              <option value="Just exploring">Just exploring</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="budget" className={labelClass}>Estimated Budget</label>
                          <select id="budget" name="budget" defaultValue="" className={selectClass}>
                            <option value="">Select one</option>
                            <option value="Under $10k">Under $10k</option>
                            <option value="$10k-$50k">$10k-$50k</option>
                            <option value="$50k-$150k">$50k-$150k</option>
                            <option value="$150k+">$150k+</option>
                            <option value="Not sure yet">Not sure yet</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="startDate" className={labelClass}>Desired Start Date</label>
                          <input type="date" id="startDate" name="startDate" className={inputClass + " text-gray-700"} />
                        </div>
                        <div>
                          <label htmlFor="rooms" className={labelClass}>Which Room(s)</label>
                          <input type="text" id="rooms" name="rooms" placeholder="e.g. Kitchen, primary bath" className={inputClass} />
                        </div>
                        <div>
                          <label htmlFor="currentLikes" className={labelClass}>What Do You Love About the Space Now</label>
                          <input type="text" id="currentLikes" name="currentLikes" placeholder="Anything worth keeping or building on" className={inputClass} />
                        </div>
                        <div>
                          <label htmlFor="currentDislikes" className={labelClass}>What&apos;s Not Working Right Now</label>
                          <input type="text" id="currentDislikes" name="currentDislikes" placeholder="The stuff that's bugging you" className={inputClass} />
                        </div>
                        <div>
                          <label htmlFor="desiredFeel" className={labelClass}>How Should the Space Feel</label>
                          <input type="text" id="desiredFeel" name="desiredFeel" placeholder="e.g. calm, warm, elevated" className={inputClass} />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="workedWithDesigner" className={labelClass}>Worked With a Designer Before</label>
                            <select id="workedWithDesigner" name="workedWithDesigner" defaultValue="" className={selectClass}>
                              <option value="">Select one</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="inspirationLink" className={labelClass}>Inspiration Link</label>
                            <input type="text" id="inspirationLink" name="inspirationLink" placeholder="Pinterest board, etc." className={inputClass} />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="referralSource" className={labelClass}>How Did You Hear About Halcyon Haus</label>
                          <select id="referralSource" name="referralSource" defaultValue="" className={selectClass}>
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
                  <label htmlFor="message" className={labelClass}>Tell me about your space <span className="text-gray-400">*</span></label>
                  <textarea id="message" name="message" rows="4" required className={inputClass + " py-2"}></textarea>
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

            <p className="mt-10 text-center text-xs tracking-[0.1em] uppercase text-gray-500 font-inter">
              Prefer email?{" "}
              <a href="mailto:nikka@halcyonhaus.com" className="border-b border-gray-400 pb-0.5 hover:text-black">
                nikka@halcyonhaus.com
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer: same as services.js */}
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
