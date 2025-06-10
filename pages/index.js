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
    <div className="relative min-h-screen bg-black text-white font-sans">
      <Head>
        <title>Halcyon Haus</title>
        <link
  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap"
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
  <div className="absolute inset-0 bg-white bg-opacity-20" />
</div>

     {/* Navigation */}
      <header className="flex justify-end p-6 text-sm tracking-widest">
       <nav className="space-x-6 uppercase font-inter">
  <Link href="/about" passHref legacyBehavior>
    <a className="hover:underline">About Me</a>
  </Link>
  <Link href="/projects" passHref legacyBehavior>
    <a className="underline">Projects</a>
  </Link>
  <Link href="/shop" passHref legacyBehavior>
    <a className="hover:underline">Shop My Home</a>
  </Link>
</nav>
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
