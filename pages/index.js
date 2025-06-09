import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      <Head>
        <title>Halcyon Haus | California Cool Interior Design</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      <header className="fixed top-0 left-0 w-full bg-white shadow z-50 px-6 py-4 flex justify-between items-center text-sm uppercase font-medium tracking-wide">
        <div className="text-lg font-playfair">Halcyon Haus</div>
        <nav className="space-x-6">
          <a href="#ethos" className="hover:underline">Ethos</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="mailto:hello@halcyonhaus.com" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="relative w-full h-screen flex items-center justify-center text-center px-6 pt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/photo1.png"
            alt="Halcyon Haus Hero"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="relative z-10">
          <h1 className="text-6xl md:text-7xl font-light tracking-widest text-white uppercase mb-6 font-playfair">
            Halcyon Haus
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed font-inter">
            California interiors that are deeply personal, effortlessly curated, and full of soul.
          </p>
          <div className="mt-8">
            <Link
              href="https://www.instagram.com/halcyonhaus_/"
              className="inline-block text-sm uppercase border border-white px-6 py-3 text-white hover:bg-white hover:text-black transition"
            >
              Follow on Instagram
            </Link>
          </div>
        </div>
      </section>

      <section id="ethos" className="px-6 py-28 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-light uppercase tracking-wide mb-6 font-playfair">Our Ethos</h2>
        <p className="text-lg leading-relaxed text-neutral-700 font-inter">
          Halcyon Haus brings together California-cool with quiet luxury — blending vintage finds, modern silhouettes, organic textures, and soulful styling. Our spaces feel collected, never decorated.
        </p>
      </section>

      <section id="projects" className="px-6 py-28 max-w-7xl mx-auto">
        <h2 className="text-4xl font-light uppercase tracking-wide mb-10 text-center font-playfair">Project Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/photo1.png"
              alt="Interior Design Project 1"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/photo2.png"
              alt="Interior Design Project 2"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/photo3.png"
              alt="Interior Design Project 3"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 text-center text-sm text-neutral-500 border-t border-neutral-200 font-inter">
        &copy; {new Date().getFullYear()} Halcyon Haus. Designed with intention.
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  )
}