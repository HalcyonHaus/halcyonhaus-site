import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";

// Reusable page-level share control.
// On devices/browsers that support the native Web Share API (all mobile,
// plus Mac Safari), tapping "Share" opens the real system share sheet,
// Messages, Mail, AirDrop, etc. Everywhere else, it reveals a quiet inline
// row of Facebook, Pinterest, Email, and Copy Link.
export default function ShareButton({ title, description }) {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setMounted(true);
    setPageUrl(window.location.href);
  }, []);

  if (!mounted) return null;

  const nativeShareAvailable = typeof navigator !== "undefined" && !!navigator.share;

  const handleShareClick = async () => {
    if (nativeShareAvailable) {
      try {
        await navigator.share({ title, text: description, url: pageUrl });
      } catch (err) {
        // User cancelled the native share sheet, nothing to do.
      }
    } else {
      setMenuOpen((prev) => !prev);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Clipboard API unavailable, nothing to do.
    }
  };

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
  const pinterestUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
    pageUrl
  )}&description=${encodeURIComponent(title)}`;
  const mailUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(
    `${description} ${pageUrl}`
  )}`;

  return (
    <div className="text-center">
      <button
        onClick={handleShareClick}
        className="text-[10px] tracking-[0.25em] uppercase text-gray-500 font-inter hover:text-black transition-colors duration-300"
      >
        Share
      </button>

      {!nativeShareAvailable && menuOpen && (
        <div className="mt-4 flex items-center justify-center gap-5 font-inter text-xs tracking-wide text-gray-600">
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors duration-300"
          >
            Facebook
          </a>
          <a
            href={pinterestUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors duration-300"
          >
            Pinterest
          </a>
          <a href={mailUrl} className="hover:text-black transition-colors duration-300">
            Email
          </a>
          <button
            onClick={handleCopy}
            aria-label="Copy link"
            className="flex items-center gap-1 hover:text-black transition-colors duration-300"
          >
            {copied ? (
              <Check size={13} strokeWidth={1.5} />
            ) : (
              <Copy size={13} strokeWidth={1.5} />
            )}
            {copied ? "Copied" : "Copy Link"}
          </button>
        </div>
      )}
    </div>
  );
}
