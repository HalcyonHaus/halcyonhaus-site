// components/BeforeAfter.js
// Drag slider between a "before" and "after" photo of the same room.
// Before sits underneath; after is revealed from the right as you drag.
// On load it eases from full "before" to the middle once it scrolls into view.

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BeforeAfter({ before, after, beforeAlt, afterAlt, label, priority = false, className = "" }) {
  const frame = useRef(null);
  const [pos, setPos] = useState(100);
  const [intro, setIntro] = useState(true);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setIntro(false); setPos(50); return; }
    let t1, t2;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          t1 = setTimeout(() => setPos(50), 500);
          t2 = setTimeout(() => setIntro(false), 2400);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (frame.current) io.observe(frame.current);
    return () => { io.disconnect(); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const moveTo = (clientX) => {
    const r = frame.current.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };
  const onPointerDown = (e) => {
    setIntro(false); setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };
  const onPointerMove = (e) => { if (dragging) moveTo(e.clientX); };
  const onPointerUp = () => setDragging(false);
  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault(); setIntro(false);
      setPos((p) => Math.min(100, Math.max(0, p + (e.key === "ArrowLeft" ? -5 : 5))));
    }
  };
  const ease = intro ? "1.6s cubic-bezier(.65,0,.35,1)" : "0s";
  const tag = "absolute bottom-4 z-10 px-2.5 py-1 rounded-sm bg-black/35 text-white text-[10px] uppercase tracking-[0.2em] font-inter pointer-events-none";

  return (
    <div
      ref={frame}
      className={"relative w-full overflow-hidden rounded-md select-none cursor-ew-resize bg-neutral-100 " + className}
      style={{ touchAction: "pan-y" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <Image src={before} alt={beforeAlt} fill priority={priority} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)`, transition: `clip-path ${ease}` }}>
        <Image src={after} alt={afterAlt} fill priority={priority} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" draggable={false} />
      </div>

      <span className={tag + " left-4"}>Before</span>
      <span className={tag + " right-4"}>After</span>

      <div className="absolute top-0 bottom-0 w-px bg-white/90" style={{ left: `${pos}%`, transition: `left ${ease}` }}>
        <button
          type="button"
          role="slider"
          aria-label={label || "Compare before and after"}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKeyDown}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-11 w-11 rounded-full bg-white text-black shadow-[0_1px_8px_rgba(0,0,0,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          <ChevronLeft size={14} strokeWidth={1.5} />
          <ChevronRight size={14} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
