// pages/process.js
// Halcyon Haus: The Process
// One room (the Maison Meadows laundry) carried through all eight phases.
// Images are the files already in /public/images, plus MMLaundryFloorPlan.jpg.
// JSON-LD lives in a constant outside the JSX so the build stays clean.
// URL: https://www.halcyonhaus.com/process

import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SITE_URL = "https://www.halcyonhaus.com";
const PAGE_URL = SITE_URL + "/process";
const PAGE_TITLE = "The Design Process: Floor Plans to 3D Renderings | Halcyon Haus";
const PAGE_DESCRIPTION =
  "See how a Halcyon Haus renovation comes together: measured plans, 3D models, and renderings you approve before construction. Denver metro and Palm Springs.";

const IMG = {
  wideRender: "/images/MMLaundryWideRender.png",
  wideModel: "/images/MM Laundry Wide.jpg",
  vertRender: "/images/MMLaundryRenderVertical.png",
  vertModel: "/images/MM Laundry Vertical.jpg",
  topView: "/images/MM LaundryTopElevation.jpg",
  floorPlan: "/images/MMLaundryFloorPlan.jpg",
};
const abs = (src) => encodeURI(SITE_URL + src);

// Brand tokens (from the Halcyon Haus brand system)
const INK = "#292622";
const CREAM = "#fbf9f6";
const TAUPE = "#d1c3b5";
const serif = { fontFamily: "'Playfair Display', serif" };

// Material swatches cut from the rendering itself: [label, source, x, y, size] in source pixels
const RENDER_SIZE = { [IMG.vertRender]: [1158, 1359], [IMG.wideRender]: [1595, 986] };
const SWATCHES = [
  ["Oxblood cabinetry", IMG.vertRender, 1040, 1162, 78],
  ["Cream paneling", IMG.vertRender, 560, 845, 150],
  ["Walnut shelving", IMG.wideRender, 280, 20, 120],
  ["Red-veined stone", IMG.vertRender, 20, 780, 170],
  ["Brass hardware", IMG.vertRender, 95, 1030, 70],
  ["Patterned shade", IMG.vertRender, 470, 360, 150],
];

const DRAWING_SET = [
  "Floor plans",
  "Interior elevations",
  "Reflected ceiling plans",
  "Tile layouts",
  "Finish and fixture schedules",
  "Manufacturer cut sheets",
];

const PHASES = [
  {
    title: "Discovery Call",
    body: "A complimentary conversation about the house and what working together looks like. No drawings yet, just the rooms, the goals, and a rough timeline.",
  },
  {
    title: "Design Consultation",
    body: "A walkthrough covering scope, vision, and timeline. On site across the Denver metro and the Coachella Valley, virtual everywhere else.",
  },
  {
    title: "Site Analysis and Scope",
    body: "The room is measured and drawn to dimension. Clearances, openings, structure, and natural light are recorded, and the full scope of work is defined before anything is proposed.",
    artifact: "floorPlan",
  },
  {
    title: "Space Planning",
    body: "Layouts are tested until the flow works. Cabinetry, appliances, and fixtures land where they are used. No finish is chosen until the plan is right.",
    artifact: "topView",
  },
  {
    title: "Concept and Mood Boards",
    body: "Direction comes next: palette, materials, and the feel of the room, reviewed with you at each step.",
    artifact: "palette",
  },
  {
    title: "Material and Furnishings Selection",
    body: "Every finish, fixture, and piece of furniture is chosen and specified, down to the hardware. Nothing is left to be decided on site.",
  },
  {
    title: "Drawings and Specifications",
    body: "The room is built in 3D at full size, then rendered. You review the rendering, change what you want to change, and sign off while the walls can still move. Permitting is coordinated on larger projects.",
    artifact: "modelAndRender",
  },
  {
    title: "Execution and Installation",
    body: "Contractor coordination, ordering, tracking, and final installation. Every trade works from the same drawings, and every revision is dated. The questions do not land on you.",
    artifact: "drawingSet",
  },
];

const FAQS = [
  {
    q: "Will I see the design before construction starts?",
    a: "Yes. On a renovation, the room is drawn, modeled in 3D, and rendered before demolition. You review the rendering, ask for changes, and approve it while everything is still easy to adjust.",
  },
  {
    q: "What drawings does my contractor receive?",
    a: "A complete set: floor plans, interior elevations, reflected ceiling plans, tile layouts, finish and fixture schedules, and manufacturer cut sheets. Every revision is dated. Structural, mechanical, and anything behind the walls stays with your contractor and engineer.",
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
    a: "With a complimentary discovery call. Send a note through the contact page with a little about your space and goals, and Nikka will follow up personally.",
  },
];

const AREAS = [
  { href: "/interior-designer/castle-pines", label: "Castle Rock and Castle Pines" },
  { href: "/interior-designer/highlands-ranch", label: "Highlands Ranch" },
  { href: "/interior-designer/greenwood-village", label: "Greenwood Village" },
  { href: "/interior-designer/palm-springs", label: "Palm Springs" },
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
      image: [abs(IMG.wideRender), abs(IMG.wideModel), abs(IMG.floorPlan), abs(IMG.topView), abs(IMG.vertModel), abs(IMG.vertRender)],
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
        "Kitchen, bath, and main-level renovation design in eight phases: discovery, consultation, measured floor plans, space planning, concept, material selection, 3D modeling and renderings, and installation.",
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

const navLink = "transition-colors duration-300 text-black hover:text-neutral-400";
const arrowLink =
  "inline-flex items-center gap-2 text-xs tracking-widest uppercase font-inter text-black border-b border-black pb-1 transition-all duration-300 hover:gap-3 hover:text-neutral-500 hover:border-neutral-500";
const titleBlock = "text-[10px] tracking-[0.18em] uppercase font-inter text-gray-500";
const bodyText = "font-inter text-sm md:text-[15px] leading-7 md:leading-8 tracking-wide text-gray-700";

// A drawing-sheet frame with a title block, like the bottom of a plan set
function Sheet({ title, note, children, className = "" }) {
  return (
    <figure className={"bg-white border border-[#e4e3e1] " + className}>
      {children}
      <figcaption className={"flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-[#e4e3e1] px-4 py-3 " + titleBlock}>
        <span className="whitespace-nowrap">{title}</span>
        {note ? <span className="whitespace-nowrap">{note}</span> : null}
      </figcaption>
    </figure>
  );
}

// Dimension-line divider: a rule with end ticks
function DimensionRule() {
  return (
    <div aria-hidden="true" className="relative h-3 my-20 md:my-28">
      <div className="absolute left-0 right-0 top-1/2 border-t" style={{ borderColor: TAUPE }} />
      <div className="absolute left-0 top-0 h-3 border-l" style={{ borderColor: TAUPE }} />
      <div className="absolute right-0 top-0 h-3 border-l" style={{ borderColor: TAUPE }} />
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
      className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-md select-none cursor-ew-resize bg-[#efe9e1]"
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
          <Image src={IMG.wideModel} alt="3D model of a laundry room with burgundy cabinetry, vertical paneling, walnut shelving, and a stacked washer and dryer" fill priority sizes="(max-width: 768px) 200vw, 100vw" className="object-fill" draggable={false} />
        </div>
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${pos}%)`, transition: `clip-path ${ease}` }}
        >
          <div className="absolute" style={{ left: 0, top: "-3.163%", width: "100%", height: "109.434%" }}>
            <Image src={IMG.wideRender} alt="Photorealistic rendering of the same laundry room with oxblood cabinetry, red-veined stone counters, brass hardware, and a patterned Roman shade, designed by Halcyon Haus" fill priority sizes="(max-width: 768px) 200vw, 100vw" className="object-fill" draggable={false} />
          </div>
        </div>
      </div>

      <span className="absolute left-3 top-3 md:left-4 md:top-4 rounded-sm px-2 py-1 bg-[#fbf9f6]/90 text-[10px] tracking-[0.18em] uppercase font-inter text-[#292622]">3D model</span>
      <span
        className="absolute right-3 top-3 md:right-4 md:top-4 rounded-sm px-2 py-1 bg-[#fbf9f6]/90 text-[10px] tracking-[0.18em] uppercase font-inter text-[#292622] transition-opacity duration-300"
        style={{ opacity: pos > 88 ? 0 : 1 }}
      >
        Rendering
      </span>

      <div
        className="absolute top-0 bottom-0 w-px bg-white/90"
        style={{ left: `${pos}%`, transition: `left ${ease}` }}
      >
        <button
          type="button"
          role="slider"
          aria-label="Compare the 3D model and the rendering"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKeyDown}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-11 w-11 rounded-full bg-[#fbf9f6] text-[#292622] shadow-[0_1px_10px_rgba(41,38,34,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#292622] focus-visible:ring-offset-2"
        >
          <ChevronLeft size={14} strokeWidth={1.5} />
          <ChevronRight size={14} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

// A square crop of the rendering, used as a material swatch
function Swatch({ label, src, x, y, size }) {
  const [w, h] = RENDER_SIZE[src];
  return (
    <li>
      <div className="relative aspect-square overflow-hidden rounded-sm">
        <div
          className="absolute"
          style={{ left: `${(-x / size) * 100}%`, top: `${(-y / size) * 100}%`, width: `${(w / size) * 100}%`, height: `${(h / size) * 100}%` }}
        >
          <Image src={src} alt="" fill sizes="1200px" className="object-fill" />
        </div>
      </div>
      <p className="mt-2 font-inter text-xs leading-5 text-gray-700">{label}</p>
    </li>
  );
}

function Artifact({ kind }) {
  if (kind === "floorPlan")
    return (
      <Sheet title="Laundry room | Floor plan" note="Scale ½″ = 1′-0″" className="max-w-md">
        <div className="relative aspect-[4/5]">
          <Image src={IMG.floorPlan} alt="Dimensioned floor plan of a nine by fifteen foot laundry room, drawn by Halcyon Haus" fill sizes="(max-width: 768px) 100vw, 448px" className="object-contain" />
        </div>
      </Sheet>
    );
  if (kind === "topView")
    return (
      <Sheet title="Laundry room | Space plan" note="Finishes in place" className="max-w-md">
        <div className="relative aspect-[4/5]">
          <Image src={IMG.topView} alt="Space plan of the laundry room showing cabinetry, stone counters, and wood flooring in place" fill sizes="(max-width: 768px) 160vw, 720px" className="object-cover" />
        </div>
      </Sheet>
    );
  if (kind === "palette")
    return (
      <Sheet title="Laundry room | Palette and materials">
        <ul className="grid grid-cols-3 sm:grid-cols-6 gap-4 p-4">
          {SWATCHES.map(([label, src, x, y, size]) => (
            <Swatch key={label} label={label} src={src} x={x} y={y} size={size} />
          ))}
        </ul>
      </Sheet>
    );
  if (kind === "modelAndRender")
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Sheet title="Laundry room | 3D model">
          <div className="relative aspect-[1158/1359]">
            <Image src={IMG.vertModel} alt="3D model of the laundry room looking toward the window, with inset cabinetry and a stacked washer and dryer" fill sizes="(max-width: 640px) 100vw, 360px" className="object-cover" />
          </div>
        </Sheet>
        <Sheet title="Laundry room | Rendering">
          <div className="relative aspect-[1158/1359]">
            <Image src={IMG.vertRender} alt="Rendering of the finished laundry room with oxblood cabinetry, brass knobs, a brass sconce, and wood floors" fill sizes="(max-width: 640px) 100vw, 360px" className="object-cover" />
          </div>
        </Sheet>
      </div>
    );
  if (kind === "drawingSet")
    return (
      <Sheet title="Drawing set | For your builder" note="Revisions dated" className="max-w-md">
        <ol className="px-4 py-2">
          {DRAWING_SET.map((item, i) => (
            <li key={item} className="flex items-baseline gap-4 py-3 border-b border-[#efece8] last:border-b-0 font-inter text-sm text-gray-700">
              <span className="w-5 text-[11px] text-gray-400 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ol>
      </Sheet>
    );
  return null;
}

export default function Process() {
  const [active, setActive] = useState(0);
  const phaseRefs = useRef([]);

  // The phase whose heading has passed 45% of the screen height is the active one
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.45;
      let idx = 0;
      phaseRefs.current.forEach((el, i) => { if (el && el.getBoundingClientRect().top <= line) idx = i; });
      setActive(idx);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const num = (i) => String(i + 1).padStart(2, "0");

  return (
    <div className="min-h-screen text-black font-sans" style={{ backgroundColor: CREAM }}>
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
        <nav className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2 uppercase font-inter text-xs">
          <Link href="/" legacyBehavior><a className={navLink}>Home</a></Link>
          <Link href="/about" legacyBehavior><a className={navLink}>About</a></Link>
          <Link href="/process" legacyBehavior><a className={navLink} aria-current="page">The Process</a></Link>
          <Link href="/services" legacyBehavior><a className={navLink}>Services</a></Link>
          <Link href="/projects" legacyBehavior><a className={navLink}>Projects</a></Link>
          <Link href="/contact" legacyBehavior><a className={navLink}>Contact</a></Link>
        </nav>
      </header>

      <main className="pt-28 md:pt-32 pb-16">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <h1 className="lg:col-span-7" style={{ color: INK }}>
              <span className="block text-[11px] tracking-[0.22em] uppercase font-inter text-gray-500 mb-6">
                The interior design process
              </span>
              <span className="block text-[44px] sm:text-6xl lg:text-[84px] leading-[1.02] tracking-[-0.01em]" style={serif}>
                Design before drywall.
              </span>
            </h1>
            <div className="lg:col-span-5 lg:pb-3">
              <p className={bodyText}>
                Every Halcyon Haus renovation is measured, planned, modeled in 3D, and rendered before construction
                starts. You see the finished room and sign off on it while the walls can still move.
              </p>
              <p className="mt-6">
                <Link href="/contact" legacyBehavior>
                  <a className={arrowLink}>Work With Me<span aria-hidden="true">&#8594;</span></a>
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-[90rem] mx-auto px-4 md:px-10 mt-14 md:mt-20" aria-label="3D model and rendering of the Maison Meadows laundry room">
          <ModelToRender />
          <div className={"mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-1 " + titleBlock}>
            <span className="whitespace-nowrap">Maison Meadows | Laundry room</span>
            <span className="whitespace-nowrap">Drag to compare</span>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6">
          <DimensionRule />

          {/* The eight phases */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-3xl md:text-4xl leading-tight" style={{ ...serif, color: INK }}>
                  Eight phases, one room.
                </h2>
                <p className={bodyText + " mt-4 max-w-sm"}>
                  The same laundry, followed from the first measurement to the drawing set.
                </p>

                <div className="hidden lg:block mt-12" aria-hidden="true">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[96px] leading-none tabular-nums" style={{ ...serif, color: INK }}>
                      {num(active)}
                    </span>
                    <span className="font-inter text-xs tracking-[0.18em] text-gray-400">/ 08</span>
                  </div>
                  <div className="mt-6 h-px w-full bg-[#e4e3e1] relative">
                    <div
                      className="absolute left-0 top-0 h-px transition-all duration-500"
                      style={{ width: `${((active + 1) / PHASES.length) * 100}%`, backgroundColor: INK }}
                    />
                  </div>
                </div>

                <ol className="hidden lg:block mt-6 space-y-2.5">
                  {PHASES.map((p, i) => (
                    <li key={p.title}>
                      <a
                        href={`#phase-${i + 1}`}
                        className={
                          "flex gap-3 font-inter text-[13px] tracking-wide transition-colors duration-300 " +
                          (i === active ? "text-black" : "text-gray-400 hover:text-gray-700")
                        }
                      >
                        <span className="w-5 tabular-nums">{num(i)}</span>
                        {p.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <ol className="lg:col-span-8">
              {PHASES.map((p, i) => (
                <li
                  key={p.title}
                  id={`phase-${i + 1}`}
                  data-index={i}
                  ref={(el) => (phaseRefs.current[i] = el)}
                  className={"scroll-mt-24 " + (i === 0 ? "" : "mt-20 md:mt-28")}
                >
                  <div className="flex items-baseline gap-4">
                    <span aria-hidden="true" className="text-4xl lg:hidden tabular-nums" style={{ ...serif, color: TAUPE }}>
                      {num(i)}
                    </span>
                    <h3 className="text-2xl md:text-[28px] leading-snug" style={{ ...serif, color: INK }}>
                      <span className="sr-only">Phase {i + 1}: </span>
                      {p.title}
                    </h3>
                  </div>
                  <p className={bodyText + " mt-4 max-w-xl"}>{p.body}</p>
                  {p.artifact ? (
                    <div className="mt-8">
                      <Artifact kind={p.artifact} />
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </section>

          <DimensionRule />

          {/* Client words */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
            <blockquote className="lg:col-start-5 lg:col-span-8 border-l pl-6 md:pl-8" style={{ borderColor: TAUPE }}>
              <p className="text-xl md:text-2xl leading-relaxed" style={{ ...serif, color: INK }}>
                &ldquo;Nikka has been an incredible resource throughout the design process for multiple rooms in my
                house. She is professional, responsive, and has a great eye for design.&rdquo;
              </p>
              <cite className="block mt-5 not-italic font-inter text-xs tracking-wide text-gray-500">Client, Las Vegas, NV</cite>
            </blockquote>
          </section>

          <DimensionRule />

          {/* Questions */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <h2 className="lg:col-span-4 text-3xl md:text-4xl leading-tight" style={{ ...serif, color: INK }}>
              Questions about the process
            </h2>
            <dl className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {FAQS.map((f) => (
                <div key={f.q}>
                  <dt className="text-lg leading-snug" style={{ ...serif, color: INK }}>{f.q}</dt>
                  <dd className={bodyText + " mt-3"}>{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <DimensionRule />

          {/* Close */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-8">
            <h2 className="lg:col-span-7 text-4xl md:text-6xl leading-[1.05]" style={{ ...serif, color: INK }}>
              Phase one is a conversation.
            </h2>
            <div className="lg:col-span-5">
              <p className={bodyText}>
                The discovery call is complimentary. Bring the house, the rooms you are thinking about, and a rough
                timeline.
              </p>
              <p className="mt-6">
                <Link href="/contact" legacyBehavior>
                  <a className={arrowLink}>Work With Me<span aria-hidden="true">&#8594;</span></a>
                </Link>
              </p>
              <p className="mt-6 font-inter text-xs tracking-wide text-gray-500">
                Or email{" "}
                <a href="mailto:nikka@halcyonhaus.com" className="border-b border-gray-400 pb-0.5 hover:text-black">
                  nikka@halcyonhaus.com
                </a>
              </p>
            </div>
            <p className="lg:col-span-12 mt-6 font-inter text-xs leading-6 tracking-wide text-gray-500">
              On site in{" "}
              {AREAS.map((a, i) => (
                <span key={a.href}>
                  <Link href={a.href} legacyBehavior>
                    <a className="border-b border-gray-300 hover:text-black hover:border-black">{a.label}</a>
                  </Link>
                  {i < AREAS.length - 2 ? ", " : i === AREAS.length - 2 ? ", and " : ""}
                </span>
              ))}
              . Virtual everywhere else.
            </p>
          </section>
        </div>
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
