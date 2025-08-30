import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  "/images/HEROKITCHEN1.JPG",
  "/images/NEWHERO2.JPG",
  "/images/DINING2.JPG",
  "/images/NEWHERO3.JPG",
  "/images/NEWHERO4.JPG",
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
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

      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Slide ${index}`}
            fill
            style={{
              objectFit: "cover",
              opacity: index === currentIndex ? 0.7 : 0,
              transition: "opacity 1s ease-in-out",
              position: "absolute",
            }}
            priority={index === currentIndex}
          />
        ))}
        <div className="absolute inset-0 bg-white bg-opacity-20 pointer-events-none" />
      </div>

      {/* +MENU Button */}
      <button
        className="absolute top-6 right-6 z-30 text-white text-sm tracking-widest uppercase font-inter hover:text-neutral-300"
        onClick={() => setIsMenuOpen(true)}
      >
        + Menu
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[25%] bg-[#f9f9f6] z-40 transform transition-all duration-1000 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 text-black flex flex-col h-full font-inter text-xs tracking-widest">
          <div className="flex justify-between items-start mb-6">
            <div className="w-full flex justify-center">
              <Image
                src="/logos/HHLOGO.JPG"
                alt="Halcyon Haus Logo"
                width={80}
                height={80}
              />
            </div>
            <button
              className="text-[10px] uppercase tracking-widest hover:text-neutral-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Close ×
            </button>
          </div>

          {/* Bio */}
          <p className="text-[10px] mb-8 leading-5 text-left">
            I’m Nikka, a Colorado-based interior designer crafting warm, curated spaces rooted in California ease and elevated function.
          </p>

          {/* Links */}
          <nav className="flex flex-col space-y-4 text-left">
            <Link href="/projects" className="hover:text-neutral-500">PROJECTS</Link>
            <Link href="/about" className="hover:text-neutral-500">ABOUT</Link>
            <Link href="/contact" className="hover:text-neutral-500">GET IN TOUCH</Link>
            <a href="https://www.shopltk.com/explore/halcyonhaus" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500">
              SHOP MY HOME
            </a>
          </nav>

          {/* Instagram */}
          <div className="mt-auto pt-10 text-left">
            <a
              href="https://www.instagram.com/halcyonhaus_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-widest hover:text-neutral-500"
            >
              @HALCYONHAUS_
            </a>
          </div>
        </div>
      </div>

      {/* Centered Title */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <h1
          className="text-white text-[48px] md:text-[72px] font-bold tracking-widest text-center uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          HALCYON HAUS
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
