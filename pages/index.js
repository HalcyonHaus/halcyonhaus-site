import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  "/images/photo1.png",
  "/images/photo2.png",
  "/images/photo3.png"
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 second delay per image

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans">
      <Head>
        <title>Halcyon Haus</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Slideshow Background */}
    <div className="absolute inset-0 z-0">
  <div className="absolute inset-0 z-0 animate-fade">
    <Image
      src={images[currentImageIndex]}
      alt="Slideshow"
      layout="fill"
      objectFit="cover"
      priority
    />
  </div>
  {/* Persistent black overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-80 z-10" />
</div>

      {/* Navigation */}
      <header className="absolute top-0 right-0 p-6 z-10 text-sm tracking-widest">
        <nav className="space-x-6 uppercase font-inter">
          <Link href="#about" className="hover:underline">About Me</Link>
          <Link href="#projects" className="hover:underline">Projects</Link>
          <Link href="#shop" className="hover:underline">Shop My Home</Link>
        </nav>
      </header>

      {/* Centered Title */}
      <div className="relative z-10 flex items-center justify-center h-screen text-center">
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
