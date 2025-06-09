import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const images = [
  "/images/photo1.png",
  "/images/photo2.png",
  "/images/photo3.png",
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds per image
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen font-sans overflow-hidden">
      <Head>
        <title>Halcyon Haus</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className={`transition-opacity duration-1000 ease-in-out absolute inset-0 ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      </div>

      {/* Nav */}
      <header className="absolute top-6 right-6 z-20 text-sm uppercase tracking-widest font-inter space-x-6 text-white">
        <Link href="#about" className="hover:underline">About Me</Link>
        <Link href="#projects" className="hover:underline">Projects</Link>
        <Link href="#shop" className="hover:underline">Shop My Home</Link>
      </header>

      {/* Title */}
      <div className="flex items-center justify-center h-screen text-center z-20 relative">
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
