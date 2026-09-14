import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const processSteps = [
  {
    title: "Discovery Call",
    description:
      "A complimentary conversation where we get to know your space and talk through how we'd work together.",
  },
  {
    title: "Design Consultation",
    description:
      "Typically on site for Denver area clients, or virtual for clients elsewhere. We walk through your space together and talk scope, vision, and timeline.",
  },
  {
    title: "Site Analysis & Scope",
    description:
      "We measure the space, assess natural light and structural conditions, and define the full scope of the project together.",
  },
  {
    title: "Space Planning",
    description:
      "Floor plans are developed and layouts tested until the flow and function feel right, before any style decisions are made.",
  },
  {
    title: "Concept & Mood Boards",
    description:
      "Direction, palette, and material starting points come together here, reviewed with you at every step.",
  },
  {
    title: "Material & Furnishings Selection",
    description:
      "Every finish, fixture, and piece of furniture is refined until the space is fully specified.",
  },
  {
    title: "Drawings & Specifications",
    description:
      "2D layouts or 3D modeling provided as needed, with permitting coordinated for larger projects.",
  },
  {
    title: "Execution & Installation",
    description:
      "From contractor coordination to final styling, we bring the design to life and manage the details along the way.",
  },
];

 <div className="pt-16 text-center">
            <Link href="/contact" legacyBehavior>
              <a className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-inter text-black border-b border-black pb-1 transition-all duration-300 hover:gap-3 hover:text-neutral-500 hover:border-neutral-500">
                Work With Me
                <span aria-hidden="true">&#8594;</span>
              </a>
            </Link>
          </div>
        </div>

const faqs = [
  {
    question: "What's your process like?",
    answer:
      "Getting to know you comes first. We spend time understanding how you live, what you want your home to feel like, and what would truly make the space work for your life. From there, we build out a full design process together, from concept through installation, tailored to your space and your vision.",
  },
  {
    question: "Is there a fee for the discovery call?",
    answer: "No, it's a complimentary call.",
  },
  {
    question: "Do you work virtually, or only in the Denver area?",
    answer:
      "Both. We're based in Castle Rock & Palm Springs, and have most recently worked with clients throughout Castle Rock, Castle Pines, Greenwood Village, Cherry Hills, and the greater Denver metro, as well as in Palm Springs and greater Los Angeles, California. We also welcome projects throughout Colorado's mountain communities, including Aspen, Telluride, Breckenridge, and Vail, and continue to work virtually with clients nationwide.",
  },
  {
    question: "I don't know my style yet, is that a problem?",
    answer:
      "Not at all. Most clients don't come to us with a fully formed vision, that's part of what we're here to help uncover together.",
  },
  {
    question: "What if I already know my style, or have a clear vision?",
    answer:
      "We're just as happy stepping into a supporting role, executing your vision with our knowledge of the process, from curating and sourcing to purchasing and installation.",
  },
  {
    question: "Do you work with my contractor, or bring your own team?",
    answer:
      "We're happy to work with a contractor you already trust, or recommend one from our network if you need a referral.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Full-service projects are priced as a percentage of your construction budget. Room refreshes are priced as a flat project fee. We'll walk through what that looks like for your specific project during your consultation.",
  },
];

export default function ServicesPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen text-black font-sans" style={{ backgroundColor: "#fafafa" }}>
      <Head>
        <title>Interior Design Services | Halcyon Haus, Denver, CO</title>
        <meta
          name="description"
          content="Full-service design, room refresh, virtual design, and consultations by Halcyon Haus, a Denver interior design studio serving Colorado and beyond."
        />
        <link rel="canonical" href="https://www.halcyonhaus.com/services" />
        <meta property="og:title" content="Interior Design Services | Halcyon Haus" />
        <meta property="og:description" content="Full-service design, room refresh, virtual design, and consultations, flexible interior design services tailored to your lifestyle." />
        <meta property="og:image" content="https://www.halcyonhaus.com/images/HEROKITCHEN1.JPG" />
        <meta property="og:url" content="https://www.halcyonhaus.com/services" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Interior Design Services | Halcyon Haus" />
        <meta name="twitter:description" content="Full-service design, room refresh, virtual design, and consultations by Nikka Winchell." />
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

      {/* Main Content */}
      <main className="px-6 pt-24 pb-24 max-w-5xl mx-auto">
        <h1
          className="text-2xl md:text-2xl font-light tracking-[0.1em] text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          SERVICES
        </h1>
        <p className="mt-3 text-[11px] tracking-[0.25em] text-center uppercase text-gray-500 font-inter">
          Denver Interior Design Services
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-12 text-sm leading-7 tracking-wide font-inter text-gray-700 space-y-10">
            <p className="text-center max-w-2xl mx-auto">
              Whether you're renovating a full home or just refreshing a single space, Halcyon Haus offers flexible interior design services in Denver, Colorado and nationwide, tailored to your lifestyle and vision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="uppercase text-xs tracking-widest text-gray-500 mb-2">FULL-SERVICE DESIGN</h2>
                <p>
                  A comprehensive approach: layout, materials, and custom millwork to sourcing, styling, and install. Ideal for remodels, new builds, or full home transformations in Denver and beyond. Investment is scoped to your project and discussed during your consultation.
                </p>
              </div>
              <div>
                <h2 className="uppercase text-xs tracking-widest text-gray-500 mb-2">ROOM REFRESH</h2>
                <p>
                  For spaces that just need a considered update: new furnishings, layout, styling, and sourcing within your existing architecture. Priced as a flat project fee.
                </p>
              </div>
              <div>
                <h2 className="uppercase text-xs tracking-widest text-gray-500 mb-2">VIRTUAL DESIGN</h2>
                <p>
                  A fully remote design experience: custom mood boards, layout guides, shoppable product lists, and styling instructions, delivered wherever you are.
                </p>
              </div>
              <div>
                <h2 className="uppercase text-xs tracking-widest text-gray-500 mb-2">HOURLY DESIGN SUPPORT</h2>
                <p>
                  Need a second opinion or a working session on a specific question? Book time directly for layout advice, sourcing direction, or a focused problem to solve.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <h2
            className="text-xl md:text-xl font-light tracking-[0.1em] text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            OUR PROCESS
          </h2>
          <p className="mt-3 text-[11px] tracking-[0.25em] text-center uppercase text-gray-500 font-inter">
            From First Call To Final Styling
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="flex flex-col">
              {processSteps.map((step, index) => (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className={`text-left py-3 border-b border-gray-200 font-inter uppercase text-xs tracking-widest transition-colors duration-300 flex items-baseline gap-3 ${
                    activeStep === index ? "text-black" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <span className="text-[10px]">{String(index + 1).padStart(2, "0")}</span>
                  <span>{step.title}</span>
                </button>
              ))}
            </div>

            <div className="min-h-[160px] relative">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={
                    activeStep === index
                      ? "block transition-opacity duration-300 opacity-100"
                      : "hidden"
                  }
                >
                  <p className="text-[10px] tracking-widest uppercase text-gray-400 font-inter mb-3">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className="text-lg mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-7 tracking-wide font-inter text-gray-700">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-16 text-center">
            <Link href="/contact" legacyBehavior>
              <a className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-inter text-black border-b border-black pb-1 transition-all duration-300 hover:gap-3 hover:text-neutral-500 hover:border-neutral-500">
                Work With Me
                <span aria-hidden="true">&#8594;</span>
              </a>
            </Link>
          </div>
        </div>

        {/* Good to Know FAQ */}
        <div className="mt-24 pt-16 border-t border-gray-200 max-w-2xl mx-auto">
          <h2
            className="text-xl md:text-xl font-light tracking-[0.1em] text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            GOOD TO KNOW
          </h2>

          <div className="mt-12">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className="border-b border-gray-200">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-5 text-left font-inter text-sm tracking-wide text-black"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
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
                      <p className="pb-5 text-sm leading-7 font-inter italic text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-14 text-center">
            <p className="text-sm text-gray-700 font-inter">
              Based in Denver, Colorado. Designing from coast to coast.
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
        </div>
      </main>

      {/* Footer */}
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
