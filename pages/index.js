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
  const [isSidebarOpen, setSidebarOpen] = useState(false);

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

      {/* +Menu Trigger */}
      <header className="absolute top-6 right-7 z-30 text-xs tracking-widest">
        <button
          onClick={() => setSidebarOpen(true)}
          className="font-inter text-white text-sm hover:text-neutral-300 transition"
        >
          + MENU
        </button>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[25vw] min-w-[240px] bg-[#f9f9f6] text-black z-50 transform transition-transform duration-700 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full justify-between font-inter">
          <div>
            <div className="flex justify-end">
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-xs tracking-widest font-inter"
              >
                CLOSE ×
              </button>
            </div>
            <div className="flex justify-center mt-4 mb-4">
              <Image
                src="/logos/HHLOGO.JPG"
                alt="HH Logo"
                width={80}
                height={80}
              />
            </div>
            <p className="text-left text-sm text-neutral-800 leading-relaxed">
              I’m Nikka, a Colorado-based interior designer crafting warm,
              curated spaces rooted in California ease and elevated function.
            </p>
            <nav className="mt-10 space-y-4 text-left text-sm">
              <div>
                <Link href="/projects">
                  <a className="hover:text-neutral-500 transition-colors duration-200">
                    Projects
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/about">
                  <a className="hover:text-neutral-500 transition-colors duration-200">
                    About
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/contact">
                  <a className="hover:text-neutral-500 transition-colors duration-200">
                    Get In Touch
                  </a>
                </Link>
              </div>
              <div>
                <Link
                  href="https://www.shopltk.com/explore/halcyonhaus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <a className="hover:text-neutral-500 transition-colors duration-200">
                    Shop My Home
                  </a>
                </Link>
              </div>
            </nav>
          </div>
          <div className="pl-1 mb-2">
            <Link
              href="https://www.instagram.com/halcyonhaus_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a className="uppercase text-sm tracking-widest hover:text-neutral-500">
                @halcyonhaus_
              </a>
            </Link>
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
