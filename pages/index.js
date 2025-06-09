import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative min-h-screen font-sans">
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
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Navigation */}
      <header className="absolute top-6 right-6 z-10 text-sm uppercase tracking-widest font-inter space-x-6 text-white">
        <Link href="#about" className="hover:underline">About Me</Link>
        <Link href="#projects" className="hover:underline">Projects</Link>
        <Link href="#shop" className="hover:underline">Shop My Home</Link>
      </header>

      {/* Centered Title */}
      <div className="flex items-center justify-center h-screen text-center z-10 relative">
        <h1 className="text-white text-6xl md:text-8xl tracking-widest font-playfair">
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
