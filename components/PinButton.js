import { useState, useEffect } from "react";

// Hover-reveal "+ Pin It" text link for an individual photo, styled after
// Amber Interiors' plain white uppercase text link (no icon, no button box).
// Parent element must include className="group relative" for the hover
// reveal to work (same pattern already used across the site).
//
// Where the browser supports sharing an actual image file (Safari on
// iPhone and Mac, Edge), clicking it shares the real photo, so it can be
// sent as an attachment in Messages, Mail, AirDrop, or into the Pinterest
// app directly. Everywhere else, it opens the standard Pinterest pin-it
// link, same as it always has.
export default function PinButton({ imageUrl, pageUrl, description }) {
  const [canShareFiles, setCanShareFiles] = useState(false);

  useEffect(() => {
    if (typeof navigator === "undefined" || !navigator.canShare) return;
    try {
      const testFile = new File([], "test.jpg", { type: "image/jpeg" });
      if (navigator.canShare({ files: [testFile] })) {
        setCanShareFiles(true);
      }
    } catch (err) {
      // canShare threw, treat as unsupported and use the Pinterest fallback.
    }
  }, []);

  const pinterestUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
    pageUrl
  )}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(description)}`;

  const linkClassName =
    "absolute top-4 right-4 z-10 text-[11px] tracking-[0.12em] uppercase font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:opacity-70";
  const linkStyle = { textShadow: "0 2px 2px rgba(0,0,0,0.25)" };

  const handleNativeShare = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const fileName = imageUrl.split("/").pop() || "photo.jpg";
      const file = new File([blob], fileName, { type: blob.type || "image/jpeg" });

      if (navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], text: description });
        return;
      }
    } catch (err) {
      // Fetch failed, share was cancelled, or activation was lost, fall
      // back to the Pinterest link below rather than leaving a dead click.
    }
    window.open(pinterestUrl, "_blank", "noopener,noreferrer");
  };

  if (canShareFiles) {
    return (
      <button
        onClick={handleNativeShare}
        aria-label="Share this photo"
        className={linkClassName}
        style={linkStyle}
      >
        + Pin It
      </button>
    );
  }

  return (
    <a
      href={pinterestUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pin this image to Pinterest"
      onClick={(e) => e.stopPropagation()}
      className={linkClassName}
      style={linkStyle}
    >
      + Pin It
    </a>
  );
}
