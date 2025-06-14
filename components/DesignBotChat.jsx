import { useState, useRef, useEffect } from "react";

export default function DesignBotChat() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `You are Halcyon Haus’s AI, speaking in Nikka Winchell’s warm, transitional style. Always:
 • Recommend specific paints (e.g. Benjamin Moore “Chantilly Lace”), textiles (e.g. Serena & Lily Oslo Linen), finishes, and layouts  
 • Tailor suggestions to the user’s room, budget, and lifestyle  
 • Sign off each reply: “For a custom mood board or 1:1 consult, email hello@halcyonhaus.com”  
If asked about anything non-design, politely redirect back to interiors.`,
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
    setMessages(prev => [...prev, { role: "user", content: trimmed }]);
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
      setMessages(prev => [...prev, data.choices[0].message]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "Oops—something went wrong." },
      ]);
    } finally {
      setInput("");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg w-full mx-auto p-8 bg-[var(--bg)] shadow-xl rounded-2xl border border-[var(--accent)] flex flex-col">
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto space-y-3 mb-4"
      >
        {messages
          .filter(m => m.role !== "system")
          .map((m, i) => (
            <div
              key={i}
              className={`p-4 rounded-2xl max-w-[80%] ${
                m.role === "user"
                  ? "bg-[var(--sender)] self-end text-[var(--text)]"
                  : "bg-[var(--bot)] self-start text-[var(--text-contrast)]"
              }`}
            >
              <strong>
                {m.role === "user" ? "You:" : "DesignBot:"}
              </strong>{" "}
              {m.content}
            </div>
          ))}
      </div>
      <div className="flex space-x-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          disabled={loading}
          placeholder="Ask a design question..."
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        >
          {loading ? "Sending…" : "Send"}
        </button>
      </div>
    </div>
);
}
