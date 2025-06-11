import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCarousel({ images = [], title }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prevSlide = () => setCurrent(current === 0 ? total - 1 : current - 1);
  const nextSlide = () => setCurrent(current === total - 1 ? 0 : current + 1);

  return (
    <div className="relative w-full aspect-[4/5] md:aspect-[4/6] overflow-hidden group">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`${title} ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white/90 p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-black" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white/90 p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-black" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 w-full flex justify-center space-x-1">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
