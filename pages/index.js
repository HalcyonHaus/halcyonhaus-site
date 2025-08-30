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

      {/* Background slideshow */}
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
      <button
        className="absolute top-6 right-6 z-30 text-white text-sm tracking-widest uppercase font-inter hover:text-neutral-300"
        onClick={() => setSidebarOpen(true)}
      >
        + Menu
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#f9f9f6] z-40 transform transition-transform duration-700 ease-in-out 
          ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ width: "100vw", maxWidth: "400px" }}
      >
        <div className="h-full px-8 py-8 flex flex-col justify-start items-start font-inter text-black 
          md:w-[25vw] md:max-w-[400px] md:px-8 md:py-8">
          {/* Close button */}
          <div className="self-end text-xs uppercase cursor-pointer" onClick={() => setSidebarOpen(false)}>
            Close ×
          </div>

          {/* Logo */}
          <div className="w-[90px] h-[90px] relative mt-10 mb-6 self-center">
            <Image src="/logos/HHLOGO.JPG" alt="HH Logo" layout="fill" objectFit="contain" />
          </div>

          {/* Bio */}
          <div className="text-sm text-left text-black font-inter leading-relaxed mb-18 space-y-4" style={{ maxWidth: "90%" }}>
            <p>
              I’m Nikka, a Colorado-based interior designer crafting warm, curated spaces rooted in California ease and elevated function.
            </p>
            <p>
              With a focus on timeless materials and personalized design, I guide clients through thoughtful renovations that feel both elevated and approachable.
            </p>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col space-y-5 text-sm uppercase tracking-widest font-medium text-black w-full pl-1">
            <Link href="/projects" className="hover:text-neutral-500">PROJECTS</Link>
            <Link href="/about" className="hover:text-neutral-500">ABOUT</Link>
            <Link href="/contact" className="hover:text-neutral-500">GET IN TOUCH</Link>
            <Link href="https://www.shopltk.com/explore/halcyonhaus" target="_blank" className="hover:text-neutral-500">
              SHOP MY HOME
            </Link>
          </nav>

          {/* Social Link */}
          <div className="mt-auto text-[11px] tracking-widest font-inter uppercase">
            <a href="https://www.instagram.com/halcyonhaus_" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500">
              @halcyonhaus_
            </a>
          </div>
        </div>
      </div>

      {/* Centered title */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <h1
          className="text-white text-[48px] md:text-[72px] font-bold tracking-widest text-center uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          HALCYON HAUS
        </h1>
      </div>

      {/* Global styles */}
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
        @media (min-width: 768px) {
          .sidebar-open {
            width: 25vw;
            max-width: 400px;
          }
        }
      `}</style>
    </div>
  );
}
