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
      <Image
        src={images[currentIndex]}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        className="transition-transform duration-300"
      />

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/60 hover:bg-white/90 text-black rounded-full p-1 transition-all duration-200 shadow-md backdrop-blur-sm"
            aria-label="Previous"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/60 hover:bg-white/90 text-black rounded-full p-1 transition-all duration-200 shadow-md backdrop-blur-sm"
            aria-label="Next"
          >
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>
        </>
      )}

      {/* Dots */}
      <div className="absolute bottom-2 w-full flex justify-center space-x-1 z-20">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
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
