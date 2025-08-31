import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  { src: "/images/HEROKITCHEN1.JPG", alt: "Halcyon Haus kitchen with brass fixtures and stone backsplash" },
  { src: "/images/NEWHERO2.JPG", alt: "Warm neutral primary room designed by Halcyon Haus" },
  { src: "/images/DINING2.JPG", alt: "Modern cottage, French country dining designed by Halcyon Haus" },
  { src: "/images/NEWHERO3.JPG", alt: "Two-toned kitchen designed by Halcyon Haus" },
  { src: "/images/NEWHERO4.JPG", alt: "Modern cottage neutral primary bath designed by Halcyon Haus" }
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
    <meta
    name="description"
    content="Halcyon Haus is a Colorado-based interior design studio crafting warm, curated interiors rooted in California ease and elevated function. Featured by Pottery Barn, Amber Interiors, and more."
  />
      <meta property="og:title" content="Halcyon Haus" />
  <meta property="og:description" content="Warm, curated interiors by Halcyon Haus — rooted in California ease and Colorado cool." />
  <meta property="og:image" content="/logos/og-thumbnail.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://halcyonhaus.com" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Halcyon Haus" />
  <meta name="twitter:description" content="Interior design rooted in warmth, balance, and California ease." />
  <meta name="twitter:image" content="/logos/og-thumbnail.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map(({ src, alt }, index) => (
  <Image
    key={index}
    src={src}
    alt={alt}
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
          <div className="w-[130px] h-[130px] relative mt-2 mx-auto">
            <Image src="/logos/HHLOGO2.png" alt="HH Logo" layout="fill" objectFit="contain" />
          </div>

          {/* Bio */}
          <div className="text-[14px] tracking-wide leading-7 text-left text-gray-700 font-inter space-y-6 max-w-[90%] mt-8">
            <p>
              Welcome to Halcyon Haus — an interior design studio founded by Nikka Winchell, rooted in thoughtful, transitional design.
            </p>
            <p>
              Designing spaces coast to coast, from decor selection to full-service design.
            </p>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col space-y-5 text-sm uppercase tracking-widest font-normal text-black w-full pl-1 mt-12">
            <Link href="/projects" className="hover:text-neutral-500">PROJECTS</Link>
            <Link href="/about" className="hover:text-neutral-500">ABOUT</Link>
            <Link href="/services" className="hover:text-neutral-500">SERVICES</Link>
            <Link href="/contact" className="hover:text-neutral-500">WORK TOGETHER</Link>
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
          className="text-white text-[60px] md:text-[72px] font-normal tracking-[0.25em] text-center uppercase"
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
