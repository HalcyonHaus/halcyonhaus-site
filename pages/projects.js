import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Full Circle Bedroom",
    image: "/images/DFF440A7-0193-47CF-9773-5436061404B9.jpeg",
    link: "#",
  },
  {
    title: "Halcyon Haus Bedroom",
    image: "/images/DSC01677.jpeg",
    link: "#",
  },
  {
    title: "Canyon Cottage Kitchen",
    image: "/images/DSC02043.jpeg",
    link: "#",
  },
  {
    title: "Canyon Cottage Primary Bath",
    image: "/images/DSC02081.jpeg",
    link: "#",
  },
  {
    title: "Two-Toned Kitchen",
    image: "/images/DSC02223.jpeg",
    link: "#",
  },
  {
    title: "Styling",
    image: "/images/DSC02489.jpeg",
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Head>
        <title>Projects – Halcyon Haus</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navigation */}
      <header className="absolute top-0 right-0 z-20 p-6 text-sm tracking-widest">
        <nav className="space-x-6 uppercase font-inter">
          <Link href="/" passHref legacyBehavior>
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <a className="hover:underline">About Me</a>
          </Link>
          <Link href="/projects" passHref legacyBehavior>
            <a className="hover:underline">Projects</a>
          </Link>
          <Link href="/shop" passHref legacyBehavior>
            <a className="hover:underline">Shop My Home</a>
          </Link>
        </nav>
      </header>

      {/* Projects Grid */}
      <main className="px-6 py-24">
        <h1
        className="text-[24px] md:text-[64px] font-bold tracking-wider text-center"
        style={{ fontFamily: "'Playfair Display', serif" }}
        >
      PROJECTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="relative w-full h-72 md:h-96 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="font-inter uppercase tracking-widest text-sm mt-4 text-center">
                {project.title}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
