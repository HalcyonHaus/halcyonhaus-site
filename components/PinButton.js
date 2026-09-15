// Small hover-reveal Pinterest pin button for an individual photo.
// Parent element must include className="group relative" for the
// hover reveal to work (same pattern already used in ProjectCarousel).
export default function PinButton({ imageUrl, pageUrl, description }) {
  const pinterestUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
    pageUrl
  )}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(description)}`;

  return (
    <a
      href={pinterestUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pin this image to Pinterest"
      onClick={(e) => e.stopPropagation()}
      className="absolute top-3 right-3 z-10 flex items-center justify-center h-8 w-8 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-black">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.35 9.32-.09-.79-.17-2.01.03-2.87.18-.78 1.17-4.97 1.17-4.97s-.3-.6-.3-1.48c0-1.39.8-2.43 1.8-2.43.85 0 1.26.64 1.26 1.4 0 .85-.55 2.12-.83 3.3-.24.99.5 1.8 1.47 1.8 1.77 0 3.13-1.86 3.13-4.55 0-2.38-1.71-4.04-4.15-4.04-2.83 0-4.49 2.12-4.49 4.31 0 .85.33 1.77.74 2.27.08.1.09.19.07.29-.08.31-.25 1-.29 1.14-.05.18-.15.22-.35.13-1.3-.6-2.11-2.5-2.11-4.02 0-3.28 2.38-6.29 6.87-6.29 3.61 0 6.41 2.57 6.41 6 0 3.58-2.26 6.47-5.39 6.47-1.05 0-2.04-.55-2.38-1.19l-.65 2.46c-.23.9-.87 2.02-1.29 2.71.97.3 2 .46 3.06.46 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    </a>
  );
}
