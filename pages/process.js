// pages/process.js
// Halcyon Haus: The Process
// Built in the same style as the project pages (golden-grove.js): centered title,
// share button, large images with Pin It, two-up images, and plain text sections.
// Hero: drag between the 3D model and the rendering of the Maison Meadows laundry.
// JSON-LD lives in a constant outside the JSX so the build stays clean.
// URL: https://www.halcyonhaus.com/process

import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import ShareButton from "../components/ShareButton";
import PinButton from "../components/PinButton";

// Subtle fade (opacity only), same as the project pages
const subtleFade = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true }
};

const SITE_URL = "https://www.halcyonhaus.com";
const PAGE_URL = SITE_URL + "/process";
const PAGE_TITLE = "The Design Process: Floor Plans to 3D Renderings | Halcyon Haus";
const PAGE_DESCRIPTION =
  "What it is like to work with Halcyon Haus: measured floor plans, a mood board with real samples, a design presentation, and a 3D rendering you approve before anything is built.";

const IMG = {
  wideRender: "/images/MMLaundryWideRender.png",
  wideModel: "/images/MM Laundry Wide.jpg",
  vertRender: "/images/MMLaundryRenderVertical.png",
  vertModel: "/images/MM Laundry Vertical.jpg",
  topView: "/images/MM LaundryTopElevation.jpg",
  floorPlan: "/images/MMLaundryFloorPlan.jpg",
  moodBoard: "/images/MMLaundryMoodBoard.jpg",
};
const abs = (src) => encodeURI(SITE_URL + src);

const ALT = {
  floorPlan: "Dimensioned floor plan of the Maison Meadows laundry room, drawn to scale by Halcyon Haus",
  topView: "Plan view of the laundry room showing cabinetry, stone counters, and wood flooring in place",
  vertModel: "3D model of the laundry room with burgundy inset cabinetry, vertical paneling, and a stacked washer and dryer",
  vertRender: "Rendering of the finished laundry room with oxblood cabinetry, red-veined stone counters, brass hardware, and a patterned Roman shade",
  moodBoard: "Laundry room mood board by Halcyon Haus with red-veined stone, walnut, Dove Wing paint, an oxblood paint color, a patterned shade fabric, a brass knob, a pleated brass sconce, and a plum mudroom for inspiration",
};

const FAQS = [
  {
    q: "Do you outsource your drawings?",
    a: "No. I produce the drawings myself for every project that needs them: dimensioned floor plans, interior elevations, reflected ceiling plans, 3D models, and renderings, all drawn in SketchUp and LayOut.",
  },
  {
    q: "How does the mood board work?",
    a: "I pull together the paint colors, stone, wood, hardware, lighting, and fabrics for your space, and we go through the board together. You see and feel the physical samples in person before anything is finalized.",
  },
  {
    q: "Is there a design presentation?",
    a: "Yes. Once the concept comes together, I present the ideas to you: the mood board, the plans, and the 3D model and rendering. You give feedback, and I refine the design until it is right.",
  },
  {
    q: "Do you provide 3D renderings?",
    a: "Yes. On renovation projects, the room is modeled in 3D and rendered before construction starts, so you can see the finished space and make changes while the walls can still move.",
  },
  {
    q: "What drawings does my contractor receive?",
    a: "A complete set: floor plans, interior elevations, reflected ceiling plans, tile layouts, finish and fixture schedules, and manufacturer cut sheets. Every revision is dated. Structural, mechanical, and anything behind the walls stays with your contractor and engineer.",
  },
  {
    q: "Do you work with my contractor, or bring your own?",
    a: "Both work. I can collaborate with a contractor you already trust or bring in builders from my network, and I stay involved through construction so the design is carried out the way it was drawn.",
  },
  {
    q: "Do you order the furnishings and finishes?",
    a: "Yes. I purchase the furnishings, tile, and fixtures and track every order. Construction materials stay with your contractor.",
  },
  {
    q: "Where do you work?",
    a: "Halcyon Haus is based in Castle Rock, Colorado and Palm Springs, California. I work on site across the Denver metro and the Coachella Valley, and virtually everywhere else.",
  },
  {
    q: "How do we get started?",
    a: "With a complimentary discovery call. Send a note through the contact page with a little about your space, and I will follow up personally.",
  },
];

const DRAWING_SET = [
  "Floor plans",
  "Interior elevations",
  "Reflected ceiling plans",
  "Tile layouts",
  "Finish and fixture schedules",
  "Manufacturer cut sheets",
];

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
      primaryImageOfPage: { "@type": "ImageObject", url: abs(IMG.wideRender) },
      image: [abs(IMG.wideRender), abs(IMG.floorPlan), abs(IMG.topView), abs(IMG.moodBoard), abs(IMG.vertModel), abs(IMG.vertRender)],
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
        "Kitchen, bath, and main-level renovation design: measured floor plans, space planning, mood boards with physical samples, a design presentation, 3D modeling, renderings, a complete drawing set for your builder, and installation.",
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
const textBlock = "text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-6 px-4 md:px-0 max-w-5xl mx-auto";

// Section heading, same as "OUR PROCESS" on the Services page
function SectionHead({ title, subtitle }) {
  return (
    <div className="mb-12">
      <h2 className="text-xl md:text-xl font-light tracking-[0.1em] text-center" style={serif}>
        {title}
      </h2>
      <p className="mt-3 text-[11px] tracking-[0.25em] text-center uppercase text-gray-500 font-inter">
        {subtitle}
      </p>
    </div>
  );
}

// One image in a two-up row: tall on desktop like the project pages, natural shape on mobile
function TwoUpImage({ src, alt, mobileAspect, drawing = false, fit }) {
  return (
    <div
      className={
        "group relative overflow-hidden rounded-md md:aspect-auto md:h-[58rem] " +
        mobileAspect +
        (drawing ? " bg-white border border-neutral-200" : "")
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={fit || (drawing ? "object-contain" : "object-cover")}
      />
      <PinButton imageUrl={abs(src)} pageUrl={PAGE_URL} description={alt} />
    </div>
  );
}

// Hero: drag between the 3D model and the rendering of the same view.
// The two files are framed slightly differently, so each is placed inside a shared
// "stage" (measured from the images) and the stage is scaled to cover the frame.
const STAGE_RATIO = 1.7703;
function ModelToRender() {
  const frame = useRef(null);
  const [pos, setPos] = useState(100);
  const [intro, setIntro] = useState(true);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setIntro(false); setPos(50); return; }
    const t1 = setTimeout(() => setPos(50), 700);
    const t2 = setTimeout(() => setIntro(false), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const moveTo = (clientX) => {
    const r = frame.current.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };
  const onPointerDown = (e) => {
    setIntro(false); setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };
  const onPointerMove = (e) => { if (dragging) moveTo(e.clientX); };
  const onPointerUp = () => setDragging(false);
  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault(); setIntro(false);
      setPos((p) => Math.min(100, Math.max(0, p + (e.key === "ArrowLeft" ? -5 : 5))));
    }
  };
  const ease = intro ? "1.6s cubic-bezier(.65,0,.35,1)" : "0s";

  return (
    <div
      ref={frame}
      className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-md select-none cursor-ew-resize bg-neutral-100"
      style={{ containerType: "size", touchAction: "pan-y" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: `max(100cqw, ${STAGE_RATIO * 100}cqh)`, aspectRatio: String(STAGE_RATIO) }}
      >
        <div className="absolute" style={{ left: "-1.442%", top: 0, width: "102.382%", height: "100%" }}>
          <Image
            src={IMG.wideModel}
            alt="3D model of the Maison Meadows laundry room with burgundy cabinetry, vertical paneling, walnut shelving, and a stacked washer and dryer"
            fill
            priority
            sizes="(max-width: 768px) 200vw, 100vw"
            className="object-fill"
            draggable={false}
          />
        </div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)`, transition: `clip-path ${ease}` }}>
          <div className="absolute" style={{ left: 0, top: "-3.163%", width: "100%", height: "109.434%" }}>
            <Image
              src={IMG.wideRender}
              alt="Rendering of the same laundry room with oxblood cabinetry, red-veined stone counters, brass hardware, and a patterned Roman shade, designed by Halcyon Haus"
              fill
              priority
              sizes="(max-width: 768px) 200vw, 100vw"
              className="object-fill"
              draggable={false}
            />
          </div>
        </div>
      </div>

      <div className="absolute top-0 bottom-0 w-px bg-white/90" style={{ left: `${pos}%`, transition: `left ${ease}` }}>
        <button
          type="button"
          role="slider"
          aria-label="Compare the 3D model and the rendering"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKeyDown}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-11 w-11 rounded-full bg-white text-black shadow-[0_1px_8px_rgba(0,0,0,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          <ChevronLeft size={14} strokeWidth={1.5} />
          <ChevronRight size={14} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

export default function Process() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen text-black font-sans bg-[#fafafa]">
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta
          name="keywords"
          content="interior design process, working with an interior designer, renovation design process, interior design floor plan, interior design mood board, paint colors, design presentation, 3D interior design rendering, SketchUp drawings, interior designer Castle Rock, interior designer Denver, interior designer Palm Springs, Halcyon Haus, Nikka Winchell"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content={abs(IMG.wideRender)} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={abs(IMG.wideRender)} />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
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

      {/* Main Content */}
      <main className="pt-24 pb-24 max-w-[90rem] mx-auto px-4 md:px-10">
        <h1 className="text-2xl md:text-2xl font-light tracking-[0.1em] text-center mb-2" style={serif}>
          THE PROCESS
        </h1>
        <h2 className="text-center text-sm uppercase tracking-widest text-gray-500 mt-2 mb-6">
          Interior Design, From Floor Plan To Rendering
        </h2>

        <div className="mb-16">
          <ShareButton title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        </div>

        {/* Hero: 3D model to rendering */}
        <section aria-label="3D model and rendering of the Maison Meadows laundry room">
          <ModelToRender />
          <div className="mt-4 mb-16 flex items-center justify-between gap-4 text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.25em] uppercase text-gray-500 font-inter">
            <span>3D Model</span>
            <span>Drag To Compare</span>
            <span>Rendering</span>
          </div>
        </section>

        {/* Intro Text */}
        <section className={textBlock + " mb-24"}>
          <p>
            This is what it looks like to work with Halcyon Haus, shown through one room: the laundry at Maison Meadows.
            Before anything is ordered or built, the room is measured, planned, pulled together on a mood board, modeled
            in 3D, and rendered. You see the finished space first, while it is still easy to change.
          </p>
          <p>
            Halcyon Haus is based in Castle Rock, Colorado and Palm Springs, California, working across the Denver
            metro, the Coachella Valley, and virtually nationwide.
          </p>
        </section>

        {/* Measured and planned */}
        <section className="mb-24">
          <SectionHead title="MEASURED AND PLANNED" subtitle="Floor Plans Drawn To Dimension" />
          <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <TwoUpImage src={IMG.floorPlan} alt={ALT.floorPlan} mobileAspect="aspect-[4/5]" drawing />
            <TwoUpImage src={IMG.topView} alt={ALT.topView} mobileAspect="aspect-[4/5]" drawing fit="object-cover" />
          </motion.div>
          <div className={textBlock}>
            <p>
              Every project starts with measurements. I draw the room to scale with every wall, window, door, and
              clearance dimensioned, so the design is built on the real space and not a guess.
            </p>
            <p>
              From there, I plan the layout: where the cabinetry runs, where the appliances sit, and how the room works
              day to day. The plans also map lighting, outlets, and fixture locations. Finishes come after the plan is right.
            </p>
          </div>
        </section>

        {/* Mood board and paint colors */}
        <section className="mb-24">
          <SectionHead title="THE MOOD BOARD" subtitle="Paint Colors, Materials, And Finishes" />
          <motion.div {...subtleFade} className="group relative mb-16 mx-auto max-w-4xl aspect-square overflow-hidden rounded-md border border-neutral-200 bg-white">
            <Image src={IMG.moodBoard} alt={ALT.moodBoard} fill sizes="(max-width: 896px) 100vw, 896px" className="object-cover" />
            <PinButton imageUrl={abs(IMG.moodBoard)} pageUrl={PAGE_URL} description={ALT.moodBoard} />
          </motion.div>
          <div className={textBlock}>
            <p>
              Once the layout is set, the look comes together on a mood board. I select the paint colors, stone, wood,
              hardware, lighting, and fabrics and pull them side by side, so you can see how every piece works together
              before anything is ordered. For this laundry, that meant Dove Wing on the paneling, a deep oxblood on the
              cabinetry, red-veined stone, walnut shelving, brass knobs, and a pleated sconce.
            </p>
            <p>
              We go through the mood board together at a design presentation, where I walk you through the ideas. You
              see and feel the physical samples in person before anything is finalized.
            </p>
          </div>
        </section>

        {/* Modeled and rendered */}
        <section className="mb-24">
          <SectionHead title="MODELED AND RENDERED" subtitle="See The Room Before It Is Built" />
          <motion.div {...subtleFade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <TwoUpImage src={IMG.vertModel} alt={ALT.vertModel} mobileAspect="aspect-[1158/1359]" />
            <TwoUpImage src={IMG.vertRender} alt={ALT.vertRender} mobileAspect="aspect-[1158/1359]" />
          </motion.div>
          <div className={textBlock}>
            <p>
              Then I build the room in 3D, with the cabinetry, counters, trim, and fixtures at their real size.
              Proportions and sightlines get worked out here, before anything is ordered.
            </p>
            <p>
              The model becomes a rendering, so you can see the finished room with the real materials and light, and sign
              off on it while the walls can still move.
            </p>
          </div>
        </section>

        {/* For your builder */}
        <section>
          <SectionHead title="FOR YOUR BUILDER" subtitle="A Complete Drawing Set" />
          <div className={textBlock.replace("space-y-6", "space-y-10")}>
            <p>
              Once the design is approved, your builder receives a complete set of drawings. Every trade works from the
              same plans, and every revision is dated, so the questions do not land on you. I stay involved through
              construction: coordinating with your contractor, ordering and tracking furnishings, tile, and fixtures, and
              seeing the installation through.
            </p>

            <div className="border-t border-neutral-200 pt-10">
              <h3 className="uppercase tracking-[0.2em] text-xs mb-6 text-neutral-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                The Drawing Set
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12 text-sm">
                {DRAWING_SET.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* FAQ, same as the Services page */}
        <section className="mt-24 pt-16 border-t border-gray-200 max-w-2xl mx-auto">
          <SectionHead title="FAQ" subtitle="Working With Halcyon Haus" />
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

        {/* Where to start */}
        <section className="mt-24">
          <div className={textBlock.replace("space-y-6", "space-y-10")}>
            <div className="border-t border-neutral-200 pt-10">
              <h3 className="uppercase tracking-[0.2em] text-xs mb-6 text-neutral-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                Where To Start
              </h3>
              <p>
                Every project begins with a complimentary discovery call. Tell me about the house, the rooms you are
                thinking about, and your timeline.
              </p>
              <p className="mt-6">
                <Link href="/contact" legacyBehavior>
                  <a className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-inter text-black border-b border-black pb-1 transition-all duration-300 hover:gap-3 hover:text-neutral-500 hover:border-neutral-500">
                    Work With Me
                    <span aria-hidden="true">&#8594;</span>
                  </a>
                </Link>
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-neutral-200">
              <ShareButton title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
