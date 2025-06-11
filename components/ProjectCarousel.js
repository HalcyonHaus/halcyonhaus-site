{/* Arrows */}
{images.length > 1 && (
  <>
    <button
      onClick={goToPrev}
      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      aria-label="Previous"
    >
      <ChevronLeft
        size={22}
        strokeWidth={1.2}
        className="text-white hover:text-neutral-300 transition"
      />
    </button>
    <button
      onClick={goToNext}
      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      aria-label="Next"
    >
      <ChevronRight
        size={22}
        strokeWidth={1.2}
        className="text-white hover:text-neutral-300 transition"
      />
    </button>
  </>
)}
