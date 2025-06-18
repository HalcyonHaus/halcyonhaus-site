import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

export default function ProjectCarousel({ title, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const goToPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrev,
    trackMouse: true,
  });

  const modalHandlers = useSwipeable({
    onSwipedLeft: () =>
      setModalIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)),
    onSwipedRight: () =>
      setModalIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)),
    trackMouse: true,
  });

  return (
    <div>
      <div
        {...handlers}
        onClick={() => {
          setIsOpen(true);
          setModalIndex(currentIndex);
        }}
        className="group relative w-full aspect-[4/4.3] md:aspect-[4/4.9] overflow-hidden rounded-md cursor-pointer"
      >
        <>
          <Image
            src={images[currentIndex]}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          {images.length > 1 && (
            <Image
              src={images[(currentIndex + 1) % images.length]}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          )}
        </>
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

      <p className="font-inter uppercase tracking-widest text-xs mt-3 text-center pt-3">{title}</p>

      {isOpen && (
        <div
          {...modalHandlers}
          className="fixed inset-0 z-50 bg-[#fafafa]/95 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-black hover:text-neutral-600"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <button
            onClick={() =>
              setModalIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 text-black hover:text-neutral-600"
            aria-label="Previous"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
            <Image
              src={images[modalIndex]}
              alt={`Modal ${title}`}
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-md"
              sizes="(max-width: 768px) 90vw, 80vw"
            />
          </div>

          <button
            onClick={() =>
              setModalIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:text-neutral-600"
            aria-label="Next"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
