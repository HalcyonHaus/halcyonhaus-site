import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/images/photo1.png", "/images/photo2.png", "/images/photo3.png"];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      <Head>
        <title>Halcyon Haus</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Slide ${index}`}
            layout="fill"
            objectFit="cover"
            className={`transition-opacity duration-1000 ease-in-out absolute inset-0 ${
              index === current ? "opacity-50" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
      </div>

      {/* Navigation */}
      <header className="absolute top-0 right-0 p-6 z-10 text-sm tracking-widest">
        <nav className="space-x-6 uppercase font-inter">
          <a href="#about" className="hover:underline">About Me</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#shop" className="hover:underline">Shop My Home</a>
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
