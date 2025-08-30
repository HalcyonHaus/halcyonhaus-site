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

      {/* +Menu */}
      <header className="absolute top-0 w-full z-20 px-6 pt-6 text-xs tracking-widest">
        <div className="flex justify-end">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="uppercase font-inter text-sm hover:text-neutral-400 transition"
          >
            + Menu
          </button>
        </div>
      </header>

      {/* Centered Title */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <h1
          className="text-white text-[48px] md:text-[72px] font-bold tracking-widest text-center uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          HALCYON HAUS
        </h1>
      </div>

      {/* Slide-Out Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#f9f9f6] text-black z-30 transition-transform duration-300 ease-in-out">
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="uppercase text-xs tracking-widest hover:text-gray-500"
            >
              Close ×
            </button>
          </div>

          <div className="flex flex-col items-center px-8">
            {/* Logo */}
            <Image
              src="/logos/HHLOGO.JPG"
              alt="HH Logo"
              width={80}
              height={80}
              className="mb-4"
            />

            {/* Short Bio */}
            <p className="text-center text-sm text-neutral-700 max-w-sm mb-6 font-inter leading-relaxed">
              I'm Nikka, a Colorado-based interior designer crafting warm, curated spaces rooted in California ease and elevated function.
            </p>

            {/* Nav Links */}
            <nav className="flex flex-col items-center space-y-4 uppercase text-sm font-inter tracking-wide">
              <Link href="/projects">
                <a className="hover:text-neutral-500 transition-colors">Projects</a>
              </Link>
              <Link href="/about">
                <a className="hover:text-neutral-500 transition-colors">About</a>
              </Link>
              <Link href="/contact">
                <a className="hover:text-neutral-500 transition-colors">Get In Touch</a>
              </Link>
              <Link href="https://www.shopltk.com/explore/halcyonhaus_" target="_blank" rel="noopener noreferrer">
                <a className="hover:text-neutral-500 transition-colors">Shop My Home</a>
              </Link>
            </nav>

            {/* Footer */}
            <div className="mt-12 text-xs tracking-widest text-neutral-600 font-inter">
              @HALCYONHAUS_
            </div>
          </div>
        </div>
      )}

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
