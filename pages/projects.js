import Head from "next/head";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Head>
        <title>Projects | Halcyon Haus</title>
      </Head>

      <header className="absolute top-0 right-0 p-6 z-10 text-sm tracking-widest">
        <nav className="space-x-6 uppercase font-inter">
          <Link href="/">Home</Link>
          <Link href="#about" className="hover:underline">About Me</Link>
          <Link href="/projects" className="underline">Projects</Link>
          <Link href="#shop" className="hover:underline">Shop My Home</Link>
        </nav>
      </header>

      <main className="pt-40 px-6 md:px-20 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-10 tracking-wide">Selected Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* PROJECT 1 */}
          <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <img src="/images/project1.jpg" alt="Project 1" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Palm Springs Ranch</h2>
              <p className="text-sm text-gray-600 mt-2">Modern Spanish renovation with purple zellige and natural materials.</p>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <img src="/images/project2.jpg" alt="Project 2" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Hilltop Bungalow</h2>
              <p className="text-sm text-gray-600 mt-2">Neutral tones, vintage lighting, and curated textures.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
