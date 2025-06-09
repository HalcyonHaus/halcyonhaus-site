import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Halcyon Haus | California Interior Design</title>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>
      <main className="font-sans bg-white text-neutral-900">
        <header className="w-full p-6 shadow-sm bg-white fixed top-0 left-0 z-50 flex justify-between">
          <h1 className="text-xl font-serif">Halcyon Haus</h1>
          <nav className="space-x-6 text-sm uppercase">
            <a href="#ethos">Ethos</a>
            <a href="#projects">Projects</a>
            <a href="mailto:hello@halcyonhaus.com">Contact</a>
          </nav>
        </header>
        <section className="h-screen w-full relative flex items-center justify-center pt-24 text-center">
          <Image src="/images/photo1.png" alt="Hero" layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="relative z-10 text-white">
            <h2 className="text-5xl font-serif mb-4">California Cool Interiors</h2>
            <p className="text-lg max-w-xl mx-auto">Warm, soulful spaces blending vintage and modern design.</p>
          </div>
        </section>
        <section id="ethos" className="px-6 py-20 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-6">Our Ethos</h2>
          <p className="text-lg text-neutral-700">Effortlessly curated interiors with soul. We design with intention and clarity, inspired by California’s natural beauty and rich design heritage.</p>
        </section>
        <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif mb-10 text-center">Project Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Image src="/images/photo1.png" alt="Project 1" width={600} height={400} className="rounded shadow object-cover" />
            <Image src="/images/photo2.png" alt="Project 2" width={600} height={400} className="rounded shadow object-cover" />
            <Image src="/images/photo3.png" alt="Project 3" width={600} height={400} className="rounded shadow object-cover" />
          </div>
        </section>
        <footer className="text-center text-sm text-neutral-500 py-12 border-t">
          &copy; {new Date().getFullYear()} Halcyon Haus
        </footer>
      </main>
    </>
  )
}
