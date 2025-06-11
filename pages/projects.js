import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";

const ProjectCarousel = dynamic(() => import("../components/ProjectCarousel"), { ssr: false });

const projects = [
  {
    title: "Canyon Cottage Kitchen",
    images: [
      "/images/DSC02043.jpeg",
      "/images/DSC02031.jpeg",
      "/images/DSC02032.jpeg",
      "/images/DSC02048-2.jpeg"
    ]
  },
  {
    title: "Full Circle Bedroom",
    images: [
      "/images/DFF440A7-0193-47CF-9773-5436061404B9.jpeg",
      "/images/DSC02113.jpeg"
    ]
  },
    {
    title: "Canyon Cottage Primary Bath",
    images: [
      "/images/DSC02081.jpeg",
      "/images/DSC02075.jpeg",
      "/images/DSC02092.jpeg",
      "/images/DSC02082.jpeg"
    ]
  },
  {
    title: "Halcyon Haus",
    images: [
      "/images/DSC01677.jpeg",
      "/images/IMG_4599.jpeg",
      "/images/DSC01631.jpeg",
      "/images/DSC01662.jpeg",
      "/images/DC7801C0-7521-4A4A-86F3-228C9F155D6E.jpeg",
      "/images/53757896-768E-436A-A242-E1EB1C839F05.jpeg",
      "/images/DSC01503.jpeg",
      "/images/7F3F1DD5-20A0-4377-A60E-CB6CBED5947A.jpeg",
      "/images/IMG_0640.jpeg"
    ]
  },
  {
    title: "Anything But Monotone Kitchen",
    images: [
      "/images/DSC02223.jpeg",
      "/images/DSC02219.jpeg",
      "/images/DSC02198.jpeg"
    ]
  },
  {
    title: "Styling",
    images: [
      "/images/DSC02489.jpeg",
      "/images/DSC02496.jpeg"
    ]
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen text-black font-sans" style={{ backgroundColor: "#fafafa" }}>
      <Head>
        <title>Projects – Halcyon Haus</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navigation */}
   <header className="absolute top-0 right-0 z-20 p-6 text-xs tracking-widest">
  <nav className="space-x-6 uppercase font-inter text-xs">
    <Link href="/" passHref legacyBehavior>
      <a className="transition-colors duration-300 text-black hover:text-neutral-500">Home</a>
    </Link>
    <Link href="/about" passHref legacyBehavior>
      <a className="transition-colors duration-300 text-black hover:text-neutral-500">About Me</a>
    </Link>
    <Link href="/projects" passHref legacyBehavior>
      <a className="transition-colors duration-300 text-black hover:text-neutral-500">Projects</a>
    </Link>
    <Link href="/shop" passHref legacyBehavior>
      <a className="transition-colors duration-300 text-black hover:text-neutral-500">Shop My Home</a>
    </Link>
  </nav>
</header>

      {/* Projects Grid */}
      <main className="px-6 py-24">
        <h1
          className="text-2xl md:text-2.5xl font-light tracking-wider text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          PROJECTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {projects.map((project, index) => (
            <ProjectCarousel key={index} title={project.title} images={project.images} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 pb-6 text-center text-xs text-gray-500 uppercase tracking-widest font-inter">
        <p className="mb-2">© {new Date().getFullYear()} Halcyon Haus</p>
        <div className="flex justify-center space-x-6 text-gray-500">
          <a href="https://www.instagram.com/halcyonhaus_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="h-4 w-4 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@halcyonhaus_" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg className="h-4 w-4 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 3v12a3 3 0 103 3V9c.6.3 1.3.5 2 .5h1V7h-1c-.6 0-1-.4-1-1V3h-4z"/>
            </svg>
          </a>
          <a href="https://www.shopltk.com/explore/halcyonhaus" target="_blank" rel="noopener noreferrer" aria-label="LTK">
            <svg className="h-4 w-4 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm9-6a6 6 0 100 12 6 6 0 000-12z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
