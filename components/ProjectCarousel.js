import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCarousel({ title, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="group relative w-full aspect-[4/4.3] md:aspect-[4/4.9] overflow-hidden">
      <div className="relative w-full h-full z-10">
        <Image
          src={images[currentIndex]}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300"
        />
      </div>

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-md text-black rounded-full p-1 z-30 transition"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-md text-black rounded-full p-1 z-30 transition"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dots */}
      <div className="absolute bottom-3 w-full flex justify-center space-x-1 z-30">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 w-1.5 rounded-full ${
              idx === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Title */}
      <p className="font-inter uppercase tracking-widest text-sm mt-4 text-center pt-4">
        {title}
      </p>
    </div>
  );
}
