import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative min-h-screen text-white font-sans antialiased">
      <Head>
        <title>Halcyon Haus</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/photo3.png"
          alt="Halcyon Haus Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Top-Right Navigation */}
      <header className="absolute top-0 right-0 p-6 text-sm tracking-wide uppercase font-inter z-20">
        <nav className="space-x-6">
          <Link href="#about" className="hover:underline">About Me</Link>
          <Link href="#projects" className="hover:underline">Projects</Link>
          <Link href="#shop" className="hover:underline">Shop My Home</Link>
        </nav>
      </header>

      {/* Centered Title */}
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-5xl md:text-7xl font-playfair tracking-wide text-center">
          Halcyon Haus
        </h1>
      </div>

      <style jsx global>{`
        body {
          margin: 0;
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
