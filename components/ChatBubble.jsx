import { useState } from "react";
import DesignBotChat from "./DesignBotChat";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating bubble */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="
            fixed bottom-6 right-6
            z-[9999]           /* top of everything */
            w-12 h-12
            bg-[var(--neutral-200)]
            rounded-full
            shadow-sm
            flex items-center justify-center
            hover:shadow-md transition-shadow
            focus:outline-none
            pointer-events-auto /* ensure clicks register */
          "
          aria-label="Open chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[var(--neutral-600)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h8m-8 4h6m2 2l4 4V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12l4-4"
            />
          </svg>
        </button>
      )}

      {/* Expanded panel */}
      {open && (
        <div
          className="
            fixed bottom-6 right-6
            z-[9999]           /* above all content */
            w-72 sm:w-80 md:w-96
            max-h-[80vh]
            bg-[var(--neutral-50)]
            rounded-2xl
            shadow-lg
            ring-1 ring-[var(--neutral-200)]
            flex flex-col overflow-hidden font-sans
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-[var(--neutral-200)]">
            <h3 className="text-lg font-serif text-[var(--neutral-800)]">
              Chat with Halcyon Haus
            </h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-[var(--neutral-600)] hover:text-[var(--neutral-800)] focus:outline-none"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Chat content */}
          <div className="flex-1 p-3 overflow-y-auto">
            <DesignBotChat />
          </div>
        </div>
      )}
    </>
  );
}
