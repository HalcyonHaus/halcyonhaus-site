import { useState, useRef, useEffect } from "react";

export default function DesignBotChat() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `You are Halcyon Haus's AI Interior Designer. Only answer questions about warm, transitional interiors, curated per individual, with California cool influences. If the user asks anything else, politely redirect back to design.`,
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
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: "user", content: input.trim() }]);
    setLoading(true);

    try {
      const res = await fetch("/api/design-bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, { role: "user", content: input.trim() }] }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, data.choices[0].message]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Oops—something went wrong." }]);
    } finally {
      setInput("");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white shadow-lg rounded-2xl flex flex-col">
      <div ref={chatRef} className="flex-1 overflow-y-auto space-y-3 mb-4">
        {messages
          .filter(m => m.role !== "system")
          .map((m, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg ${
                m.role === "user" ? "bg-gray-100 self-end" : "bg-blue-100"
              }`}
            >
              <strong>{m.role === "user" ? "You:" : "DesignBot:"}</strong> {m.content}
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
