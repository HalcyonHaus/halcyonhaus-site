import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCarousel({ title, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
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
          {currentIndex > 0 && (
            <button
              onClick={goToPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous"
            >
              <ChevronLeft
                size={22}
                strokeWidth={1.3}
                className="text-white/90 hover:text-white"
              />
            </button>
          )}
          {currentIndex < images.length - 1 && (
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Next"
            >
              <ChevronRight
                size={22}
                strokeWidth={1.3}
                className="text-white/90 hover:text-white"
              />
            </button>
          )}
        </>
      )}

      {/* Dots */}
      <div className="absolute bottom-2 w-full flex justify-center space-x-1 z-20">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 w-1.5 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-white/50"
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
