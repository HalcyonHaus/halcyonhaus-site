import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Calabasas Remodel",
    image: "/images/project1.jpg",
    slug: "calabasas-remodel"
  },
  {
    title: "Pacific Palisades Estate",
    image: "/images/project2.jpg",
    slug: "palisades-estate"
  },
  {
    title: "Topanga Canyon Ranch",
    image: "/images/project3.jpg",
    slug: "topanga-ranch"
  },
  // Add more projects as needed
];

export default function ProjectsPage() {
  return (
    <div className="bg-white text-neutral-900 font-sans">
      <Head>
        <title>Projects | Halcyon Haus</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="p-4 flex justify-between items-center border-b border-neutral-200">
        <h1 className="text-2xl font-playfair">Halcyon Haus</h1>
        <nav className="space-x-6">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/shop">Shop My Home</Link>
        </nav>
      </header>

      <main className="px-6 py-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-playfair mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <div className="group relative overflow-hidden rounded-2xl shadow-sm cursor-pointer">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="transition-transform duration-300 group-hover:scale-105 object-cover w-full h-80"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-25 transition duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                  {project.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
