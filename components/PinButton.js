// Hover-reveal "+ Pin It" text link for an individual photo, styled after
// Amber Interiors' plain white text link, thin and editorial rather than a
// bold button. Parent element must include className="group relative" for
// the hover reveal to work (same pattern already used across the site).
// Always opens the standard Pinterest pin-it flow, so behavior stays
// predictable across every browser and device.
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
      className="absolute top-4 right-4 z-10 text-[10px] tracking-[0.2em] uppercase font-inter font-light text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:opacity-70"
      style={{ textShadow: "0 1px 3px rgba(0,0,0,0.35)" }}
    >
      + Pin It
    </a>
  );
}
