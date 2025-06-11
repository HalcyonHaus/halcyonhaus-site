import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

export default function ProjectCarousel({ title, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () =>
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () =>
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrev,
    trackMouse: true, // enables desktop swipe
  });

  return (
    <div>
      <div
        {...handlers}
        className="group relative w-full aspect-[4/4.3] md:aspect-[4/4.9] overflow-hidden rounded-md"
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
              onClick={goToPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous"
            >
              <ChevronLeft size={24} strokeWidth={1.2} className="text-white drop-shadow" />
            </button>
            <button
              onClick={goToNext}
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
    </div>
  );
}
