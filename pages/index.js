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

      {/* +Menu Button */}
      <header className="absolute top-0 right-0 z-20 px-6 pt-6 text-xs tracking-widest font-inter">
        <button
          onClick={() => setMenuOpen(true)}
          className="uppercase text-white hover:text-neutral-400 transition-colors duration-300"
        >
          + Menu
        </button>
      </header>

      {/* Slide-out Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-[#f9f9f6] text-black p-8 flex flex-col justify-between animate-slideInRight">
          <div className="flex justify-end">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-widest uppercase hover:text-neutral-500"
            >
              Close ×
            </button>
          </div>
          <div className="flex flex-col space-y-6 text-sm uppercase tracking-widest font-inter">
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Get In Touch</Link>
            <Link href="/shop">Shop My Home</Link>
          </div>
          <div className="text-xs font-inter mt-8">
            <a
              href="https://instagram.com/halcyonhaus_"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              @halcyonhaus_
            </a>
          </div>
        </div>
      )}

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
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
