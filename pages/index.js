// pages/index.js
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

      {/* +Menu button */}
      <header className="absolute top-0 w-full z-30 px-5 pt-6 text-xs tracking-widest">
        <nav className="flex justify-end font-inter text-xs">
          <button
            onClick={() => setSidebarOpen(true)}
            className="transition-colors duration-300 text-white hover:text-neutral-400"
          >
            +MENU
          </button>
        </nav>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#f9f9f6] text-black z-50 transform transition-transform duration-500 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "25vw", minWidth: "280px", maxWidth: "360px" }}
      >
        <div className="flex flex-col h-full px-6 pt-8 pb-4 font-inter text-xs uppercase tracking-wider">
          <div className="flex justify-between items-start mb-6">
            <div></div>
            <button
              className="text-[11px] tracking-widest"
              onClick={() => setSidebarOpen(false)}
            >
              CLOSE ×
            </button>
          </div>

          <div className="mb-4 flex justify-center">
            <Image
              src="/logos/HHLOGO.JPG"
              alt="Halcyon Haus Logo"
              width={80}
              height={80}
            />
          </div>

          <div className="text-[11px] tracking-wide leading-relaxed text-left mb-8">
            I’m Nikka, a Colorado-based interior designer crafting warm, curated spaces rooted in California ease and elevated function.
          </div>

          <nav className="flex flex-col space-y-4 text-left mb-auto">
            <Link href="/projects" legacyBehavior>
              <a className="hover:text-neutral-400 transition-colors duration-200">PROJECTS</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="hover:text-neutral-400 transition-colors duration-200">ABOUT</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="hover:text-neutral-400 transition-colors duration-200">GET IN TOUCH</a>
            </Link>
            <a
              href="https://www.shopltk.com/explore/halcyonhaus"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-400 transition-colors duration-200"
            >
              SHOP MY HOME
            </a>
          </nav>

          <a
            href="https://www.instagram.com/halcyonhaus_"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 text-[11px] tracking-widest hover:text-neutral-400"
          >
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
