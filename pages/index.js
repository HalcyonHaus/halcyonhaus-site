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
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* Slideshow Background with fade */}
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

      {/* Menu Button */}
      <div className="absolute top-6 right-6 z-30 text-xs tracking-widest uppercase font-inter cursor-pointer text-white hover:text-neutral-400" onClick={() => setMenuOpen(true)}>
        + Menu
      </div>

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#f9f9f6] text-black z-40 shadow-lg transition-transform duration-500 ease-in-out overflow-y-auto flex flex-col justify-between ${menuOpen ? 'translate-x-0' : 'translate-x-full'} w-1/4 min-w-[300px]`}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-8">
            <Image src="/logos/HHLOGO.JPG" alt="Halcyon Haus Logo" width={40} height={40} />
            <div className="text-xs uppercase tracking-widest cursor-pointer hover:text-neutral-400" onClick={() => setMenuOpen(false)}>
              Close ×
            </div>
          </div>
          <p className="mb-10 text-sm font-inter leading-relaxed">
            I’m Nikka, a Colorado-based interior designer crafting warm, curated spaces rooted in California ease and elevated function.
          </p>
          <nav className="flex flex-col space-y-4 text-sm font-inter tracking-widest">
            <Link href="/projects" passHref legacyBehavior>
              <a className="hover:text-neutral-500">PROJECTS</a>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <a className="hover:text-neutral-500">ABOUT</a>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <a className="hover:text-neutral-500">GET IN TOUCH</a>
            </Link>
            <a href="https://www.shopltk.com/explore/halcyonhaus" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500">
              SHOP MY HOME
            </a>
          </nav>
        </div>
        <div className="p-6 text-xs tracking-widest uppercase">
          <a href="https://www.instagram.com/halcyonhaus_" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500">
            @HALCYONHAUS_
          </a>
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
