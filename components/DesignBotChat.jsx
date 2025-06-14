import { useState, useRef, useEffect } from "react";

export default function DesignBotChat() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `You are Halcyon Haus’s AI… [your refined prompt here]`,
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
        { role: "assistant", content: "Oops—something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full font-sans">
      <div
        ref={chatRef}
        className="space-y-3 mb-4 overflow-y-auto text-gray-800"
        style={{ maxHeight: "calc(100% - 3rem)" }}
      >
        {messages
          .filter((m) => m.role !== "system")
          .map((m, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg max-w-[80%] break-words ${
                m.role === "user"
                  ? "ml-auto bg-gray-100"
                  : "mr-auto bg-[var(--accent)] text-white"
              }`}
            >
              <span className="font-semibold">
                {m.role === "user" ? "You:" : "DesignBot:"}
              </span>{" "}
              {m.content}
            </div>
          ))}
      </div>
      <div className="mt-auto flex items-center space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          disabled={loading}
          placeholder="Ask a design question…"
          className="
            flex-1 border border-gray-300 rounded-full 
            px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] 
            text-gray-700
          "
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="
            px-4 py-2 bg-[var(--accent)] text-white rounded-full 
            disabled:opacity-50 focus:outline-none
          "
        >
          {loading ? "…" : "Send"}
        </button>
      </div>
    </div>
  );
}
