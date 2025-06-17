// components/ProjectCarousel.js
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function ProjectCarousel({ title, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Image + Arrows */}
      <div
        className="group relative w-full aspect-[4/4.3] md:aspect-[4/4.9] overflow-hidden rounded-md cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={images[currentIndex]}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous"
            >
              <ChevronLeft size={24} strokeWidth={1.2} className="text-white drop-shadow" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Next"
            >
              <ChevronRight size={24} strokeWidth={1.2} className="text-white drop-shadow" />
            </button>
          </>
        )}

        {/* Dots */}
        <div className="absolute bottom-2 w-full flex justify-center space-x-1 z-20">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 w-1.5 rounded-full ${
                idx === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Title */}
      <p className="font-inter uppercase tracking-widest text-xs mt-3 text-center pt-3">{title}</p>

      {/* Modal Lightbox */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 z-50"
            aria-label="Close"
          >
            <X size={28} strokeWidth={1.2} />
          </button>

          <div className="relative w-[90vw] h-[80vh] max-w-5xl">
            <Image
              src={images[currentIndex]}
              alt={`Large view - ${title}`}
              fill
              style={{ objectFit: 'contain' }}
              className="rounded"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
                  aria-label="Previous"
                >
                  <ChevronLeft size={32} strokeWidth={1.2} />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
                  aria-label="Next"
                >
                  <ChevronRight size={32} strokeWidth={1.2} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
