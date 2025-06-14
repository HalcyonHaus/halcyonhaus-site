import { useState, useRef, useEffect } from "react";

export default function DesignBotChat() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `You are Halcyon Haus’s AI in a warm, curated tone. Recommend neutral palettes, quality materials, and thoughtful layouts. Sign off: “For bespoke design, email hello@halcyonhaus.com.” Redirect any non-design questions.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/design-bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: trimmed }],
        }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, data.choices[0].message]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto space-y-2 mb-3 text-[0.9rem] text-[var(--neutral-800)] pr-1"
        style={{ maxHeight: "calc(100% - 3.5rem)" }}
      >
        {messages
          .filter((m) => m.role !== "system")
          .map((m, i) => (
            <div
              key={i}
              className={`max-w-[80%] break-words px-3 py-2 rounded-lg ${
                m.role === "user"
                  ? "ml-auto bg-[var(--neutral-100)] text-[var(--neutral-800)]"
                  : "mr-auto bg-[var(--neutral-300)] text-[var(--neutral-900)]"
              }`}
            >
              <span className="font-medium text-[0.85rem]">
                {m.role === "user" ? "You:" : "Designer:"}
              </span>{" "}
              {m.content}
            </div>
          ))}
      </div>

      {/* Input */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          disabled={loading}
          placeholder="Ask a design question…"
          className="
            flex-1
            border border-[var(--neutral-200)]
            rounded-full
            px-3 py-2 text-[0.9rem] text-[var(--neutral-800)]
            focus:outline-none focus:ring-2 focus:ring-[var(--neutral-200)]
          "
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="
            px-3 py-2
            bg-[var(--neutral-400)] text-[var(--neutral-900)]
            rounded-full text-[0.9rem] font-medium
            disabled:opacity-50 focus:outline-none
          "
        >
          {loading ? "…" : "Send"}
        </button>
      </div>
    </div>
  );
}
