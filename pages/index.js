import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  "/images/photo3.png",
  "/images/photo2.png",
  "/images/photo4.png",
  "/images/photo1.png",
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

      {/* Background Slideshow */}
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
        <div className="absolute inset-0 bg-white bg-opacity-20" />
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none grain-overlay" />

      {/* Navigation */}
      <div className="absolute top-0 right-0 z-20 p-6 text-sm tracking-widest font-inter">
        <nav className="space-x-6 uppercase">
          <Link href="/about" className="nav-link">About Me</Link>
          <Link href="/projects" className="nav-link">Projects</Link>
          <Link href="/shop" className="nav-link">Shop My Home</Link>
        </nav>
      </div>

      {/* Title */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h1
          className="text-white text-[48px] md:text-[72px] font-bold tracking-widest text-center uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          HALCYON HAUS
        </h1>
      </div>

      {/* Styles */}
      <style jsx global>{`
        body {
          margin: 0;
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        .nav-link {
          position: relative;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 1px;
          background-color: white;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .nav-link:hover::after {
          transform: scaleX(1);
        }
        .grain-overlay {
          background-image: url("/grain.svg");
          background-repeat: repeat;
          background-size: cover;
          opacity: 0.2;
          mix-blend-mode: overlay;
        }
      `}</style>
    </div>
  );
}
