import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Canyon Modern",
    image: "/images/project1.jpg",
    link: "#",
  },
  {
    title: "Desert Bungalow",
    image: "/images/project2.jpg",
    link: "#",
  },
  {
    title: "Spanish Revival",
    image: "/images/project3.jpg",
    link: "#",
  },
  {
    title: "Palm Springs Poolhouse",
    image: "/images/project4.jpg",
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Head>
        <title>Projects – Halcyon Haus</title>
      </Head>

      {/* Navigation */}
      <header className="flex justify-end p-6 text-sm tracking-widest">
        <nav className="space-x-6 uppercase font-inter">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="#about" className="hover:underline">About Me</Link>
          <Link href="#projects" className="hover:underline">Projects</Link>
          <Link href="#shop" className="hover:underline">Shop My Home</Link>
        </nav>
      </header>

      {/* Projects Grid */}
      <main className="px-6 py-12">
        <h1 className="text-3xl md:text-5xl font-semibold mb-12 text-center uppercase tracking-wider">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
              <h2 className="mt-4 text-xl font-medium uppercase tracking-wide">
                {project.title}
              </h2>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
