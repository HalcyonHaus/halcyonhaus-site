import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans antialiased">
      <Head>
        <title>Halcyon Haus</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/photo3.png"
          alt="Halcyon Haus"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-70" />
      </div>

      {/* Navigation */}
      <header className="absolute top-0 right-0 p-6 z-10 text-sm tracking-widest font-inter">
        <nav className="space-x-6 uppercase">
          <Link href="#about" className="hover:underline">About Me</Link>
          <Link href="#projects" className="hover:underline">Projects</Link>
          <Link href="#shop" className="hover:underline">Shop My Home</Link>
        </nav>
      </header>

      {/* Centered Title */}
      <div className="relative z-10 flex items-center justify-center h-screen text-center px-4">
        <h1 className="text-white text-5xl md:text-8xl tracking-wider font-playfair">
          Halcyon Haus
        </h1>
      </div>

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
        }
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
