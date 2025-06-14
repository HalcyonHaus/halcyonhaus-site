import { useState, useRef, useEffect } from "react";

export default function DesignBotChat() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `You are Halcyon Haus’s AI, in Nikka Winchell’s warm, transitional style. Recommend specific paints, textiles, finishes, and layouts. Sign off: “For a custom mood board or 1:1 consult, email hello@halcyonhaus.com.” Redirect any non-design questions.`,
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
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full font-sans text-gray-900">
      {/* Messages */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto space-y-3 mb-4 pr-1"
      >
        {messages
          .filter((m) => m.role !== "system")
          .map((m, i) => (
            <div
              key={i}
              className={`max-w-[75%] break-words px-4 py-2 rounded-2xl ${
                m.role === "user"
                  ? "ml-auto bg-gray-100 text-gray-900"
                  : "mr-auto bg-[#FFC857] text-white"
              }`}
            >
              <span className="font-medium">
                {m.role === "user" ? "You:" : "Designer:"}
              </span>{" "}
              {m.content}
            </div>
          ))}
      </div>

      {/* Input */}
      <div className="mt-auto flex items-center space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          disabled={loading}
          placeholder="Ask a design question…"
          className="
            flex-1 
            border border-gray-300 rounded-full 
            px-4 py-2
            focus:outline-none focus:ring-2 focus:ring-[#FFC857]
            text-base
          "
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="
            px-4 py-2 
            bg-[#FFC857] text-white rounded-full 
            font-medium text-base
            disabled:opacity-50 focus:outline-none
          "
        >
          {loading ? "…" : "Send"}
        </button>
      </div>
    </div>
  );
}
