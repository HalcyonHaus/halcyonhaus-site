import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="relative h-screen w-screen overflow-hidden font-sans">
      <Head>
        <title>Halcyon Haus | Interior Design</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Fullscreen Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/photo3.png"
          alt="Halcyon Haus Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Navbar */}
      <nav className="absolute top-6 right-10 z-10 text-white uppercase text-sm space-x-8 tracking-wide">
        <Link href="#about" className="hover:underline">About Me</Link>
        <Link href="#projects" className="hover:underline">Projects</Link>
        <Link href="#shop" className="hover:underline">Shop My Home</Link>
      </nav>

      {/* Centered Title */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-6xl md:text-7xl font-playfair tracking-wide uppercase text-center">
          Halcyon Haus
        </h1>
      </div>

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </main>
  )
}
