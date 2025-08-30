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

      {/* +Menu button */}
      <div className="absolute top-5 right-5 z-30 text-xs tracking-widest font-inter uppercase cursor-pointer text-white hover:text-neutral-300 text-[11px]" onClick={() => setMenuOpen(true)}>
        + Menu
      </div>

      {/* Slide-out Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 h-full w-[20%] max-w-[280px] bg-[#f9f9f6] text-black z-40 px-6 pt-6 pb-8 overflow-y-auto shadow-lg">
          <div className="flex justify-end text-xs uppercase tracking-widest cursor-pointer hover:text-neutral-500" onClick={() => setMenuOpen(false)}>
            Close ×
          </div>

          <div className="mt-6">
            <div className="text-center">
              <img src="/logos/HHLOGO.JPG" alt="Halcyon Haus Logo" className="mx-auto w-8 h-8 object-contain mb-4" />
            </div>
            <p className="text-[12px] leading-snug tracking-wide font-inter text-left mb-6">
              I’m Nikka, a Colorado-based interior designer crafting warm, curated spaces rooted in California ease and elevated function.
            </p>
            <div className="flex flex-col items-start gap-4 text-sm uppercase font-inter tracking-widest">
              <Link href="/projects" passHref legacyBehavior>
                <a className="hover:text-neutral-500">Projects</a>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <a className="hover:text-neutral-500">About</a>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <a className="hover:text-neutral-500">Get In Touch</a>
              </Link>
              <Link href="https://www.shopltk.com/explore/halcyonhaus" target="_blank" rel="noopener noreferrer" passHref legacyBehavior>
                <a className="hover:text-neutral-500">Shop My Home</a>
              </Link>
            </div>

            <div className="mt-8">
              <Link href="https://www.instagram.com/halcyonhaus_" target="_blank" rel="noopener noreferrer" passHref legacyBehavior>
                <a className="text-xs uppercase tracking-widest font-inter hover:text-neutral-500">@HALCYONHAUS_</a>
              </Link>
            </div>
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
      `}</style>
    </div>
  );
}
