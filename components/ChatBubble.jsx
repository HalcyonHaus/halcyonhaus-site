import { useState } from "react";
import DesignBotChat from "./DesignBotChat";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 w-12 h-12 bg-[var(--accent)] rounded-full shadow-lg flex items-center justify-center text-white text-xl"
          aria-label="Open chat"
        >
          💬
        </button>
      )}

      {/* Expanded chat panel */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="flex justify-between items-center p-2 border-b">
            <h3 className="text-lg font-medium">Chat with Halcyon Haus</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-gray-800"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>
          <div className="flex-1">
            <DesignBotChat />
          </div>
        </div>
      )}
    </>
  );
}
