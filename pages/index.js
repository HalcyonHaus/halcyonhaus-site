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
        className="absolute top-6 right-9 z-30 text-white text-sm tracking-widest uppercase font-inter hover:text-neutral-300"
        onClick={() => setSidebarOpen(true)}
      >
        + Menu
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#fafafa] z-40 transform transition-transform ease-in-out duration-1000
          ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
          w-full sm:w-[25vw] sm:max-w-[400px]`}
      >
        <div className="h-full px-8 pt-3 pb-8 flex flex-col justify-start items-start font-Playfair Display text-black">
          {/* Close button */}
          <div
  className="self-end text-[38px] font-extralight tracking-wide cursor-pointer hover:opacity-70 transition-opacity duration-300"
  onClick={() => setSidebarOpen(false)}
>
 ×
</div>

          {/* Logo */}
          <div className="w-[90px] h-[90px] relative mt-10 mx-auto">
            <Image src="/logos/HHLOGO.JPG" alt="HH Logo" layout="fill" objectFit="contain" />
          </div>

          {/* Bio */}
          <div className="text-[14px] tracking-wide leading-7 text-left text-gray-700 font-inter space-y-6 max-w-[90%] mt-8">
            <p>
              Welcome to Halcyon Haus — an interior design studio founded by Nikka Winchell, rooted in thoughtful, transitional design.
            </p>
            <p>
              At Halcyon Haus, I guide you through a hands-on design journey rooted in transitional style, where tradition meets modern simplicity. With a curated strategy and balanced composition, every project is tailored to your lifestyle and vision.
            </p>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col space-y-5 text-sm uppercase tracking-widest font-medium text-black w-full pl-1 mt-12">
            <Link href="/projects" className="hover:text-neutral-500">PROJECTS</Link>
            <Link href="/about" className="hover:text-neutral-500">ABOUT</Link>
            <Link href="/contact" className="hover:text-neutral-500">GET IN TOUCH</Link>
            <Link href="https://www.shopltk.com/explore/halcyonhaus" target="_blank" className="hover:text-neutral-500">
              SHOP MY HOME
            </Link>
          </nav>

          {/* Social Link */}
          <div className="mt-auto text-[12px] tracking-widest font-inter uppercase pt-12">
            <a href="https://www.instagram.com/halcyonhaus_" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500">
              @HALCYONHAUS_
            </a>
          </div>
        </div>
      </div>

      {/* Centered title */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <h1
          className="text-white text-[54px] md:text-[72px] font-normal tracking-[0.25em] text-center uppercase"
          style={{ fontFamily: "'Playfair Display', serif" }}
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
      `}</style>
    </div>
  );
}
