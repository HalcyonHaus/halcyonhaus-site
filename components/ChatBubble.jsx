import { useState } from "react";
import DesignBotChat from "./DesignBotChat";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating amber thought-bubble */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            fixed bottom-8 right-8
            w-14 h-14
            bg-[#FFC857] 
            rounded-full 
            shadow-lg 
            flex items-center justify-center
            hover:shadow-2xl transition-shadow
            focus:outline-none
          "
          aria-label="Open chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.477 2 2 5.58 2 10c0 1.993.932 3.82 2.516 5.172L4 22l6.828-2.343A9.944 9.944 0 0012 20c5.523 0 10-3.58 10-8s-4.477-8-10-8z"/>
          </svg>
        </button>
      )}

      {/* Expanded panel */}
      {open && (
        <div className="
            fixed bottom-8 right-8
            w-80 md:w-96 lg:w-[24rem] h-[28rem]
            bg-[#FFFDF8]
            rounded-3xl
            shadow-2xl
            ring-1 ring-gray-200
            flex flex-col overflow-hidden
          ">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <h3 className="text-xl font-semibold">Chat with Halcyon Haus</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Chat body */}
          <div className="flex-1 p-4">
            <DesignBotChat />
          </div>
        </div>
      )}
    </>
  );
}
