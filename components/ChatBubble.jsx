import { useState } from "react";
import DesignBotChat from "./DesignBotChat";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating thought‐bubble button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            fixed bottom-6 right-6
            w-12 h-12
            bg-[var(--accent)] 
            rounded-full 
            shadow-md 
            flex items-center justify-center
            hover:shadow-xl transition
            focus:outline-none
          "
          aria-label="Open Chat"
        >
          {/* Simple SVG thought bubble */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8a7 7 0 1114 0 7 7 0 01-14 0zm7 7v4m0-4l-2 2m2-2l2 2"
            />
          </svg>
        </button>
      )}

      {/* Expanded chat panel */}
      {open && (
        <div
          className="
            fixed bottom-6 right-6
            w-80 max-w-full h-96
            bg-white 
            rounded-2xl 
            shadow-2xl 
            ring-1 ring-gray-200
            flex flex-col overflow-hidden
            font-sans
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
            <h3 className="text-lg font-medium">Chat with Halcyon Haus</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4">
            <DesignBotChat />
          </div>
        </div>
      )}
    </>
  );
}
